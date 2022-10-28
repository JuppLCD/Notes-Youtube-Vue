import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';

const mutation: MutationTree<UserStateInterface> = {
	someMutation(/* state: UserStateInterface */) {
		// a line to prevent linter errors
	},
};

export default mutation;
