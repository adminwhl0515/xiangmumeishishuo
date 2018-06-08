const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task("sass",function(){
	gulp.src('src/scss/*.scss').pipe(sass()).pipe(rename({"suffix":".min"})).pipe(cssnano()).pipe(gulp.dest('css'));
})
gulp.task('js',function(){
	gulp.src('src/js/*.js').pipe(uglify()).pipe(rename({"suffix":".min"})).pipe(gulp.dest('js'));
})
gulp.task('watch',function(){
	gulp.watch(['src/scss/*.scss',"src/js/*.js"],['sass','js'])
})
