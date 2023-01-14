<script setup lang="ts">
import { computed } from 'vue';

import { useStoreVuex } from '@/store';
import { useRoute, useRouter } from 'vue-router';

import useModalEditNote from '@/hooks/useModalEditNote';
import useModalEditNoteList from '@/hooks/useModalEditNoteList';

import Container from '@/components/Container.vue';
import CardNote from '@/components/CardNote.vue';
import Button from '@/components/Button.vue';
import ModalEditNote from '@/components/ModalEditNote.vue';
import ModalEditNoteList from '@/components/ModalEditNoteList.vue';
import Spinner from '@/components/Spinner.vue';

import { FullNoteList } from '@/types/NoteList';

const route = useRoute();
const router = useRouter();

const noteListId = Number(route.params.noteListId);
if (typeof noteListId !== 'number') {
	router.push({ name: 'notFound' });
}

const store = useStoreVuex();

const noteList = computed(() => store.state.noteLists.current);

if (!noteList.value || noteListId !== noteList.value.id) {
	store.dispatch('noteLists/getCurrentNoteList', { id: noteListId });
}

const deleteNote = (id: number): void => {
	if (!noteList.value) return;
	const noteListId = noteList.value.id;
	store.dispatch('noteLists/deleteNoteFromAllFull', { noteId: id, noteListId });
};
const deleteNoteList = () => {
	const isSure = confirm(`Are you sure you want to delete the list of notes ${noteList.value?.title ?? ''} ?`);
	if (isSure) {
		store.dispatch('noteLists/delete', { noteListId });
		router.push({ name: 'myListsOfNotes' });
	}
};

const noteListDefault = {
	title: 'All Notes (default)',
	description: 'Note list created by default',
};

const isDefoultNoteList =
	noteList.value?.title === noteListDefault.title && noteList.value?.description === noteListDefault.description;
const { open, handleSubmit, noteToEdit, showModalEditNote, closeModal } = useModalEditNote();
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
			<template v-if="noteList">
				<h1 class="text-3xl mb-2">{{ noteList.title }}</h1>
				<p class="mb-3"><span class="text-lg font-bold">Description: </span> {{ noteList.description }}</p>
				<div v-if="!isDefoultNoteList" class="mb-3">
					<Button @click="deleteNoteList" color="red" type="button" class="m-2 ml-auto">Delete List</Button>
					<Button @click="() => showModalEditNotelist(noteList as FullNoteList)" color="blue" type="button" class="ml-2"
						>Edit List</Button
					>
				</div>
				<ul>
					<CardNote
						v-for="note in noteList.notes"
						:key="note.id"
						:note="note"
						@deleteNote="deleteNote"
						@showModalEditNote="showModalEditNote"
					/>
				</ul>
			</template>
			<template v-else>
				<Spinner />
			</template>
		</Container>
		<ModalEditNote :open="open" :editInputs="noteToEdit" @handleSubmit="handleSubmit" @closeModal="closeModal" />
		<ModalEditNoteList
			:open="openModalEditNoteList"
			:editInputs="noteListToEdit"
			@handleSubmit="handleSubmitEditNoteList"
			@closeModal="closeModalEditNoteList"
		/>
	</main>
</template>
