import { Note } from './Note';

export interface NoteList {
	id: number;
	name: string;
	description: string;
	user_id: number;
}

export interface FullNoteList extends NoteList {
	notes: Note[];
}
