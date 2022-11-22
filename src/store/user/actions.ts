import { ActionTree } from 'vuex';
import { UserStateInterface } from './state';
import { StateInterface } from '../index';

import { TOKEN_KEY_LOCAL_STORAGE } from '@/config';

import { userService } from '@/services/user';
import { notifications } from '@/utils/Notifications';

import type { LoginCredentialsInterface, RegisterCredentialsInterface } from '@/types/User';

const actions: ActionTree<UserStateInterface, StateInterface> = {
	async loginCredentials({ commit }, payload: LoginCredentialsInterface) {
		try {
			const data = await userService.loginWhitCredentials(payload);
			if (data?.accessToken) {
				notifications.succes({ title: 'Successfully logged in' });
				commit('connectedUser', { token: data.accessToken, userId: data.user.userId, userName: data.user.userName });
			} else {
				throw new Error('Unauthorized');
			}
		} catch (err) {
			console.error(err);
			notifications.error({ title: 'Unauthorized' });
		}
	},
	async signup({ commit }, payload: RegisterCredentialsInterface) {
		try {
			const data = await userService.register(payload);
			if (data?.accessToken) {
				notifications.succes({ title: 'Successfully sign up' });
				commit('connectedUser', { token: data.accessToken, userId: data.user.userId, userName: data.user.userName });
			} else {
				throw new Error('User registration error');
			}
		} catch (err) {
			console.error(err);

			notifications.error({ title: 'User registration error' });
		}
	},
	async loginToken({ commit }) {
		const token = localStorage.getItem(TOKEN_KEY_LOCAL_STORAGE);
		if (!token) return;

		try {
			const data = await userService.validToken(token);
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
		notifications.succes({ title: 'Successfully logout' });
		commit('logout');
	},
};

export default actions;
