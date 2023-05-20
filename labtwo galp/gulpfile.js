const {src ,dest, series, parallel,watch}=require ('gulp')
const concat = require("gulp-concat");




// html task
const htmlPlugin=require ('gulp-htmlmin')
function Html() {
    return src('src/*.html')
    .pipe(htmlPlugin({collapseWhitespace: true,removeComments:true}))
    .pipe(dest('dist'));
  }
  exports.html = Html



  // Css task
const cssMin=require("gulp-clean-css");
function cssMinfy() {
  return src("src/css/**/*.css").pipe(concat("style.css"))
  .pipe(cssMin()).pipe(dest("dist/css"));
}
exports.css=cssMinfy;



// js task
const minJs=require("gulp-terser");
function JSMinfy() {
  return src("src/js/*.js").pipe(concat("script.js"))
  .pipe(minJs())
  .pipe(dest("dist/Js"));
}
exports.js=JSMinfy;



// img task 
const imgMin=require("gulp-imagemin");
function imgsMinify() {
  return src("src/imgs/*").pipe(imgMin())
  .pipe(dest("dist/images"));
}
exports.img=imgsMinify;

