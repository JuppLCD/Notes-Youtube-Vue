<script setup lang="ts">
import { InputHTMLAttributes } from 'vue';

interface FormInput extends InputHTMLAttributes {
	modelValue: string;
}

const { modelValue } = defineProps<FormInput>();

const emit = defineEmits(['update:modelValue']);

const handleInput = (event: Event) => {
	emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<template>
	<label class="block my-2 text-sm font-medium text-gray-900 dark:text-gray-400">
		<p class="mb-1"><slot /></p>
		<input
			v-bind="$attrs"
			:value="modelValue"
			@input="handleInput"
			class="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		/>
	</label>
</template>
