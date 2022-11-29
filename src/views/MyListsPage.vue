<script setup lang="ts">
import { computed } from 'vue';

import { useStoreVuex } from '@/store';

import Container from '@/components/Container.vue';
import CardNoteList from '@/components/CardNoteList.vue';

const store = useStoreVuex();

const myLists = computed(() => store.state.noteLists.allFull);

if (!myLists.value) {
	store.dispatch('noteLists/getAllFull');
}
</script>

<template>
	<main>
		<Container>
			<h1 class="text-3xl mb-2 text-center">Todas mis listas de notas</h1>
			<ul v-if="myLists">
				<template v-for="list in myLists" :key="list.id">
					<CardNoteList :noteList="list" />
				</template>
			</ul>
		</Container>
	</main>
</template>
