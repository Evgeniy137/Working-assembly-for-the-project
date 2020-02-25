let gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    uglifycss = require('gulp-uglifycss');
    autoprefixer = require('gulp-autoprefixer');





gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sass({outputStyle: 'expanded' }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('app/css'));
});

gulp.task('js', function(){
    return gulp.src([
        "node_modules/slick-carousel/slick/slick.js",
        "node_modules/magnific-popup/dist/jquery.magnific-popup.js",
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest("app/js"))
})

gulp.task('scripts', function(){
    return gulp.src('app/js/scripts/*.js')
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest("app/js"))
})

gulp.task('min-css',function(){
    return gulp.src('app/css/style.css')
    .pipe(concat('css.min.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest("app/css"))
})

gulp.task('autoprefixer', function(){
    return gulp.src('app/css/style.css')
    .pipe(autoprefixer())
})


gulp.task('watch', function() {
    gulp.watch('app/scss/*.scss', gulp.parallel('sass'));
    gulp.watch('app/js/scripts/*js', gulp.parallel('scripts'))
    gulp.watch('app/css/style.css',gulp.parallel('min-css') )
});