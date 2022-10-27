<script setup lang="ts">
import { useStoreVuex } from '@/store';
import { computed } from '@vue/reactivity';

import CardNote from '@/components/CardNote.vue';

const store = useStoreVuex();
const notes = computed(() => store.state.videoToAnalyze.notes);

const deleteNote = (id: string) => {
	store.dispatch('videoToAnalyze/deleteNote', { id });
};
</script>

<template>
	<section>
		<h2>Notas</h2>
		<ul>
			<CardNote v-for="note in notes" :key="note.id" :note="note" @deleteNote="deleteNote" />
		</ul>
	</section>
</template>

<style scoped></style>
