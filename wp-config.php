<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '][;E`:oz(p6Jj=zwX$f!F*/`aot}GXg*#X$1 zd$w~NZ?A }.0rQ/ IcEL3oKsP`' );
define( 'SECURE_AUTH_KEY',   '/J.:cmEpK,eL,ry}xl?RX{6w,YKD*N)1vWG.^2[|_nzGT1.{s}tJW[FU^Tz1/e=!' );
define( 'LOGGED_IN_KEY',     'x!%5^+IDi(afu`GPHjDNl+t`S_7=Iqew=c]]?}n<;F/#`3F|>QS5l}8OkTD1G5,z' );
define( 'NONCE_KEY',         't0*PUq|,|6JV?K+6JVW3AvV7YLUI$9u>5(Uop+(][6Cr:%7x:0v%)0&9leo{A7d ' );
define( 'AUTH_SALT',         '&5x(nepriE!-ev4g@C3Fk%2!(aZCO,y^7a=HtkD9(AtP] m$7 Y/ew8j+3scg2rK' );
define( 'SECURE_AUTH_SALT',  ']x7 /u?;3m)`FVS>a8LE3h/O+<J}FSRmS}N`qWM^#v!cn]z<t@raWQsK3cln]PY%' );
define( 'LOGGED_IN_SALT',    '@NJKz#hft]`.(B!tebvNKb9 !J_^m+]dDq11p;.jpX)LD&D1X%>[Oh4R29h!AwXx' );
define( 'NONCE_SALT',        'r;`X_<nA[zVa!oZMPYW9g7NZiq`DZw`tXitcSBJ`KwTFF{$.zeQ:t)][.mFmsuYZ' );
define( 'WP_CACHE_KEY_SALT', 'I(J497d`BQbR$87ark&$,BmtY3#eA2Kw+7?`#.CE>e7m 352LgE7VKft5^()@<KY' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
