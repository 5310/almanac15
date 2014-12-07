# Almanac '15

This year I decided to make my personal print calendar in HTML. 

Being a personal calendar, it only contains holidays for my locality. But if anyone wants to they can add their own quite easily by following the example in `2015-india-wb.js`.

It certainly beats doing it by hand like I did a few years ago, and also is easier than doing it purely procedurally. CSS3 isn't anywhere near perfect, but it's quite good enough for what I wanted.

I'm using [Shaven.js](http://adriansieber.com/shaven/) to generate the markup and the calendar generation module from [ramalho/calendar.js](https://github.com/ramalho/calendar.js)

The biggest problem was converting the app to a printable form. I gave up on converting the site to a pdf very quickly, and resorted to a secondary scaling stylesheet to enlarge the pages and then using Firefox' fullpage screenshot functionality ( `screenshot screenshot.png --fullpage` ) and then splitting it manually. 

To render the calendar in export more, pass the url parameter `export=true`. And to view only a specific page pass the parameter `page=true` and optionally `month1` and `month2` set to the index of the months you wish to be contained in the page. Example: [5310.github.io/almanac15/index.html?page=true&month1=0&month2=11&export=true]()

The code uses ES6 features, and the layout works fine in Chrome for the most part, but the holiday tags are offset for some reason. Works perfectly in Firefox, which is also how I'm exporting the thing, so I can't bother making it cross-platform.

This should do for now, personally. Maybe next year I'll just make a Polymer app which pulls holidays from Google Calendar or something and has enough modularity and stylability to last me forever! Hope to find a feasible HTML to PDF procedure by then.