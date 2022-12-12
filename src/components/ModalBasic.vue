<script setup lang="ts">
const { open } = defineProps<{ open: boolean }>();
const emits = defineEmits<{
	(e: 'closeModal'): void;
}>();
</script>

<template>
	<Teleport to="#modal">
		<div class="modal_overlay" v-if="open" :class="{ active: open }" @click="emits('closeModal')">
			<div class="modal_dialog" @click="(e) => e.stopPropagation()">
				<slot />
			</div>
		</div>
	</Teleport>
</template>

<style scoped>
.modal_overlay {
	display: none;
	position: fixed;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;

	background-color: rgba(0, 0, 0, 0.26);
}

.active {
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal_dialog {
	background-color: #fff;
	padding: 20px;
	color: #000;
}
</style>
