<script setup lang="ts">
import { computed } from 'vue';

import { useStoreVuex } from '@/store';
import { useRoute, useRouter } from 'vue-router';

import Container from '@/components/Container.vue';
import CardNote from '@/components/CardNote.vue';

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
</script>

<template>
	<main>
		<Container>
			<template v-if="noteList">
				<h1 class="text-3xl mb-2">{{ noteList.title }}</h1>
				<ul>
					<CardNote v-for="note in noteList.notes" :key="note.id" :note="note" @deleteNote="deleteNote" />
				</ul>
			</template>
			<template v-else>
				<h1 class="text-3xl mb-2">{{ route.params.noteListId }}</h1>
			</template>
		</Container>
	</main>
</template>
