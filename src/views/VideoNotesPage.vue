<script setup lang="ts">
import Container from '@/components/Container.vue';

import Video from './VideoNotes/Video.vue';
import NavTabs from './VideoNotes/NavTabs.vue';
</script>

<template>
	<main>
		<Container>
			<h1 class="text-3xl mb-7">YOUTUBE NOTES</h1>
			<Video />
			<NavTabs />
			<RouterView />
		</Container>
	</main>
</template>

<style scoped></style>
