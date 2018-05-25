/*
The Lost Library of Socrates
Written by: Matthew Hill
Date of last edit: 16 November 2017
Contact: matthillprogramdeveloper@gmail.com

All comments removed on 6 March 2018 to be used as an exercise in
Code Bootcamp at theClubhou.se
 */

//
var user;

var library = ["television","cat","banana","computer","ocean","couch","refrigerator","forest","printer","shampoo","table","vehicle","controller","shelf","fence","ottoman","cabinet","coaster","fence","bushes","picture","frame","weight"];


/* function below sets up the context for the puzzle
 */
class Puzzle{

    constructor(word){
        this.word = word;
        this.answer = this.wordToArray(word);
        this.currentBoard = this.buildBoard(word);
        this.lettersGuessed = [];
    }
    // #com
    wordToArray(word){
        let board = [];
        for(let letter of word){
            board.push(letter);
        }
        return board;
    }
    //for loop to determin the number of blank spaces to return
    buildBoard(word){
        let board = [];
        for(let letter of word){
            board.push("_");
        }
        return board;
    }
    //function called on enter of guess letter text box
    guessLetter(letter){
        if(this.lettersGuessed.indexOf(letter) === -1){//Checks if the letter has been guessed before
            this.lettersGuessed.push(letter);// If it has not bee nguessed it adds it to the lettersGuessed array
            if(this.answer.indexOf(letter) !== -1){// #com
                for(let i = 0; i < this.answer.length; i++) {//for loop to run through letters
                    if (this.answer[i] === letter) {
                        this.currentBoard[i] = letter;// #com
                    }
                }
                return true;//letter is part of the answer

            }else{//letter is not a piece of the puzzle
                return false;// #com
            }
        }else{//letter is a part of the puzzle and already on the board
            return "You already guessed this letter!";
        }
    }
    //function called on enter of guess word text box, matches anwer length to guess length
    guessWord(word){
        let winner = false;
        let guess = this.wordToArray(word);

        if (guess.length === this.answer.length) {
            for (let i = 0; i < guess.length; i++) {
                if (guess[i] !== this.answer[i]) {
                    winner = false;
                    break;
                } else {
                    winner = true;
                }
            }
        }else{
            winner = false;
        }
        //#TernaryStatement
        return winner ? true:false;
    }


}

/*
information stored in the header division at level 1 you get the following items
*/
class User{

    constructor(name){
        this.name = name;
        this.level = 1;
        this.score = 0;
        this.guesses = 10;
        this.puzzle = null;
        this.specials = {inventory:{Streln: 1,Vowels: 1,PickALetter: 1,FreeLetter: 1 }};

    }

    useSpecial(type){
        //This is going to use buttons to start the function
        let special = this.specials.inventory;
        console.log("Made it inside the use special function."); //Console used for debugging
        switch(type){//matches value of specials based on following case clauses

            case "Streln":
                if(special.Streln < 1){
                    alert("You do not have any Streln special abilities to use.")
                }else{
                    let streln = new Streln();
                    this.puzzle = streln.use(this.puzzle);
                    special.Streln--;
                }
                break;

            case "Vowels":
                if(special.Vowels < 1){
                    alert("You do not have any Vowels special abilities to use.")
                }else{
                    let vowels = new Vowels();
                    this.puzzle = vowels.use(this.puzzle);
                    special.Vowels--;
                }
                break;

            case "PickALetter":
                if(special.PickALetter < 1){
                    alert("You do not have any Pick A Letter special abilities to use.")
                }else{
                    let pickALetter = new PickALetter();
                    this.puzzle = pickALetter.use(this.puzzle);
                    special.PickALetter--;
                }
                break;

            case "FreeLetter":
                if(special.FreeLetter < 1){
                    alert("You do not have any Free Letter special abilities to use.")
                }else{
                    let freeLetter = new FreeLetter();
                    this.puzzle = freeLetter.use(this.puzzle);
                    special.FreeLetter--;
                }
                break;


        }

    }
//function for how guessing a letter changes score, 13 point for correct, 1 less guess for incorrect
    guessLetter(letter){
        let res = this.puzzle.guessLetter(letter);

        switch(res){
            case true:
                this.score +=13;
                return true;
                break;

            case false:
                this.guesses --;
                return false;
                break;

            case "You already guessed this letter!":
                alert(res);
                return true;
                break;

        }

    }
//function for guessing the correct word, winning or reduction in guess count remaining
    guessWord(word){
        let res = this.puzzle.guessWord(word);
        if(res){
            YouWin();
        }else{
            alert("Incorrect Guess");
            this.guesses --;
        }

    }


}




/*
class referenced later with properties of the different speicals references current puzzle and returns new state of the puzzle
 */
class Special{

    use(currentPuzzle){
        let puzzle = currentPuzzle;
        //do some stuff
        return puzzle;
    }
}

/*
identifies the letters that will be added to the guessLetter array on click of Streln button
 */

class Streln extends Special{
    use(currentPuzzle){
        let puzzle = currentPuzzle;
        puzzle.guessLetter("s");
        puzzle.guessLetter("t");
        puzzle.guessLetter("r");
        puzzle.guessLetter("e");
        puzzle.guessLetter("l");
        puzzle.guessLetter("n");

        return puzzle;
    }
}
//identifies vowels that will be added to the guessLetter array on click of vowels button
class Vowels extends Special{
    use(currentPuzzle){
        let puzzle = currentPuzzle;
        puzzle.guessLetter("a");
        puzzle.guessLetter("e");
        puzzle.guessLetter("i");
        puzzle.guessLetter("o");
        puzzle.guessLetter("u");
        return puzzle;
    }
}
/*
references menu in keeper.js to generate a pop up to select the number to indicate which letter you would like revealed
*/
class PickALetter extends Special{
    use(currentPuzzle){
        let puzzle = currentPuzzle;
        let menu = new Menu("Pick a space to reveal the letter",puzzle.currentBoard);
        let choice = "1";
        let chosenIndex = -1;
        while (choice !== "_"){//
            chosenIndex = menu.displayReturnInt();
            choice = puzzle.currentBoard[chosenIndex];
            /*#com
            */
        }
        let letter = puzzle.answer[chosenIndex];
        puzzle.guessLetter(letter);
        return puzzle;
    }
}


//function runs through the current puzzle to identify blanks and choose a letter to submit
class FreeLetter extends Special{
    use(currentPuzzle){
        let puzzle = currentPuzzle;
        let remaining = [];
        for(let i = 0; i < puzzle.answer.length; i++){
            if(puzzle.currentBoard[i] === "_") {
                remaining.push(puzzle.answer[i]);
            }
        }
        console.log("remaining",remaining);
        let randIndex = Math.round((Math.random()*(remaining.length-1)));
        console.log("random letter chosen",remaining[randIndex]);
        puzzle.guessLetter(remaining[randIndex]);
        return puzzle;
    }
}




//

function letterGuess(key){//
    if(key.keyCode === 13){
        key.preventDefault();//prevents typical action from happening, needed to only submit one field 
        let letter = document.getElementById("letterGuess").value.toLowerCase();
        let alphabet =/[a-zA-z]*/g;
        let testLetter = letter.replace(alphabet,"");
        if(letter.length === 1 && testLetter.length === 0){
            let guess = user.guessLetter(letter);//funtion passes the chosen "letter" as the argument to the .guessLetter()function of the user class
                                                    //#com
                console.log("the guess here is "+guess);
                if (!guess){
                    alert(letter+ " is not a piece of the current puzzle.")
                }
        }else{
            alert("Your guess was not a valid letter!");

        }
        document.getElementById("letterGuess").value = "";
        let win = user.puzzle.guessWord(user.puzzle.currentBoard);
        if (win){
            YouWin();
        }

        UpdateBoard();
        UpdateHeader();
        if(user.guesses < 1){
            YouLose();
        }
    }

}

function wordGuess(key){//#com
    if(key.keyCode === 13){
        key.preventDefault();//prevents typical action from happening, needed to only submit one field
        let word = document.getElementById("wordGuess").value.toLowerCase().trim();
        let alphabet =/[a-zA-z]*/g;
        let testWord = word.replace(alphabet,"");

        if(word.length > 0 && testWord.length === 0){
            user.guessWord(word);

        }else{
            alert("Your guess contained invalid or no characters!")
        }
        document.getElementById("wordGuess").value = "";
        let win = user.puzzle.guessWord(user.puzzle.currentBoard);
        if (win){
            YouWin();
        }

        UpdateBoard();
        UpdateHeader();
        if(user.guesses < 1){
            YouLose();
        }
    }

}

//
function Specials(type){
    user.useSpecial(type);

    let win = user.puzzle.guessWord(user.puzzle.currentBoard);
    if (win){
        YouWin();
    }
    UpdateInventory();
    UpdateBoard();
    UpdateHeader();
}

//
function UpdateHeader(){
    document.getElementById("header").innerHTML = "";
    let header = document.createTextNode(user.name + "_______"+user.guesses+" guesses remain_______Level: "+user.level+"_______"+user.score+" points");
    document.getElementById("header").appendChild(header);
}
//
function UpdateBoard(){
    document.getElementById("board").innerHTML = "";
    let boardString = " ";
    user.puzzle.currentBoard.forEach(function(v){
        boardString += v;
        boardString +=" ";
    });
    let board = document.createTextNode(boardString);
    document.getElementById("board").appendChild(board);
}
//
function UpdateInventory(){
    document.getElementById("streln").innerHTML = "";
    let streln = document.createTextNode(user.specials.inventory.Streln);
    document.getElementById("streln").appendChild(streln);

    document.getElementById("vowels").innerHTML = "";
    let vowels = document.createTextNode(user.specials.inventory.Vowels);
    document.getElementById("vowels").appendChild(vowels);

    document.getElementById("pickALetter").innerHTML = "";
    let pickALetter = document.createTextNode(user.specials.inventory.PickALetter);
    document.getElementById("pickALetter").appendChild(pickALetter);

    document.getElementById("freeLetter").innerHTML = "";
    let freeLetter = document.createTextNode(user.specials.inventory.FreeLetter);
    document.getElementById("freeLetter").appendChild(freeLetter);
}


//
function Main(){
    let validator = new Validator();
    let userName = validator.getString("Please enter your name.");
    if (userName === null){
        document.getElementById("header").innerHTML = "";
        document.getElementById("board").innerHTML = "User quit the game!";
        document.getElementById("guess").innerHTML = "";
        document.getElementById("specials").innerHTML = "";

    }else{
        user = new User(userName);
        let randIndex = Math.round((Math.random()*(library.length-1)));
        user.puzzle = new Puzzle(library[randIndex]);

        UpdateHeader();
        UpdateInventory();
        UpdateBoard();
    }

}
//
function YouWin(){
    let types = ["Streln","Vowels","PickALetter","FreeLetter"];
    let randIndex1 = Math.round((Math.random()*(types.length-1)));
    let lettersLeft = 0;
    for(let letter of user.puzzle.currentBoard){
        if(letter = "_"){
            lettersLeft +=13;
        }
    }
    let score = ((user.puzzle.answer.length)*11)+lettersLeft;
    user.score += score;
    user.specials.inventory[types[randIndex1]]++;
    user.guesses++;
    user.level++;
    alert("The answer is "+user.puzzle.word.toUpperCase()+"!\nPoints awarded for completion: "+ score+"\nYou got a new special: "+types[randIndex1]+"\nYou got an extra guess!");

    let randIndex2 = Math.round((Math.random()*(library.length-1)));
    user.puzzle = new Puzzle(library[randIndex2]);

    UpdateHeader();
    UpdateBoard();
    UpdateInventory();

}
//
function YouLose(){
    document.getElementById("board").innerHTML = "Above is your final score.";
    document.getElementById("guess").innerHTML = "You have run out of guesses.";
    document.getElementById("specials").innerHTML = "Refresh the page to play again.";

}



Main();
