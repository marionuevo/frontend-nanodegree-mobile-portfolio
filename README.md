## Frontend Nanodegree Mobile Portfolio Optimization

### Description
The goal of the project was to optimize a [given](https://github.com/udacity/frontend-nanodegree-mobile-portfolio) online portfolio. In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884)

### Running instructions

* Make sure you have installed node.js and npm.
* Install dependencies by typing `npm install` at the therminal.
* Run `gulp` at the terminal in order to build the code.
* Change to the `dist` folder by typing `cd dist`
* Run the python simple HTTP server: `python -m SimpleHTTPServer`
* Visit `http://localhost:8000` using your browser.
* Follow the links

### Optimizations

#### At index.html

* All css, html and js files minified using gulp.
* Some styles definitions inlined.
* Some styles are now loaded only if mediaquery matchs.
* Removed Google web fonts
* Analytics script are now inside an "onload" event, so it doesn't block the rendering.
* JS external files used as "async" when possible.
* Images were optimized.

#### At main.js

* Lines 409, 412, 415 and 428: `getElementById` is faster than `querySelector`.
* Function `changePizzaSizes(size)` at line 453:
    * `getElementsByClassName` is faster than `querySelectorAll`.
    * Cached the DOM access into a variable.
    * `dx` and `newwidth` are calulated only once.
* Line 481: Put pizzasDiv variable outside the for loop (is better to call  `document.getElementById` only once).
* Function `updatePositions()` at line 510:
    * Cached `cachedScrollTop` variable outside the for loop.
    * Pre-calculate 5 different phase values.
* Line 551: Dynamically calculate the pizzas number.