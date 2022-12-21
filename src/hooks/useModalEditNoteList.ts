import { ref } from 'vue';

import { useStoreVuex } from '@/store';

import { FullNoteList } from '@/types/NoteList';

export default function useModalEditNoteList() {
	const openModalEditNoteList = ref(false);

	const closeModalEditNoteList = () => {
		openModalEditNoteList.value = false;
		noteListToEdit.value = {
			title: '',
			description: '',
			id: 0,
			user_id: 0,
			notes: [],
		};
	};

	const showModalEditNotelist = (noteList: FullNoteList) => {
		noteListToEdit.value = { ...noteList };

		openModalEditNoteList.value = true;
	};

	const store = useStoreVuex();

	const handleSubmitEditNoteList = (e: Event) => {
		if (!(noteListToEdit.value.description && noteListToEdit.value.title && noteListToEdit.value.id)) {
			// ! ERROR
			return;
		}

		store.dispatch('noteLists/updateNoteList', { ...noteListToEdit.value });

		closeModalEditNoteList();
	};

	const noteListToEdit = ref<FullNoteList>({
		title: '',
		description: '',
		id: 0,
		user_id: 0,
		notes: [],
	});

	return {
		openModalEditNoteList,
		showModalEditNotelist,
		handleSubmitEditNoteList,
		noteListToEdit,
		closeModalEditNoteList,
	};
}
