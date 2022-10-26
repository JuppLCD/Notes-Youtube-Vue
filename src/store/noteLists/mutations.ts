import { MutationTree } from 'vuex';
import { NoteListsStateInterface } from './state';

const mutation: MutationTree<NoteListsStateInterface> = {
	someMutation(/* state: NoteListsStateInterface */) {
		// a line to prevent linter errors
	},
};

export default mutation;
