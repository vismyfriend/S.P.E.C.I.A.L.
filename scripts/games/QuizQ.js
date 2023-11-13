export class QuizQ {
    // методы (те же функции только внутри класса)
    constructor(data) {
        this.quizAllQuestions = data.quizAllQuestions
        this.silcedQuestions = null
        this.task = document.querySelector(".quizQuestionTask")
        this.rules = document.querySelector(".quizQuestionRules")
        this.buttonContainer = document.querySelector(".quizButtonsContainer")
        this.buttonTryAgainOneMoreTime = document.querySelector(".areAmIsQuizOneButtonOne")
        this.currentIndex = 0
        this.scoreCounter = 0
        this.mistakesCounter = 0


        this.startGame()
    }
    // /поэтому тут не нужно писать function
    shuffle(array) {
        return array.sort(function () {
            return Math.random() - 0.5;
        });
    }
    silceArray(array) {
        this.silcedQuestions = array.slice(0, 10)
        // 0 - c какого элемента и до какого 10 )

    }
    startGame() {
        this.silceArray(this.shuffle(this.quizAllQuestions))
        this.showTheTask(this.quizAllQuestions[this.currentIndex])
      
        
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
  

    setEventListener(button, correct) {

        button.addEventListener("click", async () => {
            
            if (this.currentIndex >= this.silcedQuestions.length - 1) {
                this.scoreCounter += 1   
                this.gameOver()
            //    вот здесь (или в самой функции game over) нужна еще одна проверка - а то иначе он всегда верным засчитывает последний ответ, даже если там ошибка
                button.classList.add("correct")
                await this.timeOut(button, 25000, "correct")
                return
            }
            
            if (!correct) {
                this.mistakesCounter += 1
                console.log("неверных ответов",this.mistakesCounter)
                console.log("верных ответов",this.scoreCounter)

                button.classList.add("wrong")



                await this.timeOut(button, 1000, "wrong")

                this.silcedQuestions.push(this.silcedQuestions[this.currentIndex])
          
            } else {
                this.scoreCounter += 1    
                button.classList.add("correct")
                await this.timeOut(button, 700, "correct")
            }
            this.currentIndex += 1




            this.showTheTask(this.silcedQuestions[this.currentIndex])


        }
        )
    }
    gameOver() { 
        
        this.rules.textContent = `Congrats! /конгрЭтс Эйджент/ agent. Поздравления! Задание выполнено. (всего в этом тесте 30 разных вопросов, так что если пробовать ещё раз, то можно пытаться прорешать их все ;)   Количество ваших ошибок:  ${ this.mistakesCounter}`
        this.buttonTryAgainOneMoreTime.classList.remove("none")
    }

   

    
}