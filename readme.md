# Almanac '15

This year I decided to make my personal print calendar in HTML. 

Being a personal calendar, it only contains holidays for my locality. But if anyone wants to they can add their own quite easily by following the example in `holidays-2015-india-wb.js`.

It certainly beats doing it by hand like I did a few years ago, and also is easier than doing it purely procedurally. CSS3 isn't anywhere near perfect, but it's quite good enough for what I wanted.

I'm using [Shaven.js](http://adriansieber.com/shaven/) to generate the markup and the calendar generation module from [ramalho/calendar.js](https://github.com/ramalho/calendar.js)

The biggest problem was converting the app to a printable form. I gave up on converting the site to a pdf very quickly, and resorted to a secondary scaling stylesheet to enlarge the pages and then using Firefox' fullpage screenshot functionality ( `screenshot screenshot.png --fullpage` ) and then splitting it manually.

The calendar reads some URL parameters and draws accordingly:

-	`region` Sets the holiday region. Defaults is `india-wb` which is also the only holiday region present!
-	`year` Sets the year of the calendar.
-	`page` If true renders only a single page of the calendar.
-	`month1` & `month2` If `page` is set, then these two months are rendered to the page.
-	`export` If true renders the export/screenshot view. Default is `false`.
-	`debug` If true draws all the background boxes in the layout. Default is `false`.

Example: [5310.github.io/almanac15/index.html?year=2015&page=true&month1=0&month2=11&export=true]() draws a single page of the calendar with January and December of 2015 (default) with holidays from India WB (default).

Compatibility notes:

- To be frank, it only works and draws properly on Firefox. I don't care enough to normalize it, it's been made for print.
