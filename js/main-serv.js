angular.module('mainApp').factory('mainServ', function mainServ(people) {

	function __log(msg) {
    	console.log(msg);
  	}

  	function getPeople() {
  		return people;
  	}

  	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
	  	while (0 !== currentIndex) {
	    	randomIndex = Math.floor(Math.random() * currentIndex);
	    	currentIndex -= 1;
	    	temporaryValue = array[currentIndex];
	    	array[currentIndex] = array[randomIndex];
	    	array[randomIndex] = temporaryValue;
	  	}
	  	return array;
	}

	function getItems() {
		var i, items;
		items = shuffle(getPeople());
		for (i = 0; i < items.length; i++) {
			items[i].index = i;
			items[i].img = items[i].img || ('img/' + items[i].name.split(' ').join('_') + '.jpg');
			items[i].score = items[i].score || 3;
			items[i].wiki = 'https://en.wikipedia.org/wiki/' + (items[i].wiki || items[i].name.split(' ').join('_'));
		}
		return items;
	}

  	return {
    	__log: __log,
    	getItems: getItems    
  	}

});

