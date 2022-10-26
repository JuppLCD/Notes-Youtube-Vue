import { ActionTree } from 'vuex';
import { NoteListsStateInterface } from './state';
import { StateInterface } from '../index';

const actions: ActionTree<NoteListsStateInterface, StateInterface> = {
	// someAction({ commit }, payload) {
	// a line to prevent linter errors
	// },
	getNoteLists({ commit }) {
		// TODO: Get all NOTELISTS of user

		const resExample = [
			{ name: 'All Notes (default)', id: 1, user_id: 1, description: '' },
			{ name: 'Programming', id: 2, user_id: 1, description: '' },
			{ name: 'Maths', id: 3, user_id: 1, description: '' },
		];

		commit('setNoteLists', { all: resExample });
	},
};

export default actions;
