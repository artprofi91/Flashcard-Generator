// fs package allows to read the cards.txt file
var fs  = require('fs');

// colors package allows to show our data on the white background with the black font
var colors = require('colors');

// This function shows the data from the cards.txt file
function ShowCards() {
	fs.readFile("cards.txt", "utf8", function(error,data){
		if(error) console.log(error);
		console.log("[" + data.bgWhite.black + "]");
	});
}

// export our function to Generator.js
module.exports = ShowCards;