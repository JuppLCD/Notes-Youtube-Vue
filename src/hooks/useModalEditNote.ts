import { ref } from 'vue';

import { useRoute } from 'vue-router';
import { useStoreVuex } from '@/store';

import { Note } from '@/types/Note';

export default function useModalEditNote() {
	const open = ref(false);

	const closeModal = () => {
		open.value = false;
		editInputs.value = { title: '', text: '', id: null };
	};

	const showModalEditNote = (note: Note) => {
		editInputs.value.title = note.title;
		editInputs.value.text = note.text;
		editInputs.value.id = note.id;

		open.value = true;
	};

	const handleSubmit = (e: Event) => {
		if (!(editInputs.value.text && editInputs.value.title && editInputs.value.id)) {
			// ! ERROR
			return;
		}
		const route = useRoute();
		const store = useStoreVuex();

		if (route.name === 'YTVideoNotes') {
			// store.dispatch('videoToAnalyze/updateNote', editInputs.value);
		} else if (route.name === 'noteList') {
			const { noteListId } = route.params;
			// store.dispatch('noteLists/updateNote', { ...editInputs.value, noteListId });
		}

		closeModal();
	};

	const editInputs = ref<{
		title: string;
		text: string;
		id: number | null;
	}>({
		title: '',
		text: '',
		id: null,
	});

	return { open, showModalEditNote, handleSubmit, editInputs, closeModal };
}
