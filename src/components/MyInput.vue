<script setup lang="ts">
import { InputHTMLAttributes } from 'vue';

interface FormInput extends InputHTMLAttributes {
	modelValue: string;
}

const { modelValue } = defineProps<FormInput>();
</script>

<template>
	<label class="block my-2 text-sm font-medium text-gray-900 dark:text-gray-400">
		<slot />
		<input
			v-bind="$attrs"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			class="block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		/>
	</label>
</template>
