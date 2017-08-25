# Flashcard-Generator

I created the backend for a basic flashcard application.

The backend will essentially constitute an API that allows users to create two types of flashcards.

1. **Basic** flashcards, which have a front (_"What city is the capital of Texas?"_), and a back (_"Austin"_).

2. **Cloze-Deleted** flashcards, which present _partial_ text (_"The last storm of the category 3 to hit the U.S. was Hurricane ...... in October 2005 in Florida."_), and the full text when the user requests it (_"The last storm of the category 3 to hit the U.S. was Hurricane Wilma in October 2005 in Florida."_)

### Cloze Deletions

A **cloze deletion** is simply a sentence that has had some of its text removed. For example, given the sentence:

_"The last storm of the category 3 to hit the U.S. was Hurricane Wilma in October 2005 in Florida."_

...We can create a "cloze deletion" by removing the word _"Wilma"_:

_"The last storm of the category 3 to hit the U.S. was Hurricane ...... in October 2005 in Florida."_

This is useful for building flash card applications that forces users to remember the important part of a sentence ([cloze test](https://en.wikipedia.org/wiki/Cloze_test)).

A flash card built this way has three parts:

1. The **full text**. This is the entire sentence users need to remember:  _"The last storm of the category 3 to hit the U.S. was Hurricane Wilma in October 2005 in Florida."_

2. The **cloze deletion**. This is the text we've chosen to remove: _"Wilma"_.

3. The **partial text**. This is what we get if we remove the **cloze deletion** from the **full text**: _"The last storm of the category 3 to hit the U.S. was Hurricane ...... in October 2005 in Florida._

### How app works

Open your terminal and open Flashcard-Generator folder (`cd Flashcard-Generator`).

Type `node Generator.js` and press `Enter`. You will see the message - "Please enter "rules" to see to see the list of all possible commands".

![1](https://user-images.githubusercontent.com/28790452/29722393-288982dc-8986-11e7-9835-9a5ddca4da15.gif) 

Type `node Generator.js rules` and press `Enter`. 

![2](https://user-images.githubusercontent.com/28790452/29722394-288e94f2-8986-11e7-8007-d22ad939aa89.gif)

If you want to create Basic flashcard type `node Generator.js basic` and press `Enter`. After that you should enter front and back of the card.

![3](https://user-images.githubusercontent.com/28790452/29722395-28900404-8986-11e7-9fda-b55241202e57.gif)





### Hint

Don't forget to install these npm packages. To do it - run these commands one at a time.

```
npm install fs
npm install inquirer
npm install colors

```


