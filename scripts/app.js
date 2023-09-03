import allCardsGameFindAPair from "./utils/find-a-pair.js"
import allQuestionsOneDeck from "./utils/questions.js"
import allWordsForGameTypeOrWrite from "./utils/TypeOrWrite.js"

import playList from "./utils/music.js"
import { testGameBenderWordOrderGame } from "./utils/sentences.js"


const headerPageReoad = document.querySelector(".headerPageReoad")

headerPageReoad?.addEventListener("click", pageReloadRefresh)


// уточнить у Эндрю про строку ниже - что это 
const isTouch = () => 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0
const oneDeckButtons = document.querySelector(".oneDeckButtons")
const dataFromEachPopupMissionsAndSets = document.querySelectorAll(".popupMissionsAndSets__set")
const popupMissionsAndSetsSets = document.querySelector(".popupMissionsAndSets__sets")
const chosenSet = document.querySelector(".popupMissionsAndSets__chosen-set")
const popupMissionsAndSets = document.querySelector(".popupMissionsAndSets")
const popupMissionsAndSetsTitle = document.querySelector(".popupMissionsAndSets__title")
const popupMissionsAndSetsDescription = document.querySelector(".popupMissionsAndSets__description")
const popupMissionsAndSetsGameFindAPair = document.querySelector(".popupMissionsAndSets__gameFindAPair")
const InputTypeOrWriteGame = document.querySelector(".popupMissionsAndSets__InputTypeOrWriteGame")
const logoSpecial = document.querySelector(".logo-special")
const gameFindAPair = document.querySelector(".gameFindAPair")
const letsSpeak = document.querySelector(".popupMissionsAndSets__letsSpeak")
const slotMachine = document.querySelector(".popupMissionsAndSets__slot-machine")
const copyThisForNewGames = document.querySelector(".popupMissionsAndSets__copyThisForNewGames")
const BenderWordOrderGameButton = document.querySelector(".popupMissionsAndSets__BenderWordOrderGame")
const card = document.querySelector(".template").content.querySelector(".card")
const gameFindAPairButtonSkipThese = document.querySelector(".gameFindAPairButtonSkipThese")
const gameFindAPairContainer = document.querySelector(".gameFindAPair__container")
const timer = document.querySelector(".timer")
const gameFindAPairButtonNotUsed = document.querySelector(".gameFindAPairButtonNotUsed")
const gameFindAPairButtonBackToMissions = document.querySelector(".gameFindAPairButtonBackToMissions")
const timeSeconds = document.getElementById("seconds")
const timeMiliseconds = document.getElementById("tens")
const tryAgainButton = document.querySelector(".try-again")
const scrollLeft = document.querySelector(".scroll-left")
const scrollRight = document.querySelector(".scroll-right")
const gameFindAPairInfo = document.querySelector(".gameFindAPair-info")
const usedCheatsText = document.querySelector(".usedCheatsText")
const oneDeckButtonPrevious = document.querySelector(".oneDeckButtonPrevious")
const oneDeckButtonCheck = document.querySelector(".oneDeckButtonCheck")
const oneDeckButtonNext = document.querySelector(".oneDeckButtonNext")
const cardForSpeakingGame = document.querySelector(".oneDeckOfCards_cardForSpeakingGame")
const topOfTheCard1Value = cardForSpeakingGame.querySelector(".oneDeckOfCards__topOfTheCard1Value")
const bottomOfTheCard1Value = cardForSpeakingGame.querySelector(".oneDeckOfCards__bottomOfTheCard1Value")
const mainContainer1 = document.querySelector(".mainContainer1")
const mainContainer2 = document.querySelector(".mainContainer2")
const body = document.querySelector(".body")
const mainContainer3 = document.querySelector(".mainContainer3")
const typeOrWriteGameButtonBackToMissions = document.querySelector(".typeOrWriteGameButtonBackToMissions")
const BenderWordOrderGameButtonBackToMissions = document.querySelector(".BenderWordOrderGameButtonBackToMissions")

// const MusicFromGoogleDriveDefault = new Audio("https://drive.google.com/file/d/1YlPN33KcfXRkw2BgHnNZVeb2z7NkiZKP/view?usp=sharing"); 
// wtf пока не понятно как сделать так чтобы можно было константе присваивать трек разный в java
// const audioIconOnOffTrack = document.querySelector(".audioIconOnOffTrack")
const audioIcon = document.querySelector(".audioIcon")
const audioIconOnOff = document.querySelector(".audioIconOnOff")
const missionMusicBackgroundIconButton = document.querySelector(".missionMusicBackgroundIconButton")
const helloMusicStartButton = document.querySelector(".helloMusicStartButton")
const audio = document.querySelector(".audio")
const missionMusicBackground = document.querySelector(".missionMusicBackground")

const audioTest = new Audio("https://zvukitop.com/wp-content/uploads/2021/01/hello-zvuk-111.mp3");


// ниже все для игры BenderWordOrderGame

const wordGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameTemplate").content.querySelector(".BenderWordOrderGameWord")
const wordsContainerGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameWords")
const inputSentenceGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameInput-sentence")
const hintGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameHint")
const deletewordGameBenderWordOrderGame = document.querySelector(".BenderWordOrderGameDelete")
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
let scoreGameBenderWordOrderGame = 0
let lifeGameBenderWordOrderGame = 5
// уменьшая жизни принудительно изменить width
let n = -1
function renderWordsGameBenderWordOrderGame() {
    n = n + 1
    // console.log(life)
    const sentenceGameBenderWordOrderGame = testGameBenderWordOrderGame[n].eng
    // функция будет принимать предложение и перемешивать слова в нем
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
                        pointsGameBenderWordOrderGame.textContent = `верно:  ${scoreGameBenderWordOrderGame} / ${testGameBenderWordOrderGame.length}`
                        nextSentenceGameBenderWordOrderGame()

                    } else {
                        russianHintMistakeGameBenderWordOrderGame.textContent = testGameBenderWordOrderGame[n].ru
                        correctAnswerGameBenderWordOrderGame.textContent = sentenceGameBenderWordOrderGame
                        userAnswerGameBenderWordOrderGame.textContent = inputSentenceGameBenderWordOrderGame.textContent
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
    if (n === testGameBenderWordOrderGame.length - 1) {
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
    russianHintGameBenderWordOrderGame.textContent = testGameBenderWordOrderGame[n].ru
    setTimeout(() => {
        russianHintGameBenderWordOrderGame.textContent = "нажми 👆 на эту кнопку, если не можешь догадаться какое предложение можно составить из предложенных слов"
    }, 4000)
})
cheatGameBenderWordOrderGame.addEventListener("click", () => {
    russianHintGameBenderWordOrderGame.textContent = testGameBenderWordOrderGame[n].eng
    setTimeout(() => {
        russianHintGameBenderWordOrderGame.textContent = "нажми 👆 на эту кнопку, если не можешь догадаться какое предложение можно составить из предложенных слов"
    }, 4000)
    // милисекунды 
})


renderWordsGameBenderWordOrderGame()

// выше все для игры BenderWordOrderGame


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


//ниже функция для высвечивания результата и количество звезд

const starsEmoji = document.querySelector(".starsEmoji")

let howManyStarsEmoji = 5
let timeToGet5StarResult = 100
let timeToGet4StarResult = 120
let timeToGet3StarResult = 140
let timeToGet2StarResult = 160
// let timeToGet5StarResult = 120
// let timeToGet4StarResult = 140
// let timeToGet3StarResult = 170
// let timeToGet2StarResult = 210
function starResult() {
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


function pageReloadRefresh() {

    location.reload()
}

function shuffleDecks() {
    chooseQuestions = chooseQuestions.sort(function () {
        return Math.random() - 0.5;
    });
    questionNumber = 0
    cardForSpeakingGame.classList.remove("AnOpenCard")
    cardForSpeakingGame.style.border = 'none';
}
function shuffleTypeOrWrite() {
    chooseTypeOrWrite = chooseTypeOrWrite.sort(function () {
        return Math.random() - 0.5;
    });
    typeOrWriteNumber = 0

}

function getquestions() {
    if (questionNumber < chooseQuestions.length) {
        cardForSpeakingGame.classList.remove("AnOpenCard")
        setTimeout(function () { cardForSpeakingGame.classList.add("AnOpenCard") }, 0);
        value = chooseQuestions[questionNumber]
        bottomOfTheCard1Value.classList.remove("Unblur")
        topOfTheCard1Value.textContent = value.eng
        bottomOfTheCard1Value.textContent = value.ru
        cardForSpeakingGame.style.border = "solid 4px rgb(123, 207, 255)";
        questionNumber = questionNumber + 1

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

oneDeckButtonCheck.addEventListener("click", (event) => {
    bottomOfTheCard1Value.classList.toggle("Unblur")
    event.stopPropagation()
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
function startGameBenderWordOrderGame() {
    mainContainer1.classList.add("none")
    mainContainer2.classList.remove("none")
    body.classList.add("BenderWordOrderGameBackgroundPicture")

}


// Мохиндэр explained!

function calcPlus(x, y) {
    console.log(x + y)
    return x + y
}
console.log(calcPlus(15, 20))


// уточнить у Andrew про set в скобках - что это
function chooseSet(text, set) {
    logoSpecial.classList.add("hidden")
    tryAgainButton.classList.add("hidden")
    oneDeckButtons.classList.remove("visible")
    popupMissionsAndSetsTitle.textContent = "You chose mission: Вы выбрали мишн:"
    popupMissionsAndSetsTitle.classList.add("greyText")
    popupMissionsAndSetsDescription.textContent = "Нажми какое задание выполнить: 👇 "
    popupMissionsAndSetsSets.classList.add("hide")
    InputTypeOrWriteGame.classList.add("show")
    popupMissionsAndSetsGameFindAPair.classList.add("show")
    slotMachine.classList.add("show")
    copyThisForNewGames?.classList.add("show")
    // знак вопроса пропустит ошибку
    BenderWordOrderGameButton.classList.add("show")
    letsSpeak.classList.add("show")
    chosenSet.classList.add("show")
    chosenSet.textContent = text
    usedCheatsText.classList.remove("visible")
    starsEmoji.classList.remove("visible")
}
function startGameQuestions() {
    oneDeckButtons.classList.add("visible")
    // usedCheatsText.textContent = `Заметили опечатку, неточность или нужен перевод?  Сделайте скриншот и отправьте мне в телеграм: @vismyfriend ${howManyTimesSkipped}`
    // usedCheatsText.classList.add("visible")

    // спросить у Andrew как делать перенос строки в Java? <br> работает только в HTML
    // ${<br/>}
    usedCheatsText.textContent = `нажимай на карточку`
    usedCheatsText.classList.add("visible")
    popupMissionsAndSets.classList.add("close")
    cardForSpeakingGame.classList.remove("hiddenDeck")
    interval = setInterval(startTimer, 10);
}

function startGameFindPairs() {
    renderCards("ru")
    renderCards("eng")
    usedCheatsText.classList.remove("visible")
    gameFindAPairButtonBackToMissions.disabled = false;
    gameFindAPairButtonNotUsed.disabled = true;
    howManyTimesSkipped = 0
    pairsRemainToMatch = chosenArray.length
    foundPairs = 0
    gameFindAPairInfo.textContent = `Нажимай слова, ищи пару:`
    usedCheatsText.textContent = `читов использовано: ${howManyTimesSkipped}`
    popupMissionsAndSets.classList.add("close")
    logoSpecial.classList.add("hidden")
    gameFindAPair.classList.add("open")
    interval = setInterval(startTimer, 10);
    audio.play()
    missionMusicBackground.volume = 0;
    missionMusicBackgroundIconButton.classList.add("off")
    missionMusicBackgroundIconButton.classList.add("hidden")
    audioIcon.classList.add("visible")
}



function startGameSlotMachine() {
    location.href = "https://bababum95.github.io/vinchento/slot-machine.html"
}

dataFromEachPopupMissionsAndSets.forEach((set) => {
    set.addEventListener("click", (evt) => {
        getArray(evt.target.dataset.set)
        chooseSong(evt.target.dataset.set)
        chooseSet(evt.target.textContent, evt.target.dataset.set)

    })
})

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
// новыая игра



// конеу новой игры


function getArray(set) {
    chosenArray = null
    chooseQuestions = null
    chooseTypeOrWrite = null
    chosenArray = allCardsGameFindAPair[set].sort(function () {
        return Math.random() - 0.5;
    });
    chooseQuestions = allQuestionsOneDeck[set].sort(function () {
        return Math.random() - 0.5;
    });
    chooseTypeOrWrite = allWordsForGameTypeOrWrite[set].sort(function () {
        return Math.random() - 0.5;
    });
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

function finishGame() {
    clearInterval(interval)
    starResult()
    starsEmoji.classList.add("visible")
    usedCheatsText.textContent = `читов использовано: ${howManyTimesSkipped}`
    usedCheatsText.classList.add("visible")
    tryAgainButton.classList.remove("hidden")
    popupMissionsAndSets.classList.remove("close")
    gameFindAPair.classList.remove("open")
    popupMissionsAndSetsTitle.textContent = `Результат: ${timer.textContent} seconds`
    popupMissionsAndSetsDescription.innerHTML = "Другую миссию?  Или новый рекорд?"
    timeMiliseconds.textContent = "00"
    timeSeconds.textContent = "00"
    popupMissionsAndSetsSets.classList.remove("hide")
    InputTypeOrWriteGame.classList.remove("show")
    popupMissionsAndSetsGameFindAPair.classList.remove("show")
    slotMachine.classList.remove("show")
    copyThisForNewGames?.classList.remove("show")
    BenderWordOrderGameButton.classList.remove("show")
    letsSpeak.classList.remove("show")
    chosenSet.classList.remove("show")
    tryAgainButton.textContent = `${chosenSet.textContent}`
    const AudioWinner = new Audio("https://zvukitop.com/wp-content/uploads/2021/03/zvuk-tadam-na-trube.mp3");
    AudioWinner.volume = 0.075;
    AudioWinner.play()
    min = 0
    max = 6
    tens = "00";
    seconds = "00";
    gameFindAPairContainer.innerHTML = ""
    count = 0
}

function scroll(direction) {
    popupMissionsAndSetsSets.scrollBy(direction, 0)
}

// function startGameRobotBender() {
//     location.href = "https://vismyfriend.github.io/Bender/"
// }
const inputTitleEng = document.querySelector(".inputTitleEng")
const playerInputType = document.querySelector(".playerInputType")
const typeOrWriteGameButtonCompare = document.querySelector(".typeOrWriteGameButtonCompare")

function startGameInputTypeOrWriteGame() {
    mainContainer1.classList.add("none")
    mainContainer2.classList.add("none")
    mainContainer3.classList.remove("none")
    body.classList.remove("BenderWordOrderGameBackgroundPicture")
    value = chooseTypeOrWrite[typeOrWriteNumber]
    inputTitleEng.textContent = value.ru
    typeOrWriteGameButtonCompare.addEventListener("click", compareInput)

}
function nextWordToTranslate(inputPlaceholder) {
    typeOrWriteNumber = typeOrWriteNumber + 1
    value = chooseTypeOrWrite[typeOrWriteNumber]
    if (value) {
        inputPlaceholder.innerHTML = value.ru
    } else {
        inputTitleEng.textContent = "конец игры"
        inputPlaceholder.classList.add("none")
    }

}
function compareInput() {

    if (playerInputType.value === value.eng) {
        nextWordToTranslate(inputTitleEng)
        playerInputType.value = ""
    } else {
        alert("чёт не то =) ")

    }

    // быстрая проверка от Мохиндерсюрэж
    // alert(1)
    


}

typeOrWriteGameButtonBackToMissions.addEventListener("click", pageReloadRefresh)
BenderWordOrderGameButtonBackToMissions.addEventListener("click", pageReloadRefresh)
BenderWordOrderGameButton.addEventListener("click", startGameBenderWordOrderGame)
InputTypeOrWriteGame.addEventListener("click", startGameInputTypeOrWriteGame)
slotMachine.addEventListener("click", startGameSlotMachine)
popupMissionsAndSetsGameFindAPair.addEventListener("click", startGameFindPairs)
letsSpeak.addEventListener("click", startGameQuestions)
gameFindAPairButtonSkipThese.addEventListener("click", nextCardsGameFindAPairCheatUsed)
tryAgainButton.addEventListener("click", startGameFindPairs)
foundPairs = 0
howManyTimesSkipped = 0
gameFindAPairButtonNotUsed.addEventListener("click", () => {
})


gameFindAPairButtonBackToMissions.addEventListener("click", () => {
    pageReloadRefresh()
})

oneDeckButtonPrevious.addEventListener("click", pageReloadRefresh)


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

const audiomissionMusicBackground = new Audio("https://audio.jukehost.co.uk/wDqy560srBF4ZvgkwI8wAqNcgK9I0cW0");

helloMusicStartButton.addEventListener("click", helloMusicStartButtonInvisible)
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


