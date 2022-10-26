import type { FullNoteList, NoteList, NoteListInfo } from '@/types/NoteList';

import { defaultNoteListState } from '../defoultStates';

export interface NoteListsStateInterface {
	all?: NoteList[];
	allFull?: FullNoteList[];
	info?: NoteListInfo[];
}

function state(): NoteListsStateInterface {
	return {
		...defaultNoteListState,
	};
}

export default state;
