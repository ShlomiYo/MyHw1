


var employees = [

    {"firstName":"Ned", "lastName":"Starks", "booksSold":108, "age":56},
    {"firstName":"Shlomi", "lastName":"Yosef", "booksSold":98, "age":24},
    {"firstName":"David", "lastName":"Halfon", "booksSold":87, "age":25},
    {"firstName":"Jon", "lastName":"Snow", "booksSold":13, "age":30},
    {"firstName":"Yoni", "lastName":"Nezer", "booksSold":103, "age":26},
    {"firstName":"Ronny", "lastName":"Cabara", "booksSold":230, "age":28},
    {"firstName":"Shachar", "lastName":"Romi", "booksSold":75, "age":24},
    {"firstName":"Arya", "lastName":"Starks‬‏", "booksSold":311, "age":18},
    {"firstName":"Cersei", "lastName":"Lannister", "booksSold":61, "age":41}

];


var books = [

    {"id":1, "name":"Game Of Thrones", "author":"George R. R. Martin", "genre":"Fantasy, political strategy, epic fantasy", "price":160, "title":"easy" },
    {"id":2, "name":"The Hunger Games", "author":"Suzanne Collins", "genre":"Adventure, science fiction, drama, action", "price":120, "title":"medium" },
    {"id":3, "name":"The Fault in Our Stars", "author":"John Green", "genre":"Realistic, fiction", "price":80, "title":"hard" },
    {"id":4, "name":"The Elephant Tree", "author":" R.D. Ronald", "genre":"Rock, Blues, Doom, Stoner with a garnish of parsley", "price":120, "title":"easy" }
    
];


var members = [

    {"firstName":"Ned", "lastName":"Starks", "memberSince":1998, "age":56},
    {"firstName":"Shlomi", "lastName":"Yosef", "memberSince":2012, "age":24},
    {"firstName":"David", "lastName":"Halfon", "memberSince":2003, "age":25},
    {"firstName":"Jon", "lastName":"Snow", "memberSince":2008, "age":30},
    {"firstName":"Cersei", "lastName":"Lannister", "memberSince":1988, "age":41}
    
];






exports.getEmployees = function() {


	return employees;
}

exports.getMembers= function() {


	return members;
}

exports.getBooks = function() {


	return books;
}



