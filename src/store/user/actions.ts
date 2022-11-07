import { ActionTree } from 'vuex';
import { UserStateInterface } from './state';
import { StateInterface } from '../index';

import { TOKEN_KEY_LOCAL_STORAGE } from '@/config';

import { notify } from '@kyvg/vue3-notification';

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
			notify({
				type: 'success',
				duration: 3000,
				speed: 1000,
				title: 'Successfully logged in',
			});
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
			notify({
				type: 'success',
				duration: 3000,
				speed: 1000,
				title: 'Successfully sign up',
			});
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

		notify({
			type: 'success',
			duration: 3000,
			speed: 1000,
			title: 'Successfully logout',
		});
		commit('logout');
	},
};

export default actions;
