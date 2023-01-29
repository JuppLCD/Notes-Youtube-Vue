<script setup lang="ts">
import { useStoreVuex } from '@/store';

import Button from '@/components/Button.vue';

import { Note } from '@/types/Note';
import { useRouter } from 'vue-router';

const { note } = defineProps<{ note: Note }>();
const emits = defineEmits<{
	(e: 'deleteNote', id: number): void;
	(e: 'showModalEditNote', note: Note): void;
}>();

const store = useStoreVuex();
const router = useRouter();

const renderButtonWatchVideo = router.currentRoute.value.name !== 'YTVideoNotes';
const handleWatchVideo = () => {
	const idVideo = note.idYTVideo;
	store.dispatch('videoToAnalyze/setIdYoutubeVideo', { idVideo });
	router.push({ name: 'YTVideoNotes' });
};
</script>

<template>
	<li class="border-gray-200 border p-4 rounded-lg mb-2">
		<h3 class="text-xl my-2">{{ note.title }}</h3>
		<p class="mb-3">{{ note.text }}</p>
		<div class="flex justify-end">
			<Button class="mr-2" type="button" color="white" @click="handleWatchVideo" v-if="renderButtonWatchVideo">
				Watch video
			</Button>
			<Button class="mr-2" type="button" @click="emits('showModalEditNote', note)"> Edit </Button>
			<Button @click="emits('deleteNote', note.id)" color="red" type="button"> Delete </Button>
		</div>
	</li>
</template>

<style scoped></style>
