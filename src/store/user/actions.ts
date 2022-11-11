import { ActionTree } from 'vuex';
import { UserStateInterface } from './state';
import { StateInterface } from '../index';

import { TOKEN_KEY_LOCAL_STORAGE } from '@/config';

import { notify } from '@kyvg/vue3-notification';

import { loginWhitCredentials, register, validToken } from '@/services/user';

import type { LoginCredentialsInterface, RegisterCredentialsInterface } from '@/types/User';

const actions: ActionTree<UserStateInterface, StateInterface> = {
	async loginCredentials({ commit }, payload: LoginCredentialsInterface) {
		try {
			const data = await loginWhitCredentials(payload);
			if (data?.accessToken) {
				notify({
					type: 'success',
					duration: 3000,
					speed: 1000,
					title: 'Successfully logged in',
				});
				commit('connectedUser', { token: data.accessToken, userId: data.user.userId, userName: data.user.userName });
			} else {
				throw new Error('Unauthorized');
			}
		} catch (err) {
			console.error(err);
			notify({
				type: 'error',
				duration: 3000,
				speed: 1000,
				title: 'Unauthorized',
			});
		}
	},
	async signup({ commit }, payload: RegisterCredentialsInterface) {
		try {
			const data = await register(payload);
			if (data?.accessToken) {
				notify({
					type: 'success',
					duration: 3000,
					speed: 1000,
					title: 'Successfully sign up',
				});
				commit('connectedUser', { token: data.accessToken, userId: data.user.userId, userName: data.user.userName });
			} else {
				throw new Error('User registration error');
			}
		} catch (err) {
			console.error(err);
			notify({
				type: 'error',
				duration: 3000,
				speed: 1000,
				title: 'User registration error',
			});
		}
	},
	async loginToken({ commit }) {
		const token = localStorage.getItem(TOKEN_KEY_LOCAL_STORAGE);
		if (!token) return;

		try {
			const data = await validToken(token);
			if (data?.accessToken) {
				commit('connectedUser', { token: data.accessToken, userId: data.user.userId, userName: data.user.userName });
			} else {
				throw new Error('Invalid token');
			}
		} catch (err) {
			console.error(err);
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
