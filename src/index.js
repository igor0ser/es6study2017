var data = [
  { "country": "Portugal", "price": 1200, "date": "2017/09/20", "duration": 7 },
  { "country": "Spain", "price": 950, "date": "2017/10/01", "duration": 5 },
  { "country": "Lithuania", "price": 540, "date": "2017/10/16", "duration": 7 },
  { "country": "Greece", "price": 880, "date": "2017/09/05", "duration": 10 },
  { "country": "Marocco", "price": 590, "date": "2017/08/24", "duration": 12 },
  { "country": "Netherlands", "price": 640, "date": "2017/11/11", "duration": 3 },
  { "country": "France", "price": 1490, "date": "2017/09/08", "duration": 9 },
  { "country": "Norway", "price": 1840, "date": "2017/08/08", "duration": 11 },
  { "country": "United Kingdom", "price": 1120, "date": "2017/10/01", "duration": 6 },
  { "country": "Iceland", "price": 2100, "date": "2017/09/01", "duration": 10 },
];
console.log(data);

var root = document.getElementById('root');

var render = function(markup) {
  root.innerHTML = markup;
};

render('<pre>' + JSON.stringify(data, 2, ' ') +'</pre>');