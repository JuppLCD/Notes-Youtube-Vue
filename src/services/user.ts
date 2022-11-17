import { API_ROUTE_USER_LOGIN, API_ROUTE_USER_REGISTER, API_ROUTE_USER_VALID_TOKEN } from '@/config';

import type {
	DataResponseCredentialsInterface,
	LoginCredentialsInterface,
	RegisterCredentialsInterface,
} from '@/types/User';

export async function loginWhitCredentials(loginCredentials: LoginCredentialsInterface) {
	const res = await fetch(API_ROUTE_USER_LOGIN, {
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
	const res = await fetch(API_ROUTE_USER_REGISTER, {
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
	const res = await fetch(API_ROUTE_USER_VALID_TOKEN, {
		method: 'GET',
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
