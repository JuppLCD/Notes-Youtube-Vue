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

				<Button type="submit">
					{{ sessionType === 'login' ? 'Log in' : 'Sign up' }}
				</Button>
			</form>
		</Container>
	</main>
</template>

<style scoped></style>
