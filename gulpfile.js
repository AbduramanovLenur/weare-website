"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const del = require('del');
const runSequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer');

// const dist = "C:/OpenServer/domains/project-4";
const dist = 'dist/';

gulp.task("copy-html", () => {
  return gulp.src("./src/*.html")
    .pipe(gulp.dest(dist))
    .pipe(browsersync.stream());
});

gulp.task('autoprefixer', function(done) {
  return gulp.src('src/assets/css/style.css')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest(dist))
})

gulp.task("build-sass", () => {
  return gulp.src("./src/assets/sass/style.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./src/assets/css"))
    .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
  return gulp.src("./src/js/main.js")
    .pipe(webpack({
      mode: 'development',
      output: {
        filename: 'script.js'
      },
      watch: false,
      devtool: "source-map",
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', {
                  debug: true,
                  corejs: 3,
                  useBuiltIns: "usage"
                }]]
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(dist))
    .on("end", browsersync.reload);
});

gulp.task("copy-assets", () => {
  return gulp.src("./src/assets/**/*.*")
              .pipe(gulp.dest(dist + "/assets"))
              .on("end", browsersync.reload);
});

gulp.task('clean', function(){
	return del.sync('dist')
})

gulp.task("watch", () => {
  browsersync.init({
    server: "./dist/",
    port: 4000,
    notify: true
  });

  gulp.watch("./src/*.html", gulp.parallel("copy-html"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
  gulp.watch("./src/assets/**/*.*", gulp.parallel("copy-assets"));
  gulp.watch("./src/assets/sass/**/*.scss", gulp.parallel("build-sass"));
});

gulp.task("build", gulp.parallel("clean", "copy-html", "build-js", "copy-assets", "build-sass"));

gulp.task("prod", () => {
  gulp.src("./src/assets/sass/style.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${dist}/assets/css`));

  return gulp.src("./src/js/main.js")
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'script.js'
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', {
                  corejs: 3,
                  useBuiltIns: "usage"
                }]]
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(dist));
});

gulp.task("default", gulp.parallel("watch", "build"));