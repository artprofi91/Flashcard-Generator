// fs package allows to append the cards.txt file
var fs  = require('fs');

// This function creates Basic Card with or without using the new keyword
function BasicCard(front, back){
	this.front = front;
	this.back = back;
	this.save = function(){
		fs.appendFile("cards.txt", "{front: " + front + ", back: " + back + "}, ", function(err){
			if(err) console.log(err);
		});
	};
}

// export our function to Generator.js
module.exports = BasicCard;