<?php
/**
 * Server-side rendering for the Post Grids block.
 *
 * @package VovaPostsGrid
 *
 * @var array<string, mixed> $attributes
 * @var string               $content
 * @var WP_Block             $block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

echo VOVAPG_Posts_Grid::render_block( $attributes ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
