import { createRouter, createWebHashHistory } from 'vue-router';

import { HomePage, VideoNotesPage, NotFoundPage, SessionPage } from '@/views';

import NotesVue from '@/views/VideoNotes/Notes.vue';
import FormCreateNoteVue from '@/views/VideoNotes/FormCreateNote.vue';

import { TypeOfVisibility } from '@/types/route';
import store from '@/store';

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: HomePage, name: 'home' },
		{
			path: '/yt-video-notes',
			component: VideoNotesPage,
			meta: { typeOfVisibility: TypeOfVisibility.auth },
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
			meta: { typeOfVisibility: TypeOfVisibility.guest },
		},
		{
			path: '/session/signup',
			component: SessionPage,
			name: 'signup',
			meta: { typeOfVisibility: TypeOfVisibility.guest },
		},

		// Not Found
		{ path: '/:pathMatch(.*)*', component: NotFoundPage, name: 'notFound' },
	],
});

router.beforeEach((to, from, next) => {
	const guestRoute = to.meta?.typeOfVisibility === TypeOfVisibility.guest;
	const authRoute = to.meta?.typeOfVisibility === TypeOfVisibility.auth;

	const isAuth = store.state.user.isAuth;

	switch (true) {
		case authRoute && !isAuth:
			next({ name: 'login' });
			break;

		case guestRoute && isAuth:
			next({ name: 'home' });
			break;

		default:
			// routes -> (authRoute && isAuth) || (guestRoute && !isAuth) and typeOfVisibility is ever
			next();
	}
});

export { router };
