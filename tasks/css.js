import gulp from "gulp";
import gulpid from "gulp-if";
import livereload from "gulp-livereload";
import args from './util/args';

gulp.task('css',()=>{
    return gulp.src('app//style/**/*.css')
    .pipe(gulp.dest('server/public'))
})


