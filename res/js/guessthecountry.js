const loadData = async()=>{
    const file = await fetch("./res/data/guessthecountry.json");
    const data = await file.json();
};

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
console.log(generatedNumbers);
console.log(generateRandomNumber);