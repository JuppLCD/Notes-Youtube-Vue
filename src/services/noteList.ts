import axios from 'axios';
import { apiAuthAxiosInstance } from './axios';

import {
	API_PATH_NOTE_LIST_CREATE,
	API_PATH_NOTE_LIST_DELETE,
	API_PATH_NOTE_LIST_GET_ALL,
	API_PATH_NOTE_LIST_GET_BY_ID,
	API_PATH_NOTE_LIST_UPDATE,
	API_REPLACE_PARAMS,
} from '@/config';

import { replacePramasFromUrl } from './utils';

import type { BasicNoteList, NoteList } from '@/types/NoteList';
import type { AxiosError } from 'axios';

class NoteListServices {
	getAll = async () => {
		try {
			const res = await apiAuthAxiosInstance.get<NoteList[]>(API_PATH_NOTE_LIST_GET_ALL);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;

			if (axios.isAxiosError(error)) {
				return error.response;
			}
			return error.message;
		}
	};

	getById = async (noteListId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTE_LIST_GET_BY_ID, { [noteListId]: API_REPLACE_PARAMS.noteListId });

			const res = await apiAuthAxiosInstance.get<NoteList>(url);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;

			if (axios.isAxiosError(error)) {
				return error.response;
			}
			return error.message;
		}
	};

	create = async (note: BasicNoteList) => {
		try {
			const res = await apiAuthAxiosInstance.post<NoteList>(API_PATH_NOTE_LIST_CREATE, note);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;

			if (axios.isAxiosError(error)) {
				return error.response;
			}
			return error.message;
		}
	};

	updateAll = async (note: BasicNoteList, noteListId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTE_LIST_UPDATE, { [noteListId]: API_REPLACE_PARAMS.noteListId });
			const res = await apiAuthAxiosInstance.put<NoteList>(url, note);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;

			if (axios.isAxiosError(error)) {
				return error.response;
			}
			return error.message;
		}
	};

	updateColumn = async (noteList: Partial<BasicNoteList>, noteListId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTE_LIST_UPDATE, { [noteListId]: API_REPLACE_PARAMS.noteListId });
			const res = await apiAuthAxiosInstance.patch<NoteList>(url, noteList);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;

			if (axios.isAxiosError(error)) {
				return error.response;
			}
			return error.message;
		}
	};

	delete = async (noteListId: number) => {
		try {
			const url = replacePramasFromUrl(API_PATH_NOTE_LIST_DELETE, { [noteListId]: API_REPLACE_PARAMS.noteListId });
			const res = await apiAuthAxiosInstance.delete<NoteList>(url);

			return res.data;
		} catch (err) {
			console.error(err);
			const error = err as Error | AxiosError;

			if (axios.isAxiosError(error)) {
				return error.response;
			}
			return error.message;
		}
	};
}

export const noteListServices = new NoteListServices();