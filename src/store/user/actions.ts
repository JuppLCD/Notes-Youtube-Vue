import { ActionTree } from 'vuex';
import { UserStateInterface } from './state';
import { StateInterface } from '../index';

const actions: ActionTree<UserStateInterface, StateInterface> = {
	someAction(/*{ commit }, payload  */) {
		// a line to prevent linter errors
	},
};

export default actions;
