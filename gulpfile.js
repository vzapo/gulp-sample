// Import dependencies needed
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify-cli');

// Define the value of path variables you need below.
const pathOfScssFiles = './clientFolder/scss/*.scss',
    pathOfCss = './build/css/',
    pathOfJs = './clientFolder/js/*.js',
    pathOfJsMin = './build/js/';

/* 
    Define below the tasks that gulp will do
    ------------------------------------------------------
*/

// Define 'sass' task that will take care of transforming scss to css
gulp.task('sass', function () {
    // Return gulp path of scss file, pipe it to sass(gulp-sass) plugin to handle the sass transformation and then the result pipe it again to the desire output folder.
    return gulp.src(pathOfScssFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(pathOfCss));
});

// Define 'minifyjs' task that will minify javascript files
gulp.task('minifyjs', function(){
    // Return gulp path of javascript files, pipe it to the minifier plugin(uglify) to handle the minify transformation and then the result pipe it again to the desire output folder.
    return gulp.src(pathOfJs)
        .pipe(uglify())
        .pipe(gulp.dest(pathOfJsMin));
}); 

/*
    End of tasks
    ------------------------------------------------------
*/

/*
    Define the 'build' command that will run all commands defined above one after another so you will just have to run one command for all tasks. 
    After adding a new task just add another argument to the series function representing your new task.
*/

gulp.task('build', gulp.series('sass', 'minifyjs'));

/* */
