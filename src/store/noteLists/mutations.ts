import { NoteList } from '@/types/NoteList';
import { MutationTree } from 'vuex';
import { NoteListsStateInterface } from './state';

const mutation: MutationTree<NoteListsStateInterface> = {
	someMutation(/* state: NoteListsStateInterface */) {
		// a line to prevent linter errors
	},
	setNoteLists(state, payload: { all: NoteList[] }) {
		state.all = payload.all;
	},
};

export default mutation;
