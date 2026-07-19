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
	image: __( 'Image', 'vova-posts-grid' ),
	title: __( 'Title', 'vova-posts-grid' ),
	meta: __( 'Meta fields', 'vova-posts-grid' ),
	excerpt: __( 'Excerpt', 'vova-posts-grid' ),
	readMore: __( 'Read more', 'vova-posts-grid' ),
};

export const META_FIELD_OPTIONS = [
	{ label: __( 'Date', 'vova-posts-grid' ), value: 'date' },
	{ label: __( 'Author', 'vova-posts-grid' ), value: 'author' },
	{
		label: __( 'Categories', 'vova-posts-grid' ),
		value: 'categories',
	},
	{ label: __( 'Comments', 'vova-posts-grid' ), value: 'comments' },
	{
		label: __( 'Modified date', 'vova-posts-grid' ),
		value: 'modifiedDate',
	},
	{
		label: __( 'Reading time', 'vova-posts-grid' ),
		value: 'readingTime',
	},
];

export const DEFAULT_META_FIELDS = [ 'date', 'author', 'categories' ];

export const QUERY_TYPE_OPTIONS = [
	{
		label: __( 'Dynamic query', 'vova-posts-grid' ),
		value: 'dynamic',
	},
	{
		label: __( 'Specific posts', 'vova-posts-grid' ),
		value: 'specific',
	},
];

export const ORDER_OPTIONS = [
	{ label: __( 'Descending', 'vova-posts-grid' ), value: 'DESC' },
	{ label: __( 'Ascending', 'vova-posts-grid' ), value: 'ASC' },
];

export const ORDERBY_OPTIONS = [
	{ label: __( 'Date', 'vova-posts-grid' ), value: 'date' },
	{ label: __( 'Title', 'vova-posts-grid' ), value: 'title' },
	{
		label: __( 'Modified date', 'vova-posts-grid' ),
		value: 'modified',
	},
	{
		label: __( 'Menu order', 'vova-posts-grid' ),
		value: 'menu_order',
	},
	{
		label: __( 'Comment count', 'vova-posts-grid' ),
		value: 'comment_count',
	},
	{ label: __( 'Random', 'vova-posts-grid' ), value: 'rand' },
	{
		label: __( 'Included posts order', 'vova-posts-grid' ),
		value: 'post__in',
	},
];

export const DATE_RANGE_OPTIONS = [
	{ label: __( 'Any time', 'vova-posts-grid' ), value: 'none' },
	{ label: __( 'Last 7 days', 'vova-posts-grid' ), value: 'last7' },
	{
		label: __( 'Last 30 days', 'vova-posts-grid' ),
		value: 'last30',
	},
	{
		label: __( 'Last 90 days', 'vova-posts-grid' ),
		value: 'last90',
	},
	{
		label: __( 'Custom range', 'vova-posts-grid' ),
		value: 'custom',
	},
];

export const META_FILTER_COMPARE_OPTIONS = [
	{ label: __( 'exists', 'vova-posts-grid' ), value: 'exists' },
	{
		label: __( 'not exists', 'vova-posts-grid' ),
		value: 'not_exists',
	},
	{ label: '=', value: 'equals' },
	{ label: '!=', value: 'not_equals' },
	{ label: __( 'contains', 'vova-posts-grid' ), value: 'contains' },
	{
		label: __( 'not contains', 'vova-posts-grid' ),
		value: 'not_contains',
	},
];

export const META_FILTER_TYPE_OPTIONS = [
	{ label: __( 'Text', 'vova-posts-grid' ), value: 'text' },
	{ label: __( 'Number', 'vova-posts-grid' ), value: 'number' },
	{ label: __( 'Date', 'vova-posts-grid' ), value: 'date' },
	{ label: __( 'Boolean', 'vova-posts-grid' ), value: 'boolean' },
];

export const IMAGE_SIZE_OPTIONS = [
	{
		label: __( 'Thumbnail', 'vova-posts-grid' ),
		value: 'thumbnail',
	},
	{ label: __( 'Medium', 'vova-posts-grid' ), value: 'medium' },
	{
		label: __( 'Medium Large', 'vova-posts-grid' ),
		value: 'medium_large',
	},
	{ label: __( 'Large', 'vova-posts-grid' ), value: 'large' },
	{ label: __( 'Full', 'vova-posts-grid' ), value: 'full' },
];

export const IMAGE_OBJECT_FIT_OPTIONS = [
	{ label: __( 'Cover', 'vova-posts-grid' ), value: 'cover' },
	{ label: __( 'Contain', 'vova-posts-grid' ), value: 'contain' },
	{ label: __( 'Fill', 'vova-posts-grid' ), value: 'fill' },
	{
		label: __( 'Scale down', 'vova-posts-grid' ),
		value: 'scale-down',
	},
];

export const IMAGE_OBJECT_POSITION_OPTIONS = [
	{
		label: __( 'Center', 'vova-posts-grid' ),
		value: 'center center',
	},
	{ label: __( 'Top', 'vova-posts-grid' ), value: 'center top' },
	{
		label: __( 'Bottom', 'vova-posts-grid' ),
		value: 'center bottom',
	},
	{ label: __( 'Left', 'vova-posts-grid' ), value: 'left center' },
	{
		label: __( 'Right', 'vova-posts-grid' ),
		value: 'right center',
	},
];

export const ASPECT_RATIO_OPTIONS = [
	{ label: __( 'Auto', 'vova-posts-grid' ), value: 'auto' },
	{ label: __( '1:1', 'vova-posts-grid' ), value: '1:1' },
	{ label: __( '4:3', 'vova-posts-grid' ), value: '4:3' },
	{ label: __( '3:2', 'vova-posts-grid' ), value: '3:2' },
	{ label: __( '16:9', 'vova-posts-grid' ), value: '16:9' },
	{ label: __( '3:4', 'vova-posts-grid' ), value: '3:4' },
	{ label: __( '2:3', 'vova-posts-grid' ), value: '2:3' },
];

export const READ_MORE_STYLE_OPTIONS = [
	{ label: __( 'Button', 'vova-posts-grid' ), value: 'button' },
	{
		label: __( 'Text link', 'vova-posts-grid' ),
		value: 'textLink',
	},
];

export const PAGINATION_OPTIONS = [
	{ label: __( 'None', 'vova-posts-grid' ), value: 'none' },
	{ label: __( 'Numbers', 'vova-posts-grid' ), value: 'numbers' },
	{
		label: __( 'Previous / Next', 'vova-posts-grid' ),
		value: 'prevNext',
	},
	{
		label: __( 'Numbers + Previous / Next', 'vova-posts-grid' ),
		value: 'numbersPrevNext',
	},
];

export const PAGINATION_ALIGNMENT_OPTIONS = [
	{ label: __( 'Left', 'vova-posts-grid' ), value: 'left' },
	{ label: __( 'Center', 'vova-posts-grid' ), value: 'center' },
	{ label: __( 'Right', 'vova-posts-grid' ), value: 'right' },
];
