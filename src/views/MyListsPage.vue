<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import { useStoreVuex } from '@/store';

import useModalEditNoteList from '@/hooks/useModalEditNoteList';

import Container from '@/components/Container.vue';
import CardNoteList from '@/components/CardNoteList.vue';
import ModalEditNoteList from '@/components/ModalEditNoteList.vue';

import type { FullNoteList } from '@/types/NoteList';

const store = useStoreVuex();
const router = useRouter();

const myLists = computed(() => store.state.noteLists.allFull);

if (!myLists.value) {
	store.dispatch('noteLists/getAllFull');
}

const deleteNoteList = (noteListId: number) => {
	const noteListToDeleted = myLists.value?.find((noteList) => noteList.id === noteListId) as FullNoteList;
	const isSure = confirm(`Are you sure you want to delete the list of notes ${noteListToDeleted.title ?? ''} ?`);
	if (isSure) {
		store.dispatch('noteLists/delete', { noteListId });
		router.push({ name: 'myListsOfNotes' });
	}
};

const {
	openModalEditNoteList,
	handleSubmitEditNoteList,
	noteListToEdit,
	showModalEditNotelist,
	closeModalEditNoteList,
} = useModalEditNoteList();
</script>

<template>
	<main>
		<Container>
			<h1 class="text-3xl mb-2 text-center">Todas mis listas de notas</h1>
			<ul v-if="myLists">
				<template v-for="list in myLists" :key="list.id">
					<CardNoteList
						:noteList="list"
						@deleteNoteList="deleteNoteList"
						@showModalEditNotelist="showModalEditNotelist"
					/>
				</template>
			</ul>
		</Container>
		<ModalEditNoteList
			:open="openModalEditNoteList"
			:editInputs="noteListToEdit"
			@handleSubmit="handleSubmitEditNoteList"
			@closeModal="closeModalEditNoteList"
		/>
	</main>
</template>
