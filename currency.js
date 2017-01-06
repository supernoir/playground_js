(function($) {

	var USER_CURRENCIES = [
		{ 'name':'eur','value':1 },
		{ 'name':'usd','value':1.06 },
		{ 'name':'btc','value':.0012 },
		{ 'name':'yuan','value':7.31 }
	]

	function EUR(){
		return USER_CURRENCIES[0].value;
	}

	function USD(){
		return USER_CURRENCIES[1].value;
	}

	function BTC(){
		return USER_CURRENCIES[2].value; 
	}

	function getCurrency(a){
		return a
	}

	function title(loc){
		if(loc == 'de-DE'){
			return 'Ihre Währungen heute:'	
		} else if(loc == 'es-ES'){
		return 'Sus monedas hoy';
	}
		else {
			return 'Your currencies today:'
		}
	}


	function wraptoselectoption(option){
		return '<option value="' + option + '">' + option + '</option>';  
}

	function wraptolistitem(li){
		return '<li class="cc__listitem">' + li + '</li>'; 
	}

	function getCurrencyString(x,y){
		return getCurrency(x) + " " + y.toString().toUpperCase();
	}

	function displayCurrentCurrencies(){
		var currencyitem = USER_CURRENCIES.map(function(c){
			return wraptolistitem(getCurrencyString(c.value, c.name));
		})
		return currencyitem
	}

	function displayCurrencyOptions(){
	var currencyoptions = USER_CURRENCIES.map(function(o){
			return wraptoselectoption(o.name);
		})
		return currencyoptions
	}

console.log(displayCurrencyOptions());

	function convertCurr(c1,c2){
		return c1 * c2
	}

	console.log(convertCurr(baseCurr(),USD()));

	function setCurr(){
		return EUR();
	}

	function baseCurr(){
		return setCurr();
	}

	console.log("The base currency is " + baseCurr());


	$.doneEach('.foo', function(){
		$('.js-title').text(title('es-ES'));
		$('.js-currencieslist').append(displayCurrentCurrencies());
		$('.js-selectcurrency').append(displayCurrencyOptions());
	});


})(jQuery);
