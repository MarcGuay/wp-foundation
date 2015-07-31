<?php

/**
 * Enqueue scripts and styles
 */
function custom_assets() {
	wp_enqueue_style( 'app-css', get_template_directory_uri() . '/css/app.css' );
	wp_enqueue_script( 'app-js', get_template_directory_uri() . '/js/app.js', array(), '1.0.0', true );
}

add_action( 'wp_enqueue_scripts', 'custom_assets' );

/**
 * Remove emoji junk
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );