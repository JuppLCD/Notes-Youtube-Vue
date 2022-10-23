import { createRouter, createWebHashHistory } from 'vue-router';

import { HomePage, NotFoundPageVue } from './../views';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: HomePage, name: 'home' },
		{ path: '/:pathMatch(.*)*', component: NotFoundPageVue, name: 'notFound' },
	],
});

export { router };
