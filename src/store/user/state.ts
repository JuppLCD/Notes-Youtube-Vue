import { defaultUserState } from '../defoultStates';

export interface UserStateInterface {
	isAuth: boolean;
	token?: string;
	userId?: number;
}

function state(): UserStateInterface {
	return {
		...defaultUserState,
	};
}

export default state;
