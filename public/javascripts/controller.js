var epic = angular.module('epic', []);

epic.controller('epicCtrl', ['$scope',
function ($scope) {

    $scope.overlay = false;

    $scope.ranges = [
	"WTD","MTD","YTD"
	];

    $scope.currencies = [
	{name:"USD",desp:"U.S. Dollar",sign:"US$"},
	{name:"HKD",desp:"Hong Kong Dollar",sign:"HK$"},
	{name:"SGD",desp:"Singapore Dollar",sign:"S$"},
	{name:"AUD",desp:"Australian Dollar",sign:"A$"},
	{name:"TWD",desp:"Taiwan Dollar",sign:"NT$"},
	{name:"CAD",desp:"Canadian Dollar",sign:"C$"},
	{name:"CNY",desp:"Chinese Yuan",sign:""},
	{name:"JPY",desp:"Japan Yen",sign:""},
	{name:"EUR",desp:"Euro",sign:""},
	{name:"CHF",desp:"Swiss Franc",sign:"Fr"},
	{name:"GBP",desp:"Britsh Pound",sign:""},
];

$scope.currency_sel = $scope.currencies[0];
$scope.time_range = $scope.ranges[2];

$scope.articles = [
{'img': 'images/Samsung.jpg',
'title': 'Samsung Shows Galaxy S5 Reading Fingerprints to Fight IPhone',
'label': 'CIO Insight',
'color': '#333300'},
{'img': 'images/Yuan.jpg',
'title': 'Yuan Drops Most Since 2010 on Speculation PBOC Wants Volatility',
'label': 'UBS Research',
'color': '#003300'},
{'img': 'images/Singapore.jpg',
'title': 'Singapore Top Executive Pay Beats Hong Kong as Living Costs Jump',
'label': 'Market News',
'color': '#4c0000'},
{'img': 'images/SP500.jpg',
'title': 'S&P 500 Touches Record, Ukraine Stocks Jump; Coffee Gains',
'label': 'Impact News',
'color': '#444444'}
];

$scope.assets = [
   { "name": "UBS", "volume":3157394, "perf":2.19 },
   { "name": "DBS", "volume":223663, "perf":2.91 },
   { "name": "Oil", "volume":57894125, "perf":1.69 },
   { "name": "Gold", "volume":37213285, "perf":-3.15 },
   { "name": "Corn", "volume":213157, "perf":2.20 }
];

$scope.format = function(currency_sign, n){
    return currency_sign + " " + n.toFixed(2).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
   };
   
$scope.chgRange = function(selection){
    $scope.time_range = selection;
};

$scope.chgCurrency = function(selection){
    $scope.currency_sel = selection;
};

$scope.focus = function(target){
    if(	$scope.overlay ){
	$scope.blur(target);
    }else{
	document.getElementById('overlay').style.display = 'block';
	document.getElementById(target).style.zIndex = 11;
	$scope.overlay = true;
    }
};

$scope.blur = function(target){
    document.getElementById('overlay').style.display = 'none';
    document.getElementById(target).style.zIndex = 1;
    $scope.overlay = false;
};

}]);
