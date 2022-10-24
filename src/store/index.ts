import { createStore, useStore as baseUseStore } from 'vuex';

// My custom modules
import videoToAnalyzeModule from './videoToAnalyze';
import { VideoToAnalyzeStateInterface } from './videoToAnalyze/state';

// Root State Interface
export interface StateInterface {
	videoToAnalyze: VideoToAnalyzeStateInterface;
}

export default createStore<StateInterface>({
	modules: {
		videoToAnalyze: videoToAnalyzeModule,
	},
});

export function useStoreVuex() {
	return baseUseStore();
}
