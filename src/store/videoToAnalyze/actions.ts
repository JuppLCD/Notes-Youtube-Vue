import { ActionTree } from 'vuex';
import { VideoToAnalyzeStateInterface } from './state';
import { StateInterface } from '../index';

import type { Note } from '@/types/Note';

const actions: ActionTree<VideoToAnalyzeStateInterface, StateInterface> = {
	createNote({ commit, state }, payload: { title: string; text: string }) {
		if (!state.idYoutubeVideo) {
			alert('No se ha seleccinado ningun video');
			return;
		}

		const id = String(new Date().getTime());
		const newNote: Note = {
			...payload,
			id,
			idYTVideo: state.idYoutubeVideo,
		};

		commit('addNote', newNote);
	},
	deleteNote({ commit, state }, payload: { id: string }) {
		const isNote = state.notes.some((note) => note.id === payload.id);
		if (!isNote) {
			console.error('Error: no se encuentra ninguna nota que posea dicho id ->' + payload.id);
			return;
		}

		commit('deleteNote', { id: payload.id });
	},
};

export default actions;
