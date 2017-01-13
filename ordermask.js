'use strict';

(function(){

/* INITIALIZE DATA */

	var userdepot = {
		'id': 123456789,
		'value': 1222333,
		'name': 'Depot',
		'acct': {
			'type': 'Abrechnungskonto',
			'balance': 15221.89,
			'limit': 200000,
		},
		'holding': 100,
		'sumtotal': 779.2,
	}

	var bond = {
		'name': 'Mitra Adiperkasa',
		'wkn': 'a1ewww',
		'isin': 'DE0006231004',
		'type': 'Aktie'
	}

	var tradingcentre = [
		{
			'name': 'Frankfurt',
			'fee': 2.95,
			'bid': 60.62,
			'ask': 77.92,
		},
	];

	var ordertype = [
		'Billigst/Market',
		'Direkthandel',
		'Limit',
		'Stop Buy / Stop Buy Limit',
		'OCO (One Cancels Other)',
		'Trailing Stop'
	]

	var validity = [
		'Tagesgültig',
		'Monatsende',
		'Längst möglich',
		'Eigenes Datum',
	]

	var currency = 'EUR';
	var orderamount, atprice = 0;
	var total, grandtotal = 0;





	/* CALCULATE VALUES  */

	orderamount = 1;

	function calculatePricePerOrder(){
		var priceperorder = tradingcentre[0].ask * orderamount;
		return priceperorder;
	}

console.log(calculatePricePerOrder());

})();
