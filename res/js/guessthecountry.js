
const start = document.getElementById("startBtn");

//SPRÁVNÁ ODPOVĚĎ NA OTÁZKU--------------------------
let correctValue = "";
let questionNumber = 0;


/*
//Class
class Guessthecountry{
    static imgData;
    constructor(countryID){
        this.countryID = countryID;
        this.img = new Image();
        this.img.src = this.path;
        console.log(this.img.src);
    }

}
*/
//USER ODPOVĚĎ NA OTÁZKU-----------------------------
//co napise user do divu
const input = document.getElementById("input");
const inputValue = input.value;


//HIDE ELEMENT----------------------------------------
const hideElement = (element) => {
    element.style.display = "none";
};
//SHOW ELEMENT----------------------------------------
const showElement = (element) => {
    element.style.display = "initial"};
 

//funkce na zjisteni toho co user napsal do inputu--------------------------------
function userAnswer() {
    const answerValue = document.querySelector('input').value;
    console.log(answerValue);
}


//kdyz user da enter----------------------------
input.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
    userAnswer();
    buildGame();
    //zabrani refreshnuti stranky--------------------------------------------------------
    e.preventDefault();
    //smaze to co je napsane v poli kdyz user zmackne enter-------------------------------
     e.currentTarget.value = "";
    }


});


//GAME----------------------
const buildGame = async () =>{
    const file = await fetch("./res/data/guessthecountry.json");
    const data = await file.json();

    

//GENERATING RANDOM NUMBNERS----------------------
let generatedNumbers = [];
function generateRandomNumber() {
    
    if (generatedNumbers.length === data.length) {
        generatedNumbers = [];
    }

    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * data.length); //náhodné číslo
    } while (generatedNumbers.includes(randomNumber)); // Pokud se číslo již nachází v poli, generuje nové

    generatedNumbers.push(randomNumber); // Přidání číslo do pole generovaných čísel
    return randomNumber;
    }

    let actualNum = generateRandomNumber();
    console.log( "cislo otazky:" + actualNum);

// document.getElementById("country").style.backgroundImage = "url()";
 

 //country.style.backgroundImage = (data[actualNum].path);        
    
   
    /*
    if (questionNumber < data.lenght) {
            //vypíše do konzole jakou odpověď uživatel zvolil
    console.log("Odpověď: " + answerValue);

    //body.innerHTML = new Guessthecountry(actualNum);
    //js zjistí správnou odpověď na otázku
    correctValue = data[actualNum].country;
    console.log(correctValue);
    return correctValue;
    
    }
    else{
        
    } */
};
