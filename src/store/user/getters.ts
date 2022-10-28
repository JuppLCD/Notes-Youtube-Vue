import { GetterTree } from 'vuex';
import { UserStateInterface } from './state';
import { StateInterface } from '../index';

const getters: GetterTree<UserStateInterface, StateInterface> = {
	someGetter(/* state */) {
		// return true;
	},
};

export default getters;
