<script setup lang="ts">
import { ref } from 'vue';

import ModalBasic from './ModalBasic.vue';
import MyInput from './MyInput.vue';
import Button from './Button.vue';

import { useStoreVuex } from '@/store';

const { open } = defineProps<{
	open: boolean;
}>();

const emits = defineEmits<{
	(e: 'closeModal'): void;
}>();

const store = useStoreVuex();

const handleSubmit = () => {
	if (!(inputs.value.description && inputs.value.title)) {
		//! ERROR
		return;
	}
	store.dispatch('noteLists/createNoteList', inputs.value);
	emits('closeModal');
};

const inputs = ref({ title: '', description: '' });
</script>

<template>
	<ModalBasic :open="open" @closeModal="emits('closeModal')">
		<form @submit.prevent="handleSubmit" class="form">
			<h2 class="text-2xl my-2 text-center">Create note</h2>

			<MyInput type="text" placeholder="Note list title..." v-model="inputs.title"> Title </MyInput>

			<label class="block my-2 text-sm font-medium text-gray-900 dark:text-gray-400">
				<textarea
					placeholder="Description of note list"
					cols="30"
					rows="5"
					v-model="inputs.description"
					style="resize: none"
					class="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				></textarea>
			</label>

			<div class="flex justify-end mt-5">
				<Button type="submit" class="ml-auto mr-2">Create</Button>
				<Button color="red" type="button" @click="emits('closeModal')">Close</Button>
			</div>
		</form>
	</ModalBasic>
</template>

<style scoped>
.form {
	width: 50vw;
	max-width: 500px;
}
</style>
