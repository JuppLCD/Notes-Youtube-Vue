import { Note } from '@/types/Note';

import { defaultVideoToAnalyzeState } from '../defoultStates';
export interface VideoToAnalyzeStateInterface {
	notes?: Note[];
	idYoutubeVideo: string;
}

function state(): VideoToAnalyzeStateInterface {
	return {
		...defaultVideoToAnalyzeState,
	};
}

export default state;
