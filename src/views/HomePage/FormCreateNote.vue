<script setup lang="ts">
import { useStoreVuex } from '@/store';
import { ref } from 'vue';

import Button from '@/components/Button.vue';

const formInputs = ref({
	title: '',
	text: '',
});

const resetForm = () => {
	formInputs.value = {
		title: '',
		text: '',
	};
};

const store = useStoreVuex();

const createNote = () => {
	store.dispatch('videoToAnalyze/createNote', { title: formInputs.value.title, text: formInputs.value.text });
	resetForm();
};
</script>

<template>
	<article>
		<form @submit.prevent="createNote" class="mt-6">
			<h3 class="text-xl text-center my-2">Create new note</h3>
			<label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
				<input
					type="text"
					v-model="formInputs.title"
					placeholder="Title"
					class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
				/>
			</label>
			<label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
				<textarea
					placeholder="Text"
					cols="30"
					rows="5"
					v-model="formInputs.text"
					style="resize: none"
					class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
				></textarea>
			</label>
			<div class="flex justify-end">
				<Button type="submit" class="mr-2" color="green">Create</Button>
				<Button type="reset" @click="resetForm" class="mr-2">Reset</Button>
				<Button type="button" color="red">Cancel</Button>
			</div>
		</form>
	</article>
</template>

<style scoped></style>
