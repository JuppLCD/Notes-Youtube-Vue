import type { MutationTree } from 'vuex';
import type { NoteListsStateInterface } from './state';

import { defaultNoteListState } from '../defoultStates';

import type { Note } from '@/types/Note';
import type { FullNoteList, NoteList } from '@/types/NoteList';

const mutation: MutationTree<NoteListsStateInterface> = {
	setAll(state, payload: { all: NoteList[] }) {
		state.all = payload.all;
	},

	setAllFull(state, payload: { allFull: FullNoteList[] }) {
		state.allFull = payload.allFull;
	},

	setCurrent(state, payload: { current: FullNoteList }) {
		state.current = payload.current;
	},

	deleteNote(state, payload: { noteListId: number; noteId: number }) {
		const noteList = state.allFull?.find((noteList) => noteList.id === payload.noteListId) as FullNoteList;
		const notes = noteList.notes.filter((note) => note.id !== payload.noteId) as Note[];
		noteList.notes = notes;
	},
	delete(state, payload: { noteListId: number }) {
		if (state.all) {
			state.all = [...state.all.filter((noteList) => noteList.id !== payload.noteListId)];
		}

		if (state.current?.id === payload.noteListId) {
			state.current = undefined;
		}

		if (state.allFull) {
			state.allFull = [...state.allFull.filter((noteList) => noteList.id !== payload.noteListId)];
		}
	},
	refresh(state) {
		state = { ...defaultNoteListState };
	},
};

export default mutation;
