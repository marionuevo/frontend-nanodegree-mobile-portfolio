frontend-nanodegree-mobile-portfolio-optimized
==============================================

Nothing in particular to explain in order to use this site.
Just click thru the links and measure performace with your developer tools if you want.

Optimizations:
· All css files minified.
· All html files minified.
· All js files minified.
· Some styles definitions inlined.
· Some styles are now loaded only if mediaquery matchs.
· Removed Google web fonts
· Analytics script are now inside an "onload" event, so it doesn't block the rendering.
· JS external files used as "ASYNC" when possible.
· Images were optimized.

About views/js/main.js:
· line 476: Put pizzasDiv variable outside the for loop (is better to call "document.getElementById" once only).
· line 510: Cached cachedScrollTop variable outside the for loop.