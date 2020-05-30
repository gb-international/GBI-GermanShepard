const mix = require('laravel-mix');
require('laravel-mix-purgecss');



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
   






