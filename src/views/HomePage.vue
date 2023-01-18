<script setup lang="ts">
import Container from '@/components/Container.vue';

import SectionSteps from './HomePage/SectionSteps.vue';
import SectionHero from './HomePage/SectionHero.vue';
</script>

<template>
	<main>
		<Container>
			<SectionHero />
			<SectionSteps />
		</Container>
	</main>
</template>

<style scoped></style>
