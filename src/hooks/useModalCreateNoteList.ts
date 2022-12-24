import { ref } from 'vue';

export default function useModalCreateNoteList() {
	const openModalCreateNoteList = ref(false);

	const closeModalCreateNoteList = () => {
		openModalCreateNoteList.value = false;
	};

	const showModalCreateNoteList = () => {
		openModalCreateNoteList.value = true;
	};

	return {
		openModalCreateNoteList,
		showModalCreateNoteList,
		closeModalCreateNoteList,
	};
}
