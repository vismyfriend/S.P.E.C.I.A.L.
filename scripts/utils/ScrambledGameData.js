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
    scrambledWords1: [
        {
            id:1,
            eng:"robbers",
            hint: "роббэрз",
            ru:"грабители"
            },
            {
            id:2,
            eng:"tuesday",
            hint: "тьюсдэй",
            ru:"вторник"
            },
            {
            id:3,
            eng:"magician",
            hint: "мэджИшен",
            ru:"фокусник, маг"
            },
    ]
}
export default allWordsForScrambledGame
