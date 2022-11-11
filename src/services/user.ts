import { URL_API_BACKEND } from '@/config';

import type {
	DataResponseCredentialsInterface,
	LoginCredentialsInterface,
	RegisterCredentialsInterface,
} from '@/types/User';

export async function loginWhitCredentials(loginCredentials: LoginCredentialsInterface) {
	const res = await fetch(URL_API_BACKEND + '/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(loginCredentials),
	});

	if (res.ok) {
		const data = await res.json();
		return data as DataResponseCredentialsInterface;
	}
}

export async function register(registerCredetials: RegisterCredentialsInterface) {
	const res = await fetch(URL_API_BACKEND + '/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify(registerCredetials),
	});

	if (res.ok) {
		const data = await res.json();
		return data as DataResponseCredentialsInterface;
	}
}

export async function validToken(token: string) {
	const res = await fetch(URL_API_BACKEND + '/valid_token', {
		method: 'get',
		headers: {
			Accept: 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (res.ok) {
		const data = await res.json();
		return data as DataResponseCredentialsInterface;
	}
}
