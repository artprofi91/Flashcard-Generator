// fs package allows to append the cards.txt file
var fs  = require('fs');
// This function creates Cloze Cards with or without using the new keyword
function ClozeCard(text, cloze){
	this.text = text;
	this.cloze = cloze;
	this.save = function() {
		fs.appendFile("cards.txt", "{front: " + text +  ", back: " + cloze + "}, ", function(err){
			if(err) console.log(err);
		});
	};
}

// export our function to Generator.js
module.exports = ClozeCard;