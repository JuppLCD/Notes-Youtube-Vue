import { GetterTree } from 'vuex';
import { NotesStateInterface } from './state';
import { StateInterface } from '../index';

const getters: GetterTree<NotesStateInterface, StateInterface> = {
	// allNotes(state) {
	// 	console.log(state);
	// 	return state.notes;
	// },
};

export default getters;
