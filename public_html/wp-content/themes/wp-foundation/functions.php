<?php

/**
 * Enqueue scripts and styles
 */
function custom_assets() {
	// JS
	
	// Header

	wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/bower_components/foundation/js/vendor/modernizr.js', array(), '2.8.3', false );
	
	// Footer 
	
	// Deregister the jquery version bundled with WordPress.
	wp_deregister_script( 'jquery' );
	wp_enqueue_script( 'jquery', get_template_directory_uri() . '/bower_components/foundation/js/vendor/jquery.js', array(), '2.1.4', true );	
	
	wp_enqueue_script( 'fastclick', get_template_directory_uri() . '/bower_components/foundation/js/vendor/fastclick.js', array(), '1.0.0', true );
	
	// Foundation JS components are chosen in Gruntfile.js
	wp_enqueue_script( 'app-js', get_template_directory_uri() . '/js/app-compiled.js', array('jquery'), '1.0.0', true );

	// CSS
	wp_enqueue_style( 'app-css', get_template_directory_uri() . '/css/app.css' );
}

add_action( 'wp_enqueue_scripts', 'custom_assets' );

/**
 * Add favicon
 */
function add_favicon() {
	echo '<link rel="icon" type="image/x-icon" href="'.get_template_directory_uri().'/assets/images/favicon.ico" />' . "\n";
}
add_action('wp_head', 'add_favicon');

/**
 * Remove emoji junk
 */
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

/**
 * Add theme support
 */
// Add language support
load_theme_textdomain( 'wp-foundation', get_template_directory() . '/languages' );

// Add menu support
add_theme_support( 'menus' );

// Let WordPress manage the document title
add_theme_support( 'title-tag' );

// Add post thumbnail support: http://codex.wordpress.org/Post_Thumbnails
add_theme_support( 'post-thumbnails' );

// RSS thingy
add_theme_support( 'automatic-feed-links' );
