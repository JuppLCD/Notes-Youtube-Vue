<script setup lang="ts">
import ModalBasic from './ModalBasic.vue';
import MyInput from './MyInput.vue';
import Button from './Button.vue';

const { open, editInputs } = defineProps<{
	open: boolean;
	editInputs: {
		title: string;
		text: string;
	};
}>();

const emits = defineEmits<{
	(e: 'handleSubmit', event: Event): void;
	(e: 'closeModal'): void;
}>();
</script>

<template>
	<ModalBasic :open="open" @closeModal="emits('closeModal')">
		<form @submit.prevent="(event) => emits('handleSubmit', event)" class="form">
			<h2 class="text-2xl my-2 text-center">Edit note</h2>

			<MyInput type="text" placeholder="Note title..." v-model="editInputs.title"> Title </MyInput>

			<label class="block my-2 text-sm font-medium text-gray-900 dark:text-gray-400">
				<textarea
					placeholder="Text"
					cols="30"
					rows="5"
					v-model="editInputs.text"
					style="resize: none"
					class="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				></textarea>
			</label>

			<div class="flex justify-end mt-5">
				<Button type="submit" class="ml-auto mr-2">Save</Button>
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
