<script setup lang="ts">
import { useStoreVuex } from '@/store';
import { computed } from '@vue/reactivity';

import CardNote from '@/components/CardNote.vue';

const store = useStoreVuex();
const notes = computed(() => store.state.videoToAnalyze.notes);

const deleteNote = (id: number): void => {
	store.dispatch('videoToAnalyze/deleteNote', { id });
};
</script>

<template>
	<section class="py-2">
		<h2 class="text-center text-2xl my-2">Notes of the YT Video</h2>
		<ul>
			<CardNote v-for="note in notes" :key="note.id" :note="note" @deleteNote="deleteNote" />
		</ul>
	</section>
</template>

<style scoped></style>
