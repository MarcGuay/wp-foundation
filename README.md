# wp-foundation
Starting point for a Wordpress project that uses Zurb Foundation

##Install
- Run `composer update` in root directory
- Rename the theme directory from `wp-foundation` to whatever you like and edit the `style.css` file header.
- Run `npm install` in the theme directory
- Run `bower install` in the theme directory
- Create an empty DB schema.
- Modify database credentials in `wp-config.php` file.
- Generate and add keys to `wp-config.php` file.
- Login and install Wordpress.
- Switch to your theme.
- Choose the Foundation components in `scss/app.scss` and `Gruntfile.js`.
- Run `grunt build` in the theme directory

##Features
- Composer management of Wordpress core, plugins, and themes
- Bower management of Zurb Foundation and dependencies
- Basic Wordpress integration done
- Minimal templating

###Thank you
- https://github.com/olefredrik/foundationpress/ for inspiration.  I wanted something smaller and to have the WP composer stuff baked-in.
