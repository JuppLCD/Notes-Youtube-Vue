// * NoteListState
// export const defaultNoteListState = {
// 	all: [
// 		{ name: 'All Notes (default)', id: 1, user_id: 1, description: '' },
// 		{ name: 'Programming', id: 2, user_id: 1, description: '' },
// 		{ name: 'Maths', id: 3, user_id: 1, description: '' },
// 	],
// };

export const defaultNoteListState = {
	all: undefined,
	allFull: undefined,
	current: undefined,
};

// * VideoToAnalyzeState
// export const defaultVideoToAnalyzeState = {
// 	notes: [
// 		{
// 			id: '1',
// 			title: 'Title 1',
// 			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis iusto quos magnam. Rem ex temporibus corporis illo dicta at doloribus necessitatibus impedit natus excepturi odio hic quo, minus sit?',
// 			idYTVideo: 'dada',
// 			lists: [
// 				{
// 					id: 1,
// 					title: 'Programming',
// 				},
// 			],
// 		},
// 		{
// 			id: '2',
// 			title: 'Title 2',
// 			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis iusto quos magnam. Rem ex temporibus corporis illo dicta at doloribus necessitatibus impedit natus excepturi odio hic quo, minus sit?',
// 			idYTVideo: 'dada',
// 			lists: [
// 				{
// 					id: 1,
// 					title: 'Programming',
// 				},
// 			],
// 		},
// 		{
// 			id: '3',
// 			title: 'Title 3',
// 			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis iusto quos magnam. Rem ex temporibus corporis illo dicta at doloribus necessitatibus impedit natus excepturi odio hic quo, minus sit?',
// 			idYTVideo: 'dada',
// 			lists: [
// 				{
// 					id: 2,
// 					title: 'Maths',
// 				},
// 			],
// 		},
// 	],
// 	idYoutubeVideo: '',
// };

export const defaultVideoToAnalyzeState = {
	idYoutubeVideo: '',
	notes: undefined,
};

// * UserState

// export const defaultUserState = {
// 	isAuth: true,
// 	token: 'TOKEN',
// 	userId: 1,
// 	userName: 'UserTest',
// };

export const defaultUserState = {
	isAuth: false,
	token: undefined,
	userId: undefined,
	userName: undefined,
};
