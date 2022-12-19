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
	updateNote(state, payload: Note) {
		const noteList = state.current as FullNoteList;
		const note = noteList.notes.find((note) => note.id === payload.id) as Note;

		note.text = payload.text;
		note.title = payload.title;
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
		state.all = undefined;
		state.allFull = undefined;
		state.current = undefined;
	},
};

export default mutation;
