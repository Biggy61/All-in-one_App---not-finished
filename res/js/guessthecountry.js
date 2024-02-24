

const body = document.getElementById("country")
//SPRÁVNÁ ODPOVĚĎ NA OTÁZKU--------------------------
let correctValue = "";
let questionNumber = 0;




//USER ODPOVĚĎ NA OTÁZKU-----------------------------
let answerValue = "";
//co napise user do divu
const userWord = document.getElementById("userWord");


//HIDE ELEMENT----------------------------------------
const hideElement = (element) => {
    element.style.display = "none";
};
//SHOW ELEMENT----------------------------------------
const showElement = (element) => {
    element.style.display = "initial"};
  

//kdyz user da enter
userWord.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
     console.log("jooooo");
     e.preventDefault();
     e .currentTarget.value = "";
    }
    

});

//GAME----------------------
const buildGame = async() =>{
    const file = await fetch("./res/data/guessthecountry.json");
    const data = await file.json();

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
    console.log(generatedNumbers);
    if (questionNumber < 10) {
            /*vypíše do konzole jakou odpověď uživatel zvolil*/
    console.log("Odpověď: "+answerValue);

    /*zobrazí se aktuální otázka*/
    body.innerText = data[actualNum].question;
    /*js zjistí správnou odpověď na otázku*/
    correctValue = data[actualNum].country;
    return correctValue;
    }
    else{
        
    } 
};