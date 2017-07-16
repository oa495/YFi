var loadingElementsList;
var indexOfActiveElement = 0;
var timerOn = false;
var country;
var numAnim;
var loaded = false;

$(document).ready(function() {
 // in mbps
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
   averageSpeed: 3.900,
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
   averageSpeed: 6.200,
   peakSpeed: 47.5
  },
  'Argentina': {
   averageSpeed: 6.300,
   peakSpeed: 40.3
  },
  'India': {
   averageSpeed: 6.500,
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
   averageSpeed: 9.300,
   peakSpeed: 65.5
  },
  'France': {
   averageSpeed: 10.800,
   peakSpeed: 49.7
  },
  'Australia': {
   averageSpeed: 11.100,
   peakSpeed: 55.7
  },
  'Russia': {
   averageSpeed: 11.800,
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
   averageSpeed: 16.000,
   peakSpeed: 106.6
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
   averageSpeed: 20.200,
   peakSpeed: 94.5
  },
  'Singapore': {
   averageSpeed: 20.300,
   peakSpeed: 184.5
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

 // approx. size in megabits
 var sizeToLoad = {
  'Netflix': 2400, // 300mb
  'Medium': 9.6, // 1.2mb
  'Gmail': 52560, // 6.57GB
  'LinkedIn': 17.6, // 2.2MB
  'Instagram': 6.048, // 752kb
  'Giphy': 96, // 12mb
  'Twitter': 24, // 3mb
  'Imgur': 9.6, // 1.2mb
  'Youtube': 8000, // 1GB
  'Facebook': 31.2, // 3.9MB
  'Messenger': 14.4// 1.8MB
 };

 addCountriesList(cWifiSpeeds);
 loadingElementsList = $('.loading-elements-list').children();
 calculateDownloadTimes(cWifiSpeeds, sizeToLoad);
 $('.loaded').addClass('hide');

 // If user chooses a country

 $('.countries').on('click', 'li', function(event) {
  // set country
  let clickedCountry = $(this).text();
  if (clickedCountry !== country) {
   showUnLoadedContent();
   country = $(this).text();
   $('#countriesList > li').removeClass('active-button');
   $(this).addClass('active-button');
  }
 });

 $('.arrow.left').on('click', function(event) {
  loadingElementsList.eq(indexOfActiveElement).toggleClass('active');
  if (indexOfActiveElement !== 0) {
   indexOfActiveElement--;
  }
  else indexOfActiveElement = loadingElementsList.length-1;
  loadingElementsList.eq(indexOfActiveElement).toggleClass('active');
  showUnLoadedContent();
 });

 $('.arrow.right').on('click', function(event) {
  loadingElementsList.eq(indexOfActiveElement).toggleClass('active');
    if (indexOfActiveElement !== loadingElementsList.length-1 ) {
   indexOfActiveElement++;
  }
  else indexOfActiveElement = 0;
  loadingElementsList.eq(indexOfActiveElement).toggleClass('active');
  showUnLoadedContent();
 });

 $('.reset').on('click', function(event) {
   showUnLoadedContent();
 });

 $('.play').on('click', function(event) {
  if (!loaded) {
   play(sizeToLoad, cWifiSpeeds, loadingElementsList);
  }
 });
});

function reset() {
 // reset timer (start over)
 // show unloaded content
 if (timerOn) {
  timerOn = false;
  numAnim.reset();
 }
}

function showUnLoadedContent() {
 reset();
 let loading = $('.loading');
 let loaded = $('.loaded');
 loading.removeClass('hide');
 loaded.addClass('hide');
 loaded = true;
}

function showLoadedContent() {
 reset();
 let parent = loadingElementsList.eq(indexOfActiveElement);
 let loading = parent.children('.loading');
 let loaded = parent.children('.loaded');
 loading.addClass('hide');
 loaded.removeClass('hide');
 loaded = false;

}

function startTimer(s) {
 timerOn = true;
 numAnim = new CountUp('timer', 0, s, 5);
 numAnim.start(showLoadedContent);
}

function play(sizeToLoad, wifiSpeeds, loadingElementsList) {
 if (country) {
  for (var element in sizeToLoad) {
   if ((indexOfActiveElement !== 0) && (indexOfActiveElement !== loadingElementsList.length)) {
    // Get text in element
    let text = loadingElementsList.eq(indexOfActiveElement).text();
    if (text.includes(element)) {
     // get country download time for that service, i.e get how long it'll take to download a netflix episode
     let downloadTime = wifiSpeeds[country][element]; // in seconds
     // set timer on to true
     timerOn = true;
     startTimer(downloadTime);
    }
   }
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
    let speed = wifiSpeeds[country].averageSpeed;
   for (var element in sizeToLoad) {
     if (sizeToLoad.hasOwnProperty(element)) {
      wifiSpeeds[country][element] = sizeToLoad[element] / speed;
    }
   }
 }
}