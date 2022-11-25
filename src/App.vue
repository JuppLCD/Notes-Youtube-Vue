<script setup lang="ts">
import Header from './components/Header.vue';
import { useStoreVuex } from './store';

const store = useStoreVuex();

store.dispatch('user/loginToken');
</script>

<template>
	<Header />
	<RouterView />
	<notifications position="top center" />
</template>

<style scoped></style>
