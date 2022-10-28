<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import Button from '@/components/Button.vue';
import Container from '@/components/Container.vue';
import MyInput from '@/components/MyInput.vue';

const route = useRoute();
const sessionType = computed(() => route.name as 'signup' | 'login');

const sessionInputs = ref({
	username: '',
	password: '',
	confirmPassword: '',
});

const handleSubmit = () => {
	console.log('submit', '==> ', sessionInputs.value);

	if (sessionType.value === 'login') {
		// TODO: Llamar un dispatch user/login
	} else {
		// TODO: Llamar un dispatch user/signup
	}
};
</script>

<template>
	<main>
		<Container>
			<form @submit.prevent="handleSubmit">
				<MyInput type="text" placeholder="userExample" v-model="sessionInputs.username"> UserName </MyInput>

				<MyInput type="password" placeholder="******" v-model="sessionInputs.password"> Password </MyInput>

				<MyInput
					v-if="sessionType === 'signup'"
					type="password"
					placeholder="******"
					v-model="sessionInputs.confirmPassword"
				>
					Confirm password
				</MyInput>
				<div v-else class="my-2 text-blue-400 hover:text-purple-500">
					<RouterLink :to="{ name: 'signup' }"> You do not have an account? Sign up </RouterLink>
				</div>

				<Button type="submit">
					{{ sessionType === 'login' ? 'Log in' : 'Sign up' }}
				</Button>
			</form>
		</Container>
	</main>
</template>

<style scoped></style>
