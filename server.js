

var url = require("url");
var bookStoreModule = require('./bookStoreModule');
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;




app.use(express.static("publicDir"));


app.get("/oldestMember", function(req, res){

	var msg = bookStoreModule.oldestMember();

    res.setHeader('Content-Type', 'application/json');
	app.set("json spaces", 1);
	res.json(msg);
});




app.get("/oldestEmp", function(req, res){

	var msg = bookStoreModule.oldestEmp();

    res.setHeader('Content-Type', 'application/json');
	app.set("json spaces", 1);
	res.json(msg);
});




app.get("/bestSeller", function(req, res){

	var msg = bookStoreModule.bestSeller();

    res.setHeader('Content-Type', 'application/json');
	app.set("json spaces", 1);
	res.json(msg);
});



app.get("/getAllEmp", function(req, res){

	var msg = bookStoreModule.getAllEmp();

    res.setHeader('Content-Type', 'application/json');
	app.set("json spaces", 1);
	res.json(msg);
});



app.get("/getAllMem", function(req, res){

	var msg = bookStoreModule.getAllMem();

    res.setHeader('Content-Type', 'application/json');
	app.set("json spaces", 1);
	res.json(msg);
});



app.get("/getAllBooks", function(req, res){

	var msg = bookStoreModule.getAllBooks();

    res.setHeader('Content-Type', 'application/json');
	app.set("json spaces", 1);
	res.json(msg);
});



app.get("/BooksByID/:bookID", function(req, res){

	var msg = bookStoreModule.getBookById(req.params.bookID);

    res.setHeader('Content-Type', 'application/json');
	app.set("json spaces", 1);
	res.json(msg);
});




app.get("/BooksByName/:bookName", function(req, res){

	var msg = bookStoreModule.getBookByName(req.params.bookName);

    res.setHeader('Content-Type', 'application/json');
	app.set("json spaces", 1);
	res.json(msg);
});


app.get("/find", function(req, res){

	var urlPath = url.parse(req.url, true);
	var query = urlPath.query;
	var msg = null;


	if(query.price != null && query.title == null){


		msg = bookStoreModule.getBookByPrice(query.price);


	}
	else if(query.title != null && query.price == null){


		msg = bookStoreModule.getBookByTitle(query.title);

	}
	else if(query.title != null && query.price != null){


		msg = bookStoreModule.getBookByBoth(query.price, query.title);


	}
	else{

		msg= "Custom Error Page, Params should be sent as : URL/find ? price=xx & title=xx";
	}


    res.setHeader('Content-Type', 'application/json');
	console.log('For Your Attention, the return object is a json ARRAY, and might contain more then one result');
	res.json(msg);


});




app.get("*", function(req, res){ // anything else was typed

			    res.sendFile( __dirname + "/help.html");
});




app.listen(port);



console.log('listening on port '+port);