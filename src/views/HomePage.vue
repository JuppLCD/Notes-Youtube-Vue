<script setup lang="ts">
import Container from '@/components/Container.vue';

import FormCreateNote from './HomePage/FormCreateNote.vue';
import Notes from './HomePage/Notes.vue';
import Video from './HomePage/Video.vue';
</script>

<template>
	<main>
		<Container>
			<h1 class="text-3xl">YOUTUBE NOTES</h1>
			<Video />
			<br />
			<FormCreateNote />
			<br />
			<Notes />
		</Container>
	</main>
</template>

<style scoped></style>
