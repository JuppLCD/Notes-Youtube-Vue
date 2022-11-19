import { API_PATH_USER_LOGIN, API_PATH_USER_REGISTER, API_PATH_USER_VALID_TOKEN } from '@/config';

import type {
	DataResponseCredentialsInterface,
	LoginCredentialsInterface,
	RegisterCredentialsInterface,
} from '@/types/User';

import { apiAxiosInstance } from './axios';

class UserService {
	loginWhitCredentials = async (loginCredentials: LoginCredentialsInterface) => {
		const res = await apiAxiosInstance.post<DataResponseCredentialsInterface>(API_PATH_USER_LOGIN, loginCredentials);

		if (res.status === 200) {
			const data = res.data;
			return data;
		}
	};

	register = async (registerCredetials: RegisterCredentialsInterface) => {
		const res = await apiAxiosInstance.post<DataResponseCredentialsInterface>(
			API_PATH_USER_REGISTER,
			registerCredetials
		);

		if (res.status === 200) {
			const data = res.data;
			return data;
		}
	};

	validToken = async (token: string) => {
		const res = await apiAxiosInstance.get<DataResponseCredentialsInterface>(API_PATH_USER_VALID_TOKEN, {
			headers: { Authorization: token },
		});

		if (res.status === 200) {
			const data = res.data;
			return data;
		}
	};
}

export const userService = new UserService();
