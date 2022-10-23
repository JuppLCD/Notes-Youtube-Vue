import { createStore, useStore as baseUseStore } from 'vuex';

// My custom modules
import notesModule from './notes';
import { NotesStateInterface } from './notes/state';

// Root State Interface
export interface StateInterface {
	notes: NotesStateInterface;
}

export default createStore<StateInterface>({
	modules: {
		notes: notesModule,
	},
});

export function useStoreVuex() {
	return baseUseStore();
}
