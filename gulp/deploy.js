'use strict';

var gulp = require('gulp');
var deploy = require("gulp-gh-pages");

gulp.task('deploy', function () {
    gulp.src(["./dist/**/*","./CNAME"])
        .pipe(deploy());
});