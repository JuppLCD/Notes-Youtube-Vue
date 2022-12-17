import { ref } from 'vue';

import { useRoute } from 'vue-router';
import { useStoreVuex } from '@/store';

import { Note } from '@/types/Note';

export default function useModalEditNote() {
	const open = ref(false);

	const closeModal = () => {
		open.value = false;
		noteToEdit.value = {
			title: '',
			text: '',
			id: 0,
			idYTVideo: '',
		};
	};

	const showModalEditNote = (note: Note) => {
		noteToEdit.value = { ...note };

		open.value = true;
	};

	const route = useRoute();
	const store = useStoreVuex();

	const handleSubmit = (e: Event) => {
		if (!(noteToEdit.value.text && noteToEdit.value.title && noteToEdit.value.id)) {
			// ! ERROR
			return;
		}

		if (route.name === 'YTVideoNotes') {
			store.dispatch('videoToAnalyze/updateNote', noteToEdit.value);
		} else if (route.name === 'noteList') {
			const { noteListId } = route.params;
			store.dispatch('noteLists/updateNote', { note: noteToEdit.value, noteListId });
		}

		closeModal();
	};

	const noteToEdit = ref<Note>({
		title: '',
		text: '',
		id: 0,
		idYTVideo: '',
	});

	return { open, showModalEditNote, handleSubmit, noteToEdit, closeModal };
}
