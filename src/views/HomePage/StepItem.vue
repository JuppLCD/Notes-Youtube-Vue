<script setup lang="ts">
const { step, text, end } = defineProps<{ step: number; text: string; end?: boolean }>();
</script>

<template>
	<div class="flex relative" :class="[end ? '' : 'pb-8']">
		<div v-if="!end" class="h-full w-10 absolute inset-0 flex items-center justify-center">
			<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
		</div>
		<div
			class="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-black relative z-10"
		>
			{{ step }}
		</div>
		<div class="flex-grow pl-4">
			<h2 class="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP {{ step }}</h2>
			<p class="leading-relaxed text-gray-300">
				{{ text }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
