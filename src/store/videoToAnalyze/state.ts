import { Note } from '@/types/Note';

export interface VideoToAnalyzeStateInterface {
	notes: Note[];
	idYoutubeVideo: string;
}

const defaultState = [
	{
		id: '1',
		title: 'Title 1',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis iusto quos magnam. Rem ex temporibus corporis illo dicta at doloribus necessitatibus impedit natus excepturi odio hic quo, minus sit?',
		idYTVideo: 'dada',
	},
	{
		id: '2',
		title: 'Title 2',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis iusto quos magnam. Rem ex temporibus corporis illo dicta at doloribus necessitatibus impedit natus excepturi odio hic quo, minus sit?',
		idYTVideo: 'dada',
	},
	{
		id: '3',
		title: 'Title 3',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis iusto quos magnam. Rem ex temporibus corporis illo dicta at doloribus necessitatibus impedit natus excepturi odio hic quo, minus sit?',
		idYTVideo: 'dada',
	},
];

function state(): VideoToAnalyzeStateInterface {
	return {
		idYoutubeVideo: '',
		notes: defaultState,
	};
}

export default state;
