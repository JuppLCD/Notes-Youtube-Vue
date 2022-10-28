<script setup lang="ts">
import { Note } from '@/types/Note';

import Button from '@/components/Button.vue';

const { note } = defineProps<{ note: Note }>();
const emits = defineEmits<{
	(e: 'deleteNote', id: string): void;
}>();
</script>

<template>
	<li class="border-gray-200 border p-4 rounded-lg mb-2">
		<h3 class="text-xl my-2">{{ note.title }}</h3>
		<p class="mb-3">{{ note.text }}</p>
		<div class="flex justify-end">
			<Button class="mr-2" type="button"> Edit </Button>
			<Button @click="emits('deleteNote', note.id)" color="red" type="button"> Delete </Button>
		</div>
	</li>
</template>

<style scoped></style>
