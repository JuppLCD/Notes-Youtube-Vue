import { ActionTree } from 'vuex';
import { VideoToAnalyzeStateInterface } from './state';
import { StateInterface } from '../index';

import type { Note } from '@/types/Note';

import { notify } from '@kyvg/vue3-notification';

const actions: ActionTree<VideoToAnalyzeStateInterface, StateInterface> = {
	createNote({ commit, state }, payload: { title: string; text: string; list_id: number }) {
		if (!state.idYoutubeVideo) {
			notify({
				type: 'error',
				duration: 3000,
				speed: 1000,
				title: 'Error',
				text: "Can't create a note without the video url",
			});
			return;
		}

		const id = String(new Date().getTime());
		const newNote: Note = {
			...payload,
			id,
			idYTVideo: state.idYoutubeVideo,
		};

		notify({
			type: 'success',
			duration: 3000,
			speed: 1000,
			title: 'Success creating a new note',
		});
		commit('addNote', newNote);
	},
	deleteNote({ commit, state }, payload: { id: string }) {
		const isNote = state.notes?.some((note) => note.id === payload.id);
		if (!isNote) {
			console.error('Error: no se encuentra ninguna nota que posea dicho id ->' + payload.id);
			return;
		}

		// TODO: fetch DELETE :id

		notify({
			type: 'success',
			duration: 3000,
			speed: 1000,
			title: 'Deleted note',
		});
		commit('deleteNote', { id: payload.id });
	},
};

export default actions;
