export const URL_BACKEND: string = import.meta.env.VITE_HOST_BAKEND;
export const URL_API_BACKEND = URL_BACKEND + '/api';

export const API_REPLACE_PARAMS = {
	noteId: '{:noteId}',
	noteListId: '{:noteListId}',
	idYTVideo: '{:idYTVideo}',
};

// USER
export const API_ROUTE_USER_REGISTER = URL_API_BACKEND + '/register';
export const API_ROUTE_USER_LOGIN = URL_API_BACKEND + '/login';
export const API_ROUTE_USER_VALID_TOKEN = URL_API_BACKEND + '/valid_token';

// NOTES
export const API_ROUTE_NOTES_GET_ALL = URL_API_BACKEND + '/notes';
export const API_ROUTE_NOTES_GET_BY_ID = URL_API_BACKEND + '/notes/{:noteId}';
export const API_ROUTE_NOTES_CREATE = URL_API_BACKEND + '/notes';
export const API_ROUTE_NOTES_UPDATE = URL_API_BACKEND + '/notes/{:noteId}';
export const API_ROUTE_NOTES_DELETE = URL_API_BACKEND + '/notes/{:noteId}';
export const API_ROUTE_NOTES_GET_BY_ID_YT_VIDEO = URL_API_BACKEND + '/notes/idYTVideo/{:idYTVideo}';

export const API_ROUTE_NOTES_ADD_IN_NOTE_LIST = URL_API_BACKEND + '/notes/{:noteId}/lists/{:noteListId}';
export const API_ROUTE_NOTES_REMOVE_FROM_NOTE_LIST = URL_API_BACKEND + '/notes/{:noteId}/lists/{:noteListId}';

// NOTE LIST
export const API_ROUTE_NOTE_LIST_GET_ALL = URL_API_BACKEND + '/lists';
export const API_ROUTE_NOTE_LIST_GET_BY_ID = URL_API_BACKEND + '/lists/{:noteListId}';
export const API_ROUTE_NOTE_LIST_CREATE = URL_API_BACKEND + '/lists';
export const API_ROUTE_NOTE_LIST_UPDATE = URL_API_BACKEND + '/lists/{:noteListId}';
export const API_ROUTE_NOTE_LIST_DELETE = URL_API_BACKEND + '/lists/{:noteListId}';
