import { Note } from './Note';

export interface NoteList {
	id: number;
	name: string;
	description: string;
	user_id: number;
}

export interface NoteListInfo extends NoteList {
	notes_id: string[];
}

export interface FullNoteList extends NoteList {
	notes: Note[];
}
