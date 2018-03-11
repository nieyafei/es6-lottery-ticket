import gulp from "gulp";
import gulpid from "gulp-if";
import gulpif from "gulp-util";
import args from './util/args';

gulp.task('browser',(cb)=>{
    if(!args.watch) return cb();
    gulp.watch('app/**/*.js',['scripts'])
    gulp.watch('app/**/*.ejs',['pages'])
    gulp.watch('app/**/*.css',['css'])
})




