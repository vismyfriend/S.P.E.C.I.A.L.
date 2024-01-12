export class QuizQ {
    // методы (те же функции только внутри класса)
    constructor(data) {
        this.quizAllQuestions = data.quizAllQuestions
        this.silcedQuestions = null
        this.task = document.querySelector(".quizQuestionTask")
        this.rules = document.querySelector(".quizQuestionRules")
        this.buttonContainer = document.querySelector(".quizButtonsContainer")
        this.buttonTryAgainOneMoreTime = document.querySelector(".areAmIsQuizOneButtonOne")
        this.logoRedCap = document.querySelector(".redCap")
        this.currentIndex = 0
        this.scoreCounter = 0
        this.mistakesCounter = 0
        this.startGame()
        this.anotherVariantMultipleChoiceQuiz()
    }

    // /поэтому тут не нужно писать function
    shuffle(array) {
        return array.sort(function () {
            return Math.random() - 0.5;
        });
    }

    silceArray(array) {
        this.silcedQuestions = array.slice(0, 10) //количество вопросов в тесте
        // 0 - c какого элемента и до какого 10 )
    }

    startGame() {
        this.silceArray(this.shuffle(this.quizAllQuestions))
        this.showTheTask(this.quizAllQuestions[this.currentIndex])
        this.buttonContainer.classList.remove("none")
        this.task.classList.remove("none")
    }

    showTheTask(data) {
        this.task.textContent = data.quizQuestion
        const shuffeledAnswers = this.shuffle(data.answers)
        this.buttonContainer.innerHTML = ""
        shuffeledAnswers.map((answer, index) => {
            // можно было не передавать индекс
            const button = this.createButton(answer)
            this.buttonContainer.append(button)
        })
    }

    createButton(data) {
        const button = document.createElement("button")
        button.classList.add("quizButton")
        button.textContent = data.answer
        this.setEventListener(button, data.correct)
        return button
    }

    timeOut(button, time, deletedClass) {
        return new Promise((resolve) => {
            this.buttonContainer.classList.add("blockedForSomeTime")
            setTimeout(() => {
                button.classList.remove(deletedClass)
                this.buttonContainer.classList.remove("blockedForSomeTime")
                resolve()
            }, time)
        })
    }

    // if (currentIndex === this.slicedQestion.length && !correct) return
    setEventListener(button, correct) {
        button.addEventListener("click", async () => {
            if (!correct) {
                this.mistakesCounter += 1
                console.log("неверных ответов", this.mistakesCounter)
                console.log("верных ответов", this.scoreCounter)
                button.classList.add("wrong")
                await this.timeOut(button, 1000, "wrong")
                this.silcedQuestions.push(this.silcedQuestions[this.currentIndex])
            } else {
                this.scoreCounter += 1
                button.classList.add("correct")
                await this.timeOut(button, 700, "correct")
            }

            this.currentIndex += 1

            if (this.currentIndex >= this.silcedQuestions.length) { //когда че там//
                this.scoreCounter += 1
                //    вот здесь (или в самой функции game over) нужна еще одна проверка - а то иначе он всегда верным засчитывает последний ответ, даже если там ошибка
                this.gameOver()
                button.classList.add("correct")
                // await this.timeOut(button, 25000, "correct")
                await this.timeOut(button, 700, "correct")
                return
            }

            this.showTheTask(this.silcedQuestions[this.currentIndex])
        })
    }

    gameOver() {
        this.rules.textContent = ` 🏆 Quiz пройден! Сделай скриншот и отправь в наш чат. Vincent, я случайно не туда ткнул : ${this.mistakesCounter} раз(а)`
        this.buttonTryAgainOneMoreTime.classList.remove("none")
        this.rules.classList.add("yellow")
        this.buttonContainer.classList.add("none")
        this.task.classList.add("none")
        this.logoRedCap.classList.remove("none")
    }


    anotherVariantMultipleChoiceQuiz() {
        this.buttonTryAgainOneMoreTime.addEventListener("click", () => {
            this.rules.textContent = `Всего 10 вопросов. Only 10 questions. Читай всё английское вслух.`
            this.buttonTryAgainOneMoreTime.classList.add("none")
            this.rules.classList.remove("yellow")
            this.rules.classList.add("green")
            this.currentIndex = 0
            this.scoreCounter = 0
            this.mistakesCounter = 0
            this.startGame()
            this.logoRedCap.classList.add("none")
        })
    }
}