<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue';

interface ButtonProps extends ButtonHTMLAttributes {
	color?: 'blue' | 'white' | 'red' | 'green' | 'yellow';
}
const { color } = withDefaults(defineProps<ButtonProps>(), { color: 'blue' });

const colors = {
	blue: {
		normal: 'bg-blue-500 text-white',
		hover: 'hover:bg-blue-700',
	},
	white: {
		normal: 'bg-white text-gray-700',
		hover: 'hover:bg-gray-300',
	},
	red: {
		normal: 'bg-red-500 text-white',
		hover: 'hover:bg-red-700',
	},
	green: {
		normal: 'bg-green-500 text-white',
		hover: 'hover:bg-green-700',
	},
	yellow: {
		normal: 'bg-yellow-500 text-white',
		hover: 'hover:bg-yellow-700',
	},
};
</script>

<template>
	<button :class="['btn', `${colors[color].normal} ${colors[color].hover}`]" v-bind="$attrs">
		<slot />
	</button>
</template>

<style scoped>
.btn {
	@apply font-bold py-2 px-4 rounded;
}
</style>
