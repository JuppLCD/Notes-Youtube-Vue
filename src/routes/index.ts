import { createRouter, createWebHashHistory } from 'vue-router';

import { HomePage, NotFoundPageVue } from '@/views';
import NotesVue from '@/views/HomePage/Notes.vue';
import FormCreateNoteVue from '@/views/HomePage/FormCreateNote.vue';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: HomePage,
			children: [
				{
					path: '',
					component: NotesVue,
					name: 'home',
				},
				{
					path: 'create-note',
					name: 'createNote',
					component: FormCreateNoteVue,
				},
			],
		},
		{ path: '/:pathMatch(.*)*', component: NotFoundPageVue, name: 'notFound' },
	],
});

export { router };
