import { notify } from '@kyvg/vue3-notification';

import type { AxiosError } from 'axios';
import axios from 'axios';

type NotificationsProps = { title?: string; text?: string };

class Notifications {
	error({ title = 'Error', text }: NotificationsProps): void {
		notify({
			type: 'error',
			duration: 3000,
			speed: 1000,
			title,
			text,
		});
	}

	errorService<T>(data: Error | AxiosError | T): boolean {
		if (data instanceof Error) {
			this.error({ title: 'Error', text: 'Error to create note' });
			return false;
		} else if (axios.isAxiosError(data)) {
			const axiosResponse = data.response;

			// TODO: Analizar el mensaje de error que me devuelve la API en laravel
			const message =
				axiosResponse?.data?.message ||
				axiosResponse?.data?.error?.message ||
				axiosResponse?.data?.error ||
				'Error performing action';

			this.error({ title: 'Error', text: message });
			return false;
		}

		return true; // Is OK
	}

	succes({ title, text }: NotificationsProps): void {
		notify({
			type: 'success',
			duration: 3000,
			speed: 1000,
			title,
			text,
		});
	}

	loading({ title = 'Loading...', text = 'Fetching data' }: NotificationsProps): void {
		notify({
			type: 'loading',
			duration: 3000,
			speed: 1000,
			title,
			text,
		});
	}
}

export const notifications = new Notifications();
