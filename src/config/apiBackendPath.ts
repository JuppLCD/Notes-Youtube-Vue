export const URL_BACKEND: string = import.meta.env.VITE_HOST_BAKEND;
export const URL_API_BACKEND = URL_BACKEND + '/api';

export const API_REPLACE_PARAMS = {
	noteId: '{:noteId}',
	noteListId: '{:noteListId}',
	idYTVideo: '{:idYTVideo}',
};

// USER
export const API_PATH_USER_REGISTER = '/register';
export const API_PATH_USER_LOGIN = '/login';
export const API_PATH_USER_VALID_TOKEN = '/valid_token';

// NOTES
export const API_PATH_NOTES_GET_ALL = '/notes';
export const API_PATH_NOTES_GET_BY_ID = '/notes/{:noteId}';
export const API_PATH_NOTES_CREATE = '/notes';
export const API_PATH_NOTES_UPDATE = '/notes/{:noteId}';
export const API_PATH_NOTES_DELETE = '/notes/{:noteId}';
export const API_PATH_NOTES_GET_BY_ID_YT_VIDEO = '/notes/idYTVideo/{:idYTVideo}';

export const API_PATH_NOTES_ADD_IN_NOTE_LIST = '/notes/{:noteId}/lists/{:noteListId}';
export const API_PATH_NOTES_REMOVE_FROM_NOTE_LIST = '/notes/{:noteId}/lists/{:noteListId}';

// NOTE LIST
export const API_PATH_NOTE_LIST_GET_ALL = '/lists';
export const API_PATH_NOTE_LIST_GET_BY_ID = '/lists/{:noteListId}';
export const API_PATH_NOTE_LIST_CREATE = '/lists';
export const API_PATH_NOTE_LIST_UPDATE = '/lists/{:noteListId}';
export const API_PATH_NOTE_LIST_DELETE = '/lists/{:noteListId}';
