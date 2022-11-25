import axios, { AxiosInstance } from 'axios';

import { URL_API_BACKEND } from '@/config';

// API Backend Instances
export const apiAxiosInstance = axios.create({
	baseURL: URL_API_BACKEND,
	headers: { Accept: 'application/json' },
});

export class AxiosAuthInstance {
	protected apiAuthAxiosInstance: AxiosInstance;

	constructor(token: string) {
		this.apiAuthAxiosInstance = axios.create({
			baseURL: URL_API_BACKEND,
			headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
		});
	}
}
