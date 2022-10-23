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
	store.dispatch('notes/createNote', { title: formInputs.value.title, text: formInputs.value.text });
	resetForm();
};
</script>

<template>
	<article>
		<form @submit.prevent="createNote">
			<h3>Create new note</h3>
			<label class="block my-2">
				Title
				<input type="text" v-model="formInputs.title" />
			</label>
			<label class="block my-2">
				Text
				<textarea cols="30" rows="5" v-model="formInputs.text" style="resize: none"></textarea>
			</label>
			<Button type="submit" class="mr-2">Create</Button>
			<Button type="reset" @click="resetForm">Reset</Button>
		</form>
	</article>
</template>

<style scoped></style>
