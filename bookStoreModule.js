
var util = require('util');
var data = require('./data');

var emp, books, mem;



// ################################################## GET JSON DATA ###########################################################

// I separated the json from the bookStoreModule so it won't be so messy


emp = data.getEmployees();
mem = data.getMembers();
books = data.getBooks();
	

// ################################################## GET JSON DATA ###########################################################



exports.bestSeller = function() {

	var i = 0 , temp = 0;
	var maxString = emp[i].booksSold;
	var arr = [];
	
	for(i = 0 ; i < emp.length; i++){


		if(maxString < emp[i].booksSold){

			maxString = emp[i].booksSold;
			temp = i;
		}

	}


	console.log('bestSeller Function Ended Successfully');

	arr = emp[temp];
	return arr;
}





exports.oldestEmp = function() {

	var i = 0 , temp = 0;
	var maxString = emp[i].age;

	for(i = 0 ; i < emp.length; i++){


		if(maxString < emp[i].age){

			maxString = emp[i].age;
			temp = i;
		}

	}

	console.log('oldestEmp Function Ended Successfully');

	return emp[temp];
}





exports.oldestMember = function() {

	var i = 0 , temp = 0;
	var minString = mem[i].memberSince;

	for(i = 0 ; i < mem.length; i++){


		if(minString > mem[i].memberSince){

			maxString = mem[i].memberSince;
			temp = i;
		}

	}

	console.log('oldestMember Function Ended Successfully');

	return mem[temp];
}






exports.getAllEmp = function() {


	console.log('getAllEmp Function Ended Successfully');
	return emp;
}

exports.getAllMem = function() {


	console.log('getAllMem Function Ended Successfully');
	return mem;
}

exports.getAllBooks = function() {


	console.log('getAllBooks Function Ended Successfully');
	return books;
}






exports.getBookById = function(id) {

	var i=0 , check = 0;


	for(i = 0 ; i < books.length; i++){


		if(id == books[i].id){

			check = 1;
			break;
		}

	}



	if(check == 0){ // no book was found with this id

		console.log('getBookById Function Ended Successfully But NULL Returned');
		return null
	}
	else{
		
		console.log('getBookById Function Ended Successfully');
		return books[i];
	}

}







exports.getBookByName = function(name) {

	var i=0 , check = 0;


	for(i = 0 ; i < books.length; i++){


		if(name == books[i].name){

			check = 1;
			break;
		}

	}



	if(check == 0){ // no book was found with this id

		console.log('getBookByName Function Ended Successfully But NULL Returned');
		return null
	}
	else{
		
		console.log('getBookByName Function Ended Successfully');
		return books[i];
	}

}










exports.getBookByPrice = function(price) {

	var i=0 , j=0;
	var str = [];

	for(i = 0 ; i < books.length; i++){



		if(price == books[i].price){
			
				str[j] = books[i];
				j++;
		}

	}


	if(j==0){ // no books was found

		console.log('getBookByPrice Function Ended Successfully But NULL Returned');
		str = null;
	}

	console.log('getBookByPrice Function Ended Successfully');

	return str;
}





exports.getBookByTitle = function(title) {

	var i=0 , j=0;
	var str = [];

	for(i = 0 ; i < books.length; i++){



		if(title == books[i].title){
			
				str[j] = books[i];
				j++;
		}

	}


	if(j==0){ // no books was found

		console.log('getBookByTitle Function Ended Successfully But NULL Returned');
		str = null;
	}


	console.log('getBookByTitle Function Ended Successfully');
	return str;
}




exports.getBookByBoth = function(price, title) {



	var i=0 , j=0;
	var str = [];

	for(i = 0 ; i < books.length; i++){



		if(title == books[i].title && price == books[i].price){
			
				str[j] = books[i];
				j++;
		}

	}


	if(j==0){ // no books was found

		console.log('getBookByBoth Function Ended Successfully But NULL Returned');
		str = null;
	}


	console.log('getBookByBoth Function Ended Successfully');
	return str;

}
