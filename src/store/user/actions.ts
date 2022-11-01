import { ActionTree } from 'vuex';
import { UserStateInterface } from './state';
import { StateInterface } from '../index';

import { TOKEN_KEY_LOCAL_STORAGE } from '@/config';

const actions: ActionTree<UserStateInterface, StateInterface> = {
	loginCredentials(
		{ commit },
		payload: {
			username: string;
			password: string;
		}
	) {
		// TODO: BACKEND LOGIN POST

		const res = { userId: 1, token: 'TOKEN' };
		if (res.token) {
			commit('connectedUser', { token: res.token, userId: res.userId });
		} else {
		}
	},
	signup(
		{ commit },
		payload: {
			username: string;
			password: string;
			confirmPassword: string;
		}
	) {
		// TODO: BACKEND SINGUP POST

		const res = { userId: 1, token: 'TOKEN' };
		if (res.token) {
			commit('connectedUser', { token: res.token, userId: res.userId });
		} else {
		}
	},
	loginToken({ commit }) {
		const token = localStorage.getItem(TOKEN_KEY_LOCAL_STORAGE);
		if (!token) return;

		// TODO: veriricar token
		const res = { authorizedToken: true, userId: 1 };
		if (res.authorizedToken) {
			commit('connectedUser', { token: token, userId: res.userId });
		}
	},

	logout({ commit }) {
		localStorage.removeItem(TOKEN_KEY_LOCAL_STORAGE);
		commit('logout');
	},
};

export default actions;
