<script setup lang="ts">
import { computed } from 'vue';

import { useStoreVuex } from '@/store';

import Container from '@/components/Container.vue';

const store = useStoreVuex();

const myLists = computed(() => store.state.noteLists.allFull);

if (!myLists.value) {
	store.dispatch('noteLists/getAllFull');
}
</script>

<template>
	<main>
		<Container>
			<h1 class="text-3xl mb-2">Todas mis listas de notas</h1>
			<ul v-if="myLists">
				<li v-for="list in myLists" :key="list.id">
					<RouterLink
						:to="{ name: 'noteList', params: { noteListId: list.id } }"
						:aria-label="list.title"
						:title="list.title"
					>
						{{ list.title }} - N° Notes | {{ list.notes.length }}
					</RouterLink>
				</li>
			</ul>
		</Container>
	</main>
</template>
