<script setup lang="ts">
import { computed } from 'vue';

import { useStoreVuex } from '@/store';
import { useRoute, useRouter } from 'vue-router';

import useModalEditNote from '@/hooks/useModalEditNote';

import Container from '@/components/Container.vue';
import CardNote from '@/components/CardNote.vue';
import Button from '@/components/Button.vue';
import ModalEditNote from '@/components/ModalEditNote.vue';

const route = useRoute();
const router = useRouter();

const noteListId = Number(route.params.noteListId);
if (typeof noteListId !== 'number') {
	router.push({ name: 'notFound' });
}

const store = useStoreVuex();

const noteList = computed(() => store.state.noteLists.current);

if (!noteList.value) {
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

const { open, handleSubmit, editInputs, showModalEditNote, closeModal } = useModalEditNote();
</script>

<template>
	<main>
		<Container>
			<template v-if="noteList">
				<h1 class="text-3xl mb-2">{{ noteList.title }}</h1>
				<p><span class="text-lg font-bold">Description: </span> {{ noteList.description }}</p>
				<Button @click="deleteNoteList" color="red" type="button" class="m-2 ml-auto">Delete List</Button>
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
				<h1 class="text-3xl mb-2">{{ route.params.noteListId }}</h1>
			</template>
		</Container>
		<ModalEditNote :open="open" :editInputs="editInputs" @handleSubmit="handleSubmit" @closeModal="closeModal" />
	</main>
</template>
