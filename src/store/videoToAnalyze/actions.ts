import { ActionTree } from 'vuex';
import { VideoToAnalyzeStateInterface } from './state';
import { StateInterface } from '../index';

import { noteServices } from '@/services/note';
import { notifications } from '@/utils/Notifications';

import type { Note } from '@/types/Note';

const actions: ActionTree<VideoToAnalyzeStateInterface, StateInterface> = {
	async createNote({ commit, state }, payload: { title: string; text: string; list_id: number }) {
		if (!state.idYoutubeVideo) {
			notifications.error({ title: 'Error', text: "Can't create a note without the video url" });
			return;
		}

		try {
			const data = await noteServices.create(
				{ title: payload.title, text: payload.text, idYTVideo: state.idYoutubeVideo },
				payload.list_id
			);

			console.log(typeof data, '<-- type of -->', data);

			const isOk = notifications.errorService<Note>(data);
			if (!isOk) return;

			const newNote = data as Note;

			notifications.succes({ title: 'Success creating a new note' });

			commit('addNote', newNote);
		} catch (err) {
			console.error(err);
		}
	},
	async deleteNote({ commit, state }, payload: { id: number }) {
		const isNote = state.notes?.some((note) => note.id === payload.id);
		if (!isNote) {
			console.error('Error: no se encuentra ninguna nota que posea dicho id ->' + payload.id);
			return;
		}

		try {
			const data = await noteServices.delete(payload.id);

			const isOk = notifications.errorService<Note>(data);
			if (!isOk) return;

			notifications.succes({ title: 'Deleted note' });

			commit('deleteNote', { id: payload.id });
		} catch (err) {
			console.error(err);
		}
	},
};

export default actions;
