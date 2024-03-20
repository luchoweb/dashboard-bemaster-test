const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return gulp
    .src("assets/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("assets/css"));
}
gulp.task("sass", compileSass);

function watchSass() {
  gulp.watch("assets/scss/**/*.scss", compileSass);
}
gulp.task("watch", watchSass);
