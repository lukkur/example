const mix = require('laravel-mix');
const path = require('path');
// const cssImport = require('postcss-import');
// const cssNesting = require('postcss-nesting');
require('vuetifyjs-mix-extension');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
    terser: {
        terserOptions: {
            compress: {
                drop_console: true
            }
        }
    }
});

mix
    .js('resources/js/app.js', 'public/js')
    .vuetify('vuetify-loader', {
        extract: 'css/app-v.css'
    })
    .vue({
        extractStyles: true
    })
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve('resources/js'),
            },
        },
    })
    .disableNotifications();


if (mix.inProduction()) {
    mix.version();
}
