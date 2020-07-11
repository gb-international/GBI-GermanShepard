let mix = require('laravel-mix');



// mix.js('resources/js/entry-client.js', 'public/js')
//    .js('resources/js/entry-server.js', 'public/js')
//    .sass('resources/sass/front/app.scss', 'public/css');

// mix.webpackConfig({
//    resolve: {
//       alias: {
//          'vue$': 'vue/dist/vue.runtime.common.js'
//       }
//    }
// });


mix.js('resources/js/admin.js', 'public/js/admin')
   .sass('resources/sass/admin/app.scss', 'public/css/admin')