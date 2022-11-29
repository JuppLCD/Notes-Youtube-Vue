<script setup lang="ts">
import { useStoreVuex } from '@/store';
import { computed, ref } from 'vue';

import Button from '@/components/Button.vue';

const formInputs = ref({
	title: 'Titulo',
	text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, consequatur commodi! Deserunt dolore quod porro doloremque natus omnis distinctio inventore! Consequatur quidem nisi ab iste, ipsum voluptates totam reprehenderit optio?',
	list_id: 1,
});

const resetForm = () => {
	formInputs.value = {
		title: '',
		text: '',
		list_id: 1,
	};
};

const store = useStoreVuex();

const createNote = () => {
	if (!store.state.videoToAnalyze.idYoutubeVideo) {
		alert('No se ha seleccinado ningun video');
		return;
	}

	store.dispatch('videoToAnalyze/createNote', {
		title: formInputs.value.title,
		text: formInputs.value.text,
		list_id: formInputs.value.list_id,
	});
	resetForm();
};

const optionsListNotes = computed(() => {
	if (!store.state.noteLists.all) {
		store.dispatch('noteLists/getAll');
	}
	return store.state.noteLists.all;
});
</script>

<template>
	<article>
		<form @submit.prevent="createNote" class="mt-6">
			<h3 class="text-2xl text-center my-2">Create a new note</h3>
			<label class="block my-2 text-sm font-medium text-gray-900 dark:text-gray-400">
				<input
					type="text"
					v-model="formInputs.title"
					placeholder="Title"
					class="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			</label>
			<label class="block my-2 text-sm font-medium text-gray-900 dark:text-gray-400">
				<textarea
					placeholder="Text"
					cols="30"
					rows="5"
					v-model="formInputs.text"
					style="resize: none"
					class="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				></textarea>
			</label>
			<label class="block my-3 text-sm font-medium text-gray-900 dark:text-gray-400">
				Save to note list:
				<select
					v-model="formInputs.list_id"
					class="mt-1 block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				>
					<option v-for="option in optionsListNotes" :value="option.id" :key="option.id">
						{{ option.title }}
					</option>
				</select></label
			>
			<div class="flex justify-end">
				<Button type="submit" class="mr-2" color="green">Create</Button>
				<Button type="reset" @click="resetForm" class="mr-2">Reset</Button>
				<Button type="button" color="red">Cancel</Button>
			</div>
		</form>
	</article>
</template>

<style scoped></style>
