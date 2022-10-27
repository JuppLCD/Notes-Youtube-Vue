import { createRouter, createWebHashHistory } from 'vue-router';

import { HomePage, VideoNotesPage, NotFoundPage, SessionPage } from '@/views';

import NotesVue from '@/views/VideoNotes/Notes.vue';
import FormCreateNoteVue from '@/views/VideoNotes/FormCreateNote.vue';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: HomePage, name: 'home' },
		{
			path: '/yt-video-notes',
			component: VideoNotesPage,
			children: [
				{
					path: '',
					component: NotesVue,
					name: 'YTVideoNotes',
				},
				{
					path: 'create-note',
					name: 'createNote',
					component: FormCreateNoteVue,
				},
			],
		},
		{
			path: '/session/login',
			component: SessionPage,
			name: 'login',
		},
		{
			path: '/session/signup',
			component: SessionPage,
			name: 'signup',
		},

		// Not Found
		{ path: '/:pathMatch(.*)*', component: NotFoundPage, name: 'notFound' },
	],
});

export { router };
