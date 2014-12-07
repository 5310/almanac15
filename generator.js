/*jshint esnext: true*/

var monthnames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
]; // Monthanmes are 0 first.

var generateMonthForShaven = function( month, year, holidays ) {

	var markup = [
		[ 
			'div.month-header', 
			[ 'div.month-name', monthnames[month] ],
			[ 'div.year', year ]
		],
		[
			'div.month-days'
		]
	];

	var calendarMonth = new Calendar(1).monthDays( year, month ); 
	// Calendar is Monday first, hence the 1.

	for ( var week of calendarMonth ) {
		for ( var date of week ) {
			var day = [ 'div.day' ];
			if ( date > 0 ) {
				day.push( [ 'div.date', date ] );
				try {
					var holiday = holidays[month][date];
					if ( holiday ) {
						day[0] += '.holiday';
						day.push( [ 'div.holiday', holiday ] );
					}
				} catch ( e ) {}
			}
			markup[1].push( day );
		}
	}

	return markup;

};


var generatePageForShaven = function( month1, month2, year, holidays ) {


	var markup = [
		'div.page',
		[
			'div.weekday-names',
			[ 'div.weekday-name', "monday" ],
			[ 'div.weekday-name', "tuesday" ],
			[ 'div.weekday-name', "wednesday" ],
			[ 'div.weekday-name', "thursday" ],
			[ 'div.weekday-name', "friday" ],
			[ 'div.weekday-name', "saturday" ],
			[ 'div.weekday-name', "sunday" ]
		],
		...generateMonthForShaven( month1, year, holidays ),
		...generateMonthForShaven( month2, year, holidays ),
	];

	markup[2][0] += ".top";
	markup[3][0] += ".top";
	markup[4][0] += ".bottom";
	markup[5][0] += ".bottom";

	return markup;

};

var generateCalendarForShaven = function( year, holidays ) {
	
	var markup = [];
	
	for ( var i = 0; i < 12; i += 2 ) {
		markup.push( generatePageForShaven( i, i+1, year, holidays ) );
	}
	
	return markup;
	
};