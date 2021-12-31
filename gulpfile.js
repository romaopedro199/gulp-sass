const { src, dest, watch } = require("gulp");
const compileSass = require("gulp-sass")(require("sass"));
const minifyCss = require("gulp-clean-css");
const concat = require("gulp-concat");

compileSass.compiler = require("node-sass");

const bundleSass = () => {
  return src("./static/sass/**/*.scss")
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(minifyCss())
    .pipe(concat("bundle.css"))
    .pipe(dest("./dist/static/css/"));
};

const devWatch = () => {
  watch("./static/sass/**/*.scss", bundleSass);
};

exports.bundleSass = bundleSass;
exports.devWatch = devWatch;
