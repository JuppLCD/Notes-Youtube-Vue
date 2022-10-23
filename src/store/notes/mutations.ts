import { MutationTree } from 'vuex';
import { NotesStateInterface } from './state';

import type { Note } from '@/types/Note';

const mutation: MutationTree<NotesStateInterface> = {
	addNote(state, payload: Note) {
		state.notes.push(payload);
	},
	deleteNote(state, payload: { id: string }) {
		state.notes = [...state.notes].filter((note) => note.id !== payload.id);
	},
};

export default mutation;
