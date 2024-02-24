
function generateRandomNumber() {
    time.value = 30;
    timeProgress =  setInterval(()=>{
        time.value-=0.03;
        if(time.value==0){
            badEndQuiz();
        }
    },10)
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

    /*
    * aktualizovaný counter správných odpovědí
    * counter se aktualizuje při stisknutí tlačítka submit
    */
    correctCounter.innerText = "Správně zodpovězeno: " + counter + "/" + 10;
    /*zobrazí se aktuální otázka*/
    questionHeadline.innerText = data[actualNum].question;
    /*zobrazí se možné odpovědí*/
    btnA.innerText = data[actualNum].answers.a;
    btnB.innerText = data[actualNum].answers.b;
    btnC.innerText = data[actualNum].answers.c;
    btnD.innerText = data[actualNum].answers.d;
    /*js zjistí správnou odpověď na otázku*/
    correctValue = data[actualNum].correctAnswer;
    return correctValue;
    }
    else{
        /*Konec hry*/
        endQuiz();
    } 
   ;