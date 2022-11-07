<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
	<Header />
	<RouterView />
	<notifications position="top center" />
</template>

<style scoped></style>
