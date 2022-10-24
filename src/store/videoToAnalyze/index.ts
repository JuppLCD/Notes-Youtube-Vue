import { Module } from 'vuex';
import { StateInterface } from '../index';

import state, { VideoToAnalyzeStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const notesModule: Module<VideoToAnalyzeStateInterface, StateInterface> = {
	namespaced: true,
	actions,
	getters,
	mutations,
	state,
};

export default notesModule;
