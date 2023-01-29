import { ActionTree } from 'vuex';
import { VideoToAnalyzeStateInterface } from './state';
import { StateInterface } from '../index';

import { NoteServices } from '@/services/note';
import { notifications } from '@/utils/Notifications';

import type { Note } from '@/types/Note';

const actions: ActionTree<VideoToAnalyzeStateInterface, StateInterface> = {
	async createNote({ commit, state, rootState, dispatch }, payload: { title: string; text: string; list_id: number }) {
		if (!state.idYoutubeVideo) {
			notifications.error({ title: 'Error', text: "Can't create a note without the video url" });
			return;
		}

		const noteServices = new NoteServices(rootState.user.token as string);
		notifications.loading({});
		try {
			const data = await noteServices.create(
				{ title: payload.title, text: payload.text, idYTVideo: state.idYoutubeVideo },
				payload.list_id
			);

			const isOk = notifications.errorService<Note>(data);
			if (!isOk) return;

			const newNote = data as Note;

			notifications.succes({ title: 'Success creating a new note' });

			dispatch('refreshStoreNoteLists');
			commit('addNote', newNote);
		} catch (err) {
			console.error(err);
		}
	},
	async deleteNote({ commit, state, rootState, dispatch }, payload: { id: number }) {
		const isNote = state.notes?.some((note) => note.id === payload.id);
		if (!isNote) {
			console.error('Error: no se encuentra ninguna nota que posea dicho id ->' + payload.id);
			return;
		}
		const noteServices = new NoteServices(rootState.user.token as string);
		notifications.loading({});
		try {
			const data = await noteServices.delete(payload.id);

			const isOk = notifications.errorService<Note>(data);
			if (!isOk) return;

			notifications.succes({ title: 'Deleted note' });

			dispatch('refreshStoreNoteLists');
			commit('deleteNote', { id: payload.id });
		} catch (err) {
			console.error(err);
		}
	},
	async updateNote({ commit, state, rootState, dispatch }, payload: Note) {
		const isNote = state.notes?.some((note) => note.id === payload.id);
		if (!isNote) {
			console.error('Error: no se encuentra ninguna nota que posea dicho id ->' + payload.id);
			return;
		}
		const noteServices = new NoteServices(rootState.user.token as string);
		notifications.loading({ text: 'Updating note...' });
		try {
			const data = await noteServices.updateColumn(
				{
					title: payload.title,
					text: payload.text,
					// idYTVideo: payload.idYTVideo
				},
				payload.id
			);

			const isOk = notifications.errorService<Note>(data);
			if (!isOk) return;

			const note = data as Note;
			notifications.succes({ title: 'Updated note' });

			dispatch('refreshStoreNoteLists');
			commit('updateNote', note);
		} catch (err) {
			console.error(err);
		}
	},
	async getNotesByIdYoutubeVideo({ commit, state, rootState }, payload: { idVideo: string }) {
		const idYoutubeVideo = payload.idVideo || state.idYoutubeVideo;

		if (!idYoutubeVideo || state.notes?.length === 0) {
			return;
		}

		const noteServices = new NoteServices(rootState.user.token as string);
		notifications.loading({ text: 'Watching on the server if you have created notes of this video' });
		try {
			const data = await noteServices.getByIdYTVideo(idYoutubeVideo);
			const isOk = notifications.errorService<Note[]>(data);
			if (!isOk) return;

			const notesByIdYoutubeVideo = data as Note[];

			commit('setNotesByIdYoutubeVideo', notesByIdYoutubeVideo);
		} catch (err) {
			console.error(err);
		}
	},
	setIdYoutubeVideo({ commit, dispatch }, payload: { idVideo: string }) {
		dispatch('getNotesByIdYoutubeVideo', payload);
		commit('setIdYoutubeVideo', payload.idVideo);
	},

	refreshStoreNoteLists({ commit }) {
		commit('noteLists/refreshFullNoteList', undefined, { root: true });
	},
};

export default actions;
