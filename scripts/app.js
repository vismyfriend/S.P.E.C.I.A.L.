import allCardsGameFindAPair from "./utils/find-a-pair.js"
import allQuestionsOneDeck from "./utils/questions.js"
// import allQuestionsSecondDeck from "./utils/questions.js"
import allWordsForGameTypeOrWrite from "./utils/TypeOrWrite.js"
import allSetsArray from "./utils/allSetsArray.js"
import playList from "./utils/music.js"
import quizQuestionsList from "./utils/QuizQData.js"
// там с опечаткой написано что экспортировать в файле снизу, но все равно работает) default export решает!
import { QuizQ } from "./games/QuizQ.js"
import gameTwoDecksListData from "./utils/gameTwoDecksData.js"
import { gameTwoDecks } from "./games/gameTwoDecks.js"
import benderWordOrderSentences from "./utils/benderWordOrder.js"


const body = document.querySelector(".body")
const logoSpecial = document.querySelector(".logo-special")
const fryFuturamaMainScreenIntro = document.querySelector(".fryFuturamaMainScreenIntro")

const headerPageReoad = document.querySelector(".headerPageReoad")
headerPageReoad?.addEventListener("click", pageReloadRefresh)

const gameLieToMe = document.querySelector(".gameLieToMe")
const clickTest = document.querySelector(".clickTest")
clickTest.addEventListener("click", startGameLieToMe)

function startGameLieToMe() {
    popupMissionsAndSets.classList.add("none")
    gameLieToMe.classList.remove("none")
    clickTest.classList.add("none")
}

// уточнить у Эндрю про строку ниже - что это 
const isTouch = () => 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0

const dataFromEachPopupMissionsAndSets = document.querySelectorAll(".popupMissionsAndSets__set")
const popupMissionsAndSetsSets = document.querySelector(".popupMissionsAndSets__sets")
const chosenSet = document.querySelector(".popupMissionsAndSets__chosen-set")
const popupMissionsAndSets = document.querySelector(".popupMissionsAndSets")
const popupMissionsAndSetsTitle = document.querySelector(".popupMissionsAndSets__title")
const popupMissionsAndSetsDescription = document.querySelector(".popupMissionsAndSets__description")
const popupMissionsAndSetsGameFindAPair = document.querySelector(".popupMissionsAndSets__gameFindAPair")

const copyThisForNewGames = document.querySelector(".popupMissionsAndSets__copyThisForNewGames")

const oneDeckButtonText = document.querySelector(".oneDeckButtonText")
const oneDeckButtonPrevious = document.querySelector(".oneDeckButtonPrevious")
const oneDeckButtonCheck = document.querySelector(".oneDeckButtonCheck")
const oneDeckButtonNext = document.querySelector(".oneDeckButtonNext")
const oneDeckButtonSwitch = document.querySelector(".oneDeckButtonSwitch")
const cardForSpeakingGame = document.querySelector(".oneDeckOfCards_cardForSpeakingGame")
const topOfTheCard1Value = cardForSpeakingGame.querySelector(".oneDeckOfCards__topOfTheCard1Value")
const bottomOfTheCard1Value = cardForSpeakingGame.querySelector(".oneDeckOfCards__bottomOfTheCard1Value")

const gameTypeOrWrite = document.querySelector(".gameTypeOrWrite")
const gameTrickyQuiz = document.querySelector(".gameTrickyQuiz")

const mainContainer5gameTwoCardDecks = document.querySelector(".mainContainer5gameTwoCardDecks")

// ниже получаем нужный массив и перемешиваем в нём элементы
// уточнить, что означает set в скобках - это аргумент или параметр и разница в чем? 
let currentSet = null

function getArray(set) {
    currentSet = set
    chosenArray = null
    chooseQuestions = null
    chooseTypeOrWrite = null

    //перемешиваем элементы в массиве
    chosenArray = allCardsGameFindAPair[set]?.sort(function () {
        return Math.random() - 0.5;
    });
    chooseQuestions = allQuestionsOneDeck[set]?.sort(function () {
        return Math.random() - 0.5;
    });
    chooseTypeOrWrite = allWordsForGameTypeOrWrite[set]?.sort(function () {
        return Math.random() - 0.5;
    });
    benderWordOrderSentences[set]?.sort(function () {
        return Math.random() - 0.5;
    });
    renderWordsGameBenderWordOrderGame()

}

function doWeHaveThisGame(set) {
    // если он не находит набор, то скрываем кнопку с игрой
    if (!allCardsGameFindAPair[set]) popupMissionsAndSetsGameFindAPair.classList.remove("show")
    if (!allWordsForGameTypeOrWrite[set]) InputTypeOrWriteGame.classList.remove("show")
    if (!allQuestionsOneDeck[set]) letsSpeak.classList.remove("show")
    if (!quizQuestionsList[set]) multipleChoiceQuiz.classList.remove("show")
    if (!benderWordOrderSentences[set]) BenderWordOrderGameButton.classList.remove("show")

   
}

//проходим по всем наборам, которые создали в index.html

dataFromEachPopupMissionsAndSets.forEach((set) => {
    set.addEventListener("click", (evt) => {
        chooseSet(evt.target.textContent, evt.target.dataset.set)
        getArray(evt.target.dataset.set)
        //уточнить тут все - что такое evt.target
        console.log("SET - это весь элемент из HTML =", set)
        console.log("currentSet - это часть элемента HTML (Data-Set) =", currentSet)
        // console.log("вот",allQuestionsSecondDeck)
        chooseSong(evt.target.dataset.set)
    })
})

// уточнить, что означает textTheNameOfTheChosenSet в скобках - это аргумент или параметр и разница в чем? Для чего это нужно?

function chooseSet(textTheNameOfTheChosenSet, set) {
    console.log(set)
    chosenSet.textContent = textTheNameOfTheChosenSet
    console.log("название миссии=",textTheNameOfTheChosenSet)
    popupMissionsAndSetsTitle.textContent = "You chose mission: Вы выбрали мишн:"
    popupMissionsAndSetsTitle.classList.add("greyText")
    popupMissionsAndSetsDescription.textContent = "Чтобы пройти миссию выполни tasks задания 👇 "
    fryFuturamaMainScreenIntro.classList.add("noshow")
    userSearchesForMission.classList.add("none")
    // userSearchesForMission.value = ""
    logoSpecial.classList.add("hidden")
    gameFindPairsTryAgainButton.classList.add("hidden")
    oneDeckButtons.classList.remove("visible")
    popupMissionsAndSetsSets.classList.add("hide")
    InputTypeOrWriteGame.classList.add("show")
    popupMissionsAndSetsGameFindAPair.classList.add("show")
    slotMachine.classList.add("show")
    multipleChoiceQuiz.classList.add("show")
    copyThisForNewGames?.classList.add("show")
    // знак вопроса пропустит ошибку
    BenderWordOrderGameButton.classList.add("show")
    letsSpeak.classList.add("show")
    chosenSet.classList.add("show")
    usedCheatsText.classList.remove("visible")
    starsEmoji.classList.remove("visible")
    userSearchesForMissionSet()
    // проверка есть ли такая игра вконце всегда
    doWeHaveThisGame(set)
    slotMachine.classList.remove("show")
}




// ниже поиск набора по буквам поиск набора по буквам поиск набора по буквам поиск набора по буквам поиск набора по буквам

const userSearchesForMission = document.querySelector(".userInput.userSearchesForMission")

userSearchesForMission.addEventListener("input", () => userSearchesForMissionSet())

function userSearchesForMissionSet() {
    let allSetsInHTML = document.querySelectorAll(".popupMissionsAndSets__set")
    let filtered = allSetsArray.filter(el => el.includes(userSearchesForMission.value.toLowerCase()))
    allSetsInHTML.forEach(el => {
        if (!filtered.includes(el.dataset.set)) {
            el.classList.add("none")
            // } else if (userSearchesForMission.value != "") {
        } else {
            el.classList.remove("none")
            // visibility попробовать
            // или другой класс сделать (например hidden или secret)
            // если пустое поле ввода - то добавить класс
        }
    });
}





// ниже игра quiz test multiple choice ниже игра quiz test multiple choice ниже игра quiz test multiple choice ниже игра quiz test multiple choice
const mainContainerIntroAnd2games = document.querySelector(".mainContainerIntroAnd2games")
const multipleChoiceQuiz = document.querySelector(".popupMissionsAndSets__multipleChoiceQuiz")
function startGameMultipleChoiceQuiz() {
    // location.href = "https://bababum95.github.io/vinchento/slot-machine.html"
    mainContainerIntroAnd2games.classList.add("none")
    gameBender.classList.add("none")
    gameTrickyQuiz.classList.remove("none")
    new QuizQ({ quizAllQuestions: quizQuestionsList[currentSet] })
}
multipleChoiceQuiz.addEventListener("click", startGameMultipleChoiceQuiz)
// выше игра quiz test multiple choice




// ниже все для игры find pairs find a pair ниже все для игры find pairs find a pair ниже все для игры find pairs find a pair
// уточнить про такой адрес ниже что это и как это
const card = document.querySelector(".template").content.querySelector(".card")
const gameFindAPair = document.querySelector(".gameFindAPair")
const gameFindAPairButtonSkipThese = document.querySelector(".gameFindAPairButtonSkipThese")
const gameFindAPairContainer = document.querySelector(".gameFindAPair__container")
const gameFindAPairButtonNotUsed = document.querySelector(".gameFindAPairButtonNotUsed")
const gameFindAPairButtonBackToMissions = document.querySelector(".gameFindAPairButtonBackToMissions")
const gameFindAPairInfo = document.querySelector(".gameFindAPair-info")
const usedCheatsText = document.querySelector(".usedCheatsText")
const timer = document.querySelector(".timer")
const timeSeconds = document.getElementById("seconds")
const timeMiliseconds = document.getElementById("tens")
const gameFindPairsTryAgainButton = document.querySelector(".gameFindPairsButtonTry-again")
let selectCard = null
let chosenArray = null
let chooseQuestions = null
let chooseTypeOrWrite = null
let min = 0
let max = 6
let tens = "00"
let seconds = "00"
let interval = null
let count = 0
let foundPairs = 0
let howManyTimesSkipped = 0
let pairsRemainToMatch = 0
let value = null
let questionNumber = 0
let typeOrWriteNumber = 0

popupMissionsAndSetsGameFindAPair.addEventListener("click", startGameFindPairs)

function startGameFindPairs() {
    console.log("arrayLength - количество пар слов", chosenArray.length)
    howManyStarsScore()
    console.log("время на 5 звезд <", timeToGet5StarResult)
    // replaceHeaderButton1()
    renderCards("ru")
    renderCards("eng")
    fryFuturamaMainScreenIntro.classList.add("noshow")
    usedCheatsText.classList.remove("visible")
    gameFindAPairButtonBackToMissions.disabled = false;
    gameFindAPairButtonNotUsed.disabled = true;
    howManyTimesSkipped = 0
    pairsRemainToMatch = chosenArray.length
    foundPairs = 0
    gameFindAPairInfo.textContent = `Нажимай на столбцы, подбирай подходящую пару:`
    usedCheatsText.textContent = `читов использовано: ${howManyTimesSkipped}. Твои звёзды за задание:`
    popupMissionsAndSets.classList.add("close")
    logoSpecial.classList.add("hidden")
    gameFindAPair.classList.add("open")
    interval = setInterval(startTimer, 10);
    // audioTest.play()
    console.log(audioTest)
    missionMusicBackground.volume = 0;
    missionMusicBackgroundIconButton.classList.add("off")
    missionMusicBackgroundIconButton.classList.add("hidden")
    audioIcon.classList.add("visible")
}

function renderCards(lang) {
    let array = readyArray()
    let shuffle = array.sort(function () {
        return Math.random() - 0.5;
    });
    for (let i = 0; i < shuffle.length; i++) {
        const someCard = card.cloneNode(true)
        someCard.textContent = shuffle[i][lang]
        someCard.classList.add(lang)
        someCard.addEventListener("click", match)
        someCard.dataset.id = shuffle[i].id
        gameFindAPairContainer.append(someCard)
    }
}

function readyArray() {
    return chosenArray.slice(min, max)
}

function match(evt) {
    if (!!selectCard) {
        if (selectCard.dataset.id === evt.target.dataset.id && selectCard !== evt.target) {
            selectCard.classList.add("delete")
            evt.target.classList.add("delete")
            count++
            count === max - min ? nextCards() : null
            foundPairs++;
            pairsRemainToMatch--
            gameFindAPairInfo.textContent = `найдено пар: ${foundPairs} / ${chosenArray.length}`
        }
        selectCard.classList.remove("select")
        selectCard = null
    } else {
        evt.target.classList.add("select")
        selectCard = evt.target
    }
}

function nextCards() {
    gameFindAPairContainer.innerHTML = ""
    if (max === chosenArray.length) {
        finishGame()
    } else {
        min = min + 6
        max = max + 6 > chosenArray.length ? chosenArray.length : max + 6
        pairsRemainToMatch = pairsRemainToMatch - 6 + count;
        count = 0
        renderCards("ru")
        renderCards("eng")
    }
}

function finishGame() {
    clearInterval(interval)
    starResult()
    userSearchesForMission.classList.remove("none")
    starsEmoji.classList.add("visible")
    usedCheatsText.textContent = `Сделай скриншот и отправь фотку в наш чат. Share your achievement with Vincent.  ${howManyTimesSkipped}MG Mission ${chosenSet.textContent} `
    usedCheatsText.classList.add("visible")
    gameFindPairsTryAgainButton.classList.remove("hidden")
    popupMissionsAndSets.classList.remove("close")
    gameFindAPair.classList.remove("open")
    popupMissionsAndSetsTitle.textContent = `Результат ${timer.textContent} seconds`
    // popupMissionsAndSetsTitle.textContent = `Mission ${chosenSet.textContent} результат ${timer.textContent} seconds`
    popupMissionsAndSetsDescription.innerHTML = "Максимальный результат = пять звёзд 🏆 попробуй ещё раз! Try again."
    timeMiliseconds.textContent = "00"
    timeSeconds.textContent = "00"
    popupMissionsAndSetsSets.classList.remove("hide")
    InputTypeOrWriteGame.classList.remove("show")
    popupMissionsAndSetsGameFindAPair.classList.remove("show")
    slotMachine.classList.remove("show")
    multipleChoiceQuiz.classList.remove("show")
    copyThisForNewGames?.classList.remove("show")
    BenderWordOrderGameButton.classList.remove("show")
    letsSpeak.classList.remove("show")
    chosenSet.classList.remove("show")
    gameFindPairsTryAgainButton.textContent = `Попробовать быстрее! 💪 Try faster! 👍`
    const AudioWinner = new Audio("https://zvukitop.com/wp-content/uploads/2021/03/zvuk-tadam-na-trube.mp3");
    AudioWinner.volume = 0.06;
    AudioWinner.play()
    min = 0
    max = 6
    tens = "00";
    seconds = "00";
    gameFindAPairContainer.innerHTML = ""
    count = 0
}

//ниже функция для высвечивания результата и количество звезд
const starsEmoji = document.querySelector(".starsEmoji")
let howManyStarsEmoji = 5
let timeToGet5StarResult = 40
let timeToGet4StarResult = 50
let timeToGet3StarResult = 60
let timeToGet2StarResult = 75

function howManyStarsScore() {
    // console.log("arrayLength",chosenArray.length)
    if (chosenArray.length < 13) {
        timeToGet5StarResult = 9
        timeToGet4StarResult = 12
        timeToGet3StarResult = 18
        timeToGet2StarResult = 22
    } else if (chosenArray.length > 12 && chosenArray.length < 19) {
        timeToGet5StarResult = 15
        timeToGet4StarResult = 20
        timeToGet3StarResult = 30
        timeToGet2StarResult = 40
    } else if (chosenArray.length > 18 && chosenArray.length < 25) {
        timeToGet5StarResult = 27
        timeToGet4StarResult = 31
        timeToGet3StarResult = 35
        timeToGet2StarResult = 43
    } else if (chosenArray.length > 24 && chosenArray.length < 31) {
        timeToGet5StarResult = 35
        timeToGet4StarResult = 44
        timeToGet3StarResult = 52
        timeToGet2StarResult = 70
    } else if (chosenArray.length > 30 && chosenArray.length < 37) {
        timeToGet5StarResult = 42
        timeToGet4StarResult = 51
        timeToGet3StarResult = 70
        timeToGet2StarResult = 90
    } else if (chosenArray.length > 36 && chosenArray.length < 44) {
        timeToGet5StarResult = 55
        timeToGet4StarResult = 65
        timeToGet3StarResult = 85
        timeToGet2StarResult = 100
    } else if (chosenArray.length > 43 && chosenArray.length) {
        timeToGet5StarResult = 85
        timeToGet4StarResult = 100
        timeToGet3StarResult = 120
        timeToGet2StarResult = 150
    }
}

function starResult() {
    howManyStarsScore()
    if (seconds < timeToGet5StarResult) {
        howManyStarsEmoji = 5
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
    } else if (seconds > timeToGet5StarResult && seconds < timeToGet4StarResult) {
        howManyStarsEmoji = 4
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
    } else if (seconds > timeToGet4StarResult && seconds < timeToGet3StarResult) {
        howManyStarsEmoji = 3
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
    } else if (seconds > timeToGet3StarResult && seconds < timeToGet2StarResult) {
        howManyStarsEmoji = 2
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
    } else if (seconds > timeToGet2StarResult) {
        howManyStarsEmoji = 1
        starsEmoji.style.width = `${howManyStarsEmoji * 31}px`
    }
}
//выше  функция для высвечивания результата и количество звезд

function startTimer() {
    tens++;
    if (tens <= 9) {
        timeMiliseconds.textContent = "0" + tens;
    }
    if (tens > 9) {
        timeMiliseconds.textContent = tens;
    }
    if (tens > 99) {
        seconds++;
        timeSeconds.textContent = "0" + seconds;
        tens = 0;
        timeMiliseconds.textContent = "0" + 0;
    }
    if (seconds > 9) {
        timeSeconds.textContent = seconds;
    }
}

function nextCardsGameFindAPairCheatUsed() {
    gameFindAPairContainer.innerHTML = ""
    howManyTimesSkipped++;
    if (max === chosenArray.length) {
        finishGame()
    } else {
        min = min + 6
        max = max + 6 > chosenArray.length ? chosenArray.length : max + 6
        pairsRemainToMatch = pairsRemainToMatch - 6 + count;
        count = 0
        gameFindAPairInfo.textContent = `осталось найти пар: ${pairsRemainToMatch}`
        renderCards("ru")
        renderCards("eng")
    }
}

gameFindAPairButtonSkipThese.addEventListener("click", nextCardsGameFindAPairCheatUsed)
gameFindPairsTryAgainButton.addEventListener("click", startGameFindPairs)
gameFindAPairButtonBackToMissions.addEventListener("click", () => {
    pageReloadRefresh()
})
gameFindAPairButtonNotUsed.addEventListener("click", () => {
    console.log("зачем ты сюда нажал?")
})

// выше все для игры find pairs find a pair





// ниже все для игры questions let's speak ask me ниже все для игры questions let's speak ask me ниже все для игры questions let's speak ask me
const letsSpeak = document.querySelector(".popupMissionsAndSets__letsSpeak")

let languageRu = false

letsSpeak.addEventListener("click", startGameQuestions)

function startGameQuestions() {
    // replaceHeaderButton1()
    oneDeckButtons.classList.add("visible")
    fryFuturamaMainScreenIntro.classList.add("noshow")
    userSearchesForMission.classList.add("none")
    // usedCheatsText.textContent = `Заметили опечатку, неточность или нужен перевод?  Сделайте скриншот и отправьте мне в телеграм: @vismyfriend ${howManyTimesSkipped}`
    // usedCheatsText.classList.add("visible")
    // спросить уточнить как делать перенос строки в Java? <br> работает только в HTML ( /n тоже не работает) ${<br/>}
    usedCheatsText.textContent = `Если заметите опечатку, ошибку, если что-то съехало в тексте или какая-то идея придет вам в голову 
    как еще улучшить или чего-то добавить, убрать в приложении : PLEASE, сделайте скриншот и отправьте мне в телеграм: @vismyfriend`
    // usedCheatsText.textContent = `нажимай на карту из колоды и читай вслух:`
    usedCheatsText.classList.add("visible")
    oneDeckButtonText.classList.add("visible")
    popupMissionsAndSets.classList.add("close")
    cardForSpeakingGame.classList.remove("hiddenDeck")
    interval = setInterval(startTimer, 10);
}

oneDeckButtonPrevious.addEventListener("click", shuffleDecks, startGameQuestions)

function shuffleDecks() {
    chooseQuestions = chooseQuestions.sort(function () {
        return Math.random() - 0.5;
    });
    questionNumber = 0
    cardForSpeakingGame.classList.remove("AnOpenCard")
    cardForSpeakingGame.style.border = 'none';
    switchPlayerInCardGameQuestions1()
}

function previousQuestion() {
    console.log("прошлый вопрос", value.ru)
    questionNumber = questionNumber - 2
    getquestions()
}

function getquestions() {
    usedCheatsText.textContent = `1 ) Ты читаешь, собеседник отвечает / выполняет. 2 ) Нужен перевод? - нажми на размытый текст. 
    3 ) Кто отвечал, тот задаёт следующий вопрос . Если вопрос повторился  -  повторяй ! Тренируйтесь много раз говорить одно и тоже. It is life. Кто скажет: "это уже было", тот лузер! `
    if (questionNumber < chooseQuestions.length) {
        cardForSpeakingGame.classList.remove("AnOpenCard")
        setTimeout(function () { cardForSpeakingGame.classList.add("AnOpenCard") }, 0);
        value = chooseQuestions[questionNumber]
        bottomOfTheCard1Value.classList.remove("Unblur")
        topOfTheCard1Value.textContent = languageRu ? value.ru : value.eng
        bottomOfTheCard1Value.textContent = languageRu ? value.eng : value.ru
        cardForSpeakingGame.style.border = "solid 4px rgb(123, 207, 255)";
        questionNumber = questionNumber + 1
        oneDeckButtonText.textContent = "Быстро спросили, чётко ответили. Автоматизм практикуем, не тормозим, помогаем друг другу"
    } else {
        cardForSpeakingGame.classList.remove("AnOpenCard")
        cardForSpeakingGame.style.border = 'none';
        shuffleDecks()
    }
}

bottomOfTheCard1Value.addEventListener("click", (event) => {
    bottomOfTheCard1Value.classList.toggle("Unblur")
    event.stopPropagation()
})

oneDeckButtonCheck.addEventListener("click", () => {
    previousQuestion()
})

function switchLanguage() {
    getquestions()
    // cardForSpeakingGame.classList.add("column-reverse") уточнить что такое
    // и уточнить как ниже читается код =! (Не равен самому себе)
    languageRu = !languageRu
    topOfTheCard1Value.textContent = languageRu ? value.ru : value.eng
    bottomOfTheCard1Value.textContent = languageRu ? value.eng : value.ru
    // cardForSpeakingGame.style.border = "solid 4px rgb(128, 255, 1)";
}

// уточнить как toggle сделать или вроде того, чтобы при каждом нажатии менялся тескс на кнопке
function switchPlayerInCardGameQuestions1() {
    oneDeckButtonSwitch.textContent = ("чего блин?")
}
function switchPlayerInCardGameQuestions2() {
    oneDeckButtonSwitch.textContent = ("I'm sorry What? Ask again, plz.")
}
// oneDeckButtonSwitch.addEventListener("click", () => switchLanguage())

oneDeckButtonSwitch.addEventListener("click", () => {
    switchLanguage()
    switchPlayerInCardGameQuestions2()
})

cardForSpeakingGame.addEventListener("click", () => {
    const AudioNextQuestionCard = new Audio("https://zvukitop.com/wp-content/uploads/2021/06/klik-myshki-9.mp3");
    AudioNextQuestionCard.volume = 0.07
    AudioNextQuestionCard.play()
    cardForSpeakingGame.classList.contains("open") ? null : getquestions()
})

oneDeckButtonNext.addEventListener("click", () => {
    const AudioNextQuestionCard = new Audio("https://zvukitop.com/wp-content/uploads/2021/06/klik-myshki-9.mp3");
    AudioNextQuestionCard.volume = 0.07
    AudioNextQuestionCard.play()
    cardForSpeakingGame.classList.contains("open") ? null : getquestions()
})
// выше все для игры questions let's speak ask me






// ниже игра слот машина slot machine 
const slotMachine = document.querySelector(".popupMissionsAndSets__slot-machine")

slotMachine.addEventListener("click", startGameSlotMachine)

function startGameSlotMachine() {
    location.href = "https://bababum95.github.io/vinchento/slot-machine.html"
}
// выше ссылка на игру slot machine 






// ниже все для игры BenderWordOrderGame
const gameBender = document.querySelector(".gameBender")
const BenderWordOrderGameButton = document.querySelector(".popupMissionsAndSets__BenderWordOrderGame")
const BenderWordOrderGameButtonBackToMissions = document.querySelector(".BenderWordOrderGameButtonBackToMissions")
const wordGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameTemplate").content.querySelector(".BenderWordOrderGameWord")
const wordsContainerGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameWords")
const inputSentenceGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameInput-sentence")
const hintGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameHint")
const russianHintGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameHint-input")
const cheatGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameCheat")
const containerMistakeGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameContainer-mistake")
const correctAnswerGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameSentence-correct")
const userAnswerGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameUser-answer")
const russianHintMistakeGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameRussian-hint")
const fairGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameFair")
const unfairGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameUnfair")
const screenshotGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameScreenshot")
const livesGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameLives")
const pointsGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameCorrect-counter")
const typeOrWriteGameСounter = document.querySelector(".typeOrWriteGame-counter")
let scoreGameBenderWordOrderGame = 0
let scoreTypeOrWriteGame = 0
let lifeGameBenderWordOrderGame = 5
// уменьшая жизни принудительно изменить width
let n = -1

// раньше на отдельной ссылке была игра, закоментил, чтобы не забыть как ссылки вставлять
// function startGameRobotBender() {
//     location.href = "https://vismyfriend.github.io/Bender/"
// }

function startGameBenderWordOrderGame() {
    mainContainerIntroAnd2games.classList.add("none")
    gameBender.classList.remove("none")
    userSearchesForMission.classList.add("none")
    gameTrickyQuiz.classList.add("none")
    body.classList.add("BenderWordOrderGameBackgroundPicture")
    // russianHintGameBenderWordOrderGame.textContent = benderWordOrderSentences[currentSet][n].ru
}

BenderWordOrderGameButtonBackToMissions.addEventListener("click", pageReloadRefresh)
BenderWordOrderGameButton.addEventListener("click", startGameBenderWordOrderGame)


// передаем set чтобы bender понимал в каком он наборе
function renderWordsGameBenderWordOrderGame() {
    
    n = n + 1
    russianHintGameBenderWordOrderGame.textContent = benderWordOrderSentences[currentSet][n].ru
    // console.log(life)
    // const sentenceGameBenderWordOrderGame = testGameBenderWordOrderGame[n].eng
    const sentenceGameBenderWordOrderGame = benderWordOrderSentences[currentSet][n].eng
    // функция будет принимать предложение и перемешивать слова в нем
    console.log(sentenceGameBenderWordOrderGame)
    let shuffleSentenceGameBenderWordOrderGame = sentenceGameBenderWordOrderGame.split(' ').sort(function () {
        return Math.random() - 0.5;
    });
    shuffleSentenceGameBenderWordOrderGame.forEach(element => {
        const cloneWordGameBenderWordOrderGame = wordGameBenderWordOrderGame.cloneNode(true)
        cloneWordGameBenderWordOrderGame.textContent = element
        cloneWordGameBenderWordOrderGame.addEventListener("click", () => {
            if (cloneWordGameBenderWordOrderGame.classList.contains("pressed")) {
                cloneWordGameBenderWordOrderGame.classList.remove("pressed")
                inputSentenceGameBenderWordOrderGame.textContent = inputSentenceGameBenderWordOrderGame.textContent.replace(" " + element, "")
            } else {
                cloneWordGameBenderWordOrderGame.classList.add("pressed")
                inputSentenceGameBenderWordOrderGame.textContent += " " + element
                if (inputSentenceGameBenderWordOrderGame.textContent.length === sentenceGameBenderWordOrderGame.length + 1) {
                    if (inputSentenceGameBenderWordOrderGame.textContent === " " + sentenceGameBenderWordOrderGame) {
                        // console.log("ok")
                        scoreGameBenderWordOrderGame += 1
                        // score = score + 1
                        pointsGameBenderWordOrderGame.textContent = `верно:  ${scoreGameBenderWordOrderGame} / ${benderWordOrderSentences[currentSet].length}`
                        nextSentenceGameBenderWordOrderGame()
                    } else {
                        russianHintMistakeGameBenderWordOrderGame.textContent = benderWordOrderSentences[currentSet][n].ru
                        correctAnswerGameBenderWordOrderGame.textContent = `${sentenceGameBenderWordOrderGame} - вариант Бендэра`
                        userAnswerGameBenderWordOrderGame.textContent = `${inputSentenceGameBenderWordOrderGame.textContent} - ваш вариант`
                        userAnswerGameBenderWordOrderGame.classList.add("wrong")
                        containerMistakeGameBenderWordOrderGame.classList.add("show")
                        lifeGameBenderWordOrderGame = lifeGameBenderWordOrderGame - 1
                        livesGameBenderWordOrderGame.style.width = `${lifeGameBenderWordOrderGame * 31}px`
                        unfairGameBenderWordOrderGame.disabled = false
                        screenshotGameBenderWordOrderGame.classList.add("hide")
                        // Снова математика от Эндрю
                        // Тут Великий Эндрю спрашивает у Величайшего гугла как задавать стили через java
                    }
                }
            }
        })
        // финальная команда функции
        wordsContainerGameBenderWordOrderGame.prepend(cloneWordGameBenderWordOrderGame)
    });
}

function gameOverGameBenderWordOrderGame() {
    inputSentenceGameBenderWordOrderGame.textContent = `Крутец-молодец! Bender likes you! Даже наверное не жульничали, да же?`
}
function nextSentenceGameBenderWordOrderGame() {
    wordsContainerGameBenderWordOrderGame.innerHTML = ""
    inputSentenceGameBenderWordOrderGame.textContent = ""
    if (n === benderWordOrderSentences[currentSet].length - 1) {
        gameOverGameBenderWordOrderGame()
    } else {
        renderWordsGameBenderWordOrderGame()
    }
}

unfairGameBenderWordOrderGame.addEventListener("click", () => {
    unfairGameBenderWordOrderGame.disabled = true
    fairGameBenderWordOrderGame.disabled = true
    screenshotGameBenderWordOrderGame.classList.remove("hide")
    lifeGameBenderWordOrderGame = lifeGameBenderWordOrderGame + 1
    livesGameBenderWordOrderGame.style.width = `${lifeGameBenderWordOrderGame * 31}px`
    unfairGameBenderWordOrderGame.disabled = true
})

fairGameBenderWordOrderGame.addEventListener("click", () => {
    containerMistakeGameBenderWordOrderGame.classList.remove("show")
    if (lifeGameBenderWordOrderGame === 0) {
        gameOverGameBenderWordOrderGame()
    } else {
        nextSentenceGameBenderWordOrderGame()
    }
})

screenshotGameBenderWordOrderGame.addEventListener("click", () => {
    containerMistakeGameBenderWordOrderGame.classList.remove("show")
    fairGameBenderWordOrderGame.disabled = false
    if (lifeGameBenderWordOrderGame === 0) {
        gameOverGameBenderWordOrderGame()
    } else {
        nextSentenceGameBenderWordOrderGame()
    }
})

hintGameBenderWordOrderGame.addEventListener("click", () => {
    russianHintGameBenderWordOrderGame.textContent = benderWordOrderSentences[currentSet][n].ru
    setTimeout(() => {
        russianHintGameBenderWordOrderGame.textContent = "Без русского перевода попробуй восстановить правильный порядок слов"
    }, 4000)
})

cheatGameBenderWordOrderGame.addEventListener("click", () => {
    russianHintGameBenderWordOrderGame.textContent = benderWordOrderSentences[currentSet][n].eng
    setTimeout(() => {
        russianHintGameBenderWordOrderGame.textContent = "Без русского перевода попробуй догадаться что за предложение"
    }, 4000)
    // милисекунды 
})

// выше все для игры BenderWordOrderGame





// ниже spelling game TypeOrWrite правописание скоро возможно заменю ее на бомбу игру про взрывчатку
const InputTypeOrWriteGame = document.querySelector(".popupMissionsAndSets__InputTypeOrWriteGame")
const typeOrWriteGameButtonIDK = document.querySelector(".typeOrWriteGameButtonIDK")
const typeOrWriteGameButtonSkip = document.querySelector(".typeOrWriteGameButtonSkip")
const inputTitleEng = document.querySelector(".inputTitleEng")
const playerInputType = document.querySelector(".playerInputType")
const typeOrWriteGameButtonCompare = document.querySelector(".typeOrWriteGameButtonCompare")

function startGameInputTypeOrWriteGame() {
    mainContainerIntroAnd2games.classList.add("none")
    gameBender.classList.add("none")
    gameTypeOrWrite.classList.remove("none")
    gameTrickyQuiz.classList.add("none")
    userSearchesForMission.classList.add("none")
    body.classList.remove("BenderWordOrderGameBackgroundPicture")
    value = chooseTypeOrWrite[typeOrWriteNumber]
    inputTitleEng.textContent = value.ru
    typeOrWriteGameButtonCompare.addEventListener("click", compareInput)
}

InputTypeOrWriteGame.addEventListener("click", startGameInputTypeOrWriteGame)

function nextWordToTranslate(inputPlaceholder) {
    typeOrWriteNumber = typeOrWriteNumber + 1
    value = chooseTypeOrWrite[typeOrWriteNumber]
    
    if (value) {
        inputPlaceholder.innerHTML = value.ru
    } else {
        inputTitleEng.textContent = `Вы справились! Попробуйте другой набор слов`
        typeOrWriteGameСounter.textContent = `(${scoreTypeOrWriteGame} из ${chooseTypeOrWrite.length}) Correct ${scoreTypeOrWriteGame} out of ${chooseTypeOrWrite.length}`
    }
    // inputPlaceholder.classList.add("none")
    // playerInputType.textContent = `вы перевели:  ${scoreTypeOrWriteGame} из ${chooseTypeOrWrite.length}`
}

function compareInput() {
    if (playerInputType.value.toLowerCase() === value.eng.toLowerCase()) {
        nextWordToTranslate(inputTitleEng)
        playerInputType.value = ""
        scoreTypeOrWriteGame += 1
        keySoundInputOk.play()
        typeOrWriteGameСounter.textContent = `верно:  ${scoreTypeOrWriteGame} out of ${chooseTypeOrWrite.length}`
    } else {
        typeOrWriteGameСounter.textContent = `Хмм...🤷🏽‍♂️ может опечатка или лишний пробел? Попробуй еще раз. Или сделай скриншот и отправь мне. Thank you. Потом нажми skip`
    }
}

function typeOrWriteGameSkip() {
    nextWordToTranslate(inputTitleEng)
    playerInputType.value = ""
}

typeOrWriteGameButtonSkip.addEventListener("click", typeOrWriteGameSkip)

typeOrWriteGameButtonIDK.addEventListener("click", () => {
    typeOrWriteGameСounter.textContent = `The answer is   << ${value.eng} >> `
    setTimeout(() => {
        typeOrWriteGameСounter.textContent = `верно:  ${scoreTypeOrWriteGame} out of ${chooseTypeOrWrite.length}`
    }, 2000)
})

// клавиатура
const oneDeckButtons = document.querySelector(".oneDeckButtons")
const keyQ = document.querySelector(".keyQ")
const keyW = document.querySelector(".keyW")
const keyE = document.querySelector(".keyE")
const keyR = document.querySelector(".keyR")
const keyT = document.querySelector(".keyT")
const keyY = document.querySelector(".keyY")
const keyU = document.querySelector(".keyU")
const keyI = document.querySelector(".keyI")
const keyO = document.querySelector(".keyO")
const keyP = document.querySelector(".keyP")
const keyA = document.querySelector(".keyA")
const keyS = document.querySelector(".keyS")
const keyD = document.querySelector(".keyD")
const keyF = document.querySelector(".keyF")
const keyG = document.querySelector(".keyG")
const keyH = document.querySelector(".keyH")
const keyJ = document.querySelector(".keyJ")
const keyK = document.querySelector(".keyK")
const keyL = document.querySelector(".keyL")
const keyZ = document.querySelector(".keyZ")
const keyX = document.querySelector(".keyX")
const keyC = document.querySelector(".keyC")
const keyV = document.querySelector(".keyV")
const keyB = document.querySelector(".keyB")
const keyN = document.querySelector(".keyN")
const keyM = document.querySelector(".keyM")
const keyDot = document.querySelector(".keyDot")
const keyDel = document.querySelector(".keyDel")
const keySpaceBar = document.querySelector(".keySpaceBar")

keyQ.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "Q"
})
keyW.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "W"
})
keyE.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "E"
})
keyR.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "R"
})
keyT.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "T"
})
keyY.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "Y"
})
keyU.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "U"
})
keyI.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "I"
})
keyO.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "O"
})
keyP.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "P"
})
keyA.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "A"
})
keyS.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "S"
})
keyD.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "D"
})
keyF.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "F"
})
keyG.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "G"
})
keyH.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "H"
})
keyJ.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "J"
})
keyK.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "K"
})
keyL.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "L"
})
keyZ.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "Z"
})
keyX.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "X"
})
keyC.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "C"
})
keyV.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "V"
})
keyB.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "B"
})
keyN.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "N"
})
keyM.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + "M"
})
keyDot.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + ","
    // keySoundInput?.stop()
    keySoundInput.play()
})
keySpaceBar.addEventListener("click", () => {
    playerInputType.value = playerInputType.value + " "
    // keySoundInput.stop()
    keySoundInput.play()
})
keyDel.addEventListener("click", () => {
    playerInputType.value = playerInputType.value.substring(0, playerInputType.value.length - 1);
    const keyDelSoundInput = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/najatie-na-klaviaturu-iphone.mp3");
    keyDelSoundInput.volume = 0.08
    keyDelSoundInput.play()
})
// выше spelling game правописание





// функция перезагрузка страницы
function pageReloadRefresh() {
    location.reload()
}

// скроллинг и прокрутка (уточнить, проверить нужно ли это вообще теперь)
const scrollLeft = document.querySelector(".scroll-left")
const scrollRight = document.querySelector(".scroll-right")

function scroll(direction) {
    popupMissionsAndSetsSets.scrollBy(direction, 0)
}

if (isTouch()) {
    scrollLeft.addEventListener("touchstart", () => {
        interval = setInterval(() => {
            scroll(-2)
        }, 0);
    })
    scrollLeft.addEventListener("touchend", () => {
        clearInterval(interval)
    })
    scrollRight.addEventListener("touchstart", () => {
        interval = setInterval(() => {
            scroll(2)
        }, 0);
    })
    scrollRight.addEventListener("touchend", () => {
        clearInterval(interval)
    })
} else {
    scrollLeft.addEventListener("mouseup", () => {
        clearInterval(interval)
    })
    scrollLeft.addEventListener("mousedown", () => {
        interval = setInterval(() => {
            scroll(-2)
        }, 0);
    })
    scrollLeft.addEventListener("mouseout", () => {
        clearInterval(interval)
    })
    scrollRight.addEventListener("mousedown", () => {
        interval = setInterval(() => {
            scroll(2)
        }, 0);
    })
    scrollRight.addEventListener("mouseup", () => {
        clearInterval(interval)
    })
    scrollRight.addEventListener("mouseout", () => {
        clearInterval(interval)
    })
}
// выше скроллинг и прокрутка (уточнить, проверить нужно ли это вообще теперь)





// новая игра ниже все для игры two decks ниже все для игры two decks ниже все для игры two decks ниже все для игры two decks ниже все для игры two decks 

// clickTest.addEventListener("click",startGameTwoDecks())
function startGameTwoDecks() {
    mainContainerIntroAnd2games.classList.add("none")
    gameBender.classList.add("none")
    gameTrickyQuiz.classList.add("none")
    mainContainer5gameTwoCardDecks.classList.remove("none")
    new gameTwoDecks({ gameTwoCardDecks: gameTwoDecksListData[currentSet] })
}

// новая игра выше все для игры two decks





// пока не работают идеи ниже уточнить пока не работают идеи ниже уточнить пока не работают идеи ниже уточнить ока не работают идеи ниже уточнить

const backTomainContainerIntroAnd2gamesbutton = document.querySelector(".backTomainContainerIntroAnd2gamesbutton")
const backToChoosingTheMissions = document.querySelector(".backToChoosingTheMissions")

function backTomainContainerIntroAnd2gamesfunction() {
    mainContainerIntroAnd2games.classList.remove("none")
    gameBender.classList.add("none")
    userSearchesForMission.classList.add("none")
    popupMissionsAndSetsSets.classList.remove("hide")
    gameTrickyQuiz.classList.add("none")
    // body.classList.add("BenderWordOrderGameBackgroundPicture")
    userSearchesForMission.classList.remove("none")
    userSearchesForMission.value = ""
    logoSpecial.classList.remove("hidden")
    gameFindPairsTryAgainButton.classList.add("hidden")
    oneDeckButtons.classList.remove("visible")
    popupMissionsAndSetsTitle.textContent = "👈 Choose the set 👉"
    popupMissionsAndSetsTitle.classList.remove("greyText")
    popupMissionsAndSetsDescription.textContent = "Выбирай набор слов для тренировки"
    // popupMissionsAndSetsSets.classList.add("hide")
    InputTypeOrWriteGame.classList.remove("show")
    popupMissionsAndSetsGameFindAPair.classList.remove("show")
    slotMachine.classList.remove("show")
    multipleChoiceQuiz.classList.remove("show")
    copyThisForNewGames?.classList.remove("show")
    // знак вопроса пропустит ошибку
    BenderWordOrderGameButton.classList.remove("show")
    letsSpeak.classList.remove("show")
    chosenSet.classList.remove("show")
    // chosenSet.textContent = text
    usedCheatsText.classList.remove("visible")
    starsEmoji.classList.remove("visible")
}

function backToChoosingTheTask() {
    mainContainerIntroAnd2games.classList.remove("none")
    gameBender.classList.add("none")
    userSearchesForMission.classList.add("none")
    // popupMissionsAndSetsSets.classList.add("hide")
    gameTrickyQuiz.classList.add("none")
    console.log("hi")
}






//ниже все, что связано с аудио, не все работает, уточнить

// const MusicFromGoogleDriveDefault = new Audio("https://drive.google.com/file/d/1YlPN33KcfXRkw2BgHnNZVeb2z7NkiZKP/view?usp=sharing"); 
// уточнить пока не понятно как сделать так чтобы можно было константе присваивать трек разный в java
const keySoundInput = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/najatie-na-klaviaturu-iphone.mp3");
keySoundInput.volume = 0.08
const keySoundInputOk = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/zvuk-oplaty-apple-pay.mp3");
// const audioIconOnOffTrack = document.querySelector(".audioIconOnOffTrack")
const audioIcon = document.querySelector(".audioIcon")
const audioIconOnOff = document.querySelector(".audioIconOnOff")
const missionMusicBackgroundIconButton = document.querySelector(".missionMusicBackgroundIconButton")
const helloMusicStartButton = document.querySelector(".helloMusicStartButton")
const audio = document.querySelector(".audio")
const missionMusicBackground = document.querySelector(".missionMusicBackground")
// const audioTest = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/hello-zvuk-111.mp3");
const audioTest = new Audio("./audio/SantaB1.mp3");
// const audioTest = document.querySelector(".audio")
// const audiomissionMusicBackground = new Audio("https://audio.jukehost.co.uk/wDqy560srBF4ZvgkwI8wAqNcgK9I0cW0");

function helloMusicStartButtonInvisible() {
    // const audiomissionMusicBackground = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/hello-zvuk-111.mp3");
    audiomissionMusicBackground.volume = 0.4;
    audiomissionMusicBackground.play()
    audiomissionMusicBackground.loop = false;
    helloMusicStartButton.classList.add("invisible")
    audioIconOnOff.classList.add("visible")
    // wtf пока не понятно как сделать так чтобы можно было константе присваивать трек разный в java
    // audioIconOnOffTrack = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/hello-zvuk-111.mp3");
    // missionMusicBackgroundIconButton.classList.add("off")
}

helloMusicStartButton.addEventListener("click", helloMusicStartButtonInvisible)

const audioIconOnOffTrack = new Audio("https://audio.jukehost.co.uk/JHNeJtC076ydQwBp3vBmLGiMTMpExydO");

audioIconOnOffTrack.loop = false;

audioIconOnOff.addEventListener("click", () => {
    audioIconOnOff.classList.toggle("off")
    audiomissionMusicBackground.pause()
    if (audioIconOnOffTrack.volume == 0) {
        audioIconOnOffTrack.volume = 0.4
        audioIconOnOffTrack.play()
    } else {
        audioIconOnOffTrack.volume = 0
        audioIconOnOffTrack.pause()
    }
})

function chooseSong(set) {
    // const song = playList[set]
    // if (!!song) {
    //     audio.src = song;
    //     console.log(audio.paused,song);
    //     audio.play()
    //  console.log("проверка")
    const MissionSong = playList[set]
    audio.src = MissionSong
    // }
}

audioIcon.addEventListener("click", audioOnOff)
function audioOnOff() {
    audioIcon.classList.toggle("off")
    // audio.classList.add("off") музыка выключается не через стили
    audio.play()
    audio.loop = true;
    if (audio.volume == 0) {
        audio.volume = 0.7
    } else {
        audio.volume = 0
    }
}

// function GoogleDriveMusicCheck() {
//     MusicFromGoogleDriveDefault.play()
// }

missionMusicBackgroundIconButton.addEventListener("click", missionBackgroundMusicOnOff)
function missionBackgroundMusicOnOff() {
    missionMusicBackgroundIconButton.classList.toggle("off")
    // audio.classList.add("off") музыка выключается не через стили
    missionMusicBackground.play()
    missionMusicBackground.loop = true;
    if (missionMusicBackground.volume == 0) {
        missionMusicBackground.volume = 0.7
    } else {
        missionMusicBackground.volume = 0
    }
}
// выше все, что связано с музыкой и аудио



// заметки мои:

// быстрая проверка от Мохиндерсюрэж
// alert(1) 
// alert("чёт не то =) ") 


// Мохиндэр explained!

// function calcPlus(x, y) {
//     console.log(x + y)
//     return x + y
// }
// console.log(calcPlus(15, 20))

// пометки слева красный кружок
