import { ActionTree } from 'vuex';
import { NoteListsStateInterface } from './state';
import { StateInterface } from '../index';

import { NoteListServices } from '@/services/noteList';
import { NoteServices } from '@/services/note';
import { notifications } from '@/utils/Notifications';

import type { FullNoteList, NoteList } from '@/types/NoteList';
import type { Note } from '@/types/Note';

const actions: ActionTree<NoteListsStateInterface, StateInterface> = {
	async getAll({ commit, rootState }) {
		try {
			const noteListServices = new NoteListServices(rootState.user.token as string);
			notifications.loading({});
			const data = await noteListServices.getAll();

			const isOk = notifications.errorService<NoteList[]>(data);
			if (!isOk) return;

			commit('setAll', { all: data });
		} catch (err) {
			console.error(err);
		}
	},

	async getAllFull({ commit, rootState }) {
		try {
			const noteListServices = new NoteListServices(rootState.user.token as string);
			notifications.loading({});
			const data = await noteListServices.getAllFull();

			const isOk = notifications.errorService<FullNoteList[]>(data);
			if (!isOk) return;

			commit('setAllFull', { allFull: data });
		} catch (err) {
			console.error(err);
		}
	},

	async deleteNoteFromAllFull({ commit, rootState, state }, payload: { noteListId: number; noteId: number }) {
		const noteList = state.allFull?.find((noteList) => noteList.id === payload.noteListId);
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
		notifications.loading({});
		try {
			const data = await noteServices.delete(payload.noteId);

			const isOk = notifications.errorService<Note>(data);
			if (!isOk) return;

			notifications.succes({ title: 'Deleted note' });
			commit('deleteNote', { noteId: payload.noteId, noteListId: payload.noteListId });
		} catch (err) {
			console.error(err);
		}
	},
};

export default actions;
