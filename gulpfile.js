const gulp = require('gulp');
const sass = require('gulp-sass');
const server = require('gulp-webserver');

gulp.task('devSass', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
});

gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss', gulp.series('devSass'));
});

gulp.task('server', function() {
    return gulp.src('./src/')
        .pipe(server({
            port: 8585,
            open: true,
            livereload: true,
            proxies: [{
                source: '/list',
                target: 'http://localhost:3000/list'

            }, {
                source: '/detailList',
                target: 'http://localhost:3000/detailList'
            }]
        }))
});

gulp.task('default', gulp.series('devSass', 'server', 'watch'));