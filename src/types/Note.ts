export interface BasicNote {
	title: string;
	text: string;
	idYTVideo: string;
}

export interface Note extends BasicNote {
	id: number;
	lists?: { id: number; title: string }[];
}
