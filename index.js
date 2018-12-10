/**
 * Created by wangcong on 2018/12/10.
 */
var browserSync = require('browser-sync').create()
var proxy = require('http-proxy-middleware')

var jsonPlaceholderProxy = proxy('/api', {
    target: 'https://www.wbwan.vip',
    changeOrigin: true,
    logLevel: 'debug'
})

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