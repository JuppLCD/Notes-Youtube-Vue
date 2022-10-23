import { Note } from '@/types/Note';

export interface NotesStateInterface {
	notes: Note[];
}

const defaultState = [
	{
		id: '1',
		title: 'Title 1',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis iusto quos magnam. Rem ex temporibus corporis illo dicta at doloribus necessitatibus impedit natus excepturi odio hic quo, minus sit?',
	},
	{
		id: '2',
		title: 'Title 2',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis iusto quos magnam. Rem ex temporibus corporis illo dicta at doloribus necessitatibus impedit natus excepturi odio hic quo, minus sit?',
	},
	{
		id: '3',
		title: 'Title 3',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corporis iusto quos magnam. Rem ex temporibus corporis illo dicta at doloribus necessitatibus impedit natus excepturi odio hic quo, minus sit?',
	},
];

function state(): NotesStateInterface {
	return {
		notes: defaultState,
	};
}

export default state;
