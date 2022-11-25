import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';

import { TOKEN_KEY_LOCAL_STORAGE } from '@/config';
import { router } from '@/routes';

const mutation: MutationTree<UserStateInterface> = {
	connectedUser(state, payload: { token: string; userId: number; userName: string }) {
		state.isAuth = true;
		state.userId = payload.userId;
		state.userName = payload.userName;
		state.token = payload.token;

		localStorage.setItem(TOKEN_KEY_LOCAL_STORAGE, payload.token);

		router.push({ name: 'YTVideoNotes' });
	},
	logout(state) {
		state.isAuth = false;
		state.userId = undefined;
		state.userName = undefined;
		state.token = undefined;

		router.push({ name: 'home' });
	},
};

export default mutation;
