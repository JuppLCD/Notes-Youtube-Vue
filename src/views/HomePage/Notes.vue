<script setup lang="ts">
import { useStoreVuex } from '@/store';
import { computed } from '@vue/reactivity';

import Button from '@/components/Button.vue';

const store = useStoreVuex();
const notes = computed(() => store.state.notes.notes);

const deleteNote = (id: string) => {
	store.dispatch('notes/deleteNote', { id });
};
</script>

<template>
	<section>
		<h2>Notas</h2>
		<ul>
			<li v-for="note in notes" :key="note.id">
				<h3>{{ note.title }} - {{ note.id }}</h3>
				<p>{{ note.text }}</p>
				<Button class="mr-2"> Edit </Button>
				<Button @click="deleteNote(note.id)"> Delete </Button>
			</li>
		</ul>
	</section>
</template>

<style scoped></style>
