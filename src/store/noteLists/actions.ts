import { ActionTree } from 'vuex';
import { NoteListsStateInterface } from './state';
import { StateInterface } from '../index';

import { NoteListServices } from '@/services/noteList';
import { NoteServices } from '@/services/note';
import { notifications } from '@/utils/Notifications';

import type { BasicNoteList, FullNoteList, NoteList } from '@/types/NoteList';
import type { Note } from '@/types/Note';

const actions: ActionTree<NoteListsStateInterface, StateInterface> = {
	async getAll({ commit, rootState }) {
		const noteListServices = new NoteListServices(rootState.user.token as string);
		notifications.loading({ text: 'Fetching lists of notes' });
		try {
			const data = await noteListServices.getAll();

			const isOk = notifications.errorService<NoteList[]>(data);
			if (!isOk) return;

			commit('setAll', { all: data });
		} catch (err) {
			console.error(err);
		}
	},

	async getAllFull({ commit, rootState }) {
		const noteListServices = new NoteListServices(rootState.user.token as string);
		notifications.loading({ text: 'Fetching all lists of notes' });
		try {
			const data = await noteListServices.getAllFull();

			const isOk = notifications.errorService<FullNoteList[]>(data);
			if (!isOk) return;

			commit('setAllFull', { allFull: data });
		} catch (err) {
			console.error(err);
		}
	},

	async getCurrentNoteList({ rootState, commit, state }, payload: { id: number }) {
		const noteList = state.allFull?.find((list) => list.id === payload.id);

		if (noteList) {
			commit('setCurrent', { current: noteList });
			return;
		}

		const noteListService = new NoteListServices(rootState.user.token as string);
		notifications.loading({ text: 'Fetching the note list data' });
		try {
			const data = await noteListService.getById(payload.id);

			const isOk = notifications.errorService<FullNoteList>(data);
			if (!isOk) return;

			commit('setCurrent', { current: data });
		} catch (err) {
			console.error(err);
		}
	},

	async deleteNoteFromAllFull({ commit, rootState, state, dispatch }, payload: { noteListId: number; noteId: number }) {
		const noteList = state.current;

		if (!noteList) {
			console.error(`Error: no se encuentra ninguna lista de notas que posea dicho id -> ${payload.noteListId}`);
			return;
		}

		const isNote = noteList.notes?.some((note) => note.id === payload.noteId);
		if (!isNote) {
			console.error(
				`Error: no se encuentra ninguna nota que posea dicho id -> ${payload.noteId} en la lista de notas "${noteList.title}"`
			);
			return;
		}

		const noteServices = new NoteServices(rootState.user.token as string);
		notifications.loading({ text: 'Deleting note...' });
		try {
			const data = await noteServices.delete(payload.noteId);

			const isOk = notifications.errorService<Note>(data);
			if (!isOk) return;

			notifications.succes({ title: 'Deleted note' });
			dispatch('refreshStoreVideoToAnalyze');
			commit('deleteNote', { noteId: payload.noteId, noteListId: payload.noteListId });
		} catch (err) {
			console.error(err);
		}
	},
	async updateNote({ commit, rootState, state, dispatch }, payload: { noteListId: number; note: Note }) {
		const noteList = state.current;

		if (!noteList) {
			console.error(`Error: no se encuentra ninguna lista de notas que posea dicho id -> ${payload.noteListId}`);
			return;
		}

		const isNote = noteList.notes?.some((note) => note.id === payload.note.id);
		if (!isNote) {
			console.error(
				`Error: no se encuentra ninguna nota que posea dicho id -> ${payload.note.id} en la lista de notas "${noteList.title}"`
			);
			return;
		}

		const noteServices = new NoteServices(rootState.user.token as string);
		notifications.loading({ text: 'Updating note...' });
		try {
			const data = await noteServices.updateColumn(
				{
					title: payload.note.title,
					text: payload.note.text,
					// idYTVideo: payload.idYTVideo
				},
				payload.note.id
			);

			const isOk = notifications.errorService<Note>(data);
			if (!isOk) return;

			const note = data as Note;

			notifications.succes({ title: 'Updated note' });

			dispatch('refreshStoreVideoToAnalyze');
			commit('updateNote', note);
		} catch (err) {
			console.error(err);
		}
	},
	async updateNoteList({ commit, rootState, state, dispatch }, payload: FullNoteList) {
		const noteList = state.current || state.allFull?.find((noteList) => noteList.id === payload.id);

		if (!noteList) {
			console.error(`Error: no se encuentra ninguna lista de notas que posea dicho id -> ${payload.id}`);
			return;
		}

		const noteListServices = new NoteListServices(rootState.user.token as string);
		notifications.loading({ text: 'Updating note list...' });
		try {
			const data = await noteListServices.updateColumn(
				{
					title: payload.title,
					description: payload.description,
					// idYTVideo: payload.idYTVideo
				},
				payload.id
			);

			const isOk = notifications.errorService<NoteList>(data);
			if (!isOk) return;

			const noteList = data as NoteList;

			notifications.succes({ title: 'Updated note list' });

			commit('updateNoteList', noteList);
		} catch (err) {
			console.error(err);
		}
	},

	async delete({ rootState, commit, state }, payload: { noteListId: number }) {
		let noteList = state.allFull?.find((noteList) => noteList.id === payload.noteListId);

		if (state.current?.id === payload.noteListId) {
			noteList = state.current;
		}

		if (!noteList) {
			console.error(`Error: no se encuentra ninguna lista de notas que posea dicho id -> ${payload.noteListId}`);
			return;
		} else if (noteList.title === 'All Notes (default)') {
			alert('No es posible borrar la lista por defecto');
			return;
		}

		const noteListServices = new NoteListServices(rootState.user.token as string);
		notifications.loading({ text: 'Deleting Lists of Notes' });
		try {
			const data = await noteListServices.delete(payload.noteListId);

			const isOk = notifications.errorService<NoteList>(data);
			if (!isOk) return;
			notifications.succes({ title: 'Deleted list' });
			commit('delete', payload.noteListId);
		} catch (err) {
			console.error(err);
		}
	},
	async createNoteList({ rootState, commit }, payload: BasicNoteList) {
		if (payload.title === 'All Notes (default)') {
			alert('No es posible crear la lista con ese titulo');
			return;
		}

		const noteListServices = new NoteListServices(rootState.user.token as string);
		notifications.loading({ text: 'Create Lists of Notes' });
		try {
			const data = await noteListServices.create(payload);

			const isOk = notifications.errorService<NoteList>(data);
			if (!isOk) return;
			notifications.succes({ title: 'Created list' });
			const noteList = data as NoteList;
			commit('create', noteList);
		} catch (err) {
			console.error(err);
		}
	},

	refreshStoreVideoToAnalyze({ commit }) {
		commit('videoToAnalyze/refresh', undefined, { root: true });
	},
};

export default actions;
