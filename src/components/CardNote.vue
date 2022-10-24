<script setup lang="ts">
import { Note } from '@/types/Note';

import Button from '@/components/Button.vue';

const { note } = defineProps<{ note: Note }>();
const emits = defineEmits<{
	(e: 'deleteNote', id: string): void;
}>();
</script>

<template>
	<li>
		<h3>{{ note.title }}</h3>
		<p>{{ note.text }}</p>
		<Button class="mr-2"> Edit </Button>
		<Button @click="emits('deleteNote', note.id)" color="red"> Delete </Button>
	</li>
</template>

<style scoped></style>
