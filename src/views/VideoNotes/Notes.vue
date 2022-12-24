<script setup lang="ts">
import { computed } from '@vue/reactivity';

import { useStoreVuex } from '@/store';

import useModalEditNote from '@/hooks/useModalEditNote';

import CardNote from '@/components/CardNote.vue';
import ModalEditNote from '@/components/ModalEditNote.vue';

const store = useStoreVuex();
const notes = computed(() => store.state.videoToAnalyze.notes);

const deleteNote = (id: number): void => {
	store.dispatch('videoToAnalyze/deleteNote', { id });
};

const { open, handleSubmit, noteToEdit, showModalEditNote, closeModal } = useModalEditNote();
</script>

<template>
	<section class="py-2">
		<h2 class="text-center text-3xl my-2">Notes of the YT Video</h2>
		<ul v-if="notes">
			<CardNote
				v-for="note in notes"
				:key="note.id"
				:note="note"
				@deleteNote="deleteNote"
				@showModalEditNote="showModalEditNote"
			/>
			<ModalEditNote :open="open" :editInputs="noteToEdit" @handleSubmit="handleSubmit" @closeModal="closeModal" />
		</ul>
		<template v-else>
			<p class="text-center">There are no notes, place a video and create your note...</p>
		</template>
	</section>
</template>

<style scoped></style>
