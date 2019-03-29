/**
 * Created by wangcong on 2018/12/10.
 */
var browserSync = require('browser-sync').create()
var proxy = require('http-proxy-middleware')

var jsonPlaceholderProxy = proxy([
    '/api',
    '/adminapi',
    '/other'
], {
    target: 'http://local.wbwan.com',
    changeOrigin: true,
    logLevel: 'debug'
})

///browserSync.watch('*.html').on('change', browserSync.reload);  'page/*/*/*'
browserSync.watch(['.'], {ignored: [
    'node_modules',
    '.git',
    '.idea',
    '.gitignore'
]}).on('all', (event, path) => {
    //console.log(event, path);
    browserSync.reload();
});

//定向匹配
// browserSync.watch(['static/*/*/*','page/.*'], {ignored: [
//     'node_modules',
//     '.git',
//     '.idea',
//     '.gitignore'
// ]}).on('all', (event, path) => {
//     console.log(event, path);
//     browserSync.reload();
// });

// browserSync.watch('*.css',function(event, file){
//     console.log(event);
//     console.log(file);
//     browserSync.reload();
// });
// browserSync.watch('*.css',function(event, file){
//     console.log(event);
//     console.log(file);
//     browserSync.reload();
// });

// browserSync.watch("static/*", function (event, file) {
//     console.log(event);
//     if (event === "change") {
//         browserSync.reload("*.css");
//     }
// });

//browserSync.watch('*.js').on('change', browserSync.reload);

browserSync.init({
    server: {
        baseDir: './',
        port: 3000,
        middleware: [jsonPlaceholderProxy]
    },
    startPath: '/index.html'
})



console.log('[GPROXY] Server: listening on port 3000')
console.log('[GPROXY] Opening: http://localhost:3000/index.html')