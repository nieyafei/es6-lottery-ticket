import gulp from "gulp";
import gulpid from "gulp-if";
import livereload from "gulp-livereload";
import args from './util/args';

import liveserver from "gulp-live-server";

gulp.task('server',(cb)=>{
    if(!args.watch) return cb();
    
    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start();

    gulp.watch(['server/public/**/*.js','server/views/**/*.js'],function(file){
        server.notify.apply(server, [file]);
    })

    gulp.watch(['server/routes/**/*.js','server/app.js'],function(file){
        server.start.bind(server)();
    })
})

