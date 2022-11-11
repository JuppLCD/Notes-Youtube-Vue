export interface LoginCredentialsInterface {
	email: string;
	password: string;
}

export interface RegisterCredentialsInterface {
	email: string;
	name: string;
	password: string;
	confirmPassword: string;
}

export interface DataResponseCredentialsInterface {
	accessToken: string;
	user: {
		userName: string;
		userId: string;
	};
}
