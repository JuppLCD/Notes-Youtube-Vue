<script setup lang="ts">
import Button from './Button.vue';

import { FullNoteList } from '@/types/NoteList';

const { noteList } = defineProps<{ noteList: FullNoteList }>();

const emits = defineEmits<{
	(e: 'deleteNoteList', id: number): void;
	(e: 'showModalEditNotelist', noteList: FullNoteList): void;
}>();

const noteListDefault = {
	title: 'All Notes (default)',
	description: 'Note list created by default',
};

const isDefoultNoteList =
	noteList.title === noteListDefault.title && noteList.description === noteListDefault.description;
</script>

<template>
	<li class="rounded-lg shadow-md bg-gray-800 border-gray-700 p-3 mb-3">
		<div>
			<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
				{{ noteList.title }}
			</h5>
		</div>
		<p class="mb-3 font-normal text-gray-400">
			<span class="text-l text-white">Description:</span> {{ noteList.description }}
		</p>
		<p class="text-right">{{ noteList.notes.length }} notes</p>

		<RouterLink
			:to="{ name: 'noteList', params: { noteListId: noteList.id } }"
			:aria-label="noteList.title"
			:title="noteList.title"
			class="inline-flex items-center py-2 px-4 text-center font-bold text-white rounded focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
		>
			View More
			<svg
				aria-hidden="true"
				class="w-4 h-4 ml-2 -mr-1"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				></path>
			</svg>
		</RouterLink>

		<template v-if="!isDefoultNoteList">
			<Button @click="emits('deleteNoteList', noteList.id)" color="red" type="button" class="ml-2">Delete List</Button>
			<Button @click="emits('showModalEditNotelist', noteList)" color="blue" type="button" class="ml-2"
				>Edit List</Button
			>
		</template>
	</li>
</template>
