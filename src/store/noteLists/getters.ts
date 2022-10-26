import { GetterTree } from 'vuex';
import { NoteListsStateInterface } from './state';
import { StateInterface } from '../index';

const getters: GetterTree<NoteListsStateInterface, StateInterface> = {
	someGetter(/* state */) {
		// return true;
	},
};

export default getters;
