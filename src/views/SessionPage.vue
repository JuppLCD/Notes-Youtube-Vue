<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStoreVuex } from '@/store';

import Button from '@/components/Button.vue';
import Container from '@/components/Container.vue';
import MyInput from '@/components/MyInput.vue';

const route = useRoute();
const sessionType = computed(() => route.name as 'signup' | 'login');

const sessionInputs = ref({
	email: '',
	name: '',
	password: '',
	confirmPassword: '',
});

const store = useStoreVuex();

const handleSubmit = () => {
	// ! Tengo que hacer validaciones
	if (sessionType.value === 'login') {
		store.dispatch('user/loginCredentials', {
			email: sessionInputs.value.email,
			password: sessionInputs.value.password,
		});
	} else {
		store.dispatch('user/signup', {
			email: sessionInputs.value.email,
			name: sessionInputs.value.name,
			password: sessionInputs.value.password,
			confirmPassword: sessionInputs.value.confirmPassword,
		});
	}
};
</script>

<template>
	<main>
		<Container>
			<form @submit.prevent="handleSubmit" class="sm:px-10 md:px-20 lg:px-30">
				<MyInput type="email" placeholder="example@example.com" v-model="sessionInputs.email"> Email </MyInput>

				<MyInput type="password" placeholder="******************" v-model="sessionInputs.password"> Password </MyInput>

				<template v-if="sessionType === 'signup'">
					<MyInput type="password" placeholder="******************" v-model="sessionInputs.confirmPassword">
						Confirm password
					</MyInput>
					<MyInput type="text" placeholder="userExample" v-model="sessionInputs.name"> UserName </MyInput>
					<div class="text-blue-400 hover:text-purple-500">
						<RouterLink :to="{ name: 'login' }"> Do you already have an account? Log in here </RouterLink>
					</div>
				</template>
				<div v-else class="text-blue-400 hover:text-purple-500">
					<RouterLink :to="{ name: 'signup' }"> You do not have an account? Sign up </RouterLink>
				</div>

				<Button type="submit" class="mt-2">
					{{ sessionType === 'login' ? 'Log in' : 'Sign up' }}
				</Button>
			</form>
		</Container>
	</main>
</template>

<style scoped></style>
