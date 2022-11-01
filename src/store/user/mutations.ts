import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';

import { TOKEN_KEY_LOCAL_STORAGE } from '@/config';

const mutation: MutationTree<UserStateInterface> = {
	connectedUser(state, payload: { token: string; userId: number }) {
		state.isAuth = true;
		state.userId = payload.userId;
		state.token = payload.token;

		localStorage.setItem(TOKEN_KEY_LOCAL_STORAGE, payload.token);
	},
	logout(state) {
		state.isAuth = false;
		state.userId = undefined;
		state.token = undefined;
	},
};

export default mutation;
