const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .vue()
    .sass("resources/sass/app.scss", "public/css")
    .postCss("resources/css/app.css", "public/css", [])
    .browserSync("http://127.0.0.1:8000/");
