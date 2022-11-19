export interface BasicNote {
	title: string;
	text: string;
	idYTVideo: string;
}

export interface Note extends BasicNote {
	id: string;
	list_id: number;
}
