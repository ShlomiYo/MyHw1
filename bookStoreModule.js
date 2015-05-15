
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

	for(i = 0 ; i < emp.length; i++){


		if(maxString < emp[i].booksSold){

			maxString = emp[i].booksSold;
			temp = i;
		}

	}


	return emp[temp];
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


	return mem[temp];
}






exports.getAllEmp = function() {


	return emp;
}

exports.getAllMem = function() {


	return mem;
}

exports.getAllBooks = function() {


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

		return null
	}
	else{
		
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

		str = null;
	}

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

		str = null;
	}


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

		str = null;
	}


	return str;

}
