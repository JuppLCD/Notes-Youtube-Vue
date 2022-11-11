<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStoreVuex } from '@/store';
import { useNotification } from '@kyvg/vue3-notification';

import Button from '@/components/Button.vue';
import Container from '@/components/Container.vue';
import MyInput from '@/components/MyInput.vue';

const { notify } = useNotification();

const route = useRoute();
const router = useRouter();
const sessionType = computed(() => route.name as 'signup' | 'login');

const sessionInputs = ref({
	email: 'test@example.com',
	name: '',
	password: 'password',
	confirmPassword: '',
});

const store = useStoreVuex();

const handleSubmit = () => {
	// ! Tengo que hacer validaciones
	// notify({type:'error', title:'Error'})
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

	router.push({ name: 'YTVideoNotes' });
};
</script>

<template>
	<main>
		<Container>
			<form @submit.prevent="handleSubmit">
				<MyInput type="email" placeholder="example@example.com" v-model="sessionInputs.email"> Email </MyInput>

				<MyInput type="password" placeholder="******" v-model="sessionInputs.password"> Password </MyInput>

				<template v-if="sessionType === 'signup'">
					<MyInput type="text" placeholder="userExample" v-model="sessionInputs.name"> UserName </MyInput>
					<MyInput type="password" placeholder="******" v-model="sessionInputs.confirmPassword">
						Confirm password
					</MyInput>
				</template>
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
