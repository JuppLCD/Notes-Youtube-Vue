import { GetterTree } from 'vuex';
import { VideoToAnalyzeStateInterface } from './state';
import { StateInterface } from '../index';

const getters: GetterTree<VideoToAnalyzeStateInterface, StateInterface> = {
	// allNotes(state) {
	// 	console.log(state);
	// 	return state.videoToAnalyze;
	// },
};

export default getters;
