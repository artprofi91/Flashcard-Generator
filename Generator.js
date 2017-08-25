var inquirer = require('inquirer');
var colors = require('colors');
var command = process.argv[2];
var BasicCard = require("./BC");
var ClozeCard = require("./CC");
var ShowCards = require("./SC");

Generator();


function Generator() {
	if (command === 'basic'){
		inquirer.prompt([{
			name: 'front',
			message: 'Enter front of card: '
		},{
			name: 'back',
			message: 'Enter back of card: '
		}]).then(function(answers){
			var basicFlashCard = new BasicCard(answers.front, answers.back);
			basicFlashCard.save();
		});
	} else if (command === 'cloze'){
		inquirer.prompt([{
			name: 'text',
			message: 'Enter full text: '
		},{
			name: 'cloze',
			message: 'Enter cloze argument: '
		}]).then(function(answers){
			var search = answers.text.search(answers.cloze);
			var substring = answers.text.substring(0,search) + '________' + answers.text.substring(search + answers.cloze.length);
			var clozeCard = new ClozeCard(substring, answers.cloze);
			clozeCard.save();
		});
	} else if(command === 'show'){
        ShowCards();
    } else if(command === 'rules'){
        console.log('Please enter "basic" to create a flashcard.'.white);
        console.log('Please enter "cloze" to create a flashcard.'.blue);
        console.log('Please enter "show" to see all created flashcards.'.red);
	} else {
		console.log('Please enter "rules" to see to see the list of all possible commands.'.bold.red);
	}
}



