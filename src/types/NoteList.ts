import { Note } from './Note';

export interface BasicNoteList {
	name: string;
	description: string;
}

export interface NoteList extends BasicNoteList {
	id: number;
	user_id: number;
}

export interface FullNoteList extends NoteList {
	notes: Note[];
}
