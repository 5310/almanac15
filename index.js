/*jshint esnext: true*/

var getUrlParameter = function( name ) {
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( location.href );
	if ( results === null ) {
		return null;
	} else {
		return results[1];
	}
};



var defaultRegion = 'india-wb';
var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth();



var region = defaultRegion;
if ( getUrlParameter( 'region' ) ) { // If a holiday region is given...
	var region = getUrlParameter( 'region' );
}

var currentHolidays = {};
if ( getUrlParameter( 'year' ) ) { // If a year is given, render that. Or else the current year. Also get holidays of year and region if given.
	var year = parseInt( getUrlParameter( 'year' ) );
	if ( isNaN( year ) || year <= 0 ) year = currentYear;
	try {
		currentHolidays = holidays[year][region];
	} catch ( e ) {}
}

if ( getUrlParameter( 'page' ) ) { // If URL parameter `page=true` (or anything, really,) then only draw a page from given or current months.
	
	var month1 = parseInt( getUrlParameter( 'month1' ) ); 
	var month2 = parseInt( getUrlParameter( 'month2' ) );
	if ( currentMonth % 2 ) currentMonth--;
	if ( isNaN( month1 ) || ( month1 < 0 && month1 >= 12 ) ) month1 = currentMonth;
	if ( isNaN( month2 ) || ( month2 < 0 && month2 >= 12 ) ) month2 = currentMonth+1;
	
	shaven(	[ document.body, generatePageForShaven( month1, month2, year, currentHolidays ) ] );
	
} else { // Else draw the entire year.
	shaven(	[ document.body, ...generateCalendarForShaven( year, currentHolidays ) ] );
}

if ( getUrlParameter( 'export' ) ) { // if `export=true` (or anything, really,) then draw the calendar in enlarged screenshot mode.
	document.body.className += ' export';
}

if ( getUrlParameter( 'debug' ) ) { // If `debug=true` (or anything, really,) show layout areas.
	document.body.className += ' debug';
}
