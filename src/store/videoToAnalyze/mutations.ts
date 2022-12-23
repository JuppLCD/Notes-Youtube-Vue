import type { MutationTree } from 'vuex';
import type { VideoToAnalyzeStateInterface } from './state';

import { defaultVideoToAnalyzeState } from '../defoultStates';

import type { Note } from '@/types/Note';

const mutation: MutationTree<VideoToAnalyzeStateInterface> = {
	addNote(state, payload: Note) {
		if (!state.notes) {
			state.notes = [];
		}
		state.notes.push(payload);
	},
	deleteNote(state, payload: { id: number }) {
		state.notes = state.notes?.filter((note) => note.id !== payload.id);
	},
	setIdYoutubeVideo(state, idVideo: string) {
		state.idYoutubeVideo = idVideo;
		state.notes = [];
	},
	setNotesByIdYoutubeVideo(state, payload: Note[]) {
		state.notes = payload;
	},
	updateNote(state, payload: Note) {
		const note = state.notes?.find((note) => note.id === payload.id);

		if (!note) return;

		note.text = payload.text;
		note.title = payload.title;
	},
	refresh(state) {
		state.notes = undefined;
	},
};

export default mutation;
