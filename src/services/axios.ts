import { computed } from 'vue';
import axios from 'axios';

import { useStoreVuex } from '@/store';

import { URL_API_BACKEND } from '@/config';

const store = useStoreVuex();
const token = computed(() => store.state.user.token);

// API Backend Instances
export const apiAxiosInstance = axios.create({
	baseURL: URL_API_BACKEND,
	headers: { Accept: 'application/json' },
});

export const apiAuthAxiosInstance = axios.create({
	baseURL: URL_API_BACKEND,
	headers: { Accept: 'application/json', Authorization: `Bearer ${token.value}` },
});
