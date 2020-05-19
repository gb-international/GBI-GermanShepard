const mix = require('laravel-mix');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/admin.js', 'public/js/admin')
//    .js('resources/js/app.js','public/js')
//    .sass('resources/sass/admin/app.scss', 'public/css/admin')
//    .sass('resources/sass/front/app.scss', 'public/css');

mix.js('resources/js/admin.js', 'public/js/admin')
   .js('resources/js/app.js','public/js')
   .sass('resources/sass/admin/app.scss', 'public/css/admin')
   .sass('resources/sass/front/app.scss', 'public/css');
   // .purgeCss({
   // 		enabled: true,
   // });
   






