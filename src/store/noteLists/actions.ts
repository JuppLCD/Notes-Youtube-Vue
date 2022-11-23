import { ActionTree } from 'vuex';
import { NoteListsStateInterface } from './state';
import { StateInterface } from '../index';

import { noteListServices } from '@/services/noteList';
import { notifications } from '@/utils/Notifications';

import type { FullNoteList, NoteList } from '@/types/NoteList';

const actions: ActionTree<NoteListsStateInterface, StateInterface> = {
	async getAll({ commit }) {
		try {
			const data = await noteListServices.getAll();

			const isOk = notifications.errorService<NoteList[]>(data);
			if (!isOk) return;

			commit('setAll', { all: data });
		} catch (err) {
			console.error(err);
		}
	},

	async getAllFull({ commit }) {
		try {
			const data = await noteListServices.getAllFull();

			const isOk = notifications.errorService<FullNoteList[]>(data);
			if (!isOk) return;

			commit('setAllFull', { allFull: data });
		} catch (err) {
			console.error(err);
		}
	},
};

export default actions;
