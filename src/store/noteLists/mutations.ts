import { Note } from '@/types/Note';
import { FullNoteList, NoteList } from '@/types/NoteList';
import { MutationTree } from 'vuex';
import { NoteListsStateInterface } from './state';

const mutation: MutationTree<NoteListsStateInterface> = {
	setAll(state, payload: { all: NoteList[] }) {
		state.all = payload.all;
	},

	setAllFull(state, payload: { allFull: FullNoteList[] }) {
		state.allFull = payload.allFull;
	},

	deleteNote(state, payload: { noteListId: number; noteId: number }) {
		const noteList = state.allFull?.find((noteList) => noteList.id === payload.noteListId) as FullNoteList;
		const notes = noteList.notes.filter((note) => note.id !== payload.noteId) as Note[];
		noteList.notes = notes;
	},
};

export default mutation;
