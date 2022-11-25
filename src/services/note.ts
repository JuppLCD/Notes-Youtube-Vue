import { AxiosAuthInstance } from './axios';

import {
	API_REPLACE_PARAMS,
	API_PATH_NOTES_GET_ALL,
	API_PATH_NOTES_GET_BY_ID,
	API_PATH_NOTES_CREATE,
	API_PATH_NOTES_UPDATE,
	API_PATH_NOTES_DELETE,
	API_PATH_NOTES_GET_BY_ID_YT_VIDEO,
	API_PATH_NOTES_ADD_IN_NOTE_LIST,
	API_PATH_NOTES_REMOVE_FROM_NOTE_LIST,
} from '@/config';

import { replacePramasFromUrl } from './utils';

import type { BasicNote, Note } from '@/types/Note';
import type { AxiosError } from 'axios';

export class NoteServices extends AxiosAuthInstance {
	getAll = async () => {
		try {
			const res = await this.apiAuthAxiosInstance.get<Note[]>(API_PATH_NOTES_GET_ALL);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	getById = async (noteId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTES_GET_BY_ID, { [noteId]: API_REPLACE_PARAMS.noteId });

			const res = await this.apiAuthAxiosInstance.get<Note>(url);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	getByIdYTVideo = async (idYTVideo: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTES_GET_BY_ID_YT_VIDEO, {
				[idYTVideo]: API_REPLACE_PARAMS.idYTVideo,
			});

			const res = await this.apiAuthAxiosInstance.get<Note[]>(url);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	create = async (note: BasicNote, noteListId: number | null) => {
		try {
			const res = await this.apiAuthAxiosInstance.post<Note>(API_PATH_NOTES_CREATE, { ...note, list_id: noteListId });

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	updateAll = async (note: BasicNote, noteId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTES_UPDATE, { [noteId]: API_REPLACE_PARAMS.noteId });
			const res = await this.apiAuthAxiosInstance.put<Note>(url, note);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	updateColumn = async (note: Partial<BasicNote>, noteId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTES_UPDATE, { [noteId]: API_REPLACE_PARAMS.noteId });
			const res = await this.apiAuthAxiosInstance.patch<Note>(url, note);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	delete = async (noteId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTES_DELETE, { [noteId]: API_REPLACE_PARAMS.noteId });
			const res = await this.apiAuthAxiosInstance.delete<Note>(url);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	addInNoteList = async (noteId: number, noteListId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTES_ADD_IN_NOTE_LIST, {
				[noteId]: API_REPLACE_PARAMS.noteId,
				[noteListId]: API_REPLACE_PARAMS.noteListId,
			});
			const res = await this.apiAuthAxiosInstance.post(url);

			return res.status === 200;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	removeFromNoteList = async (noteId: number, noteListId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTES_REMOVE_FROM_NOTE_LIST, {
				[noteId]: API_REPLACE_PARAMS.noteId,
				[noteListId]: API_REPLACE_PARAMS.noteListId,
			});
			const res = await this.apiAuthAxiosInstance.delete(url);

			return res.status === 200;
		} catch (err) {
			console.error(err);

			const error = err as Error | AxiosError;
			return error;
		}
	};
}
