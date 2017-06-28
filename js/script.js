var cWifiSpeeds = [
	{ 
		name: 'Paraguay',
		averageSpeed: 1.400,
		peakSpeed: 10.1,
	},
	{
		name: 'Egypt',
		averageSpeed: 2.000,
		peakSpeed: 17
	},
	{
		name: 'Namibia',
		averageSpeed: 2.900,
		peakSpeed: 24.3
	},
	{
		name: 'Nigeria',
		averageSpeed:	3.900,
		peakSpeed: 29.1
	},
	{
		name:	'Iran',
		averageSpeed: 4.700,
		peakSpeed: 25.2
	},
	{
		name: 'Morocco',
		averageSpeed: 5.200,
		peakSpeed: 25.9
	},
	{
		name:	'Peru',
		averageSpeed:	6.200,
		peakSpeed: 47.5
	},
	{
		name:	'Argentina',
		averageSpeed:6.300,
		peakSpeed:	40.3
	},
	{
		name: 'India',
		averageSpeed:	6.500,
		peakSpeed: 41.4
	},
	{
		name: 'South Africa',
		averageSpeed: 6.700,
		peakSpeed: 32.4
	},
	{
		name: 'Saudi Arabia',
		averageSpeed: 6.700,
		peakSpeed: 52.3
	},
	{
		name: 'Mexico',
		averageSpeed: 7.500,
		peakSpeed: 45.2
	},
	{
		name: 'China',
		averageSpeed: 7.600,
		peakSpeed: 45.9
	},
	{
		name: 'Greece',
		averageSpeed: 7.900,
		peakSpeed: 39.7
	},
	{
			name:	'UAE',
			averageSpeed: 8.600,
			peakSpeed: 81.1
	},
	{
		name:	'Chile',
		averageSpeed:	9.300,
		peakSpeed:	65.5
	},
	{
		name: 'France',
		averageSpeed:	10.800,
		peakSpeed: 49.7
	},
	{
		name:	'Australia',
		averageSpeed: 11.100,
		peakSpeed: 55.7
	},
	{
		name: 'Russia',
		averageSpeed:	11.800,
		peakSpeed: 69.3
	},
	{
		name: 'Kenya',
		averageSpeed: 2.200,
		peakSpeed: 38.5
	},
	{
		name:	'Israel',
		averageSpeed: 13.700,
		peakSpeed: 99.1
	},
	{
		name:	'Thailand',
		averageSpeed:	16.000,
		peakSpeed:	106.6
	},
	{
		name: 'United Kingdom',
		averageSpeed: 16.900,
		peakSpeed: 76.1
	},
	{
		name:	'Taiwan',
		averageSpeed: 16.900,
		peakSpeed: 94.7
	},
	{
		name:'United States',
		averageSpeed: 18.700,
		peakSpeed: 86.5
	},
	{
		name: 'Japan',
		averageSpeed:	20.200,
		peakSpeed:94.5
	},
	{
		name:	'Singapore',
		averageSpeed:20.300,
		peakSpeed:	184.5
	},
	{
		name: 'Hong Kong',
		averageSpeed: '21.900',
		peakSpeed: 129.5
	},
	{
		name: 'Norway',
		averageSpeed: 23.500,
		peakSpeed: 85.9,
	},
	{
		name:	'South Korea',
		averageSpeed: 28.600,
		peakSpeed: 121
	}
];

function addCountriesList(){
	$('.countries').append('<ul id='countriesList'></ul>');
	const numberCountries = cWifiSpeeds.length;
	for (i = 0; i < numberCountries; i++) {
	  $('#countriesList').append('<li><button>' + cWifiSpeeds[i].name + '</button></li>');
	}
}

$(document).ready(function() {
	addCountriesList();
	var loadingElementsList = $('.loading-elements-list').children();
	var indexOfActiveElement = 1;
	$('countries').on( 'click', 'li', function( event ) {
	    event.preventDefault();
	    let country = $(this).text();
	});
});
