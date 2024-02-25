
const start = document.getElementById("startBtn");
const body = document.getElementById("country");
//SPRÁVNÁ ODPOVĚĎ NA OTÁZKU--------------------------
let correctValue = "";
let questionNumber = 0;


/*
//Class
class Guessthecountry{
    constructor(countryID, country){
        this.countryID = countryID;
        this.name = this.country;
        this.img = new Image();
        this.img.src = this.path;
        console.log(this.img.src);
    }

}
*/
//USER ODPOVĚĎ NA OTÁZKU-----------------------------
let answerValue = "";
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
 

//tady konec
function fn1() {
    answerValue = inputValue;
    
}

//kdyz user da enter
input.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
    fn1();
    //smaze to co je napsane v poli kdyz user zmackne enter
     e.preventDefault();
     e.currentTarget.value = "";
    }


});


//GAME----------------------
const buildGame = async () =>{
    const file = await fetch("/res/data/guessthecountry.json");
    const data = await file.json();

//GENERATING RANDOM NUMBNERS----------------------
let generatedNumbers = [];
function generateRandomNumber() {
    
    if (generatedNumbers.length === data.length) {
        generatedNumbers = [];
    }

    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * data.length); //náhodné číslo od 0 do 20
    } while (generatedNumbers.includes(randomNumber)); // Pokud se číslo již nachází v poli, generuje nové

    generatedNumbers.push(randomNumber); // Přidání číslo do pole generovaných čísel
    return randomNumber;
    }

    let actualNum = generateRandomNumber();
    console.log( "cislo otazky:" + actualNum);
    if (questionNumber < 10) {
            /*vypíše do konzole jakou odpověď uživatel zvolil*/
    console.log("Odpověď: " + answerValue);

    /*zobrazí se aktuální otázka*/
    //body.innerHTML = new Guessthecountry(actualNum);
    /*js zjistí správnou odpověď na otázku*/
    correctValue = data[actualNum].country;
    console.log(correctValue);
    return correctValue;
    }
    else{
        
    } 
};

