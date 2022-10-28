import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { InjectionKey } from 'vue';

// My custom modules
import videoToAnalyzeModule from './videoToAnalyze';
import type { VideoToAnalyzeStateInterface } from './videoToAnalyze/state';

import noteListsModule from './noteLists';
import type { NoteListsStateInterface } from './noteLists/state';

import userModule from './user';
import type { UserStateInterface } from './user/state';

// Root State Interface
export interface StateInterface {
	videoToAnalyze: VideoToAnalyzeStateInterface;
	noteLists: NoteListsStateInterface;
	user: UserStateInterface;
}

export default createStore<StateInterface>({
	modules: {
		videoToAnalyze: videoToAnalyzeModule,
		noteLists: noteListsModule,
		user: userModule,
	},
});

export const key: InjectionKey<Store<StateInterface>> = Symbol();

export function useStoreVuex() {
	return baseUseStore(key);
}
