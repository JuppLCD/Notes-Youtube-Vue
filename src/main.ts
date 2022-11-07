import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { router } from './routes';
import store, { key } from './store';

import Notifications from '@kyvg/vue3-notification';

const app = createApp(App);

app.use(router);
app.use(store, key);
app.use(Notifications);

app.mount('#app');
