<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue';

interface ButtonProps extends ButtonHTMLAttributes {
	color?: string;
}
const { color } = withDefaults(defineProps<ButtonProps>(), { color: 'blue' });

// Border => bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow
</script>

<template>
	<button :class="['btn', `btn-${color}`]">
		<slot />
	</button>
</template>

<style scoped>
.btn {
	@apply font-bold py-2 px-4 rounded;
}
.btn-blue {
	@apply bg-blue-500 text-white;
}
.btn-blue:hover {
	@apply bg-blue-700;
}
</style>
