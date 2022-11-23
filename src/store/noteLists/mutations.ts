import { FullNoteList, NoteList } from '@/types/NoteList';
import { MutationTree } from 'vuex';
import { NoteListsStateInterface } from './state';

const mutation: MutationTree<NoteListsStateInterface> = {
	setAll(state, payload: { all: NoteList[] }) {
		state.all = payload.all;
	},

	setAllFull(state, payload: { allFull: FullNoteList[] }) {
		state.allFull = payload.allFull;
	},
};

export default mutation;
