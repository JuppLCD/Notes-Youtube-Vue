import { ActionTree } from 'vuex';
import { NotesStateInterface } from './state';
import { StateInterface } from '../index';

import type { Note } from '@/types/Note';

const actions: ActionTree<NotesStateInterface, StateInterface> = {
	createNote({ commit }, payload: { title: string; text: string }) {
		const id = String(new Date().getTime());
		const newNote: Note = {
			...payload,
			id,
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
