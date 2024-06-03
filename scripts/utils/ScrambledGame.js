// чтобы удалить пустые строки нужно ввести в CTRL+F или CTRL R  ^(\s)*$\n 
// 0001 добавляем константу с данными - с массивом // Здесь слова для игры Find a pair
const allWordsForScrambledGame = {
    devmode1: [
        {
            id:1,
            eng:"numberone",
            hint: "цифра 1",
            ru:"первый"
            },
            {
            id:2,
            eng:"number_two",
            hint: "два",
            ru:"второй"
            },
            {
            id:3,
            eng:"number 3",
            ru:"третий"
            },
    ],
    spellingbombs: [
        {
            id:1,
            eng:"this is happiess",
            hint: "дыс из хэпинэс",
            ru:"это счастье"
            },
            {
            id:2,
            eng:"this is not happiess",
            hint: "дыс из нот хэпинэс",
            ru:"это не счастье"
            },
            {
            id:3,
            eng:"is this happiess?",
            hint: "из дыс хэпинэс?",
            ru:"это счастье?"
            },
    ]
}
export default allWordsForScrambledGame
