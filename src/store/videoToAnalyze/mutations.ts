import { MutationTree } from 'vuex';
import { VideoToAnalyzeStateInterface } from './state';

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
	},
	setNotesByIdYoutubeVideo(state, payload: Note[]) {
		state.notes = payload;
	},
};

export default mutation;
