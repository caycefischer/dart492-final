// 2. Activate plugins on document.ready

$(document).ready(function() {

// Parse the query string into a key/value object
			var query = {};
			location.search.replace( /[A-Z0-9]+?=(\w*)/gi, function(a) {
				query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
			} );

			Reveal.initialize({
				// Display controls in the bottom right corner
				controls: true,

				// Display a presentation progress bar
				progress: true,

				// If true; each slide will be pushed to the browser history
				history: true,

				// Flags if mouse wheel navigation should be enabled
				mouseWheel: false,

				// Apply a 3D roll to links on hover
				rollingLinks: false,

				// UI style
				theme: query.theme || 'default', // default/neon

				// Transition style
				transition: query.transition || 'linear' // default/cube/page/concave/linear(2d)
			});


////////////////////////
// Life Expectancy
////////////////////////
Morris.Line({
  element: 'life-expectancy',
  data: [
{y: '1950', a:69 },
{y: '1955', a:70.3 },
{y: '1960', a:71.3 },
{y: '1965', a:72.1 },
{y: '1970', a:73 },
{y: '1975', a:74.2 },
{y: '1980', a:75.8 },
{y: '1985', a:76.8 },
{y: '1990', a:77.8 },
{y: '1995', a:78.5 },
{y: '2000', a:79.7 },
{y: '2005', a:80.5 },
{y: '2010', a:81.2 },
{y: '2015', a:81.8 },
{y: '2020', a:82.9 },
{y: '2025', a:82.3 },
{y: '2030', a:82.9 },
{y: '2035', a:83.4 },
{y: '2040', a:84 },
{y: '2045', a:84.5 },
{y: '2050', a:85.1 }
  ],
  xkey: 'y',
  ykeys: ['a'],
  ymax: 90,
  ymin: 60,
  yInterval: 5,
  labels: [''], // include comma here
  units: '',
  parseTime: false,

  lineWidth: 7,
  lineColors: ['#0b62a4', '#ed8f30'],
  pointSize: 5,
  pointStroke: "#031c2f",
      
  gridLineColor: '#313131',
  gridTextColor: '#515151',
  gridStrokeWidth: 0.5,

  hoverPaddingX: 10,
  hoverPaddingY: 5,
  hoverMargin: 10,
  hoverFillColor: '#212121',
  hoverBorderColor: '#353535',
  hoverBorderWidth: 0,
  hoverOpacity: 0.9,
  hoverLabelColor: '#ccc',
  hoverFontSize: 14,  
  hideHover: true
});


////////////////////////
// Elderly Population
////////////////////////
Morris.Line({
  element: 'elderly-pop',
  data: [
{y: '1950', a: 7.5},
{y: '1955', a: 7.7},
{y: '1960', a: 7.7},
{y: '1965', a: 7.7},
{y: '1970', a: 7.9},
{y: '1975', a: 8.5},
{y: '1980', a: 9.4},
{y: '1985', a: 10.3 },
{y: '1990', a: 11.3 },
{y: '1995', a: 12.0 },
{y: '2000', a: 12.6 },
{y: '2005', a: 13.1 },
{y: '2010', a: 14.1 },
{y: '2015', a: 16.1 },
{y: '2020', a: 18.5 },
{y: '2025', a: 21.3 },
{y: '2030', a: 24.1 },
{y: '2035', a: 25.6 },
{y: '2040', a: 26.5 },
{y: '2045', a: 27.2 },
{y: '2050', a: 28.0 }
  ],
  xkey: 'y',
  ykeys: ['a'],
  ymax: 35,
  ymin: 5,
  yInterval: 5,
  labels: [''], // include comma here
  units: '%',
  parseTime: false,

  lineWidth: 7,
  lineColors: ['#0b62a4', '#ed8f30'],
  pointSize: 5,
  pointStroke: "#031c2f",
      
  gridLineColor: '#313131',
  gridTextColor: '#515151',
  gridStrokeWidth: 0.5,

  hoverPaddingX: 10,
  hoverPaddingY: 5,
  hoverMargin: 10,
  hoverFillColor: '#212121',
  hoverBorderColor: '#353535',
  hoverBorderWidth: 0,
  hoverOpacity: 0.9,
  hoverLabelColor: '#ccc',
  hoverFontSize: 14,  
  hideHover: true
});


/////////////////////////////
// Elderly Population 2
/////////////////////////////
Morris.Line({
  element: 'elderly-pop2',
  data: [
{y: '1950', a: 7.5, b: 7.5 },
{y: '1955', a: 7.7, b: 7.7 },
{y: '1960', a: 7.7, b: 7.7 },
{y: '1965', a: 7.7, b: 7.7 },
{y: '1970', a: 7.9, b: 7.9 },
{y: '1975', a: 8.5, b: 8.5 },
{y: '1980', a: 9.4, b: 9.4 },
{y: '1985', a: 10.3, b: 10.3 },
{y: '1990', a: 11.3, b: 11.3 },
{y: '1995', a: 12.0, b: 12.0 },
{y: '2000', a: 12.6, b: 12.6 },
{y: '2005', a: 13.1, b: 13.1 },
{y: '2010', a: 14.1, b: 14.1 },
{y: '2015', a: 16.1, b: 16.1 },
{y: '2020', a: 18.5, b: 18.5 },
{y: '2025', a: 21.3, b: 21.3 },
{y: '2030', a: 24.1, b: 24.4 },
{y: '2035', a: 25.6, b: 26.7 },
{y: '2040', a: 26.5, b: 28.8 },
{y: '2045', a: 27.2, b: 31.2 },
{y: '2050', a: 28.0, b: 33.8 }
  ],
  xkey: 'y',
  ykeys: ['a', 'b'],
  ymax: 35,
  ymin: 5,
  yInterval: 5,
  labels: ['', ''], // include comma here
  units: '%',
  parseTime: false,

  lineWidth: 7,
  lineColors: ['#0b62a4', '#ed8f30'],
  pointSize: 5,
  pointStroke: "#031c2f",
      
  gridLineColor: '#313131',
  gridTextColor: '#515151',
  gridStrokeWidth: 0.5,

  hoverPaddingX: 10,
  hoverPaddingY: 5,
  hoverMargin: 10,
  hoverFillColor: '#212121',
  hoverBorderColor: '#353535',
  hoverBorderWidth: 0,
  hoverOpacity: 0.9,
  hoverLabelColor: '#ccc',
  hoverFontSize: 14,  
  hideHover: true
});    


/////////////////////////////
// Cancer Survival Rate
/////////////////////////////
Morris.Line({
  element: 'cancer',
  data: [
{y: '1975', a: 48.9 },
{y: '1976', a: 49.3 },
{y: '1977', a: 49.2 },
{y: '1978', a: 49.3 },
{y: '1979', a: 48.9 },
{y: '1980', a: 49.3 },
{y: '1981', a: 50.1 },
{y: '1982', a: 50 },
{y: '1983', a: 50.9 },
{y: '1984', a: 51.3 },
{y: '1985', a: 52.7 },
{y: '1986', a: 53.6 },
{y: '1987', a: 54.9 },
{y: '1988', a: 55.6 },
{y: '1989', a: 56 },
{y: '1990', a: 57.9 },
{y: '1991', a: 60.2 },
{y: '1992', a: 62 },
{y: '1993', a: 61.4 },
{y: '1994', a: 61.1 },
{y: '1995', a: 61.7 },
{y: '1996', a: 62.6 },
{y: '1997', a: 63.4 },
{y: '1998', a: 64.1 },
{y: '1999', a: 65.3 },
{y: '2000', a: 66 },
{y: '2001', a: 66.9 },
{y: '2002', a: 67.3 },
{y: '2003', a: 66.7 }
  ],
  xkey: 'y',
  ykeys: ['a'],
  ymax: 80,
  ymin: 30,
  yInterval: 5,
  labels: [''], // include comma here
  units: '%',
  parseTime: false,

  lineWidth: 7,
  lineColors: ['#0ba23d'],
  pointSize: 5,
  pointStroke: "#031c2f",
      
  gridLineColor: '#313131',
  gridTextColor: '#515151',
  gridStrokeWidth: 0.5,

  hoverPaddingX: 10,
  hoverPaddingY: 5,
  hoverMargin: 10,
  hoverFillColor: '#212121',
  hoverBorderColor: '#353535',
  hoverBorderWidth: 0,
  hoverOpacity: 0.9,
  hoverLabelColor: '#ccc',
  hoverFontSize: 14,  
  hideHover: true
});



});