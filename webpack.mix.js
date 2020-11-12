let mix = require('laravel-mix');

mix.js('resources/js/front/entry-client.js', 'public/js')
   .js('resources/js/front/entry-server.js', 'public/js')
   .sass('resources/sass/front/app.scss', 'public/css');
   
mix.webpackConfig({
   resolve: {
      alias: {
         'vue$': 'vue/dist/vue.runtime.common.js',
         '@': path.resolve(__dirname, 'resources/js')
      }
   }
});


// mix.webpackConfig({
//    resolve: {
//       alias: {
//          '@': path.resolve(__dirname, 'resources/js')
//       }
//    }
// });
// Admin
// mix.js('resources/js/admin/admin.js', 'public/js/admin')
//    .sass('resources/sass/admin/app.scss', 'public/css/admin')

// Escort
// mix.js('resources/js/escort/app.js', 'public/js/escort')
//    .sass('resources/sass/escort/app.scss', 'public/css/escort')









