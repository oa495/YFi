$(document).ready(function() {
	// What animation should be displayed on the screen
	var indexOfActiveElement = 0;
	var activeElement = 'opening';
	var cWifiSpeeds = {
		'Paraguay': { 
			averageSpeed: 1.400,
			peakSpeed: 10.1,
		},
		'Egypt': {
			averageSpeed: 2.000,
			peakSpeed: 17
		},
		'Namibia': {
			averageSpeed: 2.900,
			peakSpeed: 24.3
		},
		'Nigeria': {
			averageSpeed:	3.900,
			peakSpeed: 29.1
		},
		'Iran': {
			averageSpeed: 4.700,
			peakSpeed: 25.2
		},
		'Morocco': {
			averageSpeed: 5.200,
			peakSpeed: 25.9
		},
		'Peru': {
			averageSpeed:	6.200,
			peakSpeed: 47.5
		},
		'Argentina': {
			averageSpeed: 6.300,
			peakSpeed:	40.3
		},
		'India': {
			averageSpeed:	6.500,
			peakSpeed: 41.4
		},
		'South Africa': {
			averageSpeed: 6.700,
			peakSpeed: 32.4
		},
		'Saudi Arabia': {
			averageSpeed: 6.700,
			peakSpeed: 52.3
		},
		'Mexico': {
			averageSpeed: 7.500,
			peakSpeed: 45.2
		},
		'China': {
			averageSpeed: 7.600,
			peakSpeed: 45.9
		},
		'Greece': {
			averageSpeed: 7.900,
			peakSpeed: 39.7
		},
		'UAE': {
				averageSpeed: 8.600,
				peakSpeed: 81.1
		},
		'Chile': {
			averageSpeed:	9.300,
			peakSpeed:	65.5
		},
		'France': {
			averageSpeed:	10.800,
			peakSpeed: 49.7
		},
		'Australia': {
			averageSpeed: 11.100,
			peakSpeed: 55.7
		},
		'Russia': {
			averageSpeed:	11.800,
			peakSpeed: 69.3
		},
		'Kenya': {
			averageSpeed: 2.200,
			peakSpeed: 38.5
		},
		'Israel': {
			averageSpeed: 13.700,
			peakSpeed: 99.1
		},
		'Thailand': {
			averageSpeed:	16.000,
			peakSpeed:	106.6
		},
		'United Kingdom': {
			averageSpeed: 16.900,
			peakSpeed: 76.1
		},
		'Taiwan': {
			averageSpeed: 16.900,
			peakSpeed: 94.7
		},
		'United States': {
			averageSpeed: 18.700,
			peakSpeed: 86.5
		},
		'Japan': {
			averageSpeed:	20.200,
			peakSpeed:94.5
		},
		'Singapore': {
			averageSpeed: 20.300,
			peakSpeed:	184.5
		},
		'Hong Kong': {
			averageSpeed: 21.900,
			peakSpeed: 129.5
		},
		'Norway': {
			averageSpeed: 23.500,
			peakSpeed: 85.9,
		},
		'South Korea': {
			averageSpeed: 28.600,
			peakSpeed: 121
		}
	};

	// approx. size in bits
	var sizeToLoad = {
		'Netflix': 16000000,
		'Medium': 8800000,
		'Gmail': 1200000000,
		'LinkedIn': 16000000,
		'Instagram': 4800000,
		'Giphy': 65600000,
		'Twitter': 36000000
	};

	var country;
	var timerOn = false;

	addCountriesList(cWifiSpeeds);
	calculateDownloadTimes(cWifiSpeeds, sizeToLoad);

	const loadingElementsList = $('.loading-elements-list').children();
	// If user chooses a country

	$('.countries').on('click', 'li', function(event) {
		// set country
		let clickedCountry = $(this).text();
		if (clickedCountry !== country) {
			country = $(this).text();
			play(sizeToLoad, cWifiSpeeds, loadingElementsList);
		}
	});

	$('.arrow.left').on('click', function(event) {
		if (indexOfActiveElement !== 0) {
			loadingElementsList.eq(indexOfActiveElement).toggleClass('active');
			indexOfActiveElement--;
			loadingElementsList.eq(indexOfActiveElement).toggleClass('active');
		}
	});

	$('.arrow.right').on('click', function(event) {
		console.log('arrow right!');
    if (indexOfActiveElement !== loadingElementsList.length-1 ) {
    	// reset everything
    	play(sizeToLoad, cWifiSpeeds, loadingElementsList);

    	loadingElementsList.eq(indexOfActiveElement).toggleClass('active');
			indexOfActiveElement++;
			loadingElementsList.eq(indexOfActiveElement).toggleClass('active');
		}
	});
});

function showLoadedContent() {

}

function startTimer(s) {
	console.log(s);
	let timer = $('.timer');
	var numAnim = new CountUp(timer, 0, s);
	numAnim.start(showLoadedContent);
}

function play(sizeToLoad, wifiSpeeds, loadingElementsList) {
	for (var element in sizeToLoad) {
		if ((indexOfActiveElement !== 0) && (indexOfActiveElement !== loadingElementsList.length))
		if (loadingElementsList.eq(indexOfActiveElement).contains(element)) {
			console.log('this is the current animation:' + element);
			// get country download time for that service, i.e get how long it'll take to download a netflix episode
			let downloadTime = wifiSpeeds[country]; // in seconds
			// set timer on to true
			timerOn = true;
			startTimer(downloadTime);
		}
	}
}

function addCountriesList(wifiSpeeds){
	$('.countries').append('<ul id="countriesList"></ul>');
	for (var country in wifiSpeeds) {
	  $('#countriesList').append('<li><button>' + country + '</button></li>');
	}
}

function calculateDownloadTimes(wifiSpeeds, sizeToLoad) {
	let numberCountries = wifiSpeeds.length;
	for (var country in wifiSpeeds) {
		// convert to bits per second
		console.log(country);
		console.log(wifiSpeeds[country].averageSpeed);
	  let speed = (wifiSpeeds[country].averageSpeed * 1000) * 1000;
	  for (var element in sizeToLoad) {
	  	 if (sizeToLoad.hasOwnProperty(element)) {
	  	 	console.log(sizeToLoad[element], speed);
	  	 	console.log(sizeToLoad[element] / speed);
		    wifiSpeeds[country][element] = sizeToLoad[element] / speed;
		    console.log(country);
		    console.log(element + ' ' + wifiSpeeds[country][element] + ' seconds');
		  }
	  }
	}
}

