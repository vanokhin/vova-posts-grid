import { __ } from '@wordpress/i18n';

export const DEFAULT_QUERY = {
	queryType: 'dynamic',
	postType: 'post',
	taxonomy: '',
	terms: [],
	keyword: '',
	author: 0,
	includePosts: [],
	excludePosts: [],
	postsPerPage: 6,
	order: 'DESC',
	orderby: 'date',
	ignoreSticky: true,
	excludeCurrentPost: false,
	hasFeaturedImage: false,
	dateRange: {
		mode: 'none',
		after: '',
		before: '',
	},
	metaFilter: {
		enabled: false,
		key: '',
		compare: 'exists',
		value: '',
		type: 'text',
	},
	posts: [],
};

export const DEFAULT_ELEMENTS = [
	{ id: 'image', visible: true },
	{ id: 'title', visible: true },
	{ id: 'meta', visible: true },
	{ id: 'excerpt', visible: true },
	{ id: 'readMore', visible: true },
];

export const ELEMENT_LABELS = {
	image: __( 'Image', 'vova-post-grids' ),
	title: __( 'Title', 'vova-post-grids' ),
	meta: __( 'Meta fields', 'vova-post-grids' ),
	excerpt: __( 'Excerpt', 'vova-post-grids' ),
	readMore: __( 'Read more', 'vova-post-grids' ),
};

export const META_FIELD_OPTIONS = [
	{ label: __( 'Date', 'vova-post-grids' ), value: 'date' },
	{ label: __( 'Author', 'vova-post-grids' ), value: 'author' },
	{
		label: __( 'Categories', 'vova-post-grids' ),
		value: 'categories',
	},
	{ label: __( 'Comments', 'vova-post-grids' ), value: 'comments' },
	{
		label: __( 'Modified date', 'vova-post-grids' ),
		value: 'modifiedDate',
	},
	{
		label: __( 'Reading time', 'vova-post-grids' ),
		value: 'readingTime',
	},
];

export const DEFAULT_META_FIELDS = [ 'date', 'author', 'categories' ];

export const QUERY_TYPE_OPTIONS = [
	{
		label: __( 'Dynamic query', 'vova-post-grids' ),
		value: 'dynamic',
	},
	{
		label: __( 'Specific posts', 'vova-post-grids' ),
		value: 'specific',
	},
];

export const ORDER_OPTIONS = [
	{ label: __( 'Descending', 'vova-post-grids' ), value: 'DESC' },
	{ label: __( 'Ascending', 'vova-post-grids' ), value: 'ASC' },
];

export const ORDERBY_OPTIONS = [
	{ label: __( 'Date', 'vova-post-grids' ), value: 'date' },
	{ label: __( 'Title', 'vova-post-grids' ), value: 'title' },
	{
		label: __( 'Modified date', 'vova-post-grids' ),
		value: 'modified',
	},
	{
		label: __( 'Menu order', 'vova-post-grids' ),
		value: 'menu_order',
	},
	{
		label: __( 'Comment count', 'vova-post-grids' ),
		value: 'comment_count',
	},
	{ label: __( 'Random', 'vova-post-grids' ), value: 'rand' },
	{
		label: __( 'Included posts order', 'vova-post-grids' ),
		value: 'post__in',
	},
];

export const DATE_RANGE_OPTIONS = [
	{ label: __( 'Any time', 'vova-post-grids' ), value: 'none' },
	{ label: __( 'Last 7 days', 'vova-post-grids' ), value: 'last7' },
	{
		label: __( 'Last 30 days', 'vova-post-grids' ),
		value: 'last30',
	},
	{
		label: __( 'Last 90 days', 'vova-post-grids' ),
		value: 'last90',
	},
	{
		label: __( 'Custom range', 'vova-post-grids' ),
		value: 'custom',
	},
];

export const META_FILTER_COMPARE_OPTIONS = [
	{ label: __( 'exists', 'vova-post-grids' ), value: 'exists' },
	{
		label: __( 'not exists', 'vova-post-grids' ),
		value: 'not_exists',
	},
	{ label: '=', value: 'equals' },
	{ label: '!=', value: 'not_equals' },
	{ label: __( 'contains', 'vova-post-grids' ), value: 'contains' },
	{
		label: __( 'not contains', 'vova-post-grids' ),
		value: 'not_contains',
	},
];

export const META_FILTER_TYPE_OPTIONS = [
	{ label: __( 'Text', 'vova-post-grids' ), value: 'text' },
	{ label: __( 'Number', 'vova-post-grids' ), value: 'number' },
	{ label: __( 'Date', 'vova-post-grids' ), value: 'date' },
	{ label: __( 'Boolean', 'vova-post-grids' ), value: 'boolean' },
];

export const IMAGE_SIZE_OPTIONS = [
	{
		label: __( 'Thumbnail', 'vova-post-grids' ),
		value: 'thumbnail',
	},
	{ label: __( 'Medium', 'vova-post-grids' ), value: 'medium' },
	{
		label: __( 'Medium Large', 'vova-post-grids' ),
		value: 'medium_large',
	},
	{ label: __( 'Large', 'vova-post-grids' ), value: 'large' },
	{ label: __( 'Full', 'vova-post-grids' ), value: 'full' },
];

export const IMAGE_OBJECT_FIT_OPTIONS = [
	{ label: __( 'Cover', 'vova-post-grids' ), value: 'cover' },
	{ label: __( 'Contain', 'vova-post-grids' ), value: 'contain' },
	{ label: __( 'Fill', 'vova-post-grids' ), value: 'fill' },
	{
		label: __( 'Scale down', 'vova-post-grids' ),
		value: 'scale-down',
	},
];

export const IMAGE_OBJECT_POSITION_OPTIONS = [
	{
		label: __( 'Center', 'vova-post-grids' ),
		value: 'center center',
	},
	{ label: __( 'Top', 'vova-post-grids' ), value: 'center top' },
	{
		label: __( 'Bottom', 'vova-post-grids' ),
		value: 'center bottom',
	},
	{ label: __( 'Left', 'vova-post-grids' ), value: 'left center' },
	{
		label: __( 'Right', 'vova-post-grids' ),
		value: 'right center',
	},
];

export const ASPECT_RATIO_OPTIONS = [
	{ label: __( 'Auto', 'vova-post-grids' ), value: 'auto' },
	{ label: __( '1:1', 'vova-post-grids' ), value: '1:1' },
	{ label: __( '4:3', 'vova-post-grids' ), value: '4:3' },
	{ label: __( '3:2', 'vova-post-grids' ), value: '3:2' },
	{ label: __( '16:9', 'vova-post-grids' ), value: '16:9' },
	{ label: __( '3:4', 'vova-post-grids' ), value: '3:4' },
	{ label: __( '2:3', 'vova-post-grids' ), value: '2:3' },
];

export const READ_MORE_STYLE_OPTIONS = [
	{ label: __( 'Button', 'vova-post-grids' ), value: 'button' },
	{
		label: __( 'Text link', 'vova-post-grids' ),
		value: 'textLink',
	},
];

export const PAGINATION_OPTIONS = [
	{ label: __( 'None', 'vova-post-grids' ), value: 'none' },
	{ label: __( 'Numbers', 'vova-post-grids' ), value: 'numbers' },
	{
		label: __( 'Previous / Next', 'vova-post-grids' ),
		value: 'prevNext',
	},
	{
		label: __( 'Numbers + Previous / Next', 'vova-post-grids' ),
		value: 'numbersPrevNext',
	},
];

export const PAGINATION_ALIGNMENT_OPTIONS = [
	{ label: __( 'Left', 'vova-post-grids' ), value: 'left' },
	{ label: __( 'Center', 'vova-post-grids' ), value: 'center' },
	{ label: __( 'Right', 'vova-post-grids' ), value: 'right' },
];
