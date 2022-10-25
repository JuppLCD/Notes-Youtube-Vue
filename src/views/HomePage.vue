<script setup lang="ts">
import Container from '@/components/Container.vue';

import Video from './HomePage/Video.vue';
import TabsOptions from './HomePage/TabsOptions.vue';
</script>

<template>
	<main>
		<Container>
			<h1 class="text-3xl">YOUTUBE NOTES</h1>
			<Video />
			<TabsOptions />
			<RouterView />
		</Container>
	</main>
</template>

<style scoped></style>
