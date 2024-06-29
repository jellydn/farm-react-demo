export type AnimeListResponse = {
	pagination: Pagination;
	data: AnimeItem[];
};

export type AnimeItem = {
	mal_id: number;
	url: string;
	images: Record<"jpg" | "webp", Image>;
	trailer: Trailer;
	approved: boolean;
	titles: Title[];
	title: string;
	title_english: null | string;
	title_japanese: string;
	title_synonyms: string[];
	type: string;
	source: string;
	episodes: number;
	status: string;
	airing: boolean;
	aired: Aired;
	duration: string;
	rating: string;
	score: number | null;
	scored_by: number | null;
	rank: number | null;
	popularity: number;
	members: number;
	favorites: number;
	synopsis: null | string;
	background: string;
	season: null | string;
	year: number | null;
	broadcast: Broadcast;
	producers: Demographic[];
	licensors: Demographic[];
	studios: Demographic[];
	genres: Demographic[];
	explicit_genres: unknown[];
	themes: Demographic[];
	demographics: Demographic[];
};

type Aired = {
	from: Date;
	to: Date | null;
	prop: Prop;
	string: string;
};

type Prop = {
	from: From;
	to: From;
};

type From = {
	day: number | null;
	month: number | null;
	year: number | null;
};

type Broadcast = {
	day: null | string;
	time: null | string;
	timezone: null | string;
	string: null | string;
};

type Demographic = {
	mal_id: number;
	type: string;
	name: string;
	url: string;
};

type Image = {
	image_url: string;
	small_image_url: string;
	large_image_url: string;
};

type Title = {
	type: string;
	title: string;
};

type Trailer = {
	youtube_id: null | string;
	url: null | string;
	embed_url: null | string;
	images: Images;
};

type Images = {
	image_url: null | string;
	small_image_url: null | string;
	medium_image_url: null | string;
	large_image_url: null | string;
	maximum_image_url: null | string;
};

type Pagination = {
	last_visible_page: number;
	has_next_page: boolean;
	current_page: number;
	items: Items;
};

type Items = {
	count: number;
	total: number;
	per_page: number;
};
