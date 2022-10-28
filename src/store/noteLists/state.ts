import type { FullNoteList, NoteList } from '@/types/NoteList';

import { defaultNoteListState } from '../defoultStates';

export interface NoteListsStateInterface {
	all?: NoteList[];
	allFull?: FullNoteList[];
}

function state(): NoteListsStateInterface {
	return {
		...defaultNoteListState,
	};
}

export default state;
