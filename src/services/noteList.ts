import { AxiosAuthInstance } from './axios';

import {
	API_PATH_NOTE_LIST_CREATE,
	API_PATH_NOTE_LIST_DELETE,
	API_PATH_NOTE_LIST_GET_ALL,
	API_PATH_NOTE_LIST_GET_ALL_FULL,
	API_PATH_NOTE_LIST_GET_BY_ID,
	API_PATH_NOTE_LIST_UPDATE,
	API_REPLACE_PARAMS,
} from '@/config';

import { replacePramasFromUrl } from './utils';

import type { BasicNoteList, FullNoteList, NoteList } from '@/types/NoteList';
import type { AxiosError } from 'axios';

export class NoteListServices extends AxiosAuthInstance {
	getAll = async () => {
		try {
			const res = await this.apiAuthAxiosInstance.get<NoteList[]>(API_PATH_NOTE_LIST_GET_ALL);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	getAllFull = async () => {
		try {
			const res = await this.apiAuthAxiosInstance.get<FullNoteList[]>(API_PATH_NOTE_LIST_GET_ALL_FULL);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	getById = async (noteListId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTE_LIST_GET_BY_ID, { [noteListId]: API_REPLACE_PARAMS.noteListId });

			const res = await this.apiAuthAxiosInstance.get<FullNoteList>(url);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	create = async (note: BasicNoteList) => {
		try {
			const res = await this.apiAuthAxiosInstance.post<NoteList>(API_PATH_NOTE_LIST_CREATE, note);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	updateAll = async (note: BasicNoteList, noteListId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTE_LIST_UPDATE, { [noteListId]: API_REPLACE_PARAMS.noteListId });
			const res = await this.apiAuthAxiosInstance.put<NoteList>(url, note);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	updateColumn = async (noteList: Partial<BasicNoteList>, noteListId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTE_LIST_UPDATE, { [noteListId]: API_REPLACE_PARAMS.noteListId });
			const res = await this.apiAuthAxiosInstance.patch<NoteList>(url, noteList);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};

	delete = async (noteListId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTE_LIST_DELETE, { [noteListId]: API_REPLACE_PARAMS.noteListId });
			const res = await this.apiAuthAxiosInstance.delete<NoteList>(url);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;
			return error;
		}
	};
}
