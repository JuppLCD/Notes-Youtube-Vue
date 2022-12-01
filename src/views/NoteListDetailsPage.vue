<script setup lang="ts">
import { computed, ref } from 'vue';

import { useStoreVuex } from '@/store';
import { useRoute, useRouter } from 'vue-router';

import { NoteListServices } from '@/services/noteList';

import { notifications } from '@/utils/Notifications';

import Container from '@/components/Container.vue';
import CardNote from '@/components/CardNote.vue';

import { FullNoteList } from '@/types/NoteList';

const route = useRoute();
const router = useRouter();

const noteListId = Number(route.params.noteListId);
if (typeof noteListId !== 'number') {
	router.push({ name: 'notFound' });
}

const store = useStoreVuex();
const myLists = computed(() => store.state.noteLists.allFull);

const noteList = ref<FullNoteList>();

if (!myLists.value) {
	const noteListService = new NoteListServices(store.state.user.token as string);

	(async () => {
		try {
			notifications.loading({});
			const data = await noteListService.getById(Number(route.params.noteListId));

			const isOk = notifications.errorService<FullNoteList>(data);
			if (!isOk) return;
			noteList.value = data as FullNoteList;
		} catch (err) {
			console.error(err);
		}
	})();
} else if (myLists.value && myLists.value.some((list) => list.id === noteListId)) {
	noteList.value = myLists.value.find((list) => list.id === noteListId);
} else {
	console.error('Error');
}

const deleteNote = (id: number): void => {
	if (!noteList.value) return;
	store.dispatch('noteLists/deleteNoteFromAllFull', { noteId: id, noteListId: noteList.value.id });
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
