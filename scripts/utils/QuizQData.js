// чтобы удалить пустые строки нужно ввести в CTRL+F или CTRL R  ^(\s)*$\n 
// добавляем константу с данными - с массивом // Здесь задания для теста или квиза (QuizQ) с выбором ответов
const quizQuesstionsList = {
    devmode1: [
        {
            id: 1,
            quizQuestion: "Как на английском сказать: Я",
            answers: [
                {
                    answer: "I",
                    correct: true
                },
                {
                    answer: "I am",
                    correct: false
                },
            ]
        },
        {
            id: 2,
            quizQuestion: "Как на английском сказать: ты или вы",
            answers: [
                {
                    answer: "you",
                    correct: true
                },
                {
                    answer: "ti",
                    correct: false
                },
                {
                    answer: "we",
                    correct: false
                },
            ]
        },
        {
            id: 3,
            quizQuestion: "Как на английском сказать: мы",
            answers: [
                {
                    answer: "we",
                    correct: true
                },
                {
                    answer: "they",
                    correct: false
                },
                {
                    answer: "our",
                    correct: false
                },
                {
                    answer: "mi",
                    correct: false
                },
            ]
        },
        {
            id: 4,
            quizQuestion: "Как на английском сказать: они",
            answers: [
                {
                    answer: "they",
                    correct: true
                },
                {
                    answer: "we",
                    correct: false
                },
                {
                    answer: "our",
                    correct: false
                },
                {
                    answer: "your",
                    correct: false
                },
                {
                    answer: "him",
                    correct: false
                },
            ]
        },
        {
            id: 5,
            quizQuestion: "Как на английском сказать: он",
            answers: [
                {
                    answer: "he",
                    correct: true
                },
                {
                    answer: "his",
                    correct: false
                },
            ]
        },
    ],
    m000: [
        {
            id: 1,
            quizQuestion: "How many times a week do you want to practice English?",
            answers: [
            {
            answer: "two times a week",
            correct: true
            },
            {
            answer: "one time a week",
            correct: true
            },
            {
            answer: "three times a week",
            correct: true
            },
            {
            answer: "А сколько надо?",
            correct: false
            },
            {
            answer: "Моя твоя не понимай",
            correct: false
            },
            ]
            },
            {
            id: 2,
            quizQuestion: "Как по-английски сказать : У меня нет большой тетради",
            answers: [
            {
            answer: "I don't have a big notebook",
            correct: true
            },
            {
            answer: "I haven't big copybook",
            correct: false
            },
            {
            answer: "I haven't a big copybook",
            correct: false
            },
            {
            answer: "I haven't a big notebook",
            correct: false
            },
            {
            answer: "I haven't big notebook",
            correct: false
            },
            ]
            },
            {
            id: 3,
            quizQuestion: "What is your teacher's name?",
            answers: [
            {
            answer: "ВИнсэнт",
            correct: true
            },
            {
            answer: "Winston",
            correct: false
            },
            {
            answer: "Vasya",
            correct: false
            },
            {
            answer: "Valentina Mikhailovna",
            correct: false
            },
            {
            answer: "ВинсЭнт",
            correct: false
            },
            ]
            },
            {
            id: 4,
            quizQuestion: "Do you agree to do homework?",
            answers: [
            {
            answer: "Yes, I understand it is important",
            correct: true
            },
            {
            answer: "Ой ну всё, начинается…. Goodbye",
            correct: false
            },
            {
            answer: "No! Please, noooooo",
            correct: false
            },
            {
            answer: "Если она небольшая, то ok!",
            correct: false
            },
            {
            answer: "Что такое homework?",
            correct: false
            },
            ]
            },
            {
            id: 5,
            quizQuestion: "What color are Vincent's eyes?",
            answers: [
            {
            answer: "his eyes are blue",
            correct: true
            },
            {
            answer: "his eyes are green",
            correct: false
            },
            {
            answer: "his eyes are brown",
            correct: false
            },
            {
            answer: "his eyes are red",
            correct: false
            },
            {
            answer: "his eyes are drunk",
            correct: false
            },
            ]
            },
            {
            id: 6,
            quizQuestion: "Как по-английски сказать : Мне нравится смотреть Youtube",
            answers: [
            {
            answer: "I like to watch YouTube",
            correct: true
            },
            {
            answer: "I likes watching YouTube",
            correct: false
            },
            {
            answer: "I like watch YouTube",
            correct: false
            },
            {
            answer: "Me like look Youtube",
            correct: false
            },
            {
            answer: "My like look YouTube",
            correct: false
            },
            ]
            },
            {
            id: 7,
            quizQuestion: "Как по-английски сказать цифру 20?",
            answers: [
            {
            answer: "twenty",
            correct: true
            },
            {
            answer: "twelve",
            correct: false
            },
            {
            answer: "eleven",
            correct: false
            },
            {
            answer: "twenteen",
            correct: false
            },
            {
            answer: "twelveteen",
            correct: false
            },
            ]
            },
            {
            id: 8,
            quizQuestion: "Как по-английски сказать цифру 9?",
            answers: [
            {
            answer: "nine",
            correct: true
            },
            {
            answer: "eight",
            correct: false
            },
            {
            answer: "ща, посчитаю, 1234568910",
            correct: false
            },
            {
            answer: "six",
            correct: false
            },
            {
            answer: "ten",
            correct: false
            },
            ]
            },
            {
            id: 9,
            quizQuestion: "Как по-английски сказать : 8 + 12 = 20",
            answers: [
            {
            answer: "eight plus twelve is twenty",
            correct: true
            },
            {
            answer: "eight plus twenty is twelve",
            correct: false
            },
            {
            answer: "nine plus twelve is twenty",
            correct: false
            },
            {
            answer: "nine plus twenty is twelve",
            correct: false
            },
            {
            answer: "Запутать меня пытаешься?",
            correct: false
            },
            ]
            },
            {
            id: 10,
            quizQuestion: "Как по-английски сказать: У Винсента нет занятий по вторникам и по четвергам",
            answers: [
            {
            answer: "Vincent doesn't have lessons on Tuesdays and on Thursdays",
            correct: true
            },
            {
            answer: "Ой, да я всегда путаю эти дни!",
            correct: false
            },
            {
            answer: "Vincent doesn't have lessons on Thursdays and on Tuesdays",
            correct: false
            },
            {
            answer: "Vincent hasn't lessons on Thursdays and on Tuesdays",
            correct: false
            },
            {
            answer: "Vincent hasn't lessons on Tuesdays and on Thursdays",
            correct: false
            },
            ]
            },
    ],
    suchSo: [
        {
            id: 1,
            quizQuestion: "They were _____ happy that they started dancing.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 2,
            quizQuestion: "He speaks Chinese _____ well!",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 3,
            quizQuestion: "Julie is _____ amazing writer.",
            answers: [
            {
            answer: "such an",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 4,
            quizQuestion: "She swims _____ quickly!",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 5,
            quizQuestion: "It was _____ late and we missed the last train.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 6,
            quizQuestion: "They have _____ a big house that I get lost sometimes!",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 7,
            quizQuestion: "She has _____ a sweet puppy.",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 8,
            quizQuestion: "That was _____ an interesting book.",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 9,
            quizQuestion: "The weather was _____ cold, so I stayed at home.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 10,
            quizQuestion: "He's _____ a teenager!",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 11,
            quizQuestion: "He was _____ handsome.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 12,
            quizQuestion: "It was _____ a beautiful day that we went on a picnic",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 13,
            quizQuestion: "You're not usually _____ tired! Is everything okay?",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 14,
            quizQuestion: "He doesn't often work _____ much.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 15,
            quizQuestion: "Children have so many_____ strange toys now.",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 16,
            quizQuestion: "She's _____ a bookworm! Friends call her a nerd.",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 17,
            quizQuestion: "I had _____ much work I couldn't go out.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 18,
            quizQuestion: "You shouldn't drink _____ little in this weather.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 19,
            quizQuestion: "She has ____ much money she doesn't need to work.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 20,
            quizQuestion: "There are ___ many things in the world to see.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 21,
            quizQuestion: "I understand _____ little.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 22,
            quizQuestion: "I don’t understand _____ much.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 23,
            quizQuestion: "There’re ____ many places to go.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 24,
            quizQuestion: "I have ____ many things to do.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 25,
            quizQuestion: "I have ____ a lot of work to do.",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 26,
            quizQuestion: "His hands are ____ little.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 27,
            quizQuestion: "He has _____ little hands.",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 28,
            quizQuestion: "Try to do this exercise, it is _____ simple.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 29,
            quizQuestion: "Does anybody understand _____ rules?",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 30,
            quizQuestion: "I think I understand.  _____ an easy test!",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 31,
            quizQuestion: "Why is my teacher _____ cool ?",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such a",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 32,
            quizQuestion: "Grandparents grew ____ few vegetables, so they didn't give us any.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 33,
            quizQuestion: "We stayed on the top floor suite. There was ______ lovely view from the terrace.",
            answers: [
            {
            answer: "such a",
            correct: true
            },
            {
            answer: "such an",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 34,
            quizQuestion: "It was ______ late and we decided to leave.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 35,
            quizQuestion: "The music was ______ loud, we called the police",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 36,
            quizQuestion: "John! I'm ______ happy to see you!",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 37,
            quizQuestion: "You speak English  ____  fluently! It's incredible.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 38,
            quizQuestion: "I've never seen  ____  amazing views before.",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 39,
            quizQuestion: "Why did you buy  ____  expensive car? You don't even like driving.",
            answers: [
            {
            answer: "such an",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 40,
            quizQuestion: "I'd be happier if I didn't have  ____  problems. I really have a lot of problems.",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 41,
            quizQuestion: "You are  ____  idiot!",
            answers: [
            {
            answer: "such an",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 42,
            quizQuestion: "He has  ____  much money that he could buy any house in the city.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 43,
            quizQuestion: "Why did she say  ____  terrible things?",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 44,
            quizQuestion: "She entered the room  ____  quietly that we didn't hear her.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 45,
            quizQuestion: "You are  ____  liar! You never tell the truth.",
            answers: [
            {
            answer: "such a",
            correct: true
            },
            {
            answer: "such an",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 46,
            quizQuestion: "We really liked the music at the concert. It was ____ great performance!",
            answers: [
            {
            answer: "such a",
            correct: true
            },
            {
            answer: "such an",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 47,
            quizQuestion: "It's  _____ warm today that I'm going to the beach.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 48,
            quizQuestion: "He has done _____ foolish things that he will get into serious trouble.",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 49,
            quizQuestion: "He has read that book _____ many times that he knows it by heart.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 50,
            quizQuestion: "He is _____ extravagant that all his money is spent long before his next pay check.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 51,
            quizQuestion: "He made _____ generous contributions to the university that they are naming one of the new buildings after him.",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 52,
            quizQuestion: "He wastes _____ much time watching television that he never finishes his homework.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 53,
            quizQuestion: "Her work at the university has been _____ poor that she is thinking of leaving.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 54,
            quizQuestion: "It was  _____ delicious meal that we asked the chef for its recipe.",
            answers: [
            {
            answer: "such a",
            correct: true
            },
            {
            answer: "such an",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 55,
            quizQuestion: "The thief came in _____ quietly that the sleeping couple never heard him.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 56,
            quizQuestion: "There was _____ crowd in the street that we could hardly move.",
            answers: [
            {
            answer: "such a",
            correct: true
            },
            {
            answer: "such an",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 57,
            quizQuestion: "They are _____ boring people that we hate to visit them.",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 58,
            quizQuestion: "This is _____ beautiful piano that I'm sorry I have to sell it.",
            answers: [
            {
            answer: "such a",
            correct: true
            },
            {
            answer: "such an",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 59,
            quizQuestion: "This tree grows _____ fast that we have to trim it often.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 60,
            quizQuestion: "Those are _____ great moments that will never be forgotten.",
            answers: [
            {
            answer: "such",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 61,
            quizQuestion: "We're  _____ pleased with these new towels that we're going to buy some more.",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 62,
            quizQuestion: "Vincent is _____ awesome teacherKA !",
            answers: [
            {
            answer: "such an",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "so",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 63,
            quizQuestion: "Vincent loves me _______ much",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 64,
            quizQuestion: "He smokes _______.",
            answers: [
            {
            answer: "so much",
            correct: true
            },
            {
            answer: "so very",
            correct: false
            },
            {
            answer: "such much",
            correct: false
            },
            {
            answer: "so many",
            correct: false
            },
            {
            answer: "many",
            correct: false
            },
            ]
            },
            {
            id: 65,
            quizQuestion: "My teacher eats _______ sugar.",
            answers: [
            {
            answer: "so much",
            correct: true
            },
            {
            answer: "so very",
            correct: false
            },
            {
            answer: "such much",
            correct: false
            },
            {
            answer: "so many",
            correct: false
            },
            {
            answer: "many",
            correct: false
            },
            ]
            },
            {
            id: 66,
            quizQuestion: "I can't eat _______ pelmenis",
            answers: [
            {
            answer: "so many",
            correct: true
            },
            {
            answer: "so much",
            correct: false
            },
            {
            answer: "such much",
            correct: false
            },
            {
            answer: "much",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 67,
            quizQuestion: "I have ________ tasks to do at home",
            answers: [
            {
            answer: "so many",
            correct: true
            },
            {
            answer: "so much",
            correct: false
            },
            {
            answer: "such much",
            correct: false
            },
            {
            answer: "much",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 68,
            quizQuestion: "I never had _______ money and time to spend",
            answers: [
            {
            answer: "so much",
            correct: true
            },
            {
            answer: "so very",
            correct: false
            },
            {
            answer: "such much",
            correct: false
            },
            {
            answer: "so many",
            correct: false
            },
            {
            answer: "many",
            correct: false
            },
            ]
            },
            {
            id: 69,
            quizQuestion: "Shut up! You said ________ already .",
            answers: [
            {
            answer: "so much",
            correct: true
            },
            {
            answer: "so very",
            correct: false
            },
            {
            answer: "such much",
            correct: false
            },
            {
            answer: "so many",
            correct: false
            },
            {
            answer: "too many",
            correct: false
            },
            ]
            },
            {
            id: 70,
            quizQuestion: "Everybody likes Vincent _______ much!",
            answers: [
            {
            answer: "so",
            correct: true
            },
            {
            answer: "such a",
            correct: false
            },
            {
            answer: "such",
            correct: false
            },
            {
            answer: "such an",
            correct: false
            },
            
            
            
            
            ]
            },
            
    ],
    advice01: [
        {
            id: 1,
            quizQuestion: "Тебе не следует переживать",
            answers: [
            {
            answer: "You shouldn't worry",
            correct: true
            },
            {
            answer: "You don't should worry",
            correct: false
            },
            {
            answer: "You shouldn't to worry",
            correct: false
            },
            {
            answer: "You mustn't worry",
            correct: false
            },
            {
            answer: "Don't worry, be happy",
            correct: false
            },
            ]
            },
            {
            id: 2,
            quizQuestion: "Тебе не следует сдаваться",
            answers: [
            {
            answer: "You shouldn't give up",
            correct: true
            },
            {
            answer: "You shouldn't to give up",
            correct: false
            },
            {
            answer: "You don't should give up",
            correct: false
            },
            {
            answer: "You don't shouldto give up",
            correct: false
            },
            {
            answer: "Never give up! Don't be a loser!",
            correct: false
            },
            ]
            },
            {
            id: 3,
            quizQuestion: "Ты не нуждаешься в помощи",
            answers: [
            {
            answer: "You don't need help",
            correct: true
            },
            {
            answer: "You no need help",
            correct: false
            },
            {
            answer: "You doesn't need help",
            correct: false
            },
            {
            answer: "You shouldn't help",
            correct: false
            },
            {
            answer: "You haven't help",
            correct: false
            },
            ]
            },
            {
            id: 4,
            quizQuestion: "У него нет нужды делать что-то сверхестественное",
            answers: [
            {
            answer: "He doesn't need to do something supernatural",
            correct: true
            },
            {
            answer: "He don't need to do something supernatural",
            correct: false
            },
            {
            answer: "He mustn't to do something supernatural",
            correct: false
            },
            {
            answer: "He is not a superman",
            correct: false
            },
            {
            answer: "He doesn't gotta do something supernatural",
            correct: false
            },
            ]
            },
            {
            id: 5,
            quizQuestion: "Ей не надо идти в магазин",
            answers: [
            {
            answer: "She doesn't have to go to a shop",
            correct: true
            },
            {
            answer: "She mustn't go to a shop",
            correct: false
            },
            {
            answer: "She don't need to go to a shop",
            correct: false
            },
            {
            answer: "She has to go to a shop",
            correct: false
            },
            {
            answer: "She doesn't needs to go to a shop",
            correct: false
            },
            ]
            },
            {
            id: 6,
            quizQuestion: "Мне это не надо, не нужно, незачем",
            answers: [
            {
            answer: "I don't need it",
            correct: true
            },
            {
            answer: "I don't have it",
            correct: false
            },
            {
            answer: "I mustn't",
            correct: false
            },
            {
            answer: "I shouldn't",
            correct: false
            },
            {
            answer: "I don't it nothing",
            correct: false
            },
            ]
            },
            {
            id: 7,
            quizQuestion: "Мои советы просты и логичны",
            answers: [
            {
            answer: "My advice is simple and logical",
            correct: true
            },
            {
            answer: "My advice are simple and logical",
            correct: false
            },
            {
            answer: "My advices are simple and logical",
            correct: false
            },
            {
            answer: "My advice simple and logical",
            correct: false
            },
            {
            answer: "My advices is simple and logical",
            correct: false
            },
            ]
            },
            {
            id: 8,
            quizQuestion: "Я каждый день даю тебе один совет",
            answers: [
            {
            answer: "I give you advice",
            correct: true
            },
            {
            answer: "I am advising you",
            correct: false
            },
            {
            answer: "I give you an advice",
            correct: false
            },
            {
            answer: "I every day give you one advice",
            correct: false
            },
            {
            answer: "shut up!",
            correct: false
            },
            ]
            },
            {
            id: 9,
            quizQuestion: "Тебе нужно дать мне совет",
            answers: [
            {
            answer: "You have to give me advice",
            correct: true
            },
            {
            answer: "You should giving me advice",
            correct: false
            },
            
            
            
            
            {
            answer: "You must to advice me",
            correct: false
            },
            {
            answer: "You need give advice to me",
            correct: false
            },
            ]
            },
            {
            id: 10,
            quizQuestion: "Мне нужно дать тебе совет",
            answers: [
            {
            answer: "I have to give you advice",
            correct: true
            },
            {
            answer: "I need to give an advice you",
            correct: false
            },
            {
            answer: "I need to advicing you",
            correct: false
            },
            {
            answer: "I need to giving you advice",
            correct: false
            },
            {
            answer: "I am needing to giving you advicing",
            correct: false
            },
            ]
            },
            {
            id: 11,
            quizQuestion: "Ты можешь ходить в спортзал",
            answers: [
            {
            answer: "You can go to the GYM",
            correct: true
            },
            {
            answer: "You have legs",
            correct: false
            },
            {
            answer: "You could go to the ZAL",
            correct: false
            },
            {
            answer: "You should go to the GYM",
            correct: false
            },
            {
            answer: "You need to go to the GYM",
            correct: false
            },
            ]
            },
            {
            id: 12,
            quizQuestion: "Ты бы мог ходить в спортзал",
            answers: [
            {
            answer: "You could go to the GYM",
            correct: true
            },
            {
            answer: "You could go to the GYM",
            correct: false
            },
            {
            answer: "You need to go to the GYM",
            correct: false
            },
            {
            answer: "You can go to the ZAL",
            correct: false
            },
            {
            answer: "You've gotta go to the GYM",
            correct: false
            },
            ]
            },
            {
            id: 13,
            quizQuestion: "Тебе необходимо ходить в спортзал",
            answers: [
            {
            answer: "You need to go to the GYM",
            correct: true
            },
            {
            answer: "You should to go to the GYM",
            correct: false
            },
            {
            answer: "You have to go to the ZAL",
            correct: false
            },
            {
            answer: "You must go to the GYM",
            correct: false
            },
            {
            answer: "Go to the GYM! NOW!",
            correct: false
            },
            ]
            },
            {
            id: 14,
            quizQuestion: "Тебе нужно ходить в спортзал",
            answers: [
            {
            answer: "You have to go to the GYM",
            correct: true
            },
            {
            answer: "You must go to the GYM",
            correct: false
            },
            {
            answer: "You need to go to the ZAL",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 15,
            quizQuestion: "Ты обязан ходить в спортзал",
            answers: [
            {
            answer: "You must go to the GYM",
            correct: true
            },
            {
            answer: "You have to go to the GYM",
            correct: false
            },
            {
            answer: "You need to go to the GYM",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 16,
            quizQuestion: "Я не обязан делать этого",
            answers: [
            {
            answer: "I don't have to do it",
            correct: true
            },
            {
            answer: "I mustn't do it",
            correct: false
            },
            {
            answer: "I must not do it",
            correct: false
            },
            {
            answer: "I shouldn't do it",
            correct: false
            },
            {
            answer: "I don't need to do it",
            correct: false
            },
            ]
            },
            {
            id: 17,
            quizQuestion: "Мне не нужно делать этого",
            answers: [
            {
            answer: "I don't have to do it",
            correct: true
            },
            {
            answer: "I mustn't do it",
            correct: false
            },
            {
            answer: "I must not do it",
            correct: false
            },
            {
            answer: "I shouldn't do it",
            correct: false
            },
            
            
            
            
            ]
            },
            {
            id: 18,
            quizQuestion: "У меня нет необходимости делать этого",
            answers: [
            {
            answer: "I don't need to do it",
            correct: true
            },
            {
            answer: "I mustn't do it",
            correct: false
            },
            {
            answer: "I must not do it",
            correct: false
            },
            {
            answer: "I shouldn't do it",
            correct: false
            },
            {
            answer: "I don't gotta do it",
            correct: false
            },
            ]
            },
            {
            id: 19,
            quizQuestion: "Она обязана готовить борщи",
            answers: [
            {
            answer: "She must cook borschi =)",
            correct: true
            },
            {
            answer: "She has to cook soups",
            correct: false
            },
            {
            answer: "She needs to cook borsch",
            correct: false
            },
            {
            answer: "She should cook soup",
            correct: false
            },
            {
            answer: "She's gotta kiss me",
            correct: false
            },
            ]
            },
            {
            id: 20,
            quizQuestion: "Ей не нужно ничего делать",
            answers: [
            {
            answer: "She doesn't have to do anything",
            correct: true
            },
            {
            answer: "She must do nothing",
            correct: false
            },
            {
            answer: "She mustn't do nothing",
            correct: false
            },
            {
            answer: "She doesn't need doing anything",
            correct: false
            },
            {
            answer: "She doesn't has to do anything",
            correct: false
            },
            ]
            },
            {
            id: 21,
            quizQuestion: "Мне нужно поспать",
            answers: [
            {
            answer: "I have to sleep",
            correct: true
            },
            {
            answer: "I must sleep",
            correct: false
            },
            {
            answer: "I need to sleeping",
            correct: false
            },
            {
            answer: "I am need to sleep",
            correct: false
            },
            {
            answer: "I am have to sleep",
            correct: false
            },
            ]
            },
            {
            id: 22,
            quizQuestion: "Нам нужно сделать домаху",
            answers: [
            {
            answer: "We have to do omework",
            correct: true
            },
            {
            answer: "They have to do homework",
            correct: false
            },
            {
            answer: "Our have to do homework",
            correct: false
            },
            {
            answer: "My have to do homework",
            correct: false
            },
            {
            answer: "You have to do my homework",
            correct: false
            },
            ]
            },
            {
            id: 23,
            quizQuestion: "Винсенту следует прекратить пить за гаражами",
            answers: [
            {
            answer: "Vincent should stop drinking behind the garages",
            correct: true
            },
            {
            answer: "Really.",
            correct: false
            },
            {
            answer: "Vincent must not give up",
            correct: false
            },
            {
            answer: "Vincent should think about his family",
            correct: false
            },
            {
            answer: "Vincent shouldn't stop drinking behind the garages",
            correct: false
            },
            ]
            },
            {
            id: 24,
            quizQuestion: "Мне нужно бежать",
            answers: [
            {
            answer: "I have to run",
            correct: true
            },
            {
            answer: "I need to running",
            correct: false
            },
            {
            answer: "I am have to run",
            correct: false
            },
            {
            answer: "I am running",
            correct: false
            },
            {
            answer: "I musting run",
            correct: false
            },
            ]
            },
            {
            id: 25,
            quizQuestion: "надо бежать",
            answers: [
            {
            answer: "I've gotta run",
            correct: true
            },
            {
            answer: "Mne nado bezhat",
            correct: false
            },
            {
            answer: "I must run",
            correct: false
            },
            {
            answer: "I need run",
            correct: false
            },
            {
            answer: "Me need run",
            correct: false
            },
            ]
            },
            {
            id: 26,
            quizQuestion: "Мне необходимо принять лекарства",
            answers: [
            {
            answer: "I need to take medicine",
            correct: true
            },
            {
            answer: "Me need a doctor",
            correct: false
            },
            {
            answer: "I must take medicine",
            correct: false
            },
            {
            answer: "I have to drugs",
            correct: false
            },
            {
            answer: "I've gotta eat drugs",
            correct: false
            },
            ]
            },
            {
            id: 27,
            quizQuestion: "Я обязан слушаться доктороа",
            answers: [
            {
            answer: "I must listen to doctors",
            correct: true
            },
            {
            answer: "I need listen a doctor",
            correct: false
            },
            {
            answer: "I have to listen doctor",
            correct: false
            },
            {
            answer: "I must to listen to a doctor",
            correct: false
            },
            {
            answer: "I don't need to listen to a doctor",
            correct: false
            },
            ]
            },
            {
            id: 28,
            quizQuestion: "Мне нельзя сдаваться",
            answers: [
            {
            answer: "I mustn't give up",
            correct: true
            },
            {
            answer: "I can't giving up",
            correct: false
            },
            {
            answer: "I never give up",
            correct: false
            },
            {
            answer: "I haven't to give up",
            correct: false
            },
            {
            answer: "I couldn't give up",
            correct: false
            },
            ]
            },
            {
            id: 29,
            quizQuestion: "Ему нужно позвонить мне",
            answers: [
            {
            answer: "He has to call me",
            correct: true
            },
            {
            answer: "Him has to call me",
            correct: false
            },
            {
            answer: "His has to call me",
            correct: false
            },
            {
            answer: "Him must call me",
            correct: false
            },
            {
            answer: "He need to call me",
            correct: false
            },
            ]
            },
            {
            id: 30,
            quizQuestion: "Я не должен верить политикам",
            answers: [
            {
            answer: "I don't have to trust politicians",
            correct: true
            },
            {
            answer: "I can't trust nobody",
            correct: false
            },
            {
            answer: "I mustn't trust nobody",
            correct: false
            },
            {
            answer: "I don't need tryst politicians",
            correct: false
            },
            {
            answer: "Единая Россия",
            correct: false
            },
            ]
            },
            {
            id: 31,
            quizQuestion: "Следует ли нам потанцевать?",
            answers: [
            {
            answer: "Shall we dance?",
            correct: true
            },
            {
            answer: "Shouldn't we dance?",
            correct: false
            },
            {
            answer: "Let's dance!",
            correct: false
            },
            {
            answer: "Dance with me!",
            correct: false
            },
            {
            answer: "You and me dance now?",
            correct: false
            },
            ]
            },
            {
            id: 32,
            quizQuestion: "Мне следует уйти или остаться?",
            answers: [
            {
            answer: "Should I stay or should I go?",
            correct: true
            },
            {
            answer: "Need I stay or need I go?",
            correct: false
            },
            {
            answer: "Must I stay or must I go?",
            correct: false
            },
            {
            answer: "Go or no?",
            correct: false
            },
            {
            answer: "me go now?",
            correct: false
            },
            ]
            },
            {
            id: 33,
            quizQuestion: "Следовало ли бы мне сделать это… ?",
            answers: [
            {
            answer: "Should I do it?",
            correct: true
            },
            {
            answer: "Do I must do it?",
            correct: false
            },
            {
            answer: "shall I doing it?",
            correct: false
            },
            {
            answer: "I should do it?",
            correct: false
            },
            {
            answer: "Should me do it?",
            correct: false
            },
            ]
            },
            {
            id: 34,
            quizQuestion: "Следует ли ей целовать его",
            answers: [
            {
            answer: "Shall she kiss him?",
            correct: true
            },
            {
            answer: "Should she kisses him?",
            correct: false
            },
            {
            answer: "Shall he kiss her?",
            correct: false
            },
            {
            answer: "Shall they kiss?",
            correct: false
            },
            {
            answer: "Should I kiss her?",
            correct: false
            },
            ]
            },
            {
            id: 35,
            quizQuestion: "Мне действительно необходимо это?",
            answers: [
            {
            answer: "Do I really need it?",
            correct: true
            },
            {
            answer: "Do I really must it?",
            correct: false
            },
            {
            answer: "Do I really have it?",
            correct: false
            },
            {
            answer: "Do I really should it?",
            correct: false
            },
            {
            answer: "My really need this?",
            correct: false
            },
            ]
            },
            {
            id: 36,
            quizQuestion: "Мне нужно это делать?",
            answers: [
            {
            answer: "Do I have to do this?",
            correct: true
            },
            {
            answer: "Do I must do it?",
            correct: false
            },
            {
            answer: "Do I need do it?",
            correct: false
            },
            {
            answer: "Do I should do it?",
            correct: false
            },
            {
            answer: "Must I do it?",
            correct: false
            },
            ]
            },
            {
            id: 37,
            quizQuestion: "Никто ничего не должен делать",
            answers: [
            {
            answer: "Nobody has to do anything",
            correct: true
            },
            {
            answer: "Nobody must do nothing",
            correct: false
            },
            {
            answer: "Nobody nothing no must do",
            correct: false
            },
            {
            answer: "Nobody need to do anything",
            correct: false
            },
            {
            answer: "Nobody doesn't nothing do",
            correct: false
            },
            ]
            },
            {
            id: 38,
            quizQuestion: "Им не следует доверять нам",
            answers: [
            {
            answer: "They shouldn't trust us",
            correct: true
            },
            {
            answer: "Them shouldn't trust us",
            correct: false
            },
            {
            answer: "Their shouldn't trust us",
            correct: false
            },
            
            
            
            
            
            
            
            
            ]
            },
            {
            id: 39,
            quizQuestion: "Ему нужно идти прямо сейчас",
            answers: [
            {
            answer: "He's gotta go now",
            correct: true
            },
            {
            answer: "He need go right now",
            correct: false
            },
            {
            answer: "He is needing to go right now",
            correct: false
            },
            {
            answer: "He is having to go right now",
            correct: false
            },
            {
            answer: "He must going now",
            correct: false
            },
            ]
            },
            {
            id: 40,
            quizQuestion: "У нее нет необходимости идти в магазин",
            answers: [
            {
            answer: "She doesn't need to go to a shop",
            correct: true
            },
            {
            answer: "She mustn't go to a shop",
            correct: false
            },
            {
            answer: "She don't need to go to a shop",
            correct: false
            },
            {
            answer: "She hasn't to go to a shop",
            correct: false
            },
            {
            answer: "She doesn't needs to go to a shop",
            correct: false
            },
            ]
            },
    ],
    articles01: [
        {
            id: 1,
            quizQuestion: "__ action",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 2,
            quizQuestion: "__ actor",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 3,
            quizQuestion: "__ actress",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 4,
            quizQuestion: "__ American band",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 5,
            quizQuestion: "__ angry fan",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 6,
            quizQuestion: "__ animal",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 7,
            quizQuestion: "__ answer",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 8,
            quizQuestion: "__ apple",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 9,
            quizQuestion: "__ astronaut",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 10,
            quizQuestion: "__ aunt",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 11,
            quizQuestion: "__ elephant",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 12,
            quizQuestion: "__ English book",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 13,
            quizQuestion: "__ English CD",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 14,
            quizQuestion: "__ error",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 15,
            quizQuestion: "__ exercise book",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 16,
            quizQuestion: "__ honourable profession",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 17,
            quizQuestion: "__ hour",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 18,
            quizQuestion: "__ idea",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 19,
            quizQuestion: "__ invitation",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 20,
            quizQuestion: "__ old bag",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 21,
            quizQuestion: "__ old bike",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 22,
            quizQuestion: "__ old car",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 23,
            quizQuestion: "__ old comic",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 24,
            quizQuestion: "__ older sister",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 25,
            quizQuestion: "__ outdoor activity",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 26,
            quizQuestion: "__ ugly T-shirt",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 27,
            quizQuestion: "__ umbrella",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 28,
            quizQuestion: "__ honest man",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 29,
            quizQuestion: "__ honest person",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 30,
            quizQuestion: "__ amazing teacher",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 31,
            quizQuestion: "__ ugly child",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 32,
            quizQuestion: "__ attractive building",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 33,
            quizQuestion: "__ attractive lady",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 34,
            quizQuestion: "__ bike",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 35,
            quizQuestion: "__ bird",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 36,
            quizQuestion: "__ blue pencil",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 37,
            quizQuestion: "__ comic",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 38,
            quizQuestion: "__ cup of coffee",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 39,
            quizQuestion: "__ famous actress",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 40,
            quizQuestion: "__ fresh orange",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 41,
            quizQuestion: "__ green umbrella",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 42,
            quizQuestion: "__ new desk",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 43,
            quizQuestion: "__ new school",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 44,
            quizQuestion: "__ one-dollar bill",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 45,
            quizQuestion: "__ pet",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 46,
            quizQuestion: "__ red apple",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 47,
            quizQuestion: "__ red pen",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 48,
            quizQuestion: "__ smart student",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 49,
            quizQuestion: "__ thousand times",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 50,
            quizQuestion: "__ wild animal",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 51,
            quizQuestion: "__ younger brother",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 52,
            quizQuestion: "__ yummy hamburger",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 53,
            quizQuestion: "he is __ nice kid!",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 54,
            quizQuestion: "__ woman",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 55,
            quizQuestion: "__ man",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 56,
            quizQuestion: "__ young man",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 57,
            quizQuestion: "__ clever detective",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 58,
            quizQuestion: "__ special agent",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 59,
            quizQuestion: "__ awesome lessons",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 60,
            quizQuestion: "__ young men",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 61,
            quizQuestion: "__ bikes",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 62,
            quizQuestion: "__ birds",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 63,
            quizQuestion: "__ blue pencils",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 64,
            quizQuestion: "__ comics",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 65,
            quizQuestion: "__ beer",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 66,
            quizQuestion: "__ famous people",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 67,
            quizQuestion: "__ fresh oranges",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 68,
            quizQuestion: "__ green umbrellas",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 69,
            quizQuestion: "__ new desks",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 70,
            quizQuestion: "__ new schools",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 71,
            quizQuestion: "__ taxi drivers",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 72,
            quizQuestion: "__ pets",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 73,
            quizQuestion: "__ red apples",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 74,
            quizQuestion: "__ red pens",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 75,
            quizQuestion: "__ smart students",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 76,
            quizQuestion: "__ thousands of people",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 77,
            quizQuestion: "__ wild animals",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 78,
            quizQuestion: "__ younger brothers",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 79,
            quizQuestion: "__ yummy hamburgers",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 80,
            quizQuestion: "__ actions",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 81,
            quizQuestion: "__ actors",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 82,
            quizQuestion: "__ actresses",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 83,
            quizQuestion: "__ American bands",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 84,
            quizQuestion: "__ angry fans",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 85,
            quizQuestion: "__ animals",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 86,
            quizQuestion: "__ answers",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 87,
            quizQuestion: "__ apples",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 88,
            quizQuestion: "__ astronauts",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 89,
            quizQuestion: "__ aunts",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 90,
            quizQuestion: "__ elephants",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 91,
            quizQuestion: "__ English books",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 92,
            quizQuestion: "__ English CDs",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 93,
            quizQuestion: "__ errors",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 94,
            quizQuestion: "__ cool books",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 95,
            quizQuestion: "__ exercise books",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 96,
            quizQuestion: "__ honourable professions",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 97,
            quizQuestion: "__ coffee and tea",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 98,
            quizQuestion: "__ hours",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 99,
            quizQuestion: "__ ideas",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 100,
            quizQuestion: "__ invitations",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 101,
            quizQuestion: "__ old bags",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 102,
            quizQuestion: "__ old bikes",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 103,
            quizQuestion: "__ old cars",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 104,
            quizQuestion: "__ old comics",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 105,
            quizQuestion: "__ older sisters",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 106,
            quizQuestion: "__ outdoor activities",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 107,
            quizQuestion: "__ ugly T-shirts",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 108,
            quizQuestion: "__ umbrellas",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 109,
            quizQuestion: "__ money",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 110,
            quizQuestion: "__ water",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 111,
            quizQuestion: "__ snow",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 112,
            quizQuestion: "__ ice",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 113,
            quizQuestion: "__ yellow snow",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 114,
            quizQuestion: "__ love",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 115,
            quizQuestion: "__ people",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 116,
            quizQuestion: "__ men",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 117,
            quizQuestion: "__ women",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 118,
            quizQuestion: "__ children",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 119,
            quizQuestion: "I love __ Vincent",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 120,
            quizQuestion: "Emily needs a new desk in her __ room.",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 121,
            quizQuestion: "Vincent is __ smart",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 122,
            quizQuestion: "Ben has __ old snowboard.",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 123,
            quizQuestion: "Emily needs __ new desk in her room.",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 124,
            quizQuestion: "My dad likes tea with __ sugar",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 125,
            quizQuestion: "My mom likes __ tea with sugar",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 126,
            quizQuestion: "He is drinking __ cup of coffee.",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 127,
            quizQuestion: "I need __ blue pen.",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 128,
            quizQuestion: "Leipzig city has __ airport.",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 129,
            quizQuestion: "Let's sing __ song.",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 130,
            quizQuestion: "Look! There's __ bird flying.",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 131,
            quizQuestion: "Lucy has __ dog.",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 132,
            quizQuestion: "My father is __ honest person.",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 133,
            quizQuestion: "My __ friend likes to be an astronaut.",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 134,
            quizQuestion: "My friend likes to be __ astronaut.",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 135,
            quizQuestion: "His dog doesn't have __ name",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 136,
            quizQuestion: "Peter has __ aunt in Berlin.",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 137,
            quizQuestion: "She has __ exercise book in her school bag.",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 138,
            quizQuestion: "She has an exercise book in her __ school bag.",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 139,
            quizQuestion: "She's reading __ old comic.",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 140,
            quizQuestion: "The speed of my __ car is 212 km an hour.",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 141,
            quizQuestion: "The girl is __ pilot.",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 142,
            quizQuestion: "The speed of this car was 160 miles __ hour.",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 143,
            quizQuestion: "There is __ green English book on the desk.",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 144,
            quizQuestion: "They finished __ exam.",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 145,
            quizQuestion: "They've got __ idea.",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 146,
            quizQuestion: "This is __ expensive dress.",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 147,
            quizQuestion: "This test is __ hard.",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 148,
            quizQuestion: "We listen to __ English CD.",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 149,
            quizQuestion: "My brother is __ honest",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 150,
            quizQuestion: "__ clothes",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 151,
            quizQuestion: "__ glasses",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 152,
            quizQuestion: "I have __ super cool sun glasses",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 153,
            quizQuestion: "I have __ attractive boyfriend",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 154,
            quizQuestion: "My __ eyes are blue",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "an",
            correct: false
            },
            ]
            },
            {
            id: 155,
            quizQuestion: "What is it? Is it __ animal or a toy?",
            answers: [
            {
            answer: "an",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 156,
            quizQuestion: "What is it? Is it an animal or __ toy?",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "an",
            correct: false
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
    ],
    m004: [
        {
            id: 1,
            quizQuestion: "Как на английском сказать: Я",
            answers: [
            {
            answer: "I",
            correct: true
            },
            {
            answer: "I am",
            correct: false
            },
            {
            answer: "I do",
            correct: false
            },
            {
            answer: "Ai",
            correct: false
            },
            {
            answer: "eye",
            correct: false
            },
            ]
            },
            {
            id: 2,
            quizQuestion: "В косых скобках: / А / написано произношение одной из букв английского алфавита. Что же это за буква, которая произносится / А / ?",
            answers: [
            {
            answer: "R",
            correct: true
            },
            {
            answer: "A",
            correct: false
            },
            {
            answer: "U",
            correct: false
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "Y",
            correct: false
            },
            ]
            },
            {
            id: 3,
            quizQuestion: "Twelve это",
            answers: [
            {
            answer: "12",
            correct: true
            },
            {
            answer: "20",
            correct: false
            },
            {
            answer: "21",
            correct: false
            },
            {
            answer: "22",
            correct: false
            },
            {
            answer: "222",
            correct: false
            },
            ]
            },
            {
            id: 4,
            quizQuestion: "Twenty это",
            answers: [
            {
            answer: "20",
            correct: true
            },
            {
            answer: "12",
            correct: false
            },
            {
            answer: "202",
            correct: false
            },
            {
            answer: "22",
            correct: false
            },
            {
            answer: "2",
            correct: false
            },
            ]
            },
            {
            id: 5,
            quizQuestion: "Айфон и Айндроид это",
            answers: [
            {
            answer: "they",
            correct: true
            },
            {
            answer: "he",
            correct: false
            },
            {
            answer: "she",
            correct: false
            },
            {
            answer: "we",
            correct: false
            },
            {
            answer: "I have",
            correct: false
            },
            ]
            },
            {
            id: 6,
            quizQuestion: "Восемь на английском это",
            answers: [
            {
            answer: "eight",
            correct: true
            },
            {
            answer: "nine",
            correct: false
            },
            {
            answer: "eleven",
            correct: false
            },
            {
            answer: "twelve",
            correct: false
            },
            {
            answer: "twenty",
            correct: false
            },
            ]
            },
            {
            id: 7,
            quizQuestion: "Девять на английском это",
            answers: [
            {
            answer: "nine",
            correct: true
            },
            {
            answer: "eight",
            correct: false
            },
            {
            answer: "dievьять",
            correct: false
            },
            {
            answer: "twelve",
            correct: false
            },
            {
            answer: "twenty",
            correct: false
            },
            ]
            },
            {
            id: 8,
            quizQuestion: "Как на английском произносится местоимение: 'Вы' ?",
            answers: [
            {
            answer: "/ю/",
            correct: true
            },
            {
            answer: "/уи/",
            correct: false
            },
            {
            answer: "/дэй/",
            correct: false
            },
            {
            answer: "/ё/",
            correct: false
            },
            {
            answer: "/йо/",
            correct: false
            },
            ]
            },
            {
            id: 9,
            quizQuestion: "Как на английском произносится местоимение: 'Мы' ?",
            answers: [
            {
            answer: "/уи/",
            correct: true
            },
            {
            answer: "/вы/",
            correct: false
            },
            {
            answer: "/ми/",
            correct: false
            },
            {
            answer: "/ауа/",
            correct: false
            },
            {
            answer: "/дэй/",
            correct: false
            },
            ]
            },
            {
            id: 10,
            quizQuestion: "Как на английском произносится местоимение: 'Он' ?",
            answers: [
            {
            answer: "/хи/",
            correct: true
            },
            {
            answer: "/щи/",
            correct: false
            },
            {
            answer: "/уи/",
            correct: false
            },
            {
            answer: "/дэй/",
            correct: false
            },
            {
            answer: "/дыс/",
            correct: false
            },
            ]
            },
            {
            id: 11,
            quizQuestion: "Как на английском произносится местоимение: 'Она' ?",
            answers: [
            {
            answer: "/щи/",
            correct: true
            },
            {
            answer: "/щит/",
            correct: false
            },
            {
            answer: "/хи/",
            correct: false
            },
            {
            answer: "/хё/",
            correct: false
            },
            {
            answer: "/гёрл/",
            correct: false
            },
            ]
            },
            {
            id: 12,
            quizQuestion: "Как на английском произносится местоимение: 'Они' ?",
            answers: [
            {
            answer: "/дэй/",
            correct: true
            },
            {
            answer: "/дэм/",
            correct: false
            },
            {
            answer: "/дей/",
            correct: false
            },
            {
            answer: "/дэир/",
            correct: false
            },
            {
            answer: "/зум/",
            correct: false
            },
            ]
            },
            {
            id: 13,
            quizQuestion: "Как на английском произносится местоимение: 'Оно или это' ?",
            answers: [
            {
            answer: "/ит/",
            correct: true
            },
            {
            answer: "/щит/",
            correct: false
            },
            {
            answer: "/ано/",
            correct: false
            },
            {
            answer: "/оно/",
            correct: false
            },
            {
            answer: "/ви/",
            correct: false
            },
            ]
            },
            {
            id: 14,
            quizQuestion: "Как на английском произносится местоимение: 'Ты' ?",
            answers: [
            {
            answer: "/ю/",
            correct: true
            },
            {
            answer: "/ты/",
            correct: false
            },
            {
            answer: "/ти/",
            correct: false
            },
            {
            answer: "/уи/",
            correct: false
            },
            {
            answer: "/ит/",
            correct: false
            },
            ]
            },
            {
            id: 15,
            quizQuestion: "Как на английском произносится притяжательное местоимение: 'Ваш' ?",
            answers: [
            {
            answer: "/ё/",
            correct: true
            },
            {
            answer: "/йоу/",
            correct: false
            },
            {
            answer: "/уаш/",
            correct: false
            },
            {
            answer: "/дэир/",
            correct: false
            },
            {
            answer: "/дыс/",
            correct: false
            },
            ]
            },
            {
            id: 16,
            quizQuestion: "Как на английском произносится притяжательное местоимение: 'Его' ?",
            answers: [
            {
            answer: "/хиз/",
            correct: true
            },
            {
            answer: "/хер/",
            correct: false
            },
            {
            answer: "/хё/",
            correct: false
            },
            {
            answer: "/хим/",
            correct: false
            },
            {
            answer: "/хи/",
            correct: false
            },
            ]
            },
            {
            id: 17,
            quizQuestion: "Как на английском произносится притяжательное местоимение: 'Её' ?",
            answers: [
            {
            answer: "/хё/",
            correct: true
            },
            {
            answer: "/щи/",
            correct: false
            },
            {
            answer: "/щит/",
            correct: false
            },
            {
            answer: "/хйор/",
            correct: false
            },
            {
            answer: "/хёрс/",
            correct: false
            },
            ]
            },
            {
            id: 18,
            quizQuestion: "Как на английском произносится притяжательное местоимение: 'Их' ?",
            answers: [
            {
            answer: "/дэир/",
            correct: true
            },
            {
            answer: "/дэм/",
            correct: false
            },
            {
            answer: "/дыс/",
            correct: false
            },
            {
            answer: "/дэт/",
            correct: false
            },
            {
            answer: "/Zэир/",
            correct: false
            },
            ]
            },
            {
            id: 19,
            quizQuestion: "Как на английском произносится притяжательное местоимение: 'Наш' ?",
            answers: [
            {
            answer: "/ауа/",
            correct: true
            },
            {
            answer: "/маё/",
            correct: false
            },
            {
            answer: "/аур/",
            correct: false
            },
            {
            answer: "/оур/",
            correct: false
            },
            {
            answer: "/аригато/",
            correct: false
            },
            ]
            },
            {
            id: 20,
            quizQuestion: "Как на английском произносится притяжательное местоимение: 'Твой' ?",
            answers: [
            {
            answer: "/ё/",
            correct: true
            },
            {
            answer: "/йор/",
            correct: false
            },
            {
            answer: "/уо/",
            correct: false
            },
            {
            answer: "/йоу/",
            correct: false
            },
            {
            answer: "/туой/",
            correct: false
            },
            ]
            },
            {
            id: 21,
            quizQuestion: "Как произносится указательное местоимение: 'Вот этот' ?",
            answers: [
            {
            answer: "/дыс/",
            correct: true
            },
            {
            answer: "/дэт/",
            correct: false
            },
            {
            answer: "/дат/",
            correct: false
            },
            {
            answer: "/дэм/",
            correct: false
            },
            {
            answer: "/доуз/",
            correct: false
            },
            ]
            },
            {
            id: 22,
            quizQuestion: "Как на английском сказать: его пёс",
            answers: [
            {
            answer: "his dog",
            correct: true
            },
            {
            answer: "her dog",
            correct: false
            },
            {
            answer: "him dog",
            correct: false
            },
            {
            answer: "she dog",
            correct: false
            },
            {
            answer: "he dog",
            correct: false
            },
            ]
            },
            {
            id: 23,
            quizQuestion: "Как на английском сказать: её",
            answers: [
            {
            answer: "her",
            correct: true
            },
            {
            answer: "his",
            correct: false
            },
            {
            answer: "her",
            correct: false
            },
            {
            answer: "him",
            correct: false
            },
            {
            answer: "she",
            correct: false
            },
            ]
            },
            {
            id: 24,
            quizQuestion: "Как на английском сказать: их",
            answers: [
            {
            answer: "their /дэир/",
            correct: true
            },
            {
            answer: "them /дэм/",
            correct: false
            },
            {
            answer: "that /дэт/",
            correct: false
            },
            {
            answer: "this /дыС/",
            correct: false
            },
            {
            answer: "these /дыЗ/",
            correct: false
            },
            ]
            },
            {
            id: 25,
            quizQuestion: "Как на английском сказать: мой, моя, мои, моё",
            answers: [
            {
            answer: "my",
            correct: true
            },
            {
            answer: "mai",
            correct: false
            },
            {
            answer: "me",
            correct: false
            },
            {
            answer: "moy",
            correct: false
            },
            {
            answer: "mi",
            correct: false
            },
            ]
            },
            {
            id: 26,
            quizQuestion: "Как на английском сказать: мы",
            answers: [
            {
            answer: "we",
            correct: true
            },
            {
            answer: "they",
            correct: false
            },
            {
            answer: "our",
            correct: false
            },
            {
            answer: "mi",
            correct: false
            },
            {
            answer: "you",
            correct: false
            },
            ]
            },
            {
            id: 27,
            quizQuestion: "Как на английском сказать: наш, наша, наше, наши",
            answers: [
            {
            answer: "our",
            correct: true
            },
            {
            answer: "their",
            correct: false
            },
            {
            answer: "your",
            correct: false
            },
            {
            answer: "my",
            correct: false
            },
            {
            answer: "hour",
            correct: false
            },
            ]
            },
            {
            id: 28,
            quizQuestion: "Как на английском сказать: он",
            answers: [
            {
            answer: "he",
            correct: true
            },
            {
            answer: "his",
            correct: false
            },
            {
            answer: "him",
            correct: false
            },
            {
            answer: "her",
            correct: false
            },
            {
            answer: "she",
            correct: false
            },
            ]
            },
            {
            id: 29,
            quizQuestion: "Как на английском сказать: она",
            answers: [
            {
            answer: "she",
            correct: true
            },
            {
            answer: "he",
            correct: false
            },
            {
            answer: "her",
            correct: false
            },
            {
            answer: "his",
            correct: false
            },
            {
            answer: "girl",
            correct: false
            },
            ]
            },
            {
            id: 30,
            quizQuestion: "Как на английском сказать: они",
            answers: [
            {
            answer: "they",
            correct: true
            },
            {
            answer: "we",
            correct: false
            },
            {
            answer: "our",
            correct: false
            },
            {
            answer: "your",
            correct: false
            },
            {
            answer: "him",
            correct: false
            },
            ]
            },
            {
            id: 31,
            quizQuestion: "Как на английском сказать: твой, твоё, твоя, ваш, ваше, ваша, ваши, твои",
            answers: [
            {
            answer: "your",
            correct: true
            },
            {
            answer: "their",
            correct: false
            },
            {
            answer: "you",
            correct: false
            },
            {
            answer: "our",
            correct: false
            },
            {
            answer: "tvoy",
            correct: false
            },
            ]
            },
            {
            id: 32,
            quizQuestion: "Как на английском сказать: ты или вы",
            answers: [
            {
            answer: "you",
            correct: true
            },
            {
            answer: "ti",
            correct: false
            },
            {
            answer: "we",
            correct: false
            },
            {
            answer: "they",
            correct: false
            },
            {
            answer: "our",
            correct: false
            },
            ]
            },
            {
            id: 33,
            quizQuestion: "Как на английском сказать: это",
            answers: [
            {
            answer: "it",
            correct: true
            },
            {
            answer: "he",
            correct: false
            },
            {
            answer: "she",
            correct: false
            },
            {
            answer: "eto",
            correct: false
            },
            {
            answer: "they",
            correct: false
            },
            ]
            },
            {
            id: 34,
            quizQuestion: "Каким ОДНИМ словом (местоимением) можно заменить словосочетание : 'Их имена'?",
            answers: [
            {
            answer: "they",
            correct: true
            },
            {
            answer: "you",
            correct: false
            },
            {
            answer: "we",
            correct: false
            },
            {
            answer: "it",
            correct: false
            },
            {
            answer: "our",
            correct: false
            },
            ]
            },
            {
            id: 35,
            quizQuestion: "Каким ОДНИМ словом (местоимением) можно заменить словосочетание :  'ты и я'?",
            answers: [
            {
            answer: "we",
            correct: true
            },
            {
            answer: "they",
            correct: false
            },
            {
            answer: "your",
            correct: false
            },
            {
            answer: "our",
            correct: false
            },
            {
            answer: "it",
            correct: false
            },
            ]
            },
            {
            id: 36,
            quizQuestion: "Каким ОДНИМ словом (местоимением) можно заменить словосочетание :  'Умные люди'?",
            answers: [
            {
            answer: "we",
            correct: true
            },
            {
            answer: "he",
            correct: false
            },
            {
            answer: "she",
            correct: false
            },
            {
            answer: "it",
            correct: false
            },
            {
            answer: "I",
            correct: false
            },
            ]
            },
            {
            id: 37,
            quizQuestion: "Каким ОДНИМ словом (местоимением) можно заменить словосочетание :  'Черепашки Ниндзя'?",
            answers: [
            {
            answer: "they",
            correct: true
            },
            {
            answer: "he",
            correct: false
            },
            {
            answer: "she",
            correct: false
            },
            {
            answer: "it",
            correct: false
            },
            {
            answer: "I",
            correct: false
            },
            ]
            },
            {
            id: 38,
            quizQuestion: "Каким словом (местоимением) можно заменить слово 'iPhone'?",
            answers: [
            {
            answer: "it",
            correct: true
            },
            {
            answer: "she",
            correct: false
            },
            {
            answer: "shit",
            correct: false
            },
            {
            answer: "they",
            correct: false
            },
            {
            answer: "you",
            correct: false
            },
            ]
            },
            {
            id: 39,
            quizQuestion: "Каким словом (местоимением) можно заменить  слово 'Винсент'?",
            answers: [
            {
            answer: "he",
            correct: true
            },
            {
            answer: "she",
            correct: false
            },
            {
            answer: "you",
            correct: false
            },
            {
            answer: "my",
            correct: false
            },
            {
            answer: "it",
            correct: false
            },
            ]
            },
            {
            id: 40,
            quizQuestion: "Каким словом (местоимением) можно заменить слово 'Друзья'?",
            answers: [
            {
            answer: "we",
            correct: true
            },
            {
            answer: "he",
            correct: false
            },
            {
            answer: "she",
            correct: false
            },
            {
            answer: "your",
            correct: false
            },
            {
            answer: "it",
            correct: false
            },
            ]
            },
            {
            id: 41,
            quizQuestion: "Каким словом (местоимением) можно заменить слово 'Машина'?",
            answers: [
            {
            answer: "it",
            correct: true
            },
            {
            answer: "he",
            correct: false
            },
            {
            answer: "they",
            correct: false
            },
            {
            answer: "your",
            correct: false
            },
            {
            answer: "our",
            correct: false
            },
            ]
            },
            {
            id: 42,
            quizQuestion: "Каким словом (местоимением) можно заменить слово 'обезьяны'?",
            answers: [
            {
            answer: "you",
            correct: true
            },
            {
            answer: "he",
            correct: false
            },
            {
            answer: "she",
            correct: false
            },
            {
            answer: "it",
            correct: false
            },
            {
            answer: "Vincent",
            correct: false
            },
            ]
            },
            {
            id: 43,
            quizQuestion: "Каким словом (местоимением) можно заменить слово 'Родители'?",
            answers: [
            {
            answer: "they",
            correct: true
            },
            {
            answer: "he",
            correct: false
            },
            {
            answer: "she",
            correct: false
            },
            {
            answer: "it",
            correct: false
            },
            {
            answer: "I",
            correct: false
            },
            ]
            },
            {
            id: 44,
            quizQuestion: "Куринный супчик это тоже самое что и местоимение:",
            answers: [
            {
            answer: "it",
            correct: true
            },
            {
            answer: "she",
            correct: false
            },
            {
            answer: "KFC",
            correct: false
            },
            {
            answer: "you",
            correct: false
            },
            {
            answer: "chickens",
            correct: false
            },
            ]
            },
            {
            id: 45,
            quizQuestion: "Местоимения - это слова, которые используются вместо имени. Какие местоимения есть в английском?",
            answers: [
            {
            answer: "I, you, we, they, it, he, she",
            correct: true
            },
            {
            answer: "am, is, are",
            correct: false
            },
            {
            answer: "do, does, did",
            correct: false
            },
            {
            answer: "я ничего не понимаю",
            correct: false
            },
            {
            answer: "Vincent, давай полегче вопросы",
            correct: false
            },
            ]
            },
            {
            id: 46,
            quizQuestion: "Мои друзья - это тоже самое, что и местоимение:",
            answers: [
            {
            answer: "they",
            correct: true
            },
            {
            answer: "he",
            correct: false
            },
            {
            answer: "she",
            correct: false
            },
            {
            answer: "it",
            correct: false
            },
            {
            answer: "I",
            correct: false
            },
            ]
            },
            {
            id: 47,
            quizQuestion: "Нажми на букву, которая произносится  / ай /",
            answers: [
            {
            answer: "i",
            correct: true
            },
            {
            answer: "e",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "y",
            correct: false
            },
            {
            answer: "u",
            correct: false
            },
            ]
            },
            {
            id: 48,
            quizQuestion: "Нажми на букву, которая произносится  / джи /",
            answers: [
            {
            answer: "g",
            correct: true
            },
            {
            answer: "j",
            correct: false
            },
            {
            answer: "J",
            correct: false
            },
            {
            answer: "q",
            correct: false
            },
            {
            answer: "i",
            correct: false
            },
            ]
            },
            {
            id: 49,
            quizQuestion: "Нажми на букву, которая произносится  / джэй /",
            answers: [
            {
            answer: "j",
            correct: true
            },
            {
            answer: "g",
            correct: false
            },
            {
            answer: "G",
            correct: false
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "q",
            correct: false
            },
            ]
            },
            {
            id: 50,
            quizQuestion: "Нажми на букву, которая произносится  / и /",
            answers: [
            {
            answer: "e",
            correct: true
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "y",
            correct: false
            },
            {
            answer: "&",
            correct: false
            },
            {
            answer: "u",
            correct: false
            },
            ]
            },
            {
            id: 51,
            quizQuestion: "Нажми на букву, которая произносится  / и /",
            answers: [
            {
            answer: "E",
            correct: true
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "J",
            correct: false
            },
            {
            answer: "I",
            correct: false
            },
            {
            answer: "N",
            correct: false
            },
            ]
            },
            {
            id: 52,
            quizQuestion: "Нажми на букву, которая произносится  / кей /",
            answers: [
            {
            answer: "k",
            correct: true
            },
            {
            answer: "q",
            correct: false
            },
            {
            answer: "c",
            correct: false
            },
            {
            answer: "q",
            correct: false
            },
            {
            answer: "Q",
            correct: false
            },
            ]
            },
            {
            id: 53,
            quizQuestion: "Нажми на букву, которая произносится  / си /",
            answers: [
            {
            answer: "c",
            correct: true
            },
            {
            answer: "s",
            correct: false
            },
            {
            answer: "see",
            correct: false
            },
            {
            answer: "sea",
            correct: false
            },
            {
            answer: "si",
            correct: false
            },
            ]
            },
            {
            id: 54,
            quizQuestion: "Нажми на букву, которая произносится  / эй /",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "e",
            correct: false
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "y",
            correct: false
            },
            {
            answer: "u",
            correct: false
            },
            ]
            },
            {
            id: 55,
            quizQuestion: "Нажми на букву, которая произносится  / эйч /",
            answers: [
            {
            answer: "h",
            correct: true
            },
            {
            answer: "q",
            correct: false
            },
            {
            answer: "x",
            correct: false
            },
            {
            answer: "s",
            correct: false
            },
            {
            answer: "R",
            correct: false
            },
            ]
            },
            {
            id: 56,
            quizQuestion: "Нажми на букву, которая произносится  / эс /",
            answers: [
            {
            answer: "s",
            correct: true
            },
            {
            answer: "c",
            correct: false
            },
            {
            answer: "j",
            correct: false
            },
            {
            answer: "g",
            correct: false
            },
            {
            answer: "x",
            correct: false
            },
            ]
            },
            {
            id: 57,
            quizQuestion: "Ножка стола - это тоже самое что местоимение",
            answers: [
            {
            answer: "it",
            correct: true
            },
            {
            answer: "he",
            correct: false
            },
            {
            answer: "you",
            correct: false
            },
            {
            answer: "we",
            correct: false
            },
            {
            answer: "they",
            correct: false
            },
            ]
            },
            {
            id: 58,
            quizQuestion: "Робот - это тоже самое, что и местоимение",
            answers: [
            {
            answer: "it",
            correct: true
            },
            {
            answer: "she",
            correct: false
            },
            {
            answer: "I",
            correct: false
            },
            {
            answer: "we",
            correct: false
            },
            {
            answer: "they",
            correct: false
            },
            ]
            },
            {
            id: 59,
            quizQuestion: "Хорошие и умные студенты - это тоже самое что и",
            answers: [
            {
            answer: "we",
            correct: true
            },
            {
            answer: "he",
            correct: false
            },
            {
            answer: "she",
            correct: false
            },
            {
            answer: "it",
            correct: false
            },
            {
            answer: "stupid monkeys",
            correct: false
            },
            ]
            },
            {
            id: 60,
            quizQuestion: "Что пропущено? ___ names are Tom and Jerry",
            answers: [
            {
            answer: "their /дэир/ их",
            correct: true
            },
            {
            answer: "they /дэй/ они",
            correct: false
            },
            {
            answer: "them /дэм/ им",
            correct: false
            },
            {
            answer: "this /дыС/ это",
            correct: false
            },
            {
            answer: "voobshe HZ",
            correct: false
            },
            ]
            },
            {
            id: 61,
            quizQuestion: "Что пропущено? I ___ not a stupid monkey.",
            answers: [
            {
            answer: "am",
            correct: true
            },
            {
            answer: "is",
            correct: false
            },
            {
            answer: "are",
            correct: false
            },
            {
            answer: "isn't",
            correct: false
            },
            {
            answer: "aren't",
            correct: false
            },
            ]
            },
            {
            id: 62,
            quizQuestion: "Что пропущено? Vincent ___ my best alco-friend",
            answers: [
            {
            answer: "is",
            correct: true
            },
            {
            answer: "am",
            correct: false
            },
            {
            answer: "are",
            correct: false
            },
            {
            answer: "he",
            correct: false
            },
            {
            answer: "you",
            correct: false
            },
            ]
            },
            {
            id: 63,
            quizQuestion: "Что пропущено? Vincent ___ not my teacher, he ___ my friend",
            answers: [
            {
            answer: "is, is",
            correct: true
            },
            {
            answer: "you, is",
            correct: false
            },
            {
            answer: "you, are",
            correct: false
            },
            {
            answer: "is, are",
            correct: false
            },
            {
            answer: "am, is",
            correct: false
            },
            ]
            },
            {
            id: 64,
            quizQuestion: "Что пропущено? What ___ their names?",
            answers: [
            {
            answer: "are",
            correct: true
            },
            {
            answer: "am",
            correct: false
            },
            {
            answer: "is",
            correct: false
            },
            {
            answer: "have",
            correct: false
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 65,
            quizQuestion: "Что пропущено? Where ___ my money?",
            answers: [
            {
            answer: "is",
            correct: true
            },
            {
            answer: "am",
            correct: false
            },
            {
            answer: "are",
            correct: false
            },
            {
            answer: "have",
            correct: false
            },
            {
            answer: "you",
            correct: false
            },
            ]
            },
            {
            id: 66,
            quizQuestion: "Что пропущено? Where ___ you?",
            answers: [
            {
            answer: "are",
            correct: true
            },
            {
            answer: "is",
            correct: false
            },
            {
            answer: "am",
            correct: false
            },
            {
            answer: "do",
            correct: false
            },
            {
            answer: "sleep",
            correct: false
            },
            ]
            },
            {
            id: 67,
            quizQuestion: "Переведи на английский: У меня нет домашнего животного",
            answers: [
            {
            answer: "I don't have a pet",
            correct: true
            },
            {
            answer: "I haven't a pet",
            correct: false
            },
            {
            answer: "I don't have a home animal",
            correct: false
            },
            {
            answer: "I haven't a cat",
            correct: false
            },
            {
            answer: "I want to have a dog",
            correct: false
            },
            ]
            },
    ],
    lettersQuiz: [
        {
            id: 1,
            quizQuestion: "Нажми на букву, которая произносится  / эй /",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "e",
            correct: false
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "y",
            correct: false
            },
            {
            answer: "u",
            correct: false
            },
            ]
            },
            {
            id: 2,
            quizQuestion: "/ а / - это произношение одной из самых коварных букв английского алфавита. Что же это за буква, как она пишется?",
            answers: [
            {
            answer: "R",
            correct: true
            },
            {
            answer: "A",
            correct: false
            },
            {
            answer: "U",
            correct: false
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "Y",
            correct: false
            },
            ]
            },
            {
            id: 3,
            quizQuestion: "произношение коварной буквы английского алфавита написано в этих косых скобках / а / . Какая буква так произносится?",
            answers: [
            {
            answer: "r",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "u",
            correct: false
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "y",
            correct: false
            },
            ]
            },
            {
            id: 4,
            quizQuestion: "/ ай / так произносится какая буква?",
            answers: [
            {
            answer: "i",
            correct: true
            },
            {
            answer: "u",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "y",
            correct: false
            },
            {
            answer: "e",
            correct: false
            },
            ]
            },
            {
            id: 5,
            quizQuestion: "/ кью / так произносится какая буква?",
            answers: [
            {
            answer: "q",
            correct: true
            },
            {
            answer: "j",
            correct: false
            },
            {
            answer: "k",
            correct: false
            },
            {
            answer: "g",
            correct: false
            },
            {
            answer: "y",
            correct: false
            },
            ]
            },
            {
            id: 6,
            quizQuestion: "/ кью / так произносится какая буква?",
            answers: [
            {
            answer: "Q",
            correct: true
            },
            {
            answer: "J",
            correct: false
            },
            {
            answer: "K",
            correct: false
            },
            {
            answer: "g",
            correct: false
            },
            {
            answer: "G",
            correct: false
            },
            ]
            },
            {
            id: 7,
            quizQuestion: "Как произносится английская буква 'A' ?",
            answers: [
            {
            answer: "/ эй /",
            correct: true
            },
            {
            answer: "/ а /",
            correct: false
            },
            {
            answer: "/ ау /",
            correct: false
            },
            {
            answer: "/ ей /",
            correct: false
            },
            {
            answer: "так и произносится",
            correct: false
            },
            ]
            },
            {
            id: 8,
            quizQuestion: "Как произносится английская буква 'A' ?",
            answers: [
            {
            answer: "/ эй /",
            correct: true
            },
            {
            answer: "/ а /",
            correct: false
            },
            {
            answer: "/ ей /",
            correct: false
            },
            {
            answer: "/ э /",
            correct: false
            },
            {
            answer: "ну типа не / А / чтоли?",
            correct: false
            },
            ]
            },
            {
            id: 9,
            quizQuestion: "Как произносится английская буква 'E' ?",
            answers: [
            {
            answer: "/и/",
            correct: true
            },
            {
            answer: "/е/",
            correct: false
            },
            {
            answer: "/йе/",
            correct: false
            },
            {
            answer: "/как русская е/",
            correct: false
            },
            {
            answer: "/долгий звук Е/",
            correct: false
            },
            ]
            },
            {
            id: 10,
            quizQuestion: "Как произносится английская буква 'e' ?",
            answers: [
            {
            answer: "/и/",
            correct: true
            },
            {
            answer: "/йе/",
            correct: false
            },
            {
            answer: "/э/",
            correct: false
            },
            {
            answer: "/как русская е/",
            correct: false
            },
            {
            answer: "/долго тянем ЙЕЕЕ/",
            correct: false
            },
            ]
            },
            {
            id: 11,
            quizQuestion: "Как произносится английская буква 'R' ?",
            answers: [
            {
            answer: "/а/",
            correct: true
            },
            {
            answer: "/ар/",
            correct: false
            },
            {
            answer: "/эр/",
            correct: false
            },
            {
            answer: "/рэ/",
            correct: false
            },
            {
            answer: "/жэ/",
            correct: false
            },
            ]
            },
            {
            id: 12,
            quizQuestion: "Как произносится английская буква 'r' ?",
            answers: [
            {
            answer: "/а/",
            correct: true
            },
            {
            answer: "/я/",
            correct: false
            },
            {
            answer: "/RЭ/",
            correct: false
            },
            {
            answer: "/рычим как тигр/",
            correct: false
            },
            {
            answer: "/арэ/",
            correct: false
            },
            ]
            },
            {
            id: 13,
            quizQuestion: "Как произносится буква 's' ?",
            answers: [
            {
            answer: "/эс/",
            correct: true
            },
            {
            answer: "как змея",
            correct: false
            },
            {
            answer: "/сэ/",
            correct: false
            },
            {
            answer: "/си/",
            correct: false
            },
            {
            answer: "ну типа как доллар, но это не точно",
            correct: false
            },
            ]
            },
            {
            id: 14,
            quizQuestion: "Как произносится буква 'S' ?",
            answers: [
            {
            answer: "/эс/",
            correct: true
            },
            {
            answer: "/эйс/",
            correct: false
            },
            {
            answer: "/сэ/",
            correct: false
            },
            {
            answer: "/си/",
            correct: false
            },
            {
            answer: "/как доллар/",
            correct: false
            },
            ]
            },
            {
            id: 15,
            quizQuestion: "Как произносится буква 'y' ?",
            answers: [
            {
            answer: "/уай/",
            correct: true
            },
            {
            answer: "/ай/",
            correct: false
            },
            {
            answer: "/У/",
            correct: false
            },
            {
            answer: "/и/",
            correct: false
            },
            {
            answer: "/ууу/",
            correct: false
            },
            ]
            },
            {
            id: 16,
            quizQuestion: "Как произносится буква 'Y' ?",
            answers: [
            {
            answer: "/уай/",
            correct: true
            },
            {
            answer: "/игрик/",
            correct: false
            },
            {
            answer: "/ю/",
            correct: false
            },
            {
            answer: "как русская у",
            correct: false
            },
            {
            answer: "/ууу длинно тянем Уууу/",
            correct: false
            },
            ]
            },
            {
            id: 17,
            quizQuestion: "Нажми на букву /джи/",
            answers: [
            {
            answer: "G",
            correct: true
            },
            {
            answer: "j",
            correct: false
            },
            {
            answer: "J",
            correct: false
            },
            {
            answer: "q",
            correct: false
            },
            {
            answer: "si",
            correct: false
            },
            ]
            },
            {
            id: 18,
            quizQuestion: "Нажми на букву /джи/",
            answers: [
            {
            answer: "g",
            correct: true
            },
            {
            answer: "j",
            correct: false
            },
            {
            answer: "J",
            correct: false
            },
            {
            answer: "q",
            correct: false
            },
            {
            answer: "Q",
            correct: false
            },
            ]
            },
            {
            id: 19,
            quizQuestion: "Нажми на букву /джэй/",
            answers: [
            {
            answer: "J",
            correct: true
            },
            {
            answer: "G",
            correct: false
            },
            {
            answer: "g",
            correct: false
            },
            {
            answer: "q",
            correct: false
            },
            {
            answer: "Q",
            correct: false
            },
            ]
            },
            {
            id: 20,
            quizQuestion: "Нажми на букву /джэй/",
            answers: [
            {
            answer: "j",
            correct: true
            },
            {
            answer: "z",
            correct: false
            },
            {
            answer: "g",
            correct: false
            },
            {
            answer: "q",
            correct: false
            },
            {
            answer: "L",
            correct: false
            },
            ]
            },
            {
            id: 21,
            quizQuestion: "Нажми на букву, которая произносится  / а /",
            answers: [
            {
            answer: "R",
            correct: true
            },
            {
            answer: "A",
            correct: false
            },
            {
            answer: "U",
            correct: false
            },
            {
            answer: "Y",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            ]
            },
            {
            id: 22,
            quizQuestion: "Нажми на букву, которая произносится  / а /",
            answers: [
            {
            answer: "r",
            correct: true
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "u",
            correct: false
            },
            {
            answer: "y",
            correct: false
            },
            {
            answer: "Y",
            correct: false
            },
            ]
            },
            {
            id: 23,
            quizQuestion: "Нажми на букву, которая произносится  / ай /",
            answers: [
            {
            answer: "i",
            correct: true
            },
            {
            answer: "e",
            correct: false
            },
            {
            answer: "a",
            correct: false
            },
            {
            answer: "y",
            correct: false
            },
            {
            answer: "u",
            correct: false
            },
            ]
            },
            {
            id: 24,
            quizQuestion: "Нажми на букву, которая произносится  / би /",
            answers: [
            {
            answer: "b",
            correct: true
            },
            {
            answer: "d",
            correct: false
            },
            {
            answer: "Б",
            correct: false
            },
            {
            answer: "v",
            correct: false
            },
            {
            answer: "W",
            correct: false
            },
            ]
            },
            {
            id: 25,
            quizQuestion: "Нажми на букву, которая произносится  / ви /",
            answers: [
            {
            answer: "V",
            correct: true
            },
            {
            answer: "W",
            correct: false
            },
            {
            answer: "Y",
            correct: false
            },
            {
            answer: "E",
            correct: false
            },
            {
            answer: "U",
            correct: false
            },
            ]
            },
            {
            id: 26,
            quizQuestion: "Нажми на букву, которая произносится  / джи /",
            answers: [
            {
            answer: "g",
            correct: true
            },
            {
            answer: "j",
            correct: false
            },
            {
            answer: "J",
            correct: false
            },
            {
            answer: "q",
            correct: false
            },
            {
            answer: "i",
            correct: false
            },
            ]
            },
            {
            id: 27,
            quizQuestion: "Нажми на букву, которая произносится  / джэй /",
            answers: [
            {
            answer: "j",
            correct: true
            },
            {
            answer: "g",
            correct: false
            },
            {
            answer: "G",
            correct: false
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "q",
            correct: false
            },
            ]
            },
            {
            id: 28,
            quizQuestion: "Нажми на букву, которая произносится  / и /",
            answers: [
            {
            answer: "e",
            correct: true
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "y",
            correct: false
            },
            {
            answer: "&",
            correct: false
            },
            {
            answer: "u",
            correct: false
            },
            ]
            },
            {
            id: 29,
            quizQuestion: "Нажми на букву, которая произносится  / и /",
            answers: [
            {
            answer: "E",
            correct: true
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "J",
            correct: false
            },
            {
            answer: "I",
            correct: false
            },
            {
            answer: "N",
            correct: false
            },
            ]
            },
            {
            id: 30,
            quizQuestion: "Нажми на букву, которая произносится  / кей /",
            answers: [
            {
            answer: "k",
            correct: true
            },
            {
            answer: "q",
            correct: false
            },
            {
            answer: "c",
            correct: false
            },
            {
            answer: "q",
            correct: false
            },
            {
            answer: "Q",
            correct: false
            },
            ]
            },
            {
            id: 31,
            quizQuestion: "Нажми на букву, которая произносится  / си /",
            answers: [
            {
            answer: "c",
            correct: true
            },
            {
            answer: "s",
            correct: false
            },
            {
            answer: "see",
            correct: false
            },
            {
            answer: "sea",
            correct: false
            },
            {
            answer: "si",
            correct: false
            },
            ]
            },
            {
            id: 32,
            quizQuestion: "Нажми на букву, которая произносится  / уай /",
            answers: [
            {
            answer: "y",
            correct: true
            },
            {
            answer: "u",
            correct: false
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "I",
            correct: false
            },
            {
            answer: "w",
            correct: false
            },
            ]
            },
            {
            id: 33,
            quizQuestion: "Нажми на букву, которая произносится  / уай /",
            answers: [
            {
            answer: "Y",
            correct: true
            },
            {
            answer: "U",
            correct: false
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "W",
            correct: false
            },
            {
            answer: "J",
            correct: false
            },
            ]
            },
            {
            id: 34,
            quizQuestion: "Нажми на букву, которая произносится  / эйч /",
            answers: [
            {
            answer: "h",
            correct: true
            },
            {
            answer: "q",
            correct: false
            },
            {
            answer: "x",
            correct: false
            },
            {
            answer: "s",
            correct: false
            },
            {
            answer: "R",
            correct: false
            },
            ]
            },
            {
            id: 35,
            quizQuestion: "Нажми на букву, которая произносится  / эс /",
            answers: [
            {
            answer: "s",
            correct: true
            },
            {
            answer: "c",
            correct: false
            },
            {
            answer: "j",
            correct: false
            },
            {
            answer: "g",
            correct: false
            },
            {
            answer: "x",
            correct: false
            },
            ]
            },
            {
            id: 36,
            quizQuestion: "Нажми на букву, которая произносится  / ю /",
            answers: [
            {
            answer: "u",
            correct: true
            },
            {
            answer: "y",
            correct: false
            },
            {
            answer: "j",
            correct: false
            },
            {
            answer: "g",
            correct: false
            },
            {
            answer: "q",
            correct: false
            },
            ]
            },
            {
            id: 37,
            quizQuestion: "Нажми на букву, которая произносится  / ю /",
            answers: [
            {
            answer: "U",
            correct: true
            },
            {
            answer: "Y",
            correct: false
            },
            {
            answer: "J",
            correct: false
            },
            {
            answer: "V",
            correct: false
            },
            {
            answer: "you",
            correct: false
            },
            ]
            },
            {
            id: 38,
            quizQuestion: "Так произносится одна из самых коварных букв /А/ что же это за буква?",
            answers: [
            {
            answer: "R",
            correct: true
            },
            {
            answer: "A",
            correct: false
            },
            {
            answer: "U",
            correct: false
            },
            {
            answer: "i",
            correct: false
            },
            {
            answer: "H",
            correct: false
            },
            ]
            },
            {
            id: 39,
            quizQuestion: "Как на английском произносится слово KEY ?",
            answers: [
            {
            answer: "/ки/",
            correct: true
            },
            {
            answer: "ключ",
            correct: false
            },
            {
            answer: "/кей/",
            correct: false
            },
            {
            answer: "/кеу/",
            correct: false
            },
            {
            answer: "/кий/",
            correct: false
            },
            ]
            },
            {
            id: 40,
            quizQuestion: "Произнеси английским буквами слово МАШИНА",
            answers: [
            {
            answer: "си эй а",
            correct: true
            },
            {
            answer: "кей эй ар",
            correct: false
            },
            {
            answer: "кей эй а",
            correct: false
            },
            {
            answer: "цэ а эр",
            correct: false
            },
            {
            answer: "к а р",
            correct: false
            },
            ]
            },
            {
            id: 41,
            quizQuestion: "Как произносится буква 'C' ?",
            answers: [
            {
            answer: "/си/",
            correct: true
            },
            {
            answer: "/эс/",
            correct: false
            },
            {
            answer: "/цэ/",
            correct: false
            },
            {
            answer: "/кэ/",
            correct: false
            },
            {
            answer: "/с/",
            correct: false
            },
            ]
            },
            {
            id: 42,
            quizQuestion: "Как произносится буква 'K' ?",
            answers: [
            {
            answer: "/кей/",
            correct: true
            },
            {
            answer: "/ка/",
            correct: false
            },
            {
            answer: "/кэ/",
            correct: false
            },
            {
            answer: "/кью/",
            correct: false
            },
            {
            answer: "/ку/",
            correct: false
            },
            ]
            },
            {
            id: 43,
            quizQuestion: "Нажми на букву, которая произносится  / ди /",
            answers: [
            {
            answer: "d",
            correct: true
            },
            {
            answer: "b",
            correct: false
            },
            {
            answer: "W",
            correct: false
            },
            ]
            },
            {
            id: 44,
            quizQuestion: "Нажми на букву / би /",
            answers: [
            {
            answer: "b",
            correct: true
            },
            {
            answer: "d",
            correct: false
            },
            ]
            },
            {
            id: 45,
            quizQuestion: "Нажми на букву / ай /",
            answers: [
            {
            answer: "i",
            correct: true
            },
            {
            answer: "y",
            correct: false
            },
            ]
            },
            {
            id: 46,
            quizQuestion: "Нажми на букву / и /",
            answers: [
            {
            answer: "e",
            correct: true
            },
            {
            answer: "i",
            correct: false
            },
            ]
            },
            {
            id: 47,
            quizQuestion: "Нажми на букву / эй /",
            answers: [
            {
            answer: "a",
            correct: true
            },
            {
            answer: "i",
            correct: false
            },
            ]
            },
            {
            id: 48,
            quizQuestion: "Нажми на букву / уай /",
            answers: [
            {
            answer: "y",
            correct: true
            },
            {
            answer: "i",
            correct: false
            },
            ]
            },
            {
            id: 49,
            quizQuestion: "Нажми на букву / ю /",
            answers: [
            {
            answer: "u",
            correct: true
            },
            {
            answer: "y",
            correct: false
            },
            ]
            },
    ],
    lettersc2: [
        {
            id: 1,
            quizQuestion: "Нажми на букву, которая произносится  / эй /",
            answers: [
                {
                    answer: "a",
                    correct: true
                },
                {
                    answer: "e",
                    correct: false
                },
                {
                    answer: "i",
                    correct: false
                },
                {
                    answer: "y",
                    correct: false
                },
                {
                    answer: "u",
                    correct: false
                },
            ]
        },
        {
            id: 2,
            quizQuestion: "Нажми на букву, которая произносится  / си /",
            answers: [
                {
                    answer: "c",
                    correct: true
                },
                {
                    answer: "s",
                    correct: false
                },
                {
                    answer: "see",
                    correct: false
                },
                {
                    answer: "sea",
                    correct: false
                },
                {
                    answer: "si",
                    correct: false
                },
            ]
        },
        {
            id: 3,
            quizQuestion: "Нажми на букву, которая произносится  / эс /",
            answers: [
                {
                    answer: "s",
                    correct: true
                },
                {
                    answer: "c",
                    correct: false
                },
                {
                    answer: "j",
                    correct: false
                },
                {
                    answer: "g",
                    correct: false
                },
                {
                    answer: "x",
                    correct: false
                },
            ]
        },
        {
            id: 4,
            quizQuestion: "Нажми на букву, которая произносится  / и /",
            answers: [
                {
                    answer: "e",
                    correct: true
                },
                {
                    answer: "i",
                    correct: false
                },
                {
                    answer: "y",
                    correct: false
                },
                {
                    answer: "&",
                    correct: false
                },
                {
                    answer: "u",
                    correct: false
                },
            ]
        },
        {
            id: 5,
            quizQuestion: "Нажми на букву, которая произносится  / и /",
            answers: [
                {
                    answer: "E",
                    correct: true
                },
                {
                    answer: "i",
                    correct: false
                },
                {
                    answer: "J",
                    correct: false
                },
                {
                    answer: "I",
                    correct: false
                },
                {
                    answer: "N",
                    correct: false
                },
            ]
        },
        {
            id: 6,
            quizQuestion: "Нажми на букву, которая произносится  / джи /",
            answers: [
                {
                    answer: "g",
                    correct: true
                },
                {
                    answer: "j",
                    correct: false
                },
                {
                    answer: "J",
                    correct: false
                },
                {
                    answer: "q",
                    correct: false
                },
                {
                    answer: "i",
                    correct: false
                },
            ]
        },
        {
            id: 7,
            quizQuestion: "Нажми на букву, которая произносится  / эйч /",
            answers: [
                {
                    answer: "h",
                    correct: true
                },
                {
                    answer: "q",
                    correct: false
                },
                {
                    answer: "x",
                    correct: false
                },
                {
                    answer: "s",
                    correct: false
                },
                {
                    answer: "R",
                    correct: false
                },
            ]
        },
        {
            id: 8,
            quizQuestion: "Нажми на букву, которая произносится  / ай /",
            answers: [
                {
                    answer: "i",
                    correct: true
                },
                {
                    answer: "e",
                    correct: false
                },
                {
                    answer: "a",
                    correct: false
                },
                {
                    answer: "y",
                    correct: false
                },
                {
                    answer: "u",
                    correct: false
                },
            ]
        },
        {
            id: 9,
            quizQuestion: "Нажми на букву, которая произносится  / джэй /",
            answers: [
                {
                    answer: "j",
                    correct: true
                },
                {
                    answer: "g",
                    correct: false
                },
                {
                    answer: "G",
                    correct: false
                },
                {
                    answer: "i",
                    correct: false
                },
                {
                    answer: "q",
                    correct: false
                },
            ]
        },
        {
            id: 10,
            quizQuestion: "Нажми на букву, которая произносится  / кей /",
            answers: [
                {
                    answer: "k",
                    correct: true
                },
                {
                    answer: "q",
                    correct: false
                },
                {
                    answer: "c",
                    correct: false
                },
                {
                    answer: "q",
                    correct: false
                },
                {
                    answer: "Q",
                    correct: false
                },
            ]
        },
        {
            id: 11,
            quizQuestion: "/ ай / так произносится какая буква?",
            answers: [
                {
                    answer: "i",
                    correct: true
                },
                {
                    answer: "u",
                    correct: false
                },
                {
                    answer: "a",
                    correct: false
                },
                {
                    answer: "y",
                    correct: false
                },
                {
                    answer: "e",
                    correct: false
                },
            ]
        },
        {
            id: 12,
            quizQuestion: "/ кью / так произносится какая буква?",
            answers: [
                {
                    answer: "Q",
                    correct: true
                },
                {
                    answer: "j",
                    correct: false
                },
                {
                    answer: "k",
                    correct: false
                },
                {
                    answer: "g",
                    correct: false
                },
                {
                    answer: "G",
                    correct: false
                },
            ]
        },
        {
            id: 13,
            quizQuestion: "Нажми на букву, которая произносится  / а /",
            answers: [
                {
                    answer: "R",
                    correct: true
                },
                {
                    answer: "A",
                    correct: false
                },
                {
                    answer: "U",
                    correct: false
                },
                {
                    answer: "Y",
                    correct: false
                },
                {
                    answer: "a",
                    correct: false
                },
            ]
        },
        {
            id: 14,
            quizQuestion: "Нажми на букву, которая произносится  / ю /",
            answers: [
                {
                    answer: "u",
                    correct: true
                },
                {
                    answer: "y",
                    correct: false
                },
                {
                    answer: "j",
                    correct: false
                },
                {
                    answer: "g",
                    correct: false
                },
                {
                    answer: "q",
                    correct: false
                },
            ]
        },
        {
            id: 15,
            quizQuestion: "Как произносится буква 'S' ?",
            answers: [
                {
                    answer: "/эс/",
                    correct: true
                },
                {
                    answer: "/эйс/",
                    correct: false
                },
                {
                    answer: "/сэ/",
                    correct: false
                },
                {
                    answer: "/си/",
                    correct: false
                },
                {
                    answer: "/как доллар/",
                    correct: false
                },
            ]
        },
        {
            id: 16,
            quizQuestion: "Как произносится английская буква 'A' ?",
            answers: [
                {
                    answer: "/ эй /",
                    correct: true
                },
                {
                    answer: "/ а /",
                    correct: false
                },
                {
                    answer: "/ ау /",
                    correct: false
                },
                {
                    answer: "/ ей /",
                    correct: false
                },
                {
                    answer: "так и произносится",
                    correct: false
                },
            ]
        },
        {
            id: 17,
            quizQuestion: "Как произносится английская буква 'R' ?",
            answers: [
                {
                    answer: "/а/",
                    correct: true
                },
                {
                    answer: "/ар/",
                    correct: false
                },
                {
                    answer: "/эр/",
                    correct: false
                },
                {
                    answer: "/рэ/",
                    correct: false
                },
                {
                    answer: "/арэ/",
                    correct: false
                },
            ]
        },
        {
            id: 18,
            quizQuestion: "Как произносится английская буква 'E' ?",
            answers: [
                {
                    answer: "/и/",
                    correct: true
                },
                {
                    answer: "/е/",
                    correct: false
                },
                {
                    answer: "/йе/",
                    correct: false
                },
                {
                    answer: "/как русская е/",
                    correct: false
                },
                {
                    answer: "/долгая и/",
                    correct: false
                },
            ]
        },
        {
            id: 19,
            quizQuestion: "Нажми на букву /джэй/",
            answers: [
                {
                    answer: "J",
                    correct: true
                },
                {
                    answer: "G",
                    correct: false
                },
                {
                    answer: "g",
                    correct: false
                },
                {
                    answer: "q",
                    correct: false
                },
                {
                    answer: "Q",
                    correct: false
                },
            ]
        },
        {
            id: 20,
            quizQuestion: "Нажми на букву /джи/",
            answers: [
                {
                    answer: "G",
                    correct: true
                },
                {
                    answer: "j",
                    correct: false
                },
                {
                    answer: "J",
                    correct: false
                },
                {
                    answer: "q",
                    correct: false
                },
                {
                    answer: "si",
                    correct: false
                },
            ]
        },
        {
            id: 21,
            quizQuestion: "Нажми на букву, которая произносится  / ю /",
            answers: [
                {
                    answer: "u",
                    correct: true
                },
                {
                    answer: "y",
                    correct: false
                },
                {
                    answer: "j",
                    correct: false
                },
                {
                    answer: "g",
                    correct: false
                },
                {
                    answer: "q",
                    correct: false
                },
            ]
        },
        {
            id: 22,
            quizQuestion: "Нажми на букву, которая произносится  / ви /",
            answers: [
                {
                    answer: "V",
                    correct: true
                },
                {
                    answer: "W",
                    correct: false
                },
                {
                    answer: "Y",
                    correct: false
                },
                {
                    answer: "E",
                    correct: false
                },
                {
                    answer: "U",
                    correct: false
                },
            ]
        },
        {
            id: 23,
            quizQuestion: "Нажми на букву, которая произносится  / уай /",
            answers: [
                {
                    answer: "y",
                    correct: true
                },
                {
                    answer: "u",
                    correct: false
                },
                {
                    answer: "i",
                    correct: false
                },
                {
                    answer: "I",
                    correct: false
                },
                {
                    answer: "w",
                    correct: false
                },
            ]
        },
        {
            id: 24,
            quizQuestion: "Как произносится буква 'Y' ?",
            answers: [
                {
                    answer: "/уай/",
                    correct: true
                },
                {
                    answer: "/ай/",
                    correct: false
                },
                {
                    answer: "/У/",
                    correct: false
                },
                {
                    answer: "/и/",
                    correct: false
                },
                {
                    answer: "/ууу/",
                    correct: false
                },
            ]
        },
        {
            id: 25,
            quizQuestion: "Так произносится одна из самых коварных букв /А/ что же это за буква?",
            answers: [
                {
                    answer: "R",
                    correct: true
                },
                {
                    answer: "A",
                    correct: false
                },
                {
                    answer: "U",
                    correct: false
                },
                {
                    answer: "i",
                    correct: false
                },
                {
                    answer: "H",
                    correct: false
                },
            ]
        },
    ],
    verbToVerb: [
        {
            id: 1,
            quizQuestion: "I want ___ sleep. ( нужно to или не нужно - )",
            answers: [
            {
            answer: "to",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 2,
            quizQuestion: "She wants ___ sleep ( нужно to или не нужно - )",
            answers: [
            {
            answer: "to",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 3,
            quizQuestion: "I don't ___ have time. ( нужно to или не нужно - )",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "to",
            correct: false
            },
            ]
            },
            {
            id: 4,
            quizQuestion: "I ilke ___ study English. ( нужно to или не нужно - )",
            answers: [
            {
            answer: "to",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 5,
            quizQuestion: "Where do you need ___ go after this lesson? ( нужно to или не нужно - )",
            answers: [
            {
            answer: "to",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 6,
            quizQuestion: "To be or not ___ be? ( нужно to или не нужно - )",
            answers: [
            {
            answer: "to",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 7,
            quizQuestion: "My friends usually ___ play video games with me. ( нужно to или не нужно - )",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "to",
            correct: false
            },
            ]
            },
            {
            id: 8,
            quizQuestion: "If you want ___ study English you must find a very good teacher ( нужно to или не нужно - )",
            answers: [
            {
            answer: "to",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 9,
            quizQuestion: "Show must ___ go on ( нужно to или не нужно - )",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "to",
            correct: false
            },
            ]
            },
            {
            id: 10,
            quizQuestion: "Moscow never ___ sleeps ( нужно to или не нужно - )",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "to",
            correct: false
            },
            ]
            },
            {
            id: 11,
            quizQuestion: "Do you ___ understand this grammar? ( нужно to или не нужно - )",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "to",
            correct: false
            },
            ]
            },
            {
            id: 12,
            quizQuestion: "My family always ___ help me ( нужно to или не нужно - )",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "to",
            correct: false
            },
            ]
            },
            {
            id: 13,
            quizQuestion: "When you want ___ do something very well, ___ do it yourself ( нужно to или не нужно - )",
            answers: [
            {
            answer: "to, -",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 14,
            quizQuestion: "When is your ___ birthday? ( нужно to или не нужно - )",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "to",
            correct: false
            },
            ]
            },
            {
            id: 15,
            quizQuestion: "Vincent doesn't want ___ help me! ( нужно to или не нужно - )",
            answers: [
            {
            answer: "to",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 16,
            quizQuestion: "Let's go! I want ___ party with you! ( нужно to или не нужно - )",
            answers: [
            {
            answer: "to",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 17,
            quizQuestion: "Darling, you've gotta let me know: ___ should I ___ stay or ___ should I ___ go? ( нужно to или не нужно - )",
            answers: [
            {
            answer: " - , - , - , -",
            correct: true
            },
            {
            answer: " to, to, to, to",
            correct: false
            },
            {
            answer: " - , to , - , to",
            correct: false
            },
            {
            answer: " to , - , to , -",
            correct: false
            },
            {
            answer: "Ааааа, капец я запутался, объясни!",
            correct: false
            },
            ]
            },
            {
            id: 18,
            quizQuestion: "No woman, no ___ cry ( нужно to или не нужно - )",
            answers: [
            {
            answer: "-",
            correct: true
            },
            {
            answer: "to",
            correct: false
            },
            ]
            },
            {
            id: 19,
            quizQuestion: "Some people eat to live, some people live___eat. ( нужно to или не нужно - )",
            answers: [
            {
            answer: "to",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
            {
            id: 20,
            quizQuestion: "Come closer, I really need ___ tell you something ( нужно to или не нужно - )",
            answers: [
            {
            answer: "to",
            correct: true
            },
            {
            answer: "-",
            correct: false
            },
            ]
            },
    ],
    doOrdoes: [
        {
            id: 1,
            quizQuestion: "______ your mother drive a car?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 2,
            quizQuestion: "_______his son go to school every day?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 3,
            quizQuestion: "______a cat like fish?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 4,
            quizQuestion: "______your grandmother work?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 5,
            quizQuestion: "_____ Lada dance well?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 6,
            quizQuestion: "_____her mother work?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 7,
            quizQuestion: "_____she swim in the lake?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 8,
            quizQuestion: "____he take a shower every day?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 9,
            quizQuestion: "____your dog bark every night?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 10,
            quizQuestion: "____my father work in the morning?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 11,
            quizQuestion: "____she brush her teeth 2 times a day?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 12,
            quizQuestion: "____Shally speak Chinese?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 13,
            quizQuestion: "____ Mirra swim very fast?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 14,
            quizQuestion: "_____animals eat every day?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
            {
            id: 15,
            quizQuestion: "_____they swim every weekend?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
            {
            id: 16,
            quizQuestion: "____Cristina and Marta sing well?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
            {
            id: 17,
            quizQuestion: "____dogs run?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
            {
            id: 18,
            quizQuestion: "____Jim and Jack play the guitar?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
            {
            id: 19,
            quizQuestion: "____Mick and Mark like eating ice cream?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
            {
            id: 20,
            quizQuestion: "____my brother and I study every day?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
            {
            id: 21,
            quizQuestion: "____we go to the cinema on Saturday?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
            {
            id: 22,
            quizQuestion: "____we speak English every day?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
            {
            id: 23,
            quizQuestion: "____we watch TV on the weekend?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
            {
            id: 24,
            quizQuestion: "____you and your family have dinner together?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
            {
            id: 25,
            quizQuestion: "____you eat breakfast every morning?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
            {
            id: 26,
            quizQuestion: "____your mom have breakfast with you in the morning?",
            answers: [
            {
            answer: "does",
            correct: true
            },
            {
            answer: "do",
            correct: false
            },
            ]
            },
            {
            id: 27,
            quizQuestion: "___they play football every week?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
            {
            id: 28,
            quizQuestion: "___you see animals at the zoo?",
            answers: [
            {
            answer: "do",
            correct: true
            },
            {
            answer: "does",
            correct: false
            },
            ]
            },
    ],
    m012: [
        {
            id: 1,
            quizQuestion: "Нажми на 101",
            answers: [
            {
            answer: "a hundred one",
            correct: true
            },
            {
            answer: "one hundred",
            correct: false
            },
            {
            answer: "a hundred",
            correct: false
            },
            {
            answer: "one and one hundred",
            correct: false
            },
            {
            answer: "one zero hundred",
            correct: false
            },
            ]
            },
            {
            id: 2,
            quizQuestion: "Нажми на 202",
            answers: [
            {
            answer: "two hundred two",
            correct: true
            },
            {
            answer: "two hundreds two",
            correct: false
            },
            {
            answer: "twenty two",
            correct: false
            },
            {
            answer: "a hundred and two",
            correct: false
            },
            {
            answer: "twelve hundred two",
            correct: false
            },
            ]
            },
            {
            id: 3,
            quizQuestion: "Нажми на 12",
            answers: [
            {
            answer: "twelve",
            correct: true
            },
            {
            answer: "twenty",
            correct: false
            },
            {
            answer: "eleven",
            correct: false
            },
            {
            answer: "thirty two",
            correct: false
            },
            {
            answer: "ten and two",
            correct: false
            },
            ]
            },
            {
            id: 4,
            quizQuestion: "Нажми на 22",
            answers: [
            {
            answer: "twenty two",
            correct: true
            },
            {
            answer: "twelve two",
            correct: false
            },
            {
            answer: "eleven plus eleven",
            correct: false
            },
            {
            answer: "twenteen",
            correct: false
            },
            {
            answer: "twelveteen",
            correct: false
            },
            ]
            },
            {
            id: 5,
            quizQuestion: "Нажми на 20",
            answers: [
            {
            answer: "twenty",
            correct: true
            },
            {
            answer: "twelve",
            correct: false
            },
            {
            answer: "twenteen",
            correct: false
            },
            {
            answer: "twelveteen",
            correct: false
            },
            {
            answer: "two zero",
            correct: false
            },
            ]
            },
            {
            id: 6,
            quizQuestion: "Нажми на 222",
            answers: [
            {
            answer: "two hundred twenty two",
            correct: true
            },
            {
            answer: "two hundred twelve two",
            correct: false
            },
            {
            answer: "two hundred two twenty",
            correct: false
            },
            {
            answer: "twenty two hundred two",
            correct: false
            },
            {
            answer: "twelve hundred twenty two",
            correct: false
            },
            ]
            },
            {
            id: 7,
            quizQuestion: "Нажми на 12",
            answers: [
            {
            answer: "twelve",
            correct: true
            },
            {
            answer: "twenteen",
            correct: false
            },
            {
            answer: "twelveteen",
            correct: false
            },
            {
            answer: "one and two",
            correct: false
            },
            {
            answer: "ten plus two",
            correct: false
            },
            ]
            },
            {
            id: 8,
            quizQuestion: "Как произносится 14 ?",
            answers: [
            {
            answer: "/фотИИИН/",
            correct: true
            },
            {
            answer: "/фёртин/",
            correct: false
            },
            {
            answer: "/фёрти/",
            correct: false
            },
            {
            answer: "/фоутин/",
            correct: false
            },
            {
            answer: "/фОти/",
            correct: false
            },
            ]
            },
            {
            id: 9,
            quizQuestion: "How much is nine plus eleven? (Сколько будет nine plus eleven?)",
            answers: [
            {
            answer: "twenty",
            correct: true
            },
            {
            answer: "twelve",
            correct: false
            },
            {
            answer: "twenteen",
            correct: false
            },
            {
            answer: "twelveteen",
            correct: false
            },
            {
            answer: "I don't know",
            correct: false
            },
            ]
            },
            {
            id: 10,
            quizQuestion: "Twelve это",
            answers: [
            {
            answer: "12",
            correct: true
            },
            {
            answer: "20",
            correct: false
            },
            {
            answer: "21",
            correct: false
            },
            {
            answer: "22",
            correct: false
            },
            {
            answer: "222",
            correct: false
            },
            ]
            },
            {
            id: 11,
            quizQuestion: "Twenty это",
            answers: [
            {
            answer: "20",
            correct: true
            },
            {
            answer: "12",
            correct: false
            },
            {
            answer: "202",
            correct: false
            },
            {
            answer: "22",
            correct: false
            },
            {
            answer: "2",
            correct: false
            },
            ]
            },
            {
            id: 12,
            quizQuestion: "Thirty это",
            answers: [
            {
            answer: "30",
            correct: true
            },
            {
            answer: "13",
            correct: false
            },
            {
            answer: "14",
            correct: false
            },
            {
            answer: "40",
            correct: false
            },
            {
            answer: "18",
            correct: false
            },
            ]
            },
            {
            id: 13,
            quizQuestion: "Fourteen это",
            answers: [
            {
            answer: "14",
            correct: true
            },
            {
            answer: "40",
            correct: false
            },
            {
            answer: "13",
            correct: false
            },
            {
            answer: "30",
            correct: false
            },
            {
            answer: "19",
            correct: false
            },
            ]
            },
            {
            id: 14,
            quizQuestion: "Forty это",
            answers: [
            {
            answer: "40",
            correct: true
            },
            {
            answer: "14",
            correct: false
            },
            {
            answer: "13",
            correct: false
            },
            {
            answer: "13",
            correct: false
            },
            {
            answer: "80",
            correct: false
            },
            ]
            },
            {
            id: 15,
            quizQuestion: "Eighteen это",
            answers: [
            {
            answer: "18",
            correct: true
            },
            {
            answer: "80",
            correct: false
            },
            {
            answer: "17",
            correct: false
            },
            {
            answer: "70",
            correct: false
            },
            {
            answer: "19",
            correct: false
            },
            ]
            },
            {
            id: 16,
            quizQuestion: "Eighty это",
            answers: [
            {
            answer: "80",
            correct: true
            },
            {
            answer: "18",
            correct: false
            },
            {
            answer: "90",
            correct: false
            },
            {
            answer: "19",
            correct: false
            },
            {
            answer: "17",
            correct: false
            },
            ]
            },
            {
            id: 17,
            quizQuestion: "Eighteen hundred eighty eight это",
            answers: [
            {
            answer: "888",
            correct: true
            },
            {
            answer: "818",
            correct: false
            },
            {
            answer: "881",
            correct: false
            },
            {
            answer: "808",
            correct: false
            },
            {
            answer: "188",
            correct: false
            },
            ]
            },
            {
            id: 18,
            quizQuestion: "12 + 12 is ?",
            answers: [
            {
            answer: "twenty four",
            correct: true
            },
            {
            answer: "twenty two",
            correct: false
            },
            {
            answer: "twelve",
            correct: false
            },
            {
            answer: "twelve two",
            correct: false
            },
            {
            answer: "twelve four",
            correct: false
            },
            ]
            },
            {
            id: 19,
            quizQuestion: "10 + 10 is ?",
            answers: [
            {
            answer: "twenty",
            correct: true
            },
            {
            answer: "twelve",
            correct: false
            },
            {
            answer: "twenteen",
            correct: false
            },
            {
            answer: "twelveteen",
            correct: false
            },
            {
            answer: "two zero",
            correct: false
            },
            ]
            },
            {
            id: 20,
            quizQuestion: "15 + 15 = ?",
            answers: [
            {
            answer: "thirty",
            correct: true
            },
            {
            answer: "thirteen",
            correct: false
            },
            {
            answer: "fifteen",
            correct: false
            },
            {
            answer: "fifty",
            correct: false
            },
            {
            answer: "thirty five",
            correct: false
            },
            ]
            },
            {
            id: 21,
            quizQuestion: "Fifteen это",
            answers: [
            {
            answer: "15",
            correct: true
            },
            {
            answer: "50",
            correct: false
            },
            {
            answer: "55",
            correct: false
            },
            {
            answer: "18",
            correct: false
            },
            {
            answer: "80",
            correct: false
            },
            ]
            },
            {
            id: 22,
            quizQuestion: "Fifty это",
            answers: [
            {
            answer: "50",
            correct: true
            },
            {
            answer: "15",
            correct: false
            },
            {
            answer: "55",
            correct: false
            },
            {
            answer: "30",
            correct: false
            },
            {
            answer: "13",
            correct: false
            },
            ]
            },
            {
            id: 23,
            quizQuestion: "Как произносится 18 по-английски?",
            answers: [
            {
            answer: "/эйтИИИН/",
            correct: true
            },
            {
            answer: "/найнтИИИН/",
            correct: false
            },
            {
            answer: "/найнти/",
            correct: false
            },
            {
            answer: "/эйти/",
            correct: false
            },
            {
            answer: "/найди/",
            correct: false
            },
            ]
            },
            {
            id: 24,
            quizQuestion: "Как произносится 19 по-английски?",
            answers: [
            {
            answer: "/найнтИИИН/",
            correct: true
            },
            {
            answer: "/найти/",
            correct: false
            },
            {
            answer: "/эйти/",
            correct: false
            },
            {
            answer: "/эйтИИИН/",
            correct: false
            },
            {
            answer: "/эйди/",
            correct: false
            },
            ]
            },
            {
            id: 25,
            quizQuestion: "Как произносится 80 по-английски?",
            answers: [
            {
            answer: "/эйти/",
            correct: true
            },
            {
            answer: "/найди/",
            correct: false
            },
            {
            answer: "/эйтИИИН/",
            correct: false
            },
            {
            answer: "/найнтИИИН/",
            correct: false
            },
            {
            answer: "/найнти/",
            correct: false
            },
            ]
            },
            {
            id: 26,
            quizQuestion: "Как произносится 90 по-английски?",
            answers: [
            {
            answer: "/найти/",
            correct: true
            },
            {
            answer: "/эйти/",
            correct: false
            },
            {
            answer: "/эйти/",
            correct: false
            },
            {
            answer: "/эйтИИИН/",
            correct: false
            },
            {
            answer: "/эйди/",
            correct: false
            },
            ]
            },
            {
            id: 27,
            quizQuestion: "Знак + плюс по английски произносится:",
            answers: [
            {
            answer: "/плас/",
            correct: true
            },
            {
            answer: "/плус/",
            correct: false
            },
            {
            answer: "/плис/",
            correct: false
            },
            {
            answer: "/плаус/",
            correct: false
            },
            {
            answer: "/плюс/",
            correct: false
            },
            ]
            },
            {
            id: 28,
            quizQuestion: "Знак - минус по английски произносится:",
            answers: [
            {
            answer: "/майнэс/",
            correct: true
            },
            {
            answer: "/минус/",
            correct: false
            },
            {
            answer: "/так и произносится/",
            correct: false
            },
            {
            answer: "/мэйнус/",
            correct: false
            },
            {
            answer: "/минусик/",
            correct: false
            },
            ]
            },
            {
            id: 29,
            quizQuestion: "Знак = равно по английски можно произнести:",
            answers: [
            {
            answer: "/из/",
            correct: true
            },
            {
            answer: "/ravno/",
            correct: false
            },
            {
            answer: "/ravnyaetsya/",
            correct: false
            },
            {
            answer: "/эквал/",
            correct: false
            },
            {
            answer: "/экуал/",
            correct: false
            },
            ]
            },
            {
            id: 30,
            quizQuestion: "ПЕРВЫЙ по-английски:",
            answers: [
            {
            answer: "/дэ фёст/",
            correct: true
            },
            {
            answer: "/дэ фист/",
            correct: false
            },
            {
            answer: "/дэ фаст/",
            correct: false
            },
            {
            answer: "/zэ фёрст/",
            correct: false
            },
            {
            answer: "/зе фёст/",
            correct: false
            },
            ]
            },
            {
            id: 31,
            quizQuestion: "ПОСЛЕДНИЙ по-английски:",
            answers: [
            {
            answer: "the last",
            correct: true
            },
            {
            answer: "the lost",
            correct: false
            },
            {
            answer: "the loser",
            correct: false
            },
            {
            answer: "the end",
            correct: false
            },
            {
            answer: "the final",
            correct: false
            },
            ]
            },
            {
            id: 32,
            quizQuestion: "ВОСЬМОЙ на английском это:",
            answers: [
            {
            answer: "the eighth",
            correct: true
            },
            {
            answer: "the nineth",
            correct: false
            },
            {
            answer: "the tenth",
            correct: false
            },
            {
            answer: "the seventh",
            correct: false
            },
            {
            answer: "the twelfth",
            correct: false
            },
            ]
            },
            {
            id: 33,
            quizQuestion: "9 тысяч по-английски это",
            answers: [
            {
            answer: "nine thousand",
            correct: true
            },
            {
            answer: "nine hundred",
            correct: false
            },
            {
            answer: "nine thousands",
            correct: false
            },
            {
            answer: "nine hundreds",
            correct: false
            },
            {
            answer: "eight thousand",
            correct: false
            },
            ]
            },
            {
            id: 34,
            quizQuestion: "сто долларов это",
            answers: [
            {
            answer: "a hundred dollars",
            correct: true
            },
            {
            answer: "one thousand dollars",
            correct: false
            },
            {
            answer: "a hundred dollar",
            correct: false
            },
            {
            answer: "1 thousand dollars",
            correct: false
            },
            {
            answer: "1 hundreds dollars",
            correct: false
            },
            ]
            },
            {
            id: 35,
            quizQuestion: "двести баксов на инглише это $200",
            answers: [
            {
            answer: "two hundred bucks",
            correct: true
            },
            {
            answer: "2 hundreds bucks",
            correct: false
            },
            {
            answer: "too much",
            correct: false
            },
            {
            answer: "a lot of money",
            correct: false
            },
            {
            answer: "2 thousand bucks",
            correct: false
            },
            ]
            },
            {
            id: 36,
            quizQuestion: "Как НЕ произносится НОЛЬ на английском?",
            answers: [
            {
            answer: "/zЭро/",
            correct: true
            },
            {
            answer: "/зИроу/",
            correct: false
            },
            {
            answer: "/оу/",
            correct: false
            },
            {
            answer: "/зирО/",
            correct: false
            },
            {
            answer: "/oh/",
            correct: false
            },
            ]
            },
            {
            id: 37,
            quizQuestion: "Половина по английски это",
            answers: [
            {
            answer: " a half",
            correct: true
            },
            {
            answer: "a quartret",
            correct: false
            },
            {
            answer: "a percent",
            correct: false
            },
            {
            answer: "a second",
            correct: false
            },
            {
            answer: "a polovina",
            correct: false
            },
            ]
            },
            {
            id: 38,
            quizQuestion: "Как сказать по-английски: посчитай от 10 до 0",
            answers: [
            {
            answer: "count from ten to zero",
            correct: true
            },
            {
            answer: "count from zero to ten",
            correct: false
            },
            {
            answer: "count to ten from zero",
            correct: false
            },
            {
            answer: "take a calculator",
            correct: false
            },
            {
            answer: "GOD, please help",
            correct: false
            },
            ]
            },
            {
            id: 39,
            quizQuestion: "Равняется или равно на английском произносится :",
            answers: [
            {
            answer: "/Иквэлz/",
            correct: true
            },
            {
            answer: "/ravno/",
            correct: false
            },
            {
            answer: "/ravnyaetsya/",
            correct: false
            },
            {
            answer: "/ит/",
            correct: false
            },
            {
            answer: "/икуЭжн/",
            correct: false
            },
            ]
            },
    ],
    numbersa1: [
        {
            id: 1,
            quizQuestion: "Нажми на 101",
            answers: [
                {
                    answer: "a hundred one",
                    correct: true
                },
                {
                    answer: "one hundred",
                    correct: false
                },
                {
                    answer: "a hundred",
                    correct: false
                },
                {
                    answer: "one and one hundred",
                    correct: false
                },
                {
                    answer: "one zero hundred",
                    correct: false
                },
            ]
        },
        {
            id: 2,
            quizQuestion: "Нажми на 202",
            answers: [
                {
                    answer: "two hundred two",
                    correct: true
                },
                {
                    answer: "two hundreds two",
                    correct: false
                },
                {
                    answer: "twenty two",
                    correct: false
                },
                {
                    answer: "a hundred and two",
                    correct: false
                },
                {
                    answer: "twelve hundred two",
                    correct: false
                },
            ]
        },
        {
            id: 3,
            quizQuestion: "Нажми на 12",
            answers: [
                {
                    answer: "twelve",
                    correct: true
                },
                {
                    answer: "twenty",
                    correct: false
                },
                {
                    answer: "eleven",
                    correct: false
                },
                {
                    answer: "thirty two",
                    correct: false
                },
                {
                    answer: "ten and two",
                    correct: false
                },
            ]
        },
        {
            id: 4,
            quizQuestion: "Нажми на 22",
            answers: [
                {
                    answer: "twenty two",
                    correct: true
                },
                {
                    answer: "twelve two",
                    correct: false
                },
                {
                    answer: "eleven plus eleven",
                    correct: false
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
            ]
        },
        {
            id: 5,
            quizQuestion: "Нажми на 20",
            answers: [
                {
                    answer: "twenty",
                    correct: true
                },
                {
                    answer: "twelve",
                    correct: false
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
                {
                    answer: "two zero",
                    correct: false
                },
            ]
        },
        {
            id: 6,
            quizQuestion: "Нажми на 222",
            answers: [
                {
                    answer: "two hundred twenty two",
                    correct: true
                },
                {
                    answer: "two hundred twelve two",
                    correct: false
                },
                {
                    answer: "two hundred two twenty",
                    correct: false
                },
                {
                    answer: "twenty two hundred two",
                    correct: false
                },
                {
                    answer: "twelve hundred twenty two",
                    correct: false
                },
            ]
        },
        {
            id: 7,
            quizQuestion: "Нажми на 12",
            answers: [
                {
                    answer: "twelve",
                    correct: true
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
                {
                    answer: "one and two",
                    correct: false
                },
                {
                    answer: "ten plus two",
                    correct: false
                },
            ]
        },
        {
            id: 8,
            quizQuestion: "Как произносится 14 ?",
            answers: [
                {
                    answer: "/фотИИИН/",
                    correct: true
                },
                {
                    answer: "/фёртин/",
                    correct: false
                },
                {
                    answer: "/фёрти/",
                    correct: false
                },
                {
                    answer: "/фоутин/",
                    correct: false
                },
                {
                    answer: "/фОти/",
                    correct: false
                },
            ]
        },
        {
            id: 9,
            quizQuestion: "How much is nine plus eleven? (Сколько будет nine plus eleven?)",
            answers: [
                {
                    answer: "twenty",
                    correct: true
                },
                {
                    answer: "twelve",
                    correct: false
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
                {
                    answer: "I don't know",
                    correct: false
                },
            ]
        },
        {
            id: 10,
            quizQuestion: "Twelve это",
            answers: [
                {
                    answer: "12",
                    correct: true
                },
                {
                    answer: "20",
                    correct: false
                },
                {
                    answer: "21",
                    correct: false
                },
                {
                    answer: "22",
                    correct: false
                },
                {
                    answer: "222",
                    correct: false
                },
            ]
        },
        {
            id: 11,
            quizQuestion: "Twenty это",
            answers: [
                {
                    answer: "20",
                    correct: true
                },
                {
                    answer: "12",
                    correct: false
                },
                {
                    answer: "202",
                    correct: false
                },
                {
                    answer: "22",
                    correct: false
                },
                {
                    answer: "2",
                    correct: false
                },
            ]
        },
        {
            id: 12,
            quizQuestion: "Thirty это",
            answers: [
                {
                    answer: "30",
                    correct: true
                },
                {
                    answer: "13",
                    correct: false
                },
                {
                    answer: "14",
                    correct: false
                },
                {
                    answer: "40",
                    correct: false
                },
                {
                    answer: "18",
                    correct: false
                },
            ]
        },
        {
            id: 13,
            quizQuestion: "Fourteen это",
            answers: [
                {
                    answer: "14",
                    correct: true
                },
                {
                    answer: "40",
                    correct: false
                },
                {
                    answer: "13",
                    correct: false
                },
                {
                    answer: "30",
                    correct: false
                },
                {
                    answer: "19",
                    correct: false
                },
            ]
        },
        {
            id: 14,
            quizQuestion: "Forty это",
            answers: [
                {
                    answer: "40",
                    correct: true
                },
                {
                    answer: "14",
                    correct: false
                },
                {
                    answer: "13",
                    correct: false
                },
                {
                    answer: "13",
                    correct: false
                },
                {
                    answer: "80",
                    correct: false
                },
            ]
        },
        {
            id: 15,
            quizQuestion: "Eighteen это",
            answers: [
                {
                    answer: "18",
                    correct: true
                },
                {
                    answer: "80",
                    correct: false
                },
                {
                    answer: "17",
                    correct: false
                },
                {
                    answer: "70",
                    correct: false
                },
                {
                    answer: "19",
                    correct: false
                },
            ]
        },
        {
            id: 16,
            quizQuestion: "Eighty это",
            answers: [
                {
                    answer: "80",
                    correct: true
                },
                {
                    answer: "18",
                    correct: false
                },
                {
                    answer: "90",
                    correct: false
                },
                {
                    answer: "19",
                    correct: false
                },
                {
                    answer: "17",
                    correct: false
                },
            ]
        },
        {
            id: 17,
            quizQuestion: "Eighteen hundred eighty eight это",
            answers: [
                {
                    answer: "888",
                    correct: true
                },
                {
                    answer: "818",
                    correct: false
                },
                {
                    answer: "881",
                    correct: false
                },
                {
                    answer: "808",
                    correct: false
                },
                {
                    answer: "188",
                    correct: false
                },
            ]
        },
        {
            id: 18,
            quizQuestion: "12 + 12 is ?",
            answers: [
                {
                    answer: "twenty four",
                    correct: true
                },
                {
                    answer: "twenty two",
                    correct: false
                },
                {
                    answer: "twelve",
                    correct: false
                },
                {
                    answer: "twelve two",
                    correct: false
                },
                {
                    answer: "twelve four",
                    correct: false
                },
            ]
        },
        {
            id: 19,
            quizQuestion: "10 + 10 is ?",
            answers: [
                {
                    answer: "twenty",
                    correct: true
                },
                {
                    answer: "twelve",
                    correct: false
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
                {
                    answer: "two zero",
                    correct: false
                },
            ]
        },
        {
            id: 20,
            quizQuestion: "15 + 15 = ?",
            answers: [
                {
                    answer: "thirty",
                    correct: true
                },
                {
                    answer: "thirteen",
                    correct: false
                },
                {
                    answer: "fifteen",
                    correct: false
                },
                {
                    answer: "fifty",
                    correct: false
                },
                {
                    answer: "thirty five",
                    correct: false
                },
            ]
        },
        {
            id: 21,
            quizQuestion: "Fifteen это",
            answers: [
                {
                    answer: "15",
                    correct: true
                },
                {
                    answer: "50",
                    correct: false
                },
                {
                    answer: "55",
                    correct: false
                },
                {
                    answer: "18",
                    correct: false
                },
                {
                    answer: "80",
                    correct: false
                },
            ]
        },
        {
            id: 22,
            quizQuestion: "Fifty это",
            answers: [
                {
                    answer: "50",
                    correct: true
                },
                {
                    answer: "15",
                    correct: false
                },
                {
                    answer: "55",
                    correct: false
                },
                {
                    answer: "30",
                    correct: false
                },
                {
                    answer: "13",
                    correct: false
                },
            ]
        },
        {
            id: 23,
            quizQuestion: "Как произносится 18 по-английски?",
            answers: [
                {
                    answer: "/эйтИИИН/",
                    correct: true
                },
                {
                    answer: "/найнтИИИН/",
                    correct: false
                },
                {
                    answer: "/найнти/",
                    correct: false
                },
                {
                    answer: "/эйти/",
                    correct: false
                },
                {
                    answer: "/найди/",
                    correct: false
                },
            ]
        },
        {
            id: 24,
            quizQuestion: "Как произносится 19 по-английски?",
            answers: [
                {
                    answer: "/найнтИИИН/",
                    correct: true
                },
                {
                    answer: "/найти/",
                    correct: false
                },
                {
                    answer: "/эйти/",
                    correct: false
                },
                {
                    answer: "/эйтИИИН/",
                    correct: false
                },
                {
                    answer: "/эйди/",
                    correct: false
                },
            ]
        },
        {
            id: 25,
            quizQuestion: "Как произносится 80 по-английски?",
            answers: [
                {
                    answer: "/эйти/",
                    correct: true
                },
                {
                    answer: "/найди/",
                    correct: false
                },
                {
                    answer: "/эйтИИИН/",
                    correct: false
                },
                {
                    answer: "/найнтИИИН/",
                    correct: false
                },
                {
                    answer: "/найнти/",
                    correct: false
                },
            ]
        },
        {
            id: 26,
            quizQuestion: "Как произносится 90 по-английски?",
            answers: [
                {
                    answer: "/найти/",
                    correct: true
                },
                {
                    answer: "/эйти/",
                    correct: false
                },
                {
                    answer: "/эйти/",
                    correct: false
                },
                {
                    answer: "/эйтИИИН/",
                    correct: false
                },
                {
                    answer: "/эйди/",
                    correct: false
                },
            ]
        },
    ],
    numbersb1: [
        {
            id: 1,
            quizQuestion: "Нажми на 101",
            answers: [
                {
                    answer: "a hundred one",
                    correct: true
                },
                {
                    answer: "one hundred",
                    correct: false
                },
                {
                    answer: "a hundred",
                    correct: false
                },
                {
                    answer: "one and one hundred",
                    correct: false
                },
                {
                    answer: "one zero hundred",
                    correct: false
                },
            ]
        },
        {
            id: 2,
            quizQuestion: "Нажми на 202",
            answers: [
                {
                    answer: "two hundred two",
                    correct: true
                },
                {
                    answer: "two hundreds two",
                    correct: false
                },
                {
                    answer: "twenty two",
                    correct: false
                },
                {
                    answer: "a hundred and two",
                    correct: false
                },
                {
                    answer: "twelve hundred two",
                    correct: false
                },
            ]
        },
        {
            id: 3,
            quizQuestion: "Нажми на 12",
            answers: [
                {
                    answer: "twelve",
                    correct: true
                },
                {
                    answer: "twenty",
                    correct: false
                },
                {
                    answer: "eleven",
                    correct: false
                },
                {
                    answer: "thirty two",
                    correct: false
                },
                {
                    answer: "ten and two",
                    correct: false
                },
            ]
        },
        {
            id: 4,
            quizQuestion: "Нажми на 22",
            answers: [
                {
                    answer: "twenty two",
                    correct: true
                },
                {
                    answer: "twelve two",
                    correct: false
                },
                {
                    answer: "eleven plus eleven",
                    correct: false
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
            ]
        },
        {
            id: 5,
            quizQuestion: "Нажми на 20",
            answers: [
                {
                    answer: "twenty",
                    correct: true
                },
                {
                    answer: "twelve",
                    correct: false
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
                {
                    answer: "two zero",
                    correct: false
                },
            ]
        },
        {
            id: 6,
            quizQuestion: "Нажми на 222",
            answers: [
                {
                    answer: "two hundred twenty two",
                    correct: true
                },
                {
                    answer: "two hundred twelve two",
                    correct: false
                },
                {
                    answer: "two hundred two twenty",
                    correct: false
                },
                {
                    answer: "twenty two hundred two",
                    correct: false
                },
                {
                    answer: "twelve hundred twenty two",
                    correct: false
                },
            ]
        },
        {
            id: 7,
            quizQuestion: "Нажми на 12",
            answers: [
                {
                    answer: "twelve",
                    correct: true
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
                {
                    answer: "one and two",
                    correct: false
                },
                {
                    answer: "ten plus two",
                    correct: false
                },
            ]
        },
        {
            id: 8,
            quizQuestion: "Как произносится 14 ?",
            answers: [
                {
                    answer: "/фотИИИН/",
                    correct: true
                },
                {
                    answer: "/фёртин/",
                    correct: false
                },
                {
                    answer: "/фёрти/",
                    correct: false
                },
                {
                    answer: "/фоутин/",
                    correct: false
                },
                {
                    answer: "/фОти/",
                    correct: false
                },
            ]
        },
        {
            id: 9,
            quizQuestion: "How much is nine plus eleven? (Сколько будет nine plus eleven?)",
            answers: [
                {
                    answer: "twenty",
                    correct: true
                },
                {
                    answer: "twelve",
                    correct: false
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
                {
                    answer: "I don't know",
                    correct: false
                },
            ]
        },
        {
            id: 10,
            quizQuestion: "Twelve это",
            answers: [
                {
                    answer: "12",
                    correct: true
                },
                {
                    answer: "20",
                    correct: false
                },
                {
                    answer: "21",
                    correct: false
                },
                {
                    answer: "22",
                    correct: false
                },
                {
                    answer: "222",
                    correct: false
                },
            ]
        },
        {
            id: 11,
            quizQuestion: "Twenty это",
            answers: [
                {
                    answer: "20",
                    correct: true
                },
                {
                    answer: "12",
                    correct: false
                },
                {
                    answer: "202",
                    correct: false
                },
                {
                    answer: "22",
                    correct: false
                },
                {
                    answer: "2",
                    correct: false
                },
            ]
        },
        {
            id: 12,
            quizQuestion: "Thirty это",
            answers: [
                {
                    answer: "30",
                    correct: true
                },
                {
                    answer: "13",
                    correct: false
                },
                {
                    answer: "14",
                    correct: false
                },
                {
                    answer: "40",
                    correct: false
                },
                {
                    answer: "18",
                    correct: false
                },
            ]
        },
        {
            id: 13,
            quizQuestion: "Fourteen это",
            answers: [
                {
                    answer: "14",
                    correct: true
                },
                {
                    answer: "40",
                    correct: false
                },
                {
                    answer: "13",
                    correct: false
                },
                {
                    answer: "30",
                    correct: false
                },
                {
                    answer: "19",
                    correct: false
                },
            ]
        },
        {
            id: 14,
            quizQuestion: "Forty это",
            answers: [
                {
                    answer: "40",
                    correct: true
                },
                {
                    answer: "14",
                    correct: false
                },
                {
                    answer: "13",
                    correct: false
                },
                {
                    answer: "13",
                    correct: false
                },
                {
                    answer: "80",
                    correct: false
                },
            ]
        },
        {
            id: 15,
            quizQuestion: "Eighteen это",
            answers: [
                {
                    answer: "18",
                    correct: true
                },
                {
                    answer: "80",
                    correct: false
                },
                {
                    answer: "17",
                    correct: false
                },
                {
                    answer: "70",
                    correct: false
                },
                {
                    answer: "19",
                    correct: false
                },
            ]
        },
        {
            id: 16,
            quizQuestion: "Eighty это",
            answers: [
                {
                    answer: "80",
                    correct: true
                },
                {
                    answer: "18",
                    correct: false
                },
                {
                    answer: "90",
                    correct: false
                },
                {
                    answer: "19",
                    correct: false
                },
                {
                    answer: "17",
                    correct: false
                },
            ]
        },
        {
            id: 17,
            quizQuestion: "Eighteen hundred eighty eight это",
            answers: [
                {
                    answer: "888",
                    correct: true
                },
                {
                    answer: "818",
                    correct: false
                },
                {
                    answer: "881",
                    correct: false
                },
                {
                    answer: "808",
                    correct: false
                },
                {
                    answer: "188",
                    correct: false
                },
            ]
        },
        {
            id: 18,
            quizQuestion: "12 + 12 is ?",
            answers: [
                {
                    answer: "twenty four",
                    correct: true
                },
                {
                    answer: "twenty two",
                    correct: false
                },
                {
                    answer: "twelve",
                    correct: false
                },
                {
                    answer: "twelve two",
                    correct: false
                },
                {
                    answer: "twelve four",
                    correct: false
                },
            ]
        },
        {
            id: 19,
            quizQuestion: "10 + 10 is ?",
            answers: [
                {
                    answer: "twenty",
                    correct: true
                },
                {
                    answer: "twelve",
                    correct: false
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
                {
                    answer: "two zero",
                    correct: false
                },
            ]
        },
        {
            id: 20,
            quizQuestion: "15 + 15 = ?",
            answers: [
                {
                    answer: "thirty",
                    correct: true
                },
                {
                    answer: "thirteen",
                    correct: false
                },
                {
                    answer: "fifteen",
                    correct: false
                },
                {
                    answer: "fifty",
                    correct: false
                },
                {
                    answer: "thirty five",
                    correct: false
                },
            ]
        },
        {
            id: 21,
            quizQuestion: "Fifteen это",
            answers: [
                {
                    answer: "15",
                    correct: true
                },
                {
                    answer: "50",
                    correct: false
                },
                {
                    answer: "55",
                    correct: false
                },
                {
                    answer: "18",
                    correct: false
                },
                {
                    answer: "80",
                    correct: false
                },
            ]
        },
        {
            id: 22,
            quizQuestion: "Fifty это",
            answers: [
                {
                    answer: "50",
                    correct: true
                },
                {
                    answer: "15",
                    correct: false
                },
                {
                    answer: "55",
                    correct: false
                },
                {
                    answer: "30",
                    correct: false
                },
                {
                    answer: "13",
                    correct: false
                },
            ]
        },
        {
            id: 23,
            quizQuestion: "Как произносится 18 по-английски?",
            answers: [
                {
                    answer: "/эйтИИИН/",
                    correct: true
                },
                {
                    answer: "/найнтИИИН/",
                    correct: false
                },
                {
                    answer: "/найнти/",
                    correct: false
                },
                {
                    answer: "/эйти/",
                    correct: false
                },
                {
                    answer: "/найди/",
                    correct: false
                },
            ]
        },
        {
            id: 24,
            quizQuestion: "Как произносится 19 по-английски?",
            answers: [
                {
                    answer: "/найнтИИИН/",
                    correct: true
                },
                {
                    answer: "/найти/",
                    correct: false
                },
                {
                    answer: "/эйти/",
                    correct: false
                },
                {
                    answer: "/эйтИИИН/",
                    correct: false
                },
                {
                    answer: "/эйди/",
                    correct: false
                },
            ]
        },
        {
            id: 25,
            quizQuestion: "Как произносится 80 по-английски?",
            answers: [
                {
                    answer: "/эйти/",
                    correct: true
                },
                {
                    answer: "/найди/",
                    correct: false
                },
                {
                    answer: "/эйтИИИН/",
                    correct: false
                },
                {
                    answer: "/найнтИИИН/",
                    correct: false
                },
                {
                    answer: "/найнти/",
                    correct: false
                },
            ]
        },
        {
            id: 26,
            quizQuestion: "Как произносится 90 по-английски?",
            answers: [
                {
                    answer: "/найти/",
                    correct: true
                },
                {
                    answer: "/эйти/",
                    correct: false
                },
                {
                    answer: "/эйти/",
                    correct: false
                },
                {
                    answer: "/эйтИИИН/",
                    correct: false
                },
                {
                    answer: "/эйди/",
                    correct: false
                },
            ]
        },
        {
            id: 27,
            quizQuestion: "Знак + плюс по английски произносится:",
            answers: [
                {
                    answer: "/плас/",
                    correct: true
                },
                {
                    answer: "/плус/",
                    correct: false
                },
                {
                    answer: "/плис/",
                    correct: false
                },
                {
                    answer: "/плаус/",
                    correct: false
                },
                {
                    answer: "/плюс/",
                    correct: false
                },
            ]
        },
        {
            id: 28,
            quizQuestion: "Знак - минус по английски произносится:",
            answers: [
                {
                    answer: "/майнэс/",
                    correct: true
                },
                {
                    answer: "/минус/",
                    correct: false
                },
                {
                    answer: "/так и произносится/",
                    correct: false
                },
                {
                    answer: "/мэйнус/",
                    correct: false
                },
                {
                    answer: "/минусик/",
                    correct: false
                },
            ]
        },
        {
            id: 29,
            quizQuestion: "Знак = равно по английски можно произнести:",
            answers: [
                {
                    answer: "/из/",
                    correct: true
                },
                {
                    answer: "/ravno/",
                    correct: false
                },
                {
                    answer: "/ravnyaetsya/",
                    correct: false
                },
                {
                    answer: "/эквал/",
                    correct: false
                },
                {
                    answer: "/экуал/",
                    correct: false
                },
            ]
        },
        {
            id: 30,
            quizQuestion: "ПЕРВЫЙ по-английски:",
            answers: [
                {
                    answer: "/дэ фёст/",
                    correct: true
                },
                {
                    answer: "/дэ фист/",
                    correct: false
                },
                {
                    answer: "/дэ фаст/",
                    correct: false
                },
                {
                    answer: "/zэ фёрст/",
                    correct: false
                },
                {
                    answer: "/зе фёст/",
                    correct: false
                },
            ]
        },
        {
            id: 31,
            quizQuestion: "ПОСЛЕДНИЙ по-английски:",
            answers: [
                {
                    answer: "the last",
                    correct: true
                },
                {
                    answer: "the lost",
                    correct: false
                },
                {
                    answer: "the loser",
                    correct: false
                },
                {
                    answer: "the end",
                    correct: false
                },
                {
                    answer: "the final",
                    correct: false
                },
            ]
        },
        {
            id: 32,
            quizQuestion: "ВОСЬМОЙ на английском это:",
            answers: [
                {
                    answer: "the eighth",
                    correct: true
                },
                {
                    answer: "the nineth",
                    correct: false
                },
                {
                    answer: "the tenth",
                    correct: false
                },
                {
                    answer: "the seventh",
                    correct: false
                },
                {
                    answer: "the twelfth",
                    correct: false
                },
            ]
        },
        {
            id: 33,
            quizQuestion: "9 тысяч по-английски это",
            answers: [
                {
                    answer: "nine thousand",
                    correct: true
                },
                {
                    answer: "nine hundred",
                    correct: false
                },
                {
                    answer: "nine thousands",
                    correct: false
                },
                {
                    answer: "nine hundreds",
                    correct: false
                },
                {
                    answer: "eight thousand",
                    correct: false
                },
            ]
        },
        {
            id: 34,
            quizQuestion: "сто долларов это",
            answers: [
                {
                    answer: "a hundred dollars",
                    correct: true
                },
                {
                    answer: "one thousand dollars",
                    correct: false
                },
                {
                    answer: "a hundred dollar",
                    correct: false
                },
                {
                    answer: "1 thousand dollars",
                    correct: false
                },
                {
                    answer: "1 hundreds dollars",
                    correct: false
                },
            ]
        },
        {
            id: 35,
            quizQuestion: "двести баксов на инглише это $200",
            answers: [
                {
                    answer: "two hundred bucks",
                    correct: true
                },
                {
                    answer: "2 hundreds bucks",
                    correct: false
                },
                {
                    answer: "too much",
                    correct: false
                },
                {
                    answer: "a lot of money",
                    correct: false
                },
                {
                    answer: "2 thousand bucks",
                    correct: false
                },
            ]
        },
        {
            id: 36,
            quizQuestion: "Как НЕ произносится НОЛЬ на английском?",
            answers: [
                {
                    answer: "/zЭро/",
                    correct: true
                },
                {
                    answer: "/зИроу/",
                    correct: false
                },
                {
                    answer: "/оу/",
                    correct: false
                },
                {
                    answer: "/зирО/",
                    correct: false
                },
                {
                    answer: "/oh/",
                    correct: false
                },
            ]
        },
    ],
    numbersb2: [
        {
            id: 1,
            quizQuestion: "Нажми на 101",
            answers: [
                {
                    answer: "a hundred one",
                    correct: true
                },
                {
                    answer: "one hundred",
                    correct: false
                },
                {
                    answer: "a hundred",
                    correct: false
                },
                {
                    answer: "one and one hundred",
                    correct: false
                },
                {
                    answer: "one zero hundred",
                    correct: false
                },
            ]
        },
        {
            id: 2,
            quizQuestion: "Нажми на 202",
            answers: [
                {
                    answer: "two hundred two",
                    correct: true
                },
                {
                    answer: "two hundreds two",
                    correct: false
                },
                {
                    answer: "twenty two",
                    correct: false
                },
                {
                    answer: "a hundred and two",
                    correct: false
                },
                {
                    answer: "twelve hundred two",
                    correct: false
                },
            ]
        },
        {
            id: 3,
            quizQuestion: "Нажми на 12",
            answers: [
                {
                    answer: "twelve",
                    correct: true
                },
                {
                    answer: "twenty",
                    correct: false
                },
                {
                    answer: "eleven",
                    correct: false
                },
                {
                    answer: "thirty two",
                    correct: false
                },
                {
                    answer: "ten and two",
                    correct: false
                },
            ]
        },
        {
            id: 4,
            quizQuestion: "Нажми на 22",
            answers: [
                {
                    answer: "twenty two",
                    correct: true
                },
                {
                    answer: "twelve two",
                    correct: false
                },
                {
                    answer: "eleven plus eleven",
                    correct: false
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
            ]
        },
        {
            id: 5,
            quizQuestion: "Нажми на 20",
            answers: [
                {
                    answer: "twenty",
                    correct: true
                },
                {
                    answer: "twelve",
                    correct: false
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
                {
                    answer: "two zero",
                    correct: false
                },
            ]
        },
        {
            id: 6,
            quizQuestion: "Нажми на 222",
            answers: [
                {
                    answer: "two hundred twenty two",
                    correct: true
                },
                {
                    answer: "two hundred twelve two",
                    correct: false
                },
                {
                    answer: "two hundred two twenty",
                    correct: false
                },
                {
                    answer: "twenty two hundred two",
                    correct: false
                },
                {
                    answer: "twelve hundred twenty two",
                    correct: false
                },
            ]
        },
        {
            id: 7,
            quizQuestion: "Нажми на 12",
            answers: [
                {
                    answer: "twelve",
                    correct: true
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
                {
                    answer: "one and two",
                    correct: false
                },
                {
                    answer: "ten plus two",
                    correct: false
                },
            ]
        },
        {
            id: 8,
            quizQuestion: "Как произносится 14 ?",
            answers: [
                {
                    answer: "/фотИИИН/",
                    correct: true
                },
                {
                    answer: "/фёртин/",
                    correct: false
                },
                {
                    answer: "/фёрти/",
                    correct: false
                },
                {
                    answer: "/фоутин/",
                    correct: false
                },
                {
                    answer: "/фОти/",
                    correct: false
                },
            ]
        },
        {
            id: 9,
            quizQuestion: "How much is nine plus eleven? (Сколько будет nine plus eleven?)",
            answers: [
                {
                    answer: "twenty",
                    correct: true
                },
                {
                    answer: "twelve",
                    correct: false
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
                {
                    answer: "I don't know",
                    correct: false
                },
            ]
        },
        {
            id: 10,
            quizQuestion: "Twelve это",
            answers: [
                {
                    answer: "12",
                    correct: true
                },
                {
                    answer: "20",
                    correct: false
                },
                {
                    answer: "21",
                    correct: false
                },
                {
                    answer: "22",
                    correct: false
                },
                {
                    answer: "222",
                    correct: false
                },
            ]
        },
        {
            id: 11,
            quizQuestion: "Twenty это",
            answers: [
                {
                    answer: "20",
                    correct: true
                },
                {
                    answer: "12",
                    correct: false
                },
                {
                    answer: "202",
                    correct: false
                },
                {
                    answer: "22",
                    correct: false
                },
                {
                    answer: "2",
                    correct: false
                },
            ]
        },
        {
            id: 12,
            quizQuestion: "Thirty это",
            answers: [
                {
                    answer: "30",
                    correct: true
                },
                {
                    answer: "13",
                    correct: false
                },
                {
                    answer: "14",
                    correct: false
                },
                {
                    answer: "40",
                    correct: false
                },
                {
                    answer: "18",
                    correct: false
                },
            ]
        },
        {
            id: 13,
            quizQuestion: "Fourteen это",
            answers: [
                {
                    answer: "14",
                    correct: true
                },
                {
                    answer: "40",
                    correct: false
                },
                {
                    answer: "13",
                    correct: false
                },
                {
                    answer: "30",
                    correct: false
                },
                {
                    answer: "19",
                    correct: false
                },
            ]
        },
        {
            id: 14,
            quizQuestion: "Forty это",
            answers: [
                {
                    answer: "40",
                    correct: true
                },
                {
                    answer: "14",
                    correct: false
                },
                {
                    answer: "13",
                    correct: false
                },
                {
                    answer: "13",
                    correct: false
                },
                {
                    answer: "80",
                    correct: false
                },
            ]
        },
        {
            id: 15,
            quizQuestion: "Eighteen это",
            answers: [
                {
                    answer: "18",
                    correct: true
                },
                {
                    answer: "80",
                    correct: false
                },
                {
                    answer: "17",
                    correct: false
                },
                {
                    answer: "70",
                    correct: false
                },
                {
                    answer: "19",
                    correct: false
                },
            ]
        },
        {
            id: 16,
            quizQuestion: "Eighty это",
            answers: [
                {
                    answer: "80",
                    correct: true
                },
                {
                    answer: "18",
                    correct: false
                },
                {
                    answer: "90",
                    correct: false
                },
                {
                    answer: "19",
                    correct: false
                },
                {
                    answer: "17",
                    correct: false
                },
            ]
        },
        {
            id: 17,
            quizQuestion: "Eighteen hundred eighty eight это",
            answers: [
                {
                    answer: "888",
                    correct: true
                },
                {
                    answer: "818",
                    correct: false
                },
                {
                    answer: "881",
                    correct: false
                },
                {
                    answer: "808",
                    correct: false
                },
                {
                    answer: "188",
                    correct: false
                },
            ]
        },
        {
            id: 18,
            quizQuestion: "12 + 12 is ?",
            answers: [
                {
                    answer: "twenty four",
                    correct: true
                },
                {
                    answer: "twenty two",
                    correct: false
                },
                {
                    answer: "twelve",
                    correct: false
                },
                {
                    answer: "twelve two",
                    correct: false
                },
                {
                    answer: "twelve four",
                    correct: false
                },
            ]
        },
        {
            id: 19,
            quizQuestion: "10 + 10 is ?",
            answers: [
                {
                    answer: "twenty",
                    correct: true
                },
                {
                    answer: "twelve",
                    correct: false
                },
                {
                    answer: "twenteen",
                    correct: false
                },
                {
                    answer: "twelveteen",
                    correct: false
                },
                {
                    answer: "two zero",
                    correct: false
                },
            ]
        },
        {
            id: 20,
            quizQuestion: "15 + 15 = ?",
            answers: [
                {
                    answer: "thirty",
                    correct: true
                },
                {
                    answer: "thirteen",
                    correct: false
                },
                {
                    answer: "fifteen",
                    correct: false
                },
                {
                    answer: "fifty",
                    correct: false
                },
                {
                    answer: "thirty five",
                    correct: false
                },
            ]
        },
        {
            id: 21,
            quizQuestion: "Fifteen это",
            answers: [
                {
                    answer: "15",
                    correct: true
                },
                {
                    answer: "50",
                    correct: false
                },
                {
                    answer: "55",
                    correct: false
                },
                {
                    answer: "18",
                    correct: false
                },
                {
                    answer: "80",
                    correct: false
                },
            ]
        },
        {
            id: 22,
            quizQuestion: "Fifty это",
            answers: [
                {
                    answer: "50",
                    correct: true
                },
                {
                    answer: "15",
                    correct: false
                },
                {
                    answer: "55",
                    correct: false
                },
                {
                    answer: "30",
                    correct: false
                },
                {
                    answer: "13",
                    correct: false
                },
            ]
        },
        {
            id: 23,
            quizQuestion: "Как произносится 18 по-английски?",
            answers: [
                {
                    answer: "/эйтИИИН/",
                    correct: true
                },
                {
                    answer: "/найнтИИИН/",
                    correct: false
                },
                {
                    answer: "/найнти/",
                    correct: false
                },
                {
                    answer: "/эйти/",
                    correct: false
                },
                {
                    answer: "/найди/",
                    correct: false
                },
            ]
        },
        {
            id: 24,
            quizQuestion: "Как произносится 19 по-английски?",
            answers: [
                {
                    answer: "/найнтИИИН/",
                    correct: true
                },
                {
                    answer: "/найти/",
                    correct: false
                },
                {
                    answer: "/эйти/",
                    correct: false
                },
                {
                    answer: "/эйтИИИН/",
                    correct: false
                },
                {
                    answer: "/эйди/",
                    correct: false
                },
            ]
        },
        {
            id: 25,
            quizQuestion: "Как произносится 80 по-английски?",
            answers: [
                {
                    answer: "/эйти/",
                    correct: true
                },
                {
                    answer: "/найди/",
                    correct: false
                },
                {
                    answer: "/эйтИИИН/",
                    correct: false
                },
                {
                    answer: "/найнтИИИН/",
                    correct: false
                },
                {
                    answer: "/найнти/",
                    correct: false
                },
            ]
        },
        {
            id: 26,
            quizQuestion: "Как произносится 90 по-английски?",
            answers: [
                {
                    answer: "/найти/",
                    correct: true
                },
                {
                    answer: "/эйти/",
                    correct: false
                },
                {
                    answer: "/эйти/",
                    correct: false
                },
                {
                    answer: "/эйтИИИН/",
                    correct: false
                },
                {
                    answer: "/эйди/",
                    correct: false
                },
            ]
        },
        {
            id: 27,
            quizQuestion: "Знак + плюс по английски произносится:",
            answers: [
                {
                    answer: "/плас/",
                    correct: true
                },
                {
                    answer: "/плус/",
                    correct: false
                },
                {
                    answer: "/плис/",
                    correct: false
                },
                {
                    answer: "/плаус/",
                    correct: false
                },
                {
                    answer: "/плюс/",
                    correct: false
                },
            ]
        },
        {
            id: 28,
            quizQuestion: "Знак - минус по английски произносится:",
            answers: [
                {
                    answer: "/майнэс/",
                    correct: true
                },
                {
                    answer: "/минус/",
                    correct: false
                },
                {
                    answer: "/так и произносится/",
                    correct: false
                },
                {
                    answer: "/мэйнус/",
                    correct: false
                },
                {
                    answer: "/минусик/",
                    correct: false
                },
            ]
        },
        {
            id: 29,
            quizQuestion: "Знак = равно по английски можно произнести:",
            answers: [
                {
                    answer: "/из/",
                    correct: true
                },
                {
                    answer: "/ravno/",
                    correct: false
                },
                {
                    answer: "/ravnyaetsya/",
                    correct: false
                },
                {
                    answer: "/эквал/",
                    correct: false
                },
                {
                    answer: "/экуал/",
                    correct: false
                },
            ]
        },
        {
            id: 30,
            quizQuestion: "ПЕРВЫЙ по-английски:",
            answers: [
                {
                    answer: "/дэ фёст/",
                    correct: true
                },
                {
                    answer: "/дэ фист/",
                    correct: false
                },
                {
                    answer: "/дэ фаст/",
                    correct: false
                },
                {
                    answer: "/zэ фёрст/",
                    correct: false
                },
                {
                    answer: "/зе фёст/",
                    correct: false
                },
            ]
        },
        {
            id: 31,
            quizQuestion: "ПОСЛЕДНИЙ по-английски:",
            answers: [
                {
                    answer: "the last",
                    correct: true
                },
                {
                    answer: "the lost",
                    correct: false
                },
                {
                    answer: "the loser",
                    correct: false
                },
                {
                    answer: "the end",
                    correct: false
                },
                {
                    answer: "the final",
                    correct: false
                },
            ]
        },
        {
            id: 32,
            quizQuestion: "ВОСЬМОЙ на английском это:",
            answers: [
                {
                    answer: "the eighth",
                    correct: true
                },
                {
                    answer: "the nineth",
                    correct: false
                },
                {
                    answer: "the tenth",
                    correct: false
                },
                {
                    answer: "the seventh",
                    correct: false
                },
                {
                    answer: "the twelfth",
                    correct: false
                },
            ]
        },
        {
            id: 33,
            quizQuestion: "9 тысяч по-английски это",
            answers: [
                {
                    answer: "nine thousand",
                    correct: true
                },
                {
                    answer: "nine hundred",
                    correct: false
                },
                {
                    answer: "nine thousands",
                    correct: false
                },
                {
                    answer: "nine hundreds",
                    correct: false
                },
                {
                    answer: "eight thousand",
                    correct: false
                },
            ]
        },
        {
            id: 34,
            quizQuestion: "сто долларов это",
            answers: [
                {
                    answer: "a hundred dollars",
                    correct: true
                },
                {
                    answer: "one thousand dollars",
                    correct: false
                },
                {
                    answer: "a hundred dollar",
                    correct: false
                },
                {
                    answer: "1 thousand dollars",
                    correct: false
                },
                {
                    answer: "1 hundreds dollars",
                    correct: false
                },
            ]
        },
        {
            id: 35,
            quizQuestion: "двести баксов на инглише это $200",
            answers: [
                {
                    answer: "two hundred bucks",
                    correct: true
                },
                {
                    answer: "2 hundreds bucks",
                    correct: false
                },
                {
                    answer: "too much",
                    correct: false
                },
                {
                    answer: "a lot of money",
                    correct: false
                },
                {
                    answer: "2 thousand bucks",
                    correct: false
                },
            ]
        },
        {
            id: 36,
            quizQuestion: "Как НЕ произносится НОЛЬ на английском?",
            answers: [
                {
                    answer: "/zЭро/",
                    correct: true
                },
                {
                    answer: "/зИроу/",
                    correct: false
                },
                {
                    answer: "/оу/",
                    correct: false
                },
                {
                    answer: "/зирО/",
                    correct: false
                },
                {
                    answer: "/oh/",
                    correct: false
                },
            ]
        },
        {
            id: 37,
            quizQuestion: "Половина по английски это",
            answers: [
                {
                    answer: " a half",
                    correct: true
                },
                {
                    answer: "a quartret",
                    correct: false
                },
                {
                    answer: "a percent",
                    correct: false
                },
                {
                    answer: "a second",
                    correct: false
                },
                {
                    answer: "a polovina",
                    correct: false
                },
            ]
        },
    ],
    numbersQuiz: [
        {
            id: 1,
            quizQuestion: "Нажми на 101",
            answers: [
            {
            answer: "a hundred one",
            correct: true
            },
            {
            answer: "one hundred",
            correct: false
            },
            {
            answer: "a hundred",
            correct: false
            },
            {
            answer: "one and one hundred",
            correct: false
            },
            {
            answer: "one zero hundred",
            correct: false
            },
            ]
            },
            {
            id: 2,
            quizQuestion: "Нажми на 202",
            answers: [
            {
            answer: "two hundred two",
            correct: true
            },
            {
            answer: "two hundreds two",
            correct: false
            },
            {
            answer: "twenty two",
            correct: false
            },
            {
            answer: "a hundred and two",
            correct: false
            },
            {
            answer: "twelve hundred two",
            correct: false
            },
            ]
            },
            {
            id: 3,
            quizQuestion: "Нажми на 12",
            answers: [
            {
            answer: "twelve",
            correct: true
            },
            {
            answer: "twenty",
            correct: false
            },
            {
            answer: "eleven",
            correct: false
            },
            {
            answer: "thirty two",
            correct: false
            },
            {
            answer: "ten and two",
            correct: false
            },
            ]
            },
            {
            id: 4,
            quizQuestion: "Нажми на 22",
            answers: [
            {
            answer: "twenty two",
            correct: true
            },
            {
            answer: "twelve two",
            correct: false
            },
            {
            answer: "eleven plus eleven",
            correct: false
            },
            {
            answer: "twenteen",
            correct: false
            },
            {
            answer: "twelveteen",
            correct: false
            },
            ]
            },
            {
            id: 5,
            quizQuestion: "Нажми на 20",
            answers: [
            {
            answer: "twenty",
            correct: true
            },
            {
            answer: "twelve",
            correct: false
            },
            {
            answer: "twenteen",
            correct: false
            },
            {
            answer: "twelveteen",
            correct: false
            },
            {
            answer: "two zero",
            correct: false
            },
            ]
            },
            {
            id: 6,
            quizQuestion: "Нажми на 222",
            answers: [
            {
            answer: "two hundred twenty two",
            correct: true
            },
            {
            answer: "two hundred twelve two",
            correct: false
            },
            {
            answer: "two hundred two twenty",
            correct: false
            },
            {
            answer: "twenty two hundred two",
            correct: false
            },
            {
            answer: "twelve hundred twenty two",
            correct: false
            },
            ]
            },
            {
            id: 7,
            quizQuestion: "Нажми на 12",
            answers: [
            {
            answer: "twelve",
            correct: true
            },
            {
            answer: "twenteen",
            correct: false
            },
            {
            answer: "twelveteen",
            correct: false
            },
            {
            answer: "one and two",
            correct: false
            },
            {
            answer: "ten plus two",
            correct: false
            },
            ]
            },
            {
            id: 8,
            quizQuestion: "Как произносится 14 ?",
            answers: [
            {
            answer: "/фотИИИН/",
            correct: true
            },
            {
            answer: "/фёртин/",
            correct: false
            },
            {
            answer: "/фёрти/",
            correct: false
            },
            {
            answer: "/фоутин/",
            correct: false
            },
            {
            answer: "/фОти/",
            correct: false
            },
            ]
            },
            {
            id: 9,
            quizQuestion: "How much is nine plus eleven? (Сколько будет nine plus eleven?)",
            answers: [
            {
            answer: "twenty",
            correct: true
            },
            {
            answer: "twelve",
            correct: false
            },
            {
            answer: "twenteen",
            correct: false
            },
            {
            answer: "twelveteen",
            correct: false
            },
            {
            answer: "I don't know",
            correct: false
            },
            ]
            },
            {
            id: 10,
            quizQuestion: "Twelve это",
            answers: [
            {
            answer: "12",
            correct: true
            },
            {
            answer: "20",
            correct: false
            },
            {
            answer: "21",
            correct: false
            },
            {
            answer: "22",
            correct: false
            },
            {
            answer: "222",
            correct: false
            },
            ]
            },
            {
            id: 11,
            quizQuestion: "Twenty это",
            answers: [
            {
            answer: "20",
            correct: true
            },
            {
            answer: "12",
            correct: false
            },
            {
            answer: "202",
            correct: false
            },
            {
            answer: "22",
            correct: false
            },
            {
            answer: "2",
            correct: false
            },
            ]
            },
            {
            id: 12,
            quizQuestion: "Thirty это",
            answers: [
            {
            answer: "30",
            correct: true
            },
            {
            answer: "13",
            correct: false
            },
            {
            answer: "14",
            correct: false
            },
            {
            answer: "40",
            correct: false
            },
            {
            answer: "18",
            correct: false
            },
            ]
            },
            {
            id: 13,
            quizQuestion: "Fourteen это",
            answers: [
            {
            answer: "14",
            correct: true
            },
            {
            answer: "40",
            correct: false
            },
            {
            answer: "13",
            correct: false
            },
            {
            answer: "30",
            correct: false
            },
            {
            answer: "19",
            correct: false
            },
            ]
            },
            {
            id: 14,
            quizQuestion: "Forty это",
            answers: [
            {
            answer: "40",
            correct: true
            },
            {
            answer: "14",
            correct: false
            },
            {
            answer: "13",
            correct: false
            },
            {
            answer: "13",
            correct: false
            },
            {
            answer: "80",
            correct: false
            },
            ]
            },
            {
            id: 15,
            quizQuestion: "Eighteen это",
            answers: [
            {
            answer: "18",
            correct: true
            },
            {
            answer: "80",
            correct: false
            },
            {
            answer: "17",
            correct: false
            },
            {
            answer: "70",
            correct: false
            },
            {
            answer: "19",
            correct: false
            },
            ]
            },
            {
            id: 16,
            quizQuestion: "Eighty это",
            answers: [
            {
            answer: "80",
            correct: true
            },
            {
            answer: "18",
            correct: false
            },
            {
            answer: "90",
            correct: false
            },
            {
            answer: "19",
            correct: false
            },
            {
            answer: "17",
            correct: false
            },
            ]
            },
            {
            id: 17,
            quizQuestion: "Eighteen hundred eighty eight это",
            answers: [
            {
            answer: "888",
            correct: true
            },
            {
            answer: "818",
            correct: false
            },
            {
            answer: "881",
            correct: false
            },
            {
            answer: "808",
            correct: false
            },
            {
            answer: "188",
            correct: false
            },
            ]
            },
            {
            id: 18,
            quizQuestion: "12 + 12 is ?",
            answers: [
            {
            answer: "twenty four",
            correct: true
            },
            {
            answer: "twenty two",
            correct: false
            },
            {
            answer: "twelve",
            correct: false
            },
            {
            answer: "twelve two",
            correct: false
            },
            {
            answer: "twelve four",
            correct: false
            },
            ]
            },
            {
            id: 19,
            quizQuestion: "10 + 10 is ?",
            answers: [
            {
            answer: "twenty",
            correct: true
            },
            {
            answer: "twelve",
            correct: false
            },
            {
            answer: "twenteen",
            correct: false
            },
            {
            answer: "twelveteen",
            correct: false
            },
            {
            answer: "two zero",
            correct: false
            },
            ]
            },
            {
            id: 20,
            quizQuestion: "15 + 15 = ?",
            answers: [
            {
            answer: "thirty",
            correct: true
            },
            {
            answer: "thirteen",
            correct: false
            },
            {
            answer: "fifteen",
            correct: false
            },
            {
            answer: "fifty",
            correct: false
            },
            {
            answer: "thirty five",
            correct: false
            },
            ]
            },
            {
            id: 21,
            quizQuestion: "Fifteen это",
            answers: [
            {
            answer: "15",
            correct: true
            },
            {
            answer: "50",
            correct: false
            },
            {
            answer: "55",
            correct: false
            },
            {
            answer: "18",
            correct: false
            },
            {
            answer: "80",
            correct: false
            },
            ]
            },
            {
            id: 22,
            quizQuestion: "Fifty это",
            answers: [
            {
            answer: "50",
            correct: true
            },
            {
            answer: "15",
            correct: false
            },
            {
            answer: "55",
            correct: false
            },
            {
            answer: "30",
            correct: false
            },
            {
            answer: "13",
            correct: false
            },
            ]
            },
            {
            id: 23,
            quizQuestion: "Как произносится 18 по-английски?",
            answers: [
            {
            answer: "/эйтИИИН/",
            correct: true
            },
            {
            answer: "/найнтИИИН/",
            correct: false
            },
            {
            answer: "/найнти/",
            correct: false
            },
            {
            answer: "/эйти/",
            correct: false
            },
            {
            answer: "/найди/",
            correct: false
            },
            ]
            },
            {
            id: 24,
            quizQuestion: "Как произносится 19 по-английски?",
            answers: [
            {
            answer: "/найнтИИИН/",
            correct: true
            },
            {
            answer: "/найти/",
            correct: false
            },
            {
            answer: "/эйти/",
            correct: false
            },
            {
            answer: "/эйтИИИН/",
            correct: false
            },
            {
            answer: "/эйди/",
            correct: false
            },
            ]
            },
            {
            id: 25,
            quizQuestion: "Как произносится 80 по-английски?",
            answers: [
            {
            answer: "/эйти/",
            correct: true
            },
            {
            answer: "/найди/",
            correct: false
            },
            {
            answer: "/эйтИИИН/",
            correct: false
            },
            {
            answer: "/найнтИИИН/",
            correct: false
            },
            {
            answer: "/найнти/",
            correct: false
            },
            ]
            },
            {
            id: 26,
            quizQuestion: "Как произносится 90 по-английски?",
            answers: [
            {
            answer: "/найти/",
            correct: true
            },
            {
            answer: "/эйти/",
            correct: false
            },
            {
            answer: "/эйти/",
            correct: false
            },
            {
            answer: "/эйтИИИН/",
            correct: false
            },
            {
            answer: "/эйди/",
            correct: false
            },
            ]
            },
            {
            id: 27,
            quizQuestion: "Знак + плюс по английски произносится:",
            answers: [
            {
            answer: "/плас/",
            correct: true
            },
            {
            answer: "/плус/",
            correct: false
            },
            {
            answer: "/плис/",
            correct: false
            },
            {
            answer: "/плаус/",
            correct: false
            },
            {
            answer: "/плюс/",
            correct: false
            },
            ]
            },
            {
            id: 28,
            quizQuestion: "Знак - минус по английски произносится:",
            answers: [
            {
            answer: "/майнэс/",
            correct: true
            },
            {
            answer: "/минус/",
            correct: false
            },
            {
            answer: "/так и произносится/",
            correct: false
            },
            {
            answer: "/мэйнус/",
            correct: false
            },
            {
            answer: "/минусик/",
            correct: false
            },
            ]
            },
            {
            id: 29,
            quizQuestion: "Знак = равно по английски можно произнести:",
            answers: [
            {
            answer: "/из/",
            correct: true
            },
            {
            answer: "/ravno/",
            correct: false
            },
            {
            answer: "/ravnyaetsya/",
            correct: false
            },
            {
            answer: "/эквал/",
            correct: false
            },
            {
            answer: "/экуал/",
            correct: false
            },
            ]
            },
            {
            id: 30,
            quizQuestion: "ПЕРВЫЙ по-английски:",
            answers: [
            {
            answer: "/дэ фёст/",
            correct: true
            },
            {
            answer: "/дэ фист/",
            correct: false
            },
            {
            answer: "/дэ фаст/",
            correct: false
            },
            {
            answer: "/zэ фёрст/",
            correct: false
            },
            {
            answer: "/зе фёст/",
            correct: false
            },
            ]
            },
            {
            id: 31,
            quizQuestion: "ПОСЛЕДНИЙ по-английски:",
            answers: [
            {
            answer: "the last",
            correct: true
            },
            {
            answer: "the lost",
            correct: false
            },
            {
            answer: "the loser",
            correct: false
            },
            {
            answer: "the end",
            correct: false
            },
            {
            answer: "the final",
            correct: false
            },
            ]
            },
            {
            id: 32,
            quizQuestion: "ВОСЬМОЙ на английском это:",
            answers: [
            {
            answer: "the eighth",
            correct: true
            },
            {
            answer: "the nineth",
            correct: false
            },
            {
            answer: "the tenth",
            correct: false
            },
            {
            answer: "the seventh",
            correct: false
            },
            {
            answer: "the twelfth",
            correct: false
            },
            ]
            },
            {
            id: 33,
            quizQuestion: "9 тысяч по-английски это",
            answers: [
            {
            answer: "nine thousand",
            correct: true
            },
            {
            answer: "nine hundred",
            correct: false
            },
            {
            answer: "nine thousands",
            correct: false
            },
            {
            answer: "nine hundreds",
            correct: false
            },
            {
            answer: "eight thousand",
            correct: false
            },
            ]
            },
            {
            id: 34,
            quizQuestion: "сто долларов это",
            answers: [
            {
            answer: "a hundred dollars",
            correct: true
            },
            {
            answer: "one thousand dollars",
            correct: false
            },
            {
            answer: "a hundred dollar",
            correct: false
            },
            {
            answer: "1 thousand dollars",
            correct: false
            },
            {
            answer: "1 hundreds dollars",
            correct: false
            },
            ]
            },
            {
            id: 35,
            quizQuestion: "двести баксов на инглише это $200",
            answers: [
            {
            answer: "two hundred bucks",
            correct: true
            },
            {
            answer: "2 hundreds bucks",
            correct: false
            },
            {
            answer: "too much",
            correct: false
            },
            {
            answer: "a lot of money",
            correct: false
            },
            {
            answer: "2 thousand bucks",
            correct: false
            },
            ]
            },
            {
            id: 36,
            quizQuestion: "Как НЕ произносится НОЛЬ на английском?",
            answers: [
            {
            answer: "/zЭро/",
            correct: true
            },
            {
            answer: "/зИроу/",
            correct: false
            },
            {
            answer: "/оу/",
            correct: false
            },
            {
            answer: "/зирО/",
            correct: false
            },
            {
            answer: "/oh/",
            correct: false
            },
            ]
            },
            {
            id: 37,
            quizQuestion: "Половина по английски это",
            answers: [
            {
            answer: " a half",
            correct: true
            },
            {
            answer: "a quartret",
            correct: false
            },
            {
            answer: "a percent",
            correct: false
            },
            {
            answer: "a second",
            correct: false
            },
            {
            answer: "a polovina",
            correct: false
            },
            ]
            },
            {
            id: 38,
            quizQuestion: "Как сказать по-английски: посчитай от 10 до 0",
            answers: [
            {
            answer: "count from ten to zero",
            correct: true
            },
            {
            answer: "count from zero to ten",
            correct: false
            },
            {
            answer: "count to ten from zero",
            correct: false
            },
            {
            answer: "take a calculator",
            correct: false
            },
            {
            answer: "GOD, please help",
            correct: false
            },
            ]
            },
            {
            id: 39,
            quizQuestion: "Знак = равно по английски можно произнести:",
            answers: [
            {
            answer: "/Иквэлz/",
            correct: true
            },
            {
            answer: "/ravno/",
            correct: false
            },
            {
            answer: "/ravnyaetsya/",
            correct: false
            },
            {
            answer: "/ит/",
            correct: false
            },
            {
            answer: "/икуЭжн/",
            correct: false
            },
            ]
            },
            {
            id: 40,
            quizQuestion: "/ фЁст  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "первый",
            correct: true
            },
            {
            answer: "the second",
            correct: false
            },
            {
            answer: "the third",
            correct: false
            },
            {
            answer: "the fourth",
            correct: false
            },
            {
            answer: "the fifth",
            correct: false
            },
            ]
            },
            {
            id: 41,
            quizQuestion: "/ сэконд  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "the second",
            correct: true
            },
            {
            answer: "первый",
            correct: false
            },
            {
            answer: "третий",
            correct: false
            },
            {
            answer: "четвертый",
            correct: false
            },
            {
            answer: "пятый",
            correct: false
            },
            ]
            },
            {
            id: 42,
            quizQuestion: "/ thЁрд  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "третий",
            correct: true
            },
            {
            answer: "the thirteenth",
            correct: false
            },
            {
            answer: "первый",
            correct: false
            },
            {
            answer: "the first",
            correct: false
            },
            {
            answer: "the fourth",
            correct: false
            },
            ]
            },
            {
            id: 43,
            quizQuestion: "/ фОth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "четвертый",
            correct: true
            },
            {
            answer: "третий",
            correct: false
            },
            {
            answer: "второй",
            correct: false
            },
            {
            answer: "первый",
            correct: false
            },
            {
            answer: "the first",
            correct: false
            },
            ]
            },
            {
            id: 44,
            quizQuestion: "/ фИфth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "пятый",
            correct: true
            },
            {
            answer: "четвертый",
            correct: false
            },
            {
            answer: "третий",
            correct: false
            },
            {
            answer: "второй",
            correct: false
            },
            {
            answer: "первый",
            correct: false
            },
            ]
            },
            {
            id: 45,
            quizQuestion: "/ сЫксth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "шестой",
            correct: true
            },
            {
            answer: "пятый",
            correct: false
            },
            {
            answer: "четвертый",
            correct: false
            },
            {
            answer: "третий",
            correct: false
            },
            {
            answer: "второй",
            correct: false
            },
            ]
            },
            {
            id: 46,
            quizQuestion: "/ ЭЙТth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "восьмой",
            correct: true
            },
            {
            answer: "шестой",
            correct: false
            },
            {
            answer: "девятый",
            correct: false
            },
            {
            answer: "четвертый",
            correct: false
            },
            {
            answer: "третий",
            correct: false
            },
            ]
            },
            {
            id: 47,
            quizQuestion: "/ нАйнth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "девятый",
            correct: true
            },
            {
            answer: "восьмой",
            correct: false
            },
            {
            answer: "шестой",
            correct: false
            },
            {
            answer: "пятый",
            correct: false
            },
            {
            answer: "четвертый",
            correct: false
            },
            ]
            },
            {
            id: 48,
            quizQuestion: "/ тЭнth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "десятый",
            correct: true
            },
            {
            answer: "девятый",
            correct: false
            },
            {
            answer: "восьмой",
            correct: false
            },
            {
            answer: "шестой",
            correct: false
            },
            {
            answer: "пятый",
            correct: false
            },
            ]
            },
            {
            id: 49,
            quizQuestion: "/ туЭлвth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "двенадцатый",
            correct: true
            },
            {
            answer: "десятый",
            correct: false
            },
            {
            answer: "девятый",
            correct: false
            },
            {
            answer: "восьмой",
            correct: false
            },
            {
            answer: "шестой",
            correct: false
            },
            ]
            },
            {
            id: 50,
            quizQuestion: "/ илЭвэнth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "одинадцатый",
            correct: true
            },
            {
            answer: "двенадцатый",
            correct: false
            },
            {
            answer: "десятый",
            correct: false
            },
            {
            answer: "девятый",
            correct: false
            },
            {
            answer: "восьмой",
            correct: false
            },
            ]
            },
            {
            id: 51,
            quizQuestion: "/ thЁртИИИнth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "тринадцатый",
            correct: true
            },
            {
            answer: "двадцатый",
            correct: false
            },
            {
            answer: "двенадцатый",
            correct: false
            },
            {
            answer: "десятый",
            correct: false
            },
            {
            answer: "девятый",
            correct: false
            },
            ]
            },
            {
            id: 52,
            quizQuestion: "/ фифтИИИИнth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "пятнадцатый",
            correct: true
            },
            {
            answer: "тринадцатый",
            correct: false
            },
            {
            answer: "двадцатый",
            correct: false
            },
            {
            answer: "двенадцатый",
            correct: false
            },
            {
            answer: "десятый",
            correct: false
            },
            ]
            },
            {
            id: 53,
            quizQuestion: "/ фотИИИнth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "четырнадцатый",
            correct: true
            },
            {
            answer: "пятнадцатый",
            correct: false
            },
            {
            answer: "тринадцатый",
            correct: false
            },
            {
            answer: "двадцатый",
            correct: false
            },
            {
            answer: "двенадцатый",
            correct: false
            },
            ]
            },
            {
            id: 54,
            quizQuestion: "/ thЁтиеth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "тридцатый",
            correct: true
            },
            {
            answer: "четырнадцатый",
            correct: false
            },
            {
            answer: "пятнадцатый",
            correct: false
            },
            {
            answer: "тринадцатый",
            correct: false
            },
            {
            answer: "двадцатый",
            correct: false
            },
            ]
            },
            {
            id: 55,
            quizQuestion: "/ зИроth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "нулевой",
            correct: true
            },
            {
            answer: "тридцатый",
            correct: false
            },
            {
            answer: "четырнадцатый",
            correct: false
            },
            {
            answer: "пятнадцатый",
            correct: false
            },
            {
            answer: "тринадцатый",
            correct: false
            },
            ]
            },
            {
            id: 56,
            quizQuestion: "/ фОтиеth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "сороковой",
            correct: true
            },
            {
            answer: "нулевой",
            correct: false
            },
            {
            answer: "тридцатый",
            correct: false
            },
            {
            answer: "четырнадцатый",
            correct: false
            },
            {
            answer: "пятнадцатый",
            correct: false
            },
            ]
            },
            {
            id: 57,
            quizQuestion: "/ хАндрэдth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "сотый",
            correct: true
            },
            {
            answer: "сороковой",
            correct: false
            },
            {
            answer: "нулевой",
            correct: false
            },
            {
            answer: "тридцатый",
            correct: false
            },
            {
            answer: "четырнадцатый",
            correct: false
            },
            ]
            },
            {
            id: 58,
            quizQuestion: "/ thAуzэндth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "тысячный",
            correct: true
            },
            {
            answer: "сотый",
            correct: false
            },
            {
            answer: "сороковой",
            correct: false
            },
            {
            answer: "нулевой",
            correct: false
            },
            {
            answer: "тридцатый",
            correct: false
            },
            ]
            },
            {
            id: 59,
            quizQuestion: "/ туэнти фЁст  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "двадцать первый",
            correct: true
            },
            {
            answer: "двенадцатый",
            correct: false
            },
            {
            answer: "двадцать второй",
            correct: false
            },
            {
            answer: "сороковой",
            correct: false
            },
            {
            answer: "the twelfth",
            correct: false
            },
            ]
            },
            {
            id: 60,
            quizQuestion: "/ фИфти фифth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "пятьдесят пятый",
            correct: true
            },
            {
            answer: "двадцать первый",
            correct: false
            },
            {
            answer: "пятнадцатый",
            correct: false
            },
            {
            answer: "сотый",
            correct: false
            },
            {
            answer: "сороковой",
            correct: false
            },
            ]
            },
            {
            id: 61,
            quizQuestion: "/ дэ ласт  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "последний",
            correct: true
            },
            {
            answer: "пятьдесят пятый",
            correct: false
            },
            {
            answer: "двадцать первый",
            correct: false
            },
            {
            answer: "тысячный",
            correct: false
            },
            {
            answer: "сотый",
            correct: false
            },
            ]
            },
            {
            id: 62,
            quizQuestion: "/ нАйнди нАйнth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "девяносто девятый",
            correct: true
            },
            {
            answer: "восемьдесят восьмой",
            correct: false
            },
            {
            answer: "пятьдесят пятый",
            correct: false
            },
            {
            answer: "двадцать первый",
            correct: false
            },
            {
            answer: "тысячный",
            correct: false
            },
            ]
            },
            {
            id: 63,
            quizQuestion: "/ Эйти Эйтth  / Это какое порядковое числительное?",
            answers: [
            {
            answer: "восемьдесят восьмой",
            correct: true
            },
            {
            answer: "девяносто девятый",
            correct: false
            },
            {
            answer: "последний",
            correct: false
            },
            {
            answer: "пятьдесят пятый",
            correct: false
            },
            {
            answer: "двадцать первый",
            correct: false
            },
            ]
            },        
    ],
    sara: [
        {
            id: 1,
            quizQuestion: "They ___ my friends",
            answers: [
                {
                    answer: "aren't",
                    correct: true
                },
                {
                    answer: "don't",
                    correct: false
                },
                {
                    answer: "doesn't",
                    correct: false
                },
                {
                    answer: "-",
                    correct: false
                },
                {
                    answer: "be",
                    correct: false
                },
            ]
        },
        {
            id: 2,
            quizQuestion: "She ___ a good girl",
            answers: [
                {
                    answer: "is not",
                    correct: true
                },
                {
                    answer: "doesn't",
                    correct: false
                },
                {
                    answer: "does",
                    correct: false
                },
                {
                    answer: "my",
                    correct: false
                },
                {
                    answer: "hasn't ",
                    correct: false
                },
            ]
        },
        {
            id: 3,
            quizQuestion: "I ___ agent",
            answers: [
                {
                    answer: "am a secret",
                    correct: true
                },
                {
                    answer: "don't a secret",
                    correct: false
                },
                {
                    answer: "amn't a secret",
                    correct: false
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "am not secret",
                    correct: false
                },
            ]
        },
        {
            id: 4,
            quizQuestion: "What is the correct sentence?",
            answers: [
                {
                    answer: "I wake up at 6 AM not very often.",
                    correct: true
                },
                {
                    answer: "I waking up at 6 AM every day.",
                    correct: false
                },
                {
                    answer: "I wake up at 6 AM O'CLOCK every day.",
                    correct: false
                },
                {
                    answer: "I wake up at 6 AM yesterday.",
                    correct: false
                },
                {
                    answer: "I wake up at 6 AM right now.",
                    correct: false
                },
            ]
        },
        {
            id: 5,
            quizQuestion: "What is the correct sentence?",
            answers: [
                {
                    answer: "I wake up at 6 AM every day.",
                    correct: true
                },
                {
                    answer: "I waking up at 6 AM every day.",
                    correct: false
                },
                {
                    answer: "I wake up at 6 AM yesterday.",
                    correct: false
                },
                {
                    answer: "I wake up at 6 AM tomorrow.",
                    correct: false
                },
                {
                    answer: "I am usually wake up at 6 AM ",
                    correct: false
                },
            ]
        },
        {
            id: 6,
            quizQuestion: "What is the correct sentence?",
            answers: [
                {
                    answer: "She cleans teeth in the morning.",
                    correct: true
                },
                {
                    answer: "She get a shower in the morning.",
                    correct: false
                },
                {
                    answer: "She take a shower in the morning.",
                    correct: false
                },
                {
                    answer: "She brush teeth in the morning.",
                    correct: false
                },
                {
                    answer: "She have a shower in the morning.",
                    correct: false
                },
            ]
        },
        {
            id: 7,
            quizQuestion: "What is the correct sentence?",
            answers: [
                {
                    answer: "She brushes teeth in the morning.",
                    correct: true
                },
                {
                    answer: "She is brushing teeth in the morning.",
                    correct: false
                },
                {
                    answer: "She brush teeth in the morning.",
                    correct: false
                },
                {
                    answer: "She doesn't brushes teeth in the morning.",
                    correct: false
                },
                {
                    answer: "She brushes a teeth in the morning.",
                    correct: false
                },
            ]
        },
        {
            id: 8,
            quizQuestion: "What is the correct sentence?",
            answers: [
                {
                    answer: "I get dressed before I brush my teeth.",
                    correct: true
                },
                {
                    answer: "I get dressed after I'm brushing my teeth.",
                    correct: false
                },
                {
                    answer: "I get dressed and brushes my teeth.",
                    correct: false
                },
                {
                    answer: "I get dressed while I brushing my teeth.",
                    correct: false
                },
                {
                    answer: "I doesn't brush my teeth and not dressed",
                    correct: false
                },
            ]
        },
        {
            id: 9,
            quizQuestion: "Как произносится слово 'рано' ?",
            answers: [
                {
                    answer: "/что-то среднее между О и Ё/",
                    correct: true
                },
                {
                    answer: "/Оли/",
                    correct: false
                },
                {
                    answer: "/Ёрли/",
                    correct: false
                },
                {
                    answer: "/Орли/",
                    correct: false
                },
                {
                    answer: "/Ёли/",
                    correct: false
                },
            ]
        },
        {
            id: 10,
            quizQuestion: "How many times do you brush teeth?",
            answers: [
                {
                    answer: "2 times",
                    correct: true
                },
                {
                    answer: "1 times",
                    correct: false
                },
                {
                    answer: "2 time",
                    correct: false
                },
                {
                    answer: "2 minutes",
                    correct: false
                },
                {
                    answer: "1 minute",
                    correct: false
                },
            ]
        },
        {
            id: 11,
            quizQuestion: "How long do you brush your teeth?",
            answers: [
                {
                    answer: "2 minutes",
                    correct: true
                },
                {
                    answer: "1 times",
                    correct: false
                },
                {
                    answer: "2 time",
                    correct: false
                },
                {
                    answer: "1 minutes",
                    correct: false
                },
                {
                    answer: "1 or 2 times usually",
                    correct: false
                },
            ]
        },
        {
            id: 12,
            quizQuestion: "Что такое /бЭДрум/",
            answers: [
                {
                    answer: "спальня",
                    correct: true
                },
                {
                    answer: "плохая комната",
                    correct: false
                },
                {
                    answer: "ванная",
                    correct: false
                },
                {
                    answer: "комната Бэтмэна",
                    correct: false
                },
                {
                    answer: "секретная комната",
                    correct: false
                },
            ]
        },
        {
            id: 13,
            quizQuestion: "Как произносится bathroom?",
            answers: [
                {
                    answer: "язык между зубов",
                    correct: true
                },
                {
                    answer: "/бэТрум/",
                    correct: false
                },
                {
                    answer: "/бэДрум/",
                    correct: false
                },
                {
                    answer: "/бэСрум/",
                    correct: false
                },
                {
                    answer: "/эФрум/",
                    correct: false
                },
            ]
        },
        {
            id: 14,
            quizQuestion: "Как написать: она спит",
            answers: [
                {
                    answer: "she sleeps",
                    correct: true
                },
                {
                    answer: "she sleps",
                    correct: false
                },
                {
                    answer: "she slиps",
                    correct: false
                },
                {
                    answer: "she sleaps",
                    correct: false
                },
                {
                    answer: "she slips",
                    correct: false
                },
            ]
        },
        {
            id: 15,
            quizQuestion: "Как по-английски 'смотреть в свой телефон'",
            answers: [
                {
                    answer: "look at my phone",
                    correct: true
                },
                {
                    answer: "watch my phone",
                    correct: false
                },
                {
                    answer: "look in my phone",
                    correct: false
                },
                {
                    answer: "see in my phone",
                    correct: false
                },
                {
                    answer: "watch at my phone",
                    correct: false
                },
            ]
        },
        {
            id: 16,
            quizQuestion: "What is the correct sentence?",
            answers: [
                {
                    answer: "He never smokes",
                    correct: true
                },
                {
                    answer: "He doesn't never smoke",
                    correct: false
                },
                {
                    answer: "He not smoke",
                    correct: false
                },
                {
                    answer: "He is not smoke",
                    correct: false
                },
                {
                    answer: "He is never smoke",
                    correct: false
                },
            ]
        },
        {
            id: 17,
            quizQuestion: "She ___ a good job.",
            answers: [
                {
                    answer: "doesn't have",
                    correct: true
                },
                {
                    answer: "haven't",
                    correct: false
                },
                {
                    answer: "is not have",
                    correct: false
                },
                {
                    answer: "have",
                    correct: false
                },
                {
                    answer: "hasn't ",
                    correct: false
                },
            ]
        },
        {
            id: 18,
            quizQuestion: "I ___ the best teacher!",
            answers: [
                {
                    answer: "have",
                    correct: true
                },
                {
                    answer: "has",
                    correct: false
                },
                {
                    answer: "haven't",
                    correct: false
                },
                {
                    answer: "hasn't",
                    correct: false
                },
                {
                    answer: "am have",
                    correct: false
                },
            ]
        },
        {
            id: 19,
            quizQuestion: "Как спросить 'Во сколько' ?",
            answers: [
                {
                    answer: "What time?",
                    correct: true
                },
                {
                    answer: "How long?",
                    correct: false
                },
                {
                    answer: "How many times?",
                    correct: false
                },
                {
                    answer: "How much time?",
                    correct: false
                },
                {
                    answer: "When o'clock?",
                    correct: false
                },
            ]
        },
        {
            id: 20,
            quizQuestion: "Как произносится 'Who' ?",
            answers: [
                {
                    answer: "/хУ/",
                    correct: true
                },
                {
                    answer: "/хО/",
                    correct: false
                },
                {
                    answer: "/У/",
                    correct: false
                },
                {
                    answer: "/вХу/",
                    correct: false
                },
                {
                    answer: "/хо хо хо/",
                    correct: false
                },
            ]
        },
        {
            id: 21,
            quizQuestion: "Как произносится 'Why' ?",
            answers: [
                {
                    answer: "/уАй/",
                    correct: true
                },
                {
                    answer: "/хАй/",
                    correct: false
                },
                {
                    answer: "/хУ/",
                    correct: false
                },
                {
                    answer: "/вХу/",
                    correct: false
                },
                {
                    answer: "/хЭzЭ/",
                    correct: false
                },
            ]
        },
        {
            id: 22,
            quizQuestion: "Как спросить 'Как часто' ?",
            answers: [
                {
                    answer: "How often?",
                    correct: true
                },
                {
                    answer: "How much?",
                    correct: false
                },
                {
                    answer: "How long?",
                    correct: false
                },
                {
                    answer: "When?",
                    correct: false
                },
                {
                    answer: "How ofen?",
                    correct: false
                },
            ]
        },
        {
            id: 23,
            quizQuestion: "What is the correct sentence?",
            answers: [
                {
                    answer: "Homework is good",
                    correct: true
                },
                {
                    answer: "Homework not good",
                    correct: false
                },
                {
                    answer: "Homework stupid",
                    correct: false
                },
                {
                    answer: "Homework doesn't bad",
                    correct: false
                },
                {
                    answer: "I am potato",
                    correct: false
                },
            ]
        },
        {
            id: 24,
            quizQuestion: "Как пишется 'зубная щетка'",
            answers: [
                {
                    answer: "tooth brush",
                    correct: true
                },
                {
                    answer: "tooth brash",
                    correct: false
                },
                {
                    answer: "teeth brash",
                    correct: false
                },
                {
                    answer: "teeth brush",
                    correct: false
                },
                {
                    answer: "teeth cleaner",
                    correct: false
                },
            ]
        },
        {
            id: 25,
            quizQuestion: "Vincent and I drink alcohol ___ .",
            answers: [
                {
                    answer: "behind the garages",
                    correct: true
                },
                {
                    answer: "тугеZэр",
                    correct: false
                },
                {
                    answer: "not",
                    correct: false
                },
                {
                    answer: "don't drink",
                    correct: false
                },
                {
                    answer: "yesterday",
                    correct: false
                },
            ]
        },
    ],
    tagquestions: [
        {
            id: 1,
            quizQuestion: " Don't talk to Peter during the lesson, ____",
            answers: [
            {
            answer: " will you?",
            correct: true
            },
            {
            answer: "do you?",
            correct: false
            },
            {
            answer: "won't you?",
            correct: false
            },
            {
            answer: "doesn't you?",
            correct: false
            },
            {
            answer: "does he?",
            correct: false
            },
            ]
            },
            {
            id: 2,
            quizQuestion: "Shut up now, ____",
            answers: [
            {
            answer: " will you?",
            correct: true
            },
            {
            answer: "do you?",
            correct: false
            },
            {
            answer: "won't you?",
            correct: false
            },
            {
            answer: "don't I?",
            correct: false
            },
            {
            answer: "should you?",
            correct: false
            },
            ]
            },
            {
            id: 3,
            quizQuestion: " Don't talk to me this way, ____",
            answers: [
            {
            answer: " will you?",
            correct: true
            },
            {
            answer: "do you?",
            correct: false
            },
            {
            answer: "won't you?",
            correct: false
            },
            {
            answer: "do I?",
            correct: false
            },
            {
            answer: "am I?",
            correct: false
            },
            ]
            },
            {
            id: 4,
            quizQuestion: " I think he's from India, ____",
            answers: [
            {
            answer: " don't I?",
            correct: true
            },
            {
            answer: "do I?",
            correct: false
            },
            {
            answer: "am I?",
            correct: false
            },
            {
            answer: "was he?",
            correct: false
            },
            {
            answer: "is he?",
            correct: false
            },
            ]
            },
            {
            id: 5,
            quizQuestion: " I think he's from India, ____",
            answers: [
            {
            answer: " isn't he?",
            correct: true
            },
            {
            answer: "does he?",
            correct: false
            },
            {
            answer: "doesn't he?",
            correct: false
            },
            {
            answer: "is he?",
            correct: false
            },
            {
            answer: "do I?",
            correct: false
            },
            ]
            },
            {
            id: 6,
            quizQuestion: "Don't go swimming, ____",
            answers: [
            {
            answer: "will you?",
            correct: true
            },
            {
            answer: "won't you?",
            correct: false
            },
            {
            answer: "shall you?",
            correct: false
            },
            {
            answer: "do you?",
            correct: false
            },
            {
            answer: "don't you?",
            correct: false
            },
            ]
            },
            {
            id: 7,
            quizQuestion: " Let's go to swim, ____",
            answers: [
            {
            answer: "shall we?",
            correct: true
            },
            {
            answer: "will we?",
            correct: false
            },
            {
            answer: "let'sn't we?",
            correct: false
            },
            {
            answer: "do we?",
            correct: false
            },
            {
            answer: "can we?",
            correct: false
            },
            ]
            },
            {
            id: 8,
            quizQuestion: "Let's kiss now, ____",
            answers: [
            {
            answer: " shall we?",
            correct: true
            },
            {
            answer: "will you?",
            correct: false
            },
            {
            answer: "don't we?",
            correct: false
            },
            {
            answer: "do we?",
            correct: false
            },
            {
            answer: "can't we?",
            correct: false
            },
            ]
            },
            {
            id: 9,
            quizQuestion: "I'm late, ____",
            answers: [
            {
            answer: " aren't I?",
            correct: true
            },
            {
            answer: "am I?",
            correct: false
            },
            {
            answer: "amn't I?",
            correct: false
            },
            {
            answer: "did I?",
            correct: false
            },
            {
            answer: "was I?",
            correct: false
            },
            ]
            },
            {
            id: 10,
            quizQuestion: "I'm your English teacher, ____",
            answers: [
            {
            answer: " aren't I?",
            correct: true
            },
            {
            answer: "am I?",
            correct: false
            },
            {
            answer: "amn't I?",
            correct: false
            },
            {
            answer: "did I?",
            correct: false
            },
            {
            answer: "was I?",
            correct: false
            },
            ]
            },
            {
            id: 11,
            quizQuestion: "There are a lot of people here, ____",
            answers: [
            {
            answer: " aren't there?",
            correct: true
            },
            {
            answer: "aren't here?",
            correct: false
            },
            {
            answer: "isn't there?",
            correct: false
            },
            {
            answer: "isn't here?",
            correct: false
            },
            {
            answer: "aren't they?",
            correct: false
            },
            ]
            },
            {
            id: 12,
            quizQuestion: "There are some apples left, ____",
            answers: [
            {
            answer: " aren't there?",
            correct: true
            },
            {
            answer: "aren't here?",
            correct: false
            },
            {
            answer: "isn't there?",
            correct: false
            },
            {
            answer: "isn't here?",
            correct: false
            },
            {
            answer: "aren't they?",
            correct: false
            },
            ]
            },
            {
            id: 13,
            quizQuestion: "Andy and Marc are reading comics, ____",
            answers: [
            {
            answer: " aren't they?",
            correct: true
            },
            {
            answer: "are they?",
            correct: false
            },
            {
            answer: "don't they?",
            correct: false
            },
            {
            answer: "do they?",
            correct: false
            },
            {
            answer: "don't them?",
            correct: false
            },
            ]
            },
            {
            id: 14,
            quizQuestion: "You are Indian, ____",
            answers: [
            {
            answer: " aren't you?",
            correct: true
            },
            {
            answer: "are you?",
            correct: false
            },
            {
            answer: "is you?",
            correct: false
            },
            {
            answer: "do you?",
            correct: false
            },
            {
            answer: "you not Russian",
            correct: false
            },
            ]
            },
            {
            id: 15,
            quizQuestion: "Peggy didn't use the pencil, ____",
            answers: [
            {
            answer: " did she?",
            correct: true
            },
            {
            answer: "didn't she?",
            correct: false
            },
            {
            answer: "hadn't she?",
            correct: false
            },
            {
            answer: "was she?",
            correct: false
            },
            {
            answer: "wasn't she?",
            correct: false
            },
            ]
            },
            {
            id: 16,
            quizQuestion: "They had a nice weekend, ____",
            answers: [
            {
            answer: " didn't they?",
            correct: true
            },
            {
            answer: "hadn't they?",
            correct: false
            },
            {
            answer: "had they?",
            correct: false
            },
            {
            answer: "did they?",
            correct: false
            },
            {
            answer: "were they?",
            correct: false
            },
            ]
            },
            {
            id: 17,
            quizQuestion: "You don't like yoghurt, ____",
            answers: [
            {
            answer: " do you?",
            correct: true
            },
            {
            answer: "don't you?",
            correct: false
            },
            {
            answer: "are you?",
            correct: false
            },
            {
            answer: "aren't you?",
            correct: false
            },
            {
            answer: "doesn't you?",
            correct: false
            },
            ]
            },
            {
            id: 18,
            quizQuestion: "He sings in the bathroom, ____",
            answers: [
            {
            answer: " doesn't he?",
            correct: true
            },
            {
            answer: "do he?",
            correct: false
            },
            {
            answer: "he stupid?",
            correct: false
            },
            {
            answer: "is he?",
            correct: false
            },
            {
            answer: "isn't he?",
            correct: false
            },
            ]
            },
            {
            id: 19,
            quizQuestion: "He sometimes reads the newspaper, ____",
            answers: [
            {
            answer: " doesn't he?",
            correct: true
            },
            {
            answer: "does he?",
            correct: false
            },
            {
            answer: "is he?",
            correct: false
            },
            {
            answer: "he old",
            correct: false
            },
            {
            answer: "don't he?",
            correct: false
            },
            ]
            },
            {
            id: 20,
            quizQuestion: "Peggy plays volleyball, ____",
            answers: [
            {
            answer: " doesn't she?",
            correct: true
            },
            {
            answer: "does she?",
            correct: false
            },
            {
            answer: "does her?",
            correct: false
            },
            {
            answer: "doesn't her?",
            correct: false
            },
            {
            answer: "why?",
            correct: false
            },
            ]
            },
            {
            id: 21,
            quizQuestion: "She has a brother, ____",
            answers: [
            {
            answer: " doesn't she?",
            correct: true
            },
            {
            answer: "hasn't she?",
            correct: false
            },
            {
            answer: "haven't she?",
            correct: false
            },
            {
            answer: "hasn't her?",
            correct: false
            },
            {
            answer: "haven't her?",
            correct: false
            },
            ]
            },
            {
            id: 22,
            quizQuestion: "Dogs like meat, ____",
            answers: [
            {
            answer: " don't they?",
            correct: true
            },
            {
            answer: "do they?",
            correct: false
            },
            {
            answer: "do dogs?",
            correct: false
            },
            {
            answer: "does dogs?",
            correct: false
            },
            {
            answer: "doesn't they?",
            correct: false
            },
            ]
            },
            {
            id: 23,
            quizQuestion: "They often talk to their neighbours, ____",
            answers: [
            {
            answer: " don't they?",
            correct: true
            },
            {
            answer: "do their?",
            correct: false
            },
            {
            answer: "don't their?",
            correct: false
            },
            {
            answer: "not they?",
            correct: false
            },
            {
            answer: "do they?",
            correct: false
            },
            ]
            },
            {
            id: 24,
            quizQuestion: "Your friends enjoy swimming, ____",
            answers: [
            {
            answer: " don't they?",
            correct: true
            },
            {
            answer: "do they?",
            correct: false
            },
            {
            answer: "not they?",
            correct: false
            },
            {
            answer: "do we?",
            correct: false
            },
            {
            answer: "don't you?",
            correct: false
            },
            ]
            },
            {
            id: 25,
            quizQuestion: "He's been to Texas, ____",
            answers: [
            {
            answer: " hasn't he?",
            correct: true
            },
            {
            answer: "doesn't he?",
            correct: false
            },
            {
            answer: "didn't he?",
            correct: false
            },
            {
            answer: "has he?",
            correct: false
            },
            {
            answer: "is he?",
            correct: false
            },
            ]
            },
            {
            id: 26,
            quizQuestion: "Angela has ordered pizza, ____",
            answers: [
            {
            answer: " hasn't she?",
            correct: true
            },
            {
            answer: "doesn't she?",
            correct: false
            },
            {
            answer: "didn't she?",
            correct: false
            },
            {
            answer: "has she?",
            correct: false
            },
            {
            answer: "is she?",
            correct: false
            },
            ]
            },
            {
            id: 27,
            quizQuestion: "Mary has answered the teacher's question, ____",
            answers: [
            {
            answer: " hasn't she?",
            correct: true
            },
            {
            answer: "does she?",
            correct: false
            },
            {
            answer: "has she?",
            correct: false
            },
            {
            answer: "hasn't he?",
            correct: false
            },
            {
            answer: "hasn't her?",
            correct: false
            },
            ]
            },
            {
            id: 28,
            quizQuestion: "We've seen this film, ____",
            answers: [
            {
            answer: " haven't we?",
            correct: true
            },
            {
            answer: "have we?",
            correct: false
            },
            {
            answer: "do we?",
            correct: false
            },
            {
            answer: "did we?",
            correct: false
            },
            {
            answer: "is it?",
            correct: false
            },
            ]
            },
            {
            id: 29,
            quizQuestion: "Andrew isn't sleeping, ____",
            answers: [
            {
            answer: " is he?",
            correct: true
            },
            {
            answer: "isn't he?",
            correct: false
            },
            {
            answer: "why?",
            correct: false
            },
            {
            answer: "does he?",
            correct: false
            },
            {
            answer: "hasn't he?",
            correct: false
            },
            ]
            },
            {
            id: 30,
            quizQuestion: "The boy is from Turkey, ____",
            answers: [
            {
            answer: " isn't he?",
            correct: true
            },
            {
            answer: "is he?",
            correct: false
            },
            {
            answer: "is she?",
            correct: false
            },
            {
            answer: "isn't she?",
            correct: false
            },
            {
            answer: "aren't they?",
            correct: false
            },
            ]
            },
            {
            id: 31,
            quizQuestion: "Lovely day today, ____",
            answers: [
            {
            answer: " isn't it?",
            correct: true
            },
            {
            answer: "isn't he?",
            correct: false
            },
            {
            answer: "isn't day?",
            correct: false
            },
            {
            answer: "doesn't it?",
            correct: false
            },
            {
            answer: "don't it?",
            correct: false
            },
            ]
            },
            {
            id: 32,
            quizQuestion: "York is in England, ____",
            answers: [
            {
            answer: " isn't it?",
            correct: true
            },
            {
            answer: "isn't he?",
            correct: false
            },
            {
            answer: "isn't York?",
            correct: false
            },
            {
            answer: "doesn't it?",
            correct: false
            },
            {
            answer: "what is it?",
            correct: false
            },
            ]
            },
            {
            id: 33,
            quizQuestion: "There's only one cloud in the sky, ____",
            answers: [
            {
            answer: " isn't there?",
            correct: true
            },
            {
            answer: "is there?",
            correct: false
            },
            ]
            },
            {
            id: 34,
            quizQuestion: "Let's go, ____",
            answers: [
            {
            answer: " shall we?",
            correct: true
            },
            {
            answer: "will we?",
            correct: false
            },
            {
            answer: "don't we?",
            correct: false
            },
            {
            answer: "can we?",
            correct: false
            },
            {
            answer: "shouldn't we?",
            correct: false
            },
            ]
            },
            {
            id: 35,
            quizQuestion: "Sue wasn't listening, ____",
            answers: [
            {
            answer: " was she?",
            correct: true
            },
            {
            answer: "did she?",
            correct: false
            },
            {
            answer: "wasn't she?",
            correct: false
            },
            {
            answer: "bad girl",
            correct: false
            },
            {
            answer: "didn't she?",
            correct: false
            },
            ]
            },
            {
            id: 36,
            quizQuestion: "The teacher was late for school, ____",
            answers: [
            {
            answer: " wasn't he?",
            correct: true
            },
            {
            answer: "was he?",
            correct: false
            },
            {
            answer: "bad teacher",
            correct: false
            },
            {
            answer: "is he?",
            correct: false
            },
            {
            answer: "wasn't the teacher?",
            correct: false
            },
            ]
            },
            {
            id: 37,
            quizQuestion: "He'll never know, ____",
            answers: [
            {
            answer: " will he?",
            correct: true
            },
            {
            answer: "won't he?",
            correct: false
            },
            {
            answer: "don't he?",
            correct: false
            },
            {
            answer: "doesn't he?",
            correct: false
            },
            {
            answer: "isn't he?",
            correct: false
            },
            ]
            },
            {
            id: 38,
            quizQuestion: "Don't smoke, ____",
            answers: [
            {
            answer: " will you?",
            correct: true
            },
            {
            answer: "а то врежу!",
            correct: false
            },
            {
            answer: "understand?",
            correct: false
            },
            {
            answer: "can you?",
            correct: false
            },
            {
            answer: "do you?",
            correct: false
            },
            ]
            },
            {
            id: 39,
            quizQuestion: "Open the window, ____",
            answers: [
            {
            answer: " will you?",
            correct: true
            },
            {
            answer: "fast now!",
            correct: false
            },
            {
            answer: "do you?",
            correct: false
            },
            {
            answer: "are you?",
            correct: false
            },
            {
            answer: "cannot you?",
            correct: false
            },
            ]
            },
            {
            id: 40,
            quizQuestion: "Sue will be 14 next week, ____",
            answers: [
            {
            answer: " won't she?",
            correct: true
            },
            {
            answer: "will she?",
            correct: false
            },
            {
            answer: "does she?",
            correct: false
            },
            {
            answer: "is she?",
            correct: false
            },
            {
            answer: "won't it?",
            correct: false
            },
            ]
            },
            {
            id: 41,
            quizQuestion: "Tom and Maria will arrive at Heathrow, ____",
            answers: [
            {
            answer: " won't they?",
            correct: true
            },
            {
            answer: "will they?",
            correct: false
            },
            {
            answer: "who they?",
            correct: false
            },
            {
            answer: "don't they?",
            correct: false
            },
            {
            answer: "aren't they?",
            correct: false
            },
            ]
            },
            {
            id: 42,
            quizQuestion: "I am a little stupid, ____",
            answers: [
            {
            answer: "aren't I?",
            correct: true
            },
            {
            answer: "am I?",
            correct: false
            },
            {
            answer: "amn't I?",
            correct: false
            },
            {
            answer: "do I?",
            correct: false
            },
            {
            answer: "don't I?",
            correct: false
            },
            ]
            },
            {
            id: 43,
            quizQuestion: "I am smart, ____",
            answers: [
            {
            answer: "aren't I?",
            correct: true
            },
            {
            answer: "am I?",
            correct: false
            },
            {
            answer: "amn't I?",
            correct: false
            },
            {
            answer: "do I?",
            correct: false
            },
            {
            answer: "don't I?",
            correct: false
            },
            ]
            },
            {
            id: 44,
            quizQuestion: "I'm clever, ____",
            answers: [
            {
            answer: "aren't I?",
            correct: true
            },
            {
            answer: "am I?",
            correct: false
            },
            {
            answer: "amn't I?",
            correct: false
            },
            {
            answer: "do I?",
            correct: false
            },
            {
            answer: "don't I?",
            correct: false
            },
            ]
            },
            {
            id: 45,
            quizQuestion: "Pat and John are from Bristol, ____",
            answers: [
            {
            answer: "aren't they?",
            correct: true
            },
            {
            answer: "are they?",
            correct: false
            },
            {
            answer: "do they?",
            correct: false
            },
            {
            answer: "fromn't they?",
            correct: false
            },
            {
            answer: "who you?",
            correct: false
            },
            ]
            },
            {
            id: 46,
            quizQuestion: "They are going home from school, ____",
            answers: [
            {
            answer: "aren't they?",
            correct: true
            },
            {
            answer: "are they?",
            correct: false
            },
            {
            answer: "do they?",
            correct: false
            },
            {
            answer: "don't they?",
            correct: false
            },
            {
            answer: "isn't they?",
            correct: false
            },
            ]
            },
            {
            id: 47,
            quizQuestion: "Vincent can't speak Mongolian, ____",
            answers: [
            {
            answer: "can he?",
            correct: true
            },
            {
            answer: "could he?",
            correct: false
            },
            {
            answer: "he is stupid",
            correct: false
            },
            {
            answer: "I can",
            correct: false
            },
            {
            answer: "can't he?",
            correct: false
            },
            ]
            },
            {
            id: 48,
            quizQuestion: "He can write, ____",
            answers: [
            {
            answer: "can't he?",
            correct: true
            },
            {
            answer: "can he?",
            correct: false
            },
            {
            answer: "does he?",
            correct: false
            },
            {
            answer: "is he?",
            correct: false
            },
            {
            answer: "isn't he?",
            correct: false
            },
            ]
            },
            {
            id: 49,
            quizQuestion: "Jack can write good poems, ____",
            answers: [
            {
            answer: "can't he?",
            correct: true
            },
            {
            answer: "can he?",
            correct: false
            },
            {
            answer: "does he?",
            correct: false
            },
            {
            answer: "is he?",
            correct: false
            },
            {
            answer: "isn't he?",
            correct: false
            },
            ]
            },
            {
            id: 50,
            quizQuestion: "She can speak French, ____",
            answers: [
            {
            answer: "can't she?",
            correct: true
            },
            {
            answer: "can she?",
            correct: false
            },
            {
            answer: "does she?",
            correct: false
            },
            {
            answer: "is she?",
            correct: false
            },
            {
            answer: "isn't she?",
            correct: false
            },
            ]
            },
            {
            id: 51,
            quizQuestion: "Anne couldn't sing well, ____",
            answers: [
            {
            answer: "could she?",
            correct: true
            },
            {
            answer: "couldn't she?",
            correct: false
            },
            {
            answer: "could her?",
            correct: false
            },
            {
            answer: "couldn't her?",
            correct: false
            },
            {
            answer: "can she?",
            correct: false
            },
            ]
            },
            {
            id: 52,
            quizQuestion: "He could have bought a new car, ____",
            answers: [
            {
            answer: "couldn't he?",
            correct: true
            },
            {
            answer: "hasn't he?",
            correct: false
            },
            {
            answer: "haven't he?",
            correct: false
            },
            {
            answer: "has he?",
            correct: false
            },
            {
            answer: "have he?",
            correct: false
            },
            ]
            },
            {
            id: 53,
            quizQuestion: "Barbara could have helped you, ____",
            answers: [
            {
            answer: "couldn't she?",
            correct: true
            },
            {
            answer: "hasn't she?",
            correct: false
            },
            {
            answer: "haven't she?",
            correct: false
            },
            {
            answer: "has she?",
            correct: false
            },
            {
            answer: "have she?",
            correct: false
            },
            ]
            },
            {
            id: 54,
            quizQuestion: "Mary didn't do her homework last Monday, ____",
            answers: [
            {
            answer: "did she?",
            correct: true
            },
            {
            answer: "didn't she?",
            correct: false
            },
            {
            answer: "does she?",
            correct: false
            },
            {
            answer: "is she?",
            correct: false
            },
            {
            answer: "don't she?",
            correct: false
            },
            ]
            },
            {
            id: 55,
            quizQuestion: "She didn't come to the shop, ____",
            answers: [
            {
            answer: "did she?",
            correct: true
            },
            {
            answer: "didn't she?",
            correct: false
            },
            {
            answer: "does she?",
            correct: false
            },
            {
            answer: "is she?",
            correct: false
            },
            {
            answer: "don't she?",
            correct: false
            },
            ]
            },
            {
            id: 56,
            quizQuestion: "They did not do their homework, ____",
            answers: [
            {
            answer: "did they?",
            correct: true
            },
            {
            answer: "do they?",
            correct: false
            },
            {
            answer: "didn't they?",
            correct: false
            },
            {
            answer: "don't we?",
            correct: false
            },
            {
            answer: "isn't it?",
            correct: false
            },
            ]
            },
            {
            id: 57,
            quizQuestion: "They did not go to Vienna last week, ____",
            answers: [
            {
            answer: "did they?",
            correct: true
            },
            {
            answer: "didn't they?",
            correct: false
            },
            {
            answer: "don't they?",
            correct: false
            },
            {
            answer: "isn't it?",
            correct: false
            },
            {
            answer: "does it?",
            correct: false
            },
            ]
            },
            {
            id: 58,
            quizQuestion: "Chris got up at seven, ____",
            answers: [
            {
            answer: "didn't he?",
            correct: true
            },
            {
            answer: "gotn't he?",
            correct: false
            },
            {
            answer: "hasn't he?",
            correct: false
            },
            {
            answer: "did he?",
            correct: false
            },
            {
            answer: "isn't it?",
            correct: false
            },
            ]
            },
            {
            id: 59,
            quizQuestion: "Peter played handball yesterday, ____",
            answers: [
            {
            answer: "didn't he?",
            correct: true
            },
            {
            answer: "did he?",
            correct: false
            },
            {
            answer: "does he?",
            correct: false
            },
            {
            answer: "doesn't he?",
            correct: false
            },
            {
            answer: "isn't he?",
            correct: false
            },
            ]
            },
            {
            id: 60,
            quizQuestion: "They played football on Sundays, ____",
            answers: [
            {
            answer: "didn't they?",
            correct: true
            },
            {
            answer: "did they?",
            correct: false
            },
            {
            answer: "do they?",
            correct: false
            },
            {
            answer: "don't they?",
            correct: false
            },
            {
            answer: "playedn't they?",
            correct: false
            },
            ]
            },
            {
            id: 61,
            quizQuestion: "John and Max don't like maths, ____",
            answers: [
            {
            answer: "do they?",
            correct: true
            },
            {
            answer: "don't they?",
            correct: false
            },
            {
            answer: "do we?",
            correct: false
            },
            {
            answer: "stupid boys",
            correct: false
            },
            {
            answer: "isn't it?",
            correct: false
            },
            ]
            },
            {
            id: 62,
            quizQuestion: "Nobody says that you are stupid, ____",
            answers: [
            {
            answer: "do they?",
            correct: true
            },
            {
            answer: "are you?",
            correct: false
            },
            {
            answer: "aren't you?",
            correct: false
            },
            {
            answer: "don't they?",
            correct: false
            },
            {
            answer: "Vincent, help me!",
            correct: false
            },
            ]
            },
            {
            id: 63,
            quizQuestion: "He likes lasagna (лазанья), ____",
            answers: [
            {
            answer: "doesn't he?",
            correct: true
            },
            {
            answer: "does he?",
            correct: false
            },
            {
            answer: "don't he?",
            correct: false
            },
            {
            answer: "do you?",
            correct: false
            },
            {
            answer: "Mmmmm lasagna…",
            correct: false
            },
            ]
            },
            {
            id: 64,
            quizQuestion: "She plays football on Sundays, ____",
            answers: [
            {
            answer: "doesn't she?",
            correct: true
            },
            {
            answer: "does she?",
            correct: false
            },
            {
            answer: "is she?",
            correct: false
            },
            {
            answer: "will she?",
            correct: false
            },
            {
            answer: "has she?",
            correct: false
            },
            ]
            },
            {
            id: 65,
            quizQuestion: "They play football on Sundays, ____",
            answers: [
            {
            answer: "don't they?",
            correct: true
            },
            {
            answer: "won't they?",
            correct: false
            },
            {
            answer: "are they?",
            correct: false
            },
            {
            answer: "did they?",
            correct: false
            },
            {
            answer: "were they?",
            correct: false
            },
            ]
            },
            {
            id: 66,
            quizQuestion: "We often watch TV in the afternoon, ____",
            answers: [
            {
            answer: "don't we?",
            correct: true
            },
            {
            answer: "aren't we?",
            correct: false
            },
            {
            answer: "weren't we?",
            correct: false
            },
            {
            answer: "haven't we?",
            correct: false
            },
            {
            answer: "won't we?",
            correct: false
            },
            ]
            },
            {
            id: 67,
            quizQuestion: "He has a car, ____",
            answers: [
            {
            answer: "doesn't he?",
            correct: true
            },
            {
            answer: "didn't he?",
            correct: false
            },
            {
            answer: "isn't he?",
            correct: false
            },
            {
            answer: "wasn't he?",
            correct: false
            },
            {
            answer: "hasn't he?",
            correct: false
            },
            ]
            },
            {
            id: 68,
            quizQuestion: "She has bought a new phone, ____",
            answers: [
            {
            answer: "hasn't she?",
            correct: true
            },
            {
            answer: "didn't she?",
            correct: false
            },
            {
            answer: "did she?",
            correct: false
            },
            {
            answer: "has she?",
            correct: false
            },
            ]
            },
            {
            id: 69,
            quizQuestion: "They haven't finished the task, ____",
            answers: [
            {
            answer: "have they?",
            correct: true
            },
            {
            answer: "do they?",
            correct: false
            },
            {
            answer: "are they?",
            correct: false
            },
            {
            answer: "did they?",
            correct: false
            },
            {
            answer: "didn't they?",
            correct: false
            },
            ]
            },
            {
            id: 70,
            quizQuestion: "They have finished their homework, ____",
            answers: [
            {
            answer: "haven't they?",
            correct: true
            },
            {
            answer: "do they?",
            correct: false
            },
            {
            answer: "are they?",
            correct: false
            },
            {
            answer: "did they?",
            correct: false
            },
            {
            answer: "didn't they?",
            correct: false
            },
            ]
            },
            {
            id: 71,
            quizQuestion: "You have cleaned your bike, ____",
            answers: [
            {
            answer: "haven't you?",
            correct: true
            },
            {
            answer: "didn't you?",
            correct: false
            },
            {
            answer: "don't you?",
            correct: false
            },
            {
            answer: "have you?",
            correct: false
            },
            {
            answer: "not you?",
            correct: false
            },
            ]
            },
            {
            id: 72,
            quizQuestion: "You've got a car, ____",
            answers: [
            {
            answer: "haven't you?",
            correct: true
            },
            {
            answer: "don't you?",
            correct: false
            },
            {
            answer: "do you?",
            correct: false
            },
            {
            answer: "did you?",
            correct: false
            },
            {
            answer: "didn't you?",
            correct: false
            },
            ]
            },
            {
            id: 73,
            quizQuestion: "It's very hot in the Sahara, ____",
            answers: [
            {
            answer: "isn't it?",
            correct: true
            },
            {
            answer: "is it?",
            correct: false
            },
            {
            answer: "does it?",
            correct: false
            },
            {
            answer: "was it?",
            correct: false
            },
            {
            answer: "it is?",
            correct: false
            },
            ]
            },
            {
            id: 74,
            quizQuestion: "She is collecting stickers, ____",
            answers: [
            {
            answer: "isn't she?",
            correct: true
            },
            {
            answer: "is she?",
            correct: false
            },
            {
            answer: "does she?",
            correct: false
            },
            {
            answer: "do she?",
            correct: false
            },
            {
            answer: "doesn't she?",
            correct: false
            },
            ]
            },
            {
            id: 75,
            quizQuestion: "Let's go out for a walk, ____",
            answers: [
            {
            answer: "shall we?",
            correct: true
            },
            {
            answer: "can't we?",
            correct: false
            },
            {
            answer: "shouldn't we?",
            correct: false
            },
            {
            answer: "let's we?",
            correct: false
            },
            {
            answer: "don't we?",
            correct: false
            },
            ]
            },
            {
            id: 76,
            quizQuestion: "Shakespeare was English, ____",
            answers: [
            {
            answer: "wasn't he?",
            correct: true
            },
            {
            answer: "was he?",
            correct: false
            },
            {
            answer: "did he?",
            correct: false
            },
            {
            answer: "didn't he?",
            correct: false
            },
            {
            answer: "wasn't him?",
            correct: false
            },
            ]
            },
            {
            id: 77,
            quizQuestion: "Everybody was happy with the results, ____",
            answers: [
            {
            answer: "weren't they?",
            correct: true
            },
            {
            answer: "were they?",
            correct: false
            },
            {
            answer: "wasn't they?",
            correct: false
            },
            {
            answer: "wasn't it?",
            correct: false
            },
            {
            answer: "wasn't every?",
            correct: false
            },
            ]
            },
            {
            id: 78,
            quizQuestion: "Kevin will come tonight, ____",
            answers: [
            {
            answer: "won't he?",
            correct: true
            },
            {
            answer: "who is Kevin?",
            correct: false
            },
            {
            answer: "willn't he?",
            correct: false
            },
            {
            answer: "I don't know Kevin",
            correct: false
            },
            {
            answer: "and what?",
            correct: false
            },
            ]
            },
            {
            id: 79,
            quizQuestion: "I am the best student in the class, ___",
            answers: [
            {
            answer: " aren't I?",
            correct: true
            },
            {
            answer: "am I?",
            correct: false
            },
            {
            answer: "amn't I?",
            correct: false
            },
            {
            answer: "do I?",
            correct: false
            },
            {
            answer: "don't I?",
            correct: false
            },
            ]
            },
            {
            id: 80,
            quizQuestion: " Pass me the salt, ____",
            answers: [
            {
            answer: "will you?",
            correct: true
            },
            {
            answer: "don't you?",
            correct: false
            },
            {
            answer: "do you?",
            correct: false
            },
            {
            answer: "shall you?",
            correct: false
            },
            {
            answer: "faster!",
            correct: false
            },
            ]
            },
            {
            id: 81,
            quizQuestion: " Pass me the salt, ____",
            answers: [
            {
            answer: " will you?",
            correct: true
            },
            {
            answer: "plese.",
            correct: false
            },
            {
            answer: "plees.",
            correct: false
            },
            {
            answer: "pleese.",
            correct: false
            },
            {
            answer: "pleaz.",
            correct: false
            },
            ]
            },
            {
            id: 82,
            quizQuestion: "Russel always smokes hookah (кальян)",
            answers: [
            {
            answer: "doesn't he?",
            correct: true
            },
            {
            answer: "yes, of course",
            correct: false
            },
            {
            answer: "does he?",
            correct: false
            },
            {
            answer: "Oh my God!",
            correct: false
            },
            {
            answer: "don't he?",
            correct: false
            },
            ]
            },
            {
            id: 83,
            quizQuestion: " The slide show was fantastic, ____",
            answers: [
            {
            answer: " wasn't it?",
            correct: true
            },
            {
            answer: "was it?",
            correct: false
            },
            {
            answer: "didn't it?",
            correct: false
            },
            {
            answer: "does it?",
            correct: false
            },
            {
            answer: "isn't it?",
            correct: false
            },
            ]
            },
            {
            id: 84,
            quizQuestion: " The slide show was fantastic, ____",
            answers: [
            {
            answer: " wasn't it?",
            correct: true
            },
            {
            answer: "wozn't it?",
            correct: false
            },
            {
            answer: "doesn't it?",
            correct: false
            },
            {
            answer: "was it?",
            correct: false
            },
            {
            answer: "is it?",
            correct: false
            },
            ]
            },
            {
            id: 85,
            quizQuestion: " The sun won't shine tomorrow, ____",
            answers: [
            {
            answer: " will it?",
            correct: true
            },
            {
            answer: "will she?",
            correct: false
            },
            {
            answer: "won't it?",
            correct: false
            },
            {
            answer: "is it?",
            correct: false
            },
            {
            answer: "shall it?",
            correct: false
            },
            ]
            },
            {
            id: 86,
            quizQuestion: " There's a fly in your soup, ____",
            answers: [
            {
            answer: " isn't there?",
            correct: true
            },
            {
            answer: "it is not a fly it is meat.",
            correct: false
            },
            {
            answer: "and what?",
            correct: false
            },
            {
            answer: "it is swimming",
            correct: false
            },
            {
            answer: "это типа муха в супе?",
            correct: false
            },
            ]
            },
            {
            id: 87,
            quizQuestion: " We must be at school at 8 o'clock, ____",
            answers: [
            {
            answer: " mustn't we?",
            correct: true
            },
            {
            answer: "must we?",
            correct: false
            },
            {
            answer: "needn't we?",
            correct: false
            },
            {
            answer: "don't we?",
            correct: false
            },
            {
            answer: "aren't we?",
            correct: false
            },
            ]
            },
            {
            id: 88,
            quizQuestion: " There's a fly in your soup, ____",
            answers: [
            {
            answer: " isn't there?",
            correct: true
            },
            {
            answer: "is there?",
            correct: false
            },
            {
            answer: "is it?",
            correct: false
            },
            {
            answer: "isn't it?",
            correct: false
            },
            {
            answer: "doesn't it?",
            correct: false
            },
            ]
            },
            {
            id: 89,
            quizQuestion: " They used to live in New Orleans, ____",
            answers: [
            {
            answer: " didn't they?",
            correct: true
            },
            {
            answer: "do they?",
            correct: false
            },
            {
            answer: "were they?",
            correct: false
            },
            {
            answer: "are they?",
            correct: false
            },
            {
            answer: "aren't them?",
            correct: false
            },
            ]
            },
            {
            id: 90,
            quizQuestion: " They used to live in New Orleans, ____",
            answers: [
            {
            answer: " didn't they?",
            correct: true
            },
            {
            answer: "aren't they?",
            correct: false
            },
            {
            answer: "don't they?",
            correct: false
            },
            {
            answer: "did they?",
            correct: false
            },
            {
            answer: "did they?",
            correct: false
            },
            ]
            },
    ],
    questions111clothesb1: [
        {
            id: 1,
            quizQuestion: "Как на английском сказать: Надеть",
            answers: [
                {
                    answer: "put on и wear",
                    correct: true
                },
                {
                    answer: "take off",
                    correct: false
                },
                {
                    answer: "carry",
                    correct: false
                },
                {
                    answer: "wearing",
                    correct: false
                },
                {
                    answer: "on children",
                    correct: false
                },
            ]
        },
        {
            id: 2,
            quizQuestion: "Как на английском сказать: Одеть",
            answers: [
                {
                    answer: "put on и wear",
                    correct: true
                },
                {
                    answer: "put in",
                    correct: false
                },
                {
                    answer: "carry",
                    correct: false
                },
                {
                    answer: "wearing",
                    correct: false
                },
                {
                    answer: "clothes",
                    correct: false
                },
            ]
        },
        {
            id: 3,
            quizQuestion: "Как на английском сказать: Надеть одежду",
            answers: [
                {
                    answer: "put on clothes",
                    correct: true
                },
                {
                    answer: "wear in clothes",
                    correct: false
                },
                {
                    answer: "take off clothes",
                    correct: false
                },
                {
                    answer: "Nadya, get dressed now!",
                    correct: false
                },
                {
                    answer: "dress",
                    correct: false
                },
            ]
        },
        {
            id: 4,
            quizQuestion: "Как на английском сказать: Одеваться",
            answers: [
                {
                    answer: "get dressed",
                    correct: true
                },
                {
                    answer: "take off",
                    correct: false
                },
                {
                    answer: "undress",
                    correct: false
                },
                {
                    answer: "wear clothes",
                    correct: false
                },
                {
                    answer: "putting on",
                    correct: false
                },
            ]
        },
        {
            id: 5,
            quizQuestion: "Сними эту рубаху, она грязная!",
            answers: [
                {
                    answer: "Take off this shirt, it is dirty!",
                    correct: true
                },
                {
                    answer: "Take off this shirt, she is dirty!",
                    correct: false
                },
                {
                    answer: "Take off this shorts, they are dirty!",
                    correct: false
                },
                {
                    answer: "Take off this t-shirt, she is dirty!",
                    correct: false
                },
                {
                    answer: "Take off this t-shirt, it is dirty!",
                    correct: false
                },
            ]
        },
        {
            id: 6,
            quizQuestion: "Cними это сейчас же!",
            answers: [
                {
                    answer: "Take it off, right now!",
                    correct: true
                },
                {
                    answer: "Put it on, right now!",
                    correct: false
                },
                {
                    answer: "Undo this, right now!",
                    correct: false
                },
                {
                    answer: "Take off your pants, right now!",
                    correct: false
                },
                {
                    answer: "Be naked, right now!",
                    correct: false
                },
            ]
        },
        {
            id: 7,
            quizQuestion: "Расстегни мой бюстгалтер",
            answers: [
                {
                    answer: "Undo my bra",
                    correct: true
                },
                {
                    answer: "Redo my bra",
                    correct: false
                },
                {
                    answer: "Do my bra",
                    correct: false
                },
                {
                    answer: "Zip my bra",
                    correct: false
                },
                {
                    answer: "Undone my bra",
                    correct: false
                },
            ]
        },
        {
            id: 8,
            quizQuestion: "У вас молния расстегнута",
            answers: [
                {
                    answer: "Your zip is undone",
                    correct: true
                },
                {
                    answer: "Your buttons are undone",
                    correct: false
                },
                {
                    answer: "Your zipper is out",
                    correct: false
                },
                {
                    answer: "Your shop is open",
                    correct: false
                },
                {
                    answer: "I see your ding-dong",
                    correct: false
                },
            ]
        },
        {
            id: 9,
            quizQuestion: "Винсент! Застегни молнию!",
            answers: [
                {
                    answer: "Vincent, zip up your pants!",
                    correct: true
                },
                {
                    answer: "Vincent, I see your bottom!",
                    correct: false
                },
                {
                    answer: "Vincent, put on your pants!",
                    correct: false
                },
                {
                    answer: "Teacher Winston, do your buttons!",
                    correct: false
                },
                {
                    answer: "Vincent, close the storm",
                    correct: false
                },
            ]
        },
        {
            id: 10,
            quizQuestion: "На мне надет галстук",
            answers: [
                {
                    answer: "I'm wearing a tie",
                    correct: true
                },
                {
                    answer: "I'm carrying a tie",
                    correct: false
                },
                {
                    answer: "I'm putting on a tie",
                    correct: false
                },
                {
                    answer: "I put on a tie",
                    correct: false
                },
                {
                    answer: "I am dressing a tie",
                    correct: false
                },
            ]
        },
        {
            id: 11,
            quizQuestion: "Как на английском сказать: Голый",
            answers: [
                {
                    answer: "Naked",
                    correct: true
                },
                {
                    answer: "Sexy",
                    correct: false
                },
                {
                    answer: "Nature's clothes",
                    correct: false
                },
                {
                    answer: "Bald",
                    correct: false
                },
                {
                    answer: "take off clothes",
                    correct: false
                },
            ]
        },
        {
            id: 12,
            quizQuestion: "На мне нет макияжа",
            answers: [
                {
                    answer: "I'm not wearing make-up",
                    correct: true
                },
                {
                    answer: "I'm note make-up",
                    correct: false
                },
                {
                    answer: "I don't make-up",
                    correct: false
                },
                {
                    answer: "I doesn't make-up",
                    correct: false
                },
                {
                    answer: "I haven't make-up",
                    correct: false
                },
            ]
        },
        {
            id: 13,
            quizQuestion: "На нём нет макияжа",
            answers: [
                {
                    answer: "He isn't wearning make-up",
                    correct: true
                },
                {
                    answer: "He doesn't put on make up",
                    correct: false
                },
                {
                    answer: "He isn't make-up",
                    correct: false
                },
                {
                    answer: "He hasn't make up",
                    correct: false
                },
                {
                    answer: "He is not having make-up",
                    correct: false
                },
            ]
        },
        {
            id: 14,
            quizQuestion: "На ней нет помады",
            answers: [
                {
                    answer: "She is not wearing lipstick",
                    correct: true
                },
                {
                    answer: "She hasn't lipstick",
                    correct: false
                },
                {
                    answer: "She isn't lipstick",
                    correct: false
                },
                {
                    answer: "She doesn't lipstick",
                    correct: false
                },
                {
                    answer: "She is ugly",
                    correct: false
                },
            ]
        },
        {
            id: 15,
            quizQuestion: "Что на тебе надето?",
            answers: [
                {
                    answer: "What are you wearing?",
                    correct: true
                },
                {
                    answer: "What are you wear?",
                    correct: false
                },
                {
                    answer: "What do you wearing?",
                    correct: false
                },
                {
                    answer: "What do you put on?",
                    correct: false
                },
                {
                    answer: "What is on your head?",
                    correct: false
                },
            ]
        },
        {
            id: 16,
            quizQuestion: "Что ты обычно носишь дома?",
            answers: [
                {
                    answer: "What do you wear at home?",
                    correct: true
                },
                {
                    answer: "What are you wearing at home?",
                    correct: false
                },
                {
                    answer: "What do you dress at home?",
                    correct: false
                },
                {
                    answer: "What do you take off at home?",
                    correct: false
                },
                {
                    answer: "What do you carry at home?",
                    correct: false
                },
            ]
        },
        {
            id: 17,
            quizQuestion: "Тебе идёт! Тебе это подходит!",
            answers: [
                {
                    answer: "It looks good! It looks good on you!",
                    correct: true
                },
                {
                    answer: "It goes to you! It comes you!",
                    correct: false
                },
                {
                    answer: "It looks nothing.",
                    correct: false
                },
                {
                    answer: "For you it goes! Clothes go you!",
                    correct: false
                },
                {
                    answer: "You go! You it come!",
                    correct: false
                },
            ]
        },
        {
            id: 18,
            quizQuestion: "Как на английском сказать: Кроссовки",
            answers: [
                {
                    answer: "Sneakers",
                    correct: true
                },
                {
                    answer: "Snickers",
                    correct: false
                },
                {
                    answer: "Snikers",
                    correct: false
                },
                {
                    answer: "Crossoffkiss",
                    correct: false
                },
                {
                    answer: "Basketball shoes",
                    correct: false
                },
            ]
        },
        {
            id: 19,
            quizQuestion: "Как произносится слово CLOTHES ?",
            answers: [
                {
                    answer: "/клОуз/",
                    correct: true
                },
                {
                    answer: "/клОувз/",
                    correct: false
                },
                {
                    answer: "/клОувзс/",
                    correct: false
                },
                {
                    answer: "/клОус/",
                    correct: false
                },
                {
                    answer: "/оудежда/",
                    correct: false
                },
            ]
        },
    ],
    technologic: [
        {
            id: 1,
            quizQuestion: "They ___ my friends",
            answers: [
                {
                    answer: "are",
                    correct: true
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "is",
                    correct: false
                },
                {
                    answer: "-",
                    correct: false
                },
                {
                    answer: "be",
                    correct: false
                },
            ]
        },
        {
            id: 2,
            quizQuestion: "She ___ a good girl",
            answers: [
                {
                    answer: "is",
                    correct: true
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "are",
                    correct: false
                },
                {
                    answer: "-",
                    correct: false
                },
                {
                    answer: "have",
                    correct: false
                },
            ]
        },
        {
            id: 3,
            quizQuestion: "I ___ an agent",
            answers: [
                {
                    answer: "am not",
                    correct: true
                },
                {
                    answer: "is",
                    correct: false
                },
                {
                    answer: "are",
                    correct: false
                },
                {
                    answer: "-",
                    correct: false
                },
                {
                    answer: "amn't",
                    correct: false
                },
            ]
        },
        {
            id: 4,
            quizQuestion: "Sometimes our teachers ___ sad",
            answers: [
                {
                    answer: "are",
                    correct: true
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "is",
                    correct: false
                },
                {
                    answer: "-",
                    correct: false
                },
                {
                    answer: "be",
                    correct: false
                },
            ]
        },
        {
            id: 5,
            quizQuestion: "These questions ___ easy",
            answers: [
                {
                    answer: "are",
                    correct: true
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "is",
                    correct: false
                },
                {
                    answer: "-",
                    correct: false
                },
                {
                    answer: "have",
                    correct: false
                },
            ]
        },
        {
            id: 6,
            quizQuestion: "I ___ sleep every day",
            answers: [
                {
                    answer: "-",
                    correct: true
                },
                {
                    answer: "are",
                    correct: false
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "have",
                    correct: false
                },
                {
                    answer: "like",
                    correct: false
                },
            ]
        },
        {
            id: 7,
            quizQuestion: "What color ___ his eyes?",
            answers: [
                {
                    answer: "are",
                    correct: true
                },
                {
                    answer: "-",
                    correct: false
                },
                {
                    answer: "is",
                    correct: false
                },
                {
                    answer: "does",
                    correct: false
                },
                {
                    answer: "have",
                    correct: false
                },
            ]
        },
        {
            id: 8,
            quizQuestion: "My friend and I ___ super cool",
            answers: [
                {
                    answer: "are",
                    correct: true
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "is",
                    correct: false
                },
                {
                    answer: "has",
                    correct: false
                },
                {
                    answer: "have",
                    correct: false
                },
            ]
        },
        {
            id: 9,
            quizQuestion: "Where ___ my beer?",
            answers: [
                {
                    answer: "is",
                    correct: true
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "are",
                    correct: false
                },
                {
                    answer: "have",
                    correct: false
                },
                {
                    answer: "drink",
                    correct: false
                },
            ]
        },
        {
            id: 10,
            quizQuestion: "Who ___ our teacher?",
            answers: [
                {
                    answer: "is",
                    correct: true
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "are",
                    correct: false
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "have",
                    correct: false
                },
            ]
        },
        {
            id: 11,
            quizQuestion: "Who ___ our teachers?",
            answers: [
                {
                    answer: "are",
                    correct: true
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "is",
                    correct: false
                },
                {
                    answer: "was",
                    correct: false
                },
                {
                    answer: "you",
                    correct: false
                },
            ]
        },
        {
            id: 12,
            quizQuestion: "Why ___ they here?",
            answers: [
                {
                    answer: "are",
                    correct: true
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "is",
                    correct: false
                },
                {
                    answer: "be",
                    correct: false
                },
                {
                    answer: "do",
                    correct: false
                },
            ]
        },
        {
            id: 13,
            quizQuestion: "Who ___ here?",
            answers: [
                {
                    answer: "is",
                    correct: true
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "are",
                    correct: false
                },
                {
                    answer: "did",
                    correct: false
                },
                {
                    answer: "be",
                    correct: false
                },
            ]
        },
        {
            id: 14,
            quizQuestion: "Why ___ I here?",
            answers: [
                {
                    answer: "am",
                    correct: true
                },
                {
                    answer: "is",
                    correct: false
                },
                {
                    answer: "are",
                    correct: false
                },
                {
                    answer: "will",
                    correct: false
                },
                {
                    answer: "isn't",
                    correct: false
                },
            ]
        },
        {
            id: 15,
            quizQuestion: "When ___ our lesson?",
            answers: [
                {
                    answer: "is",
                    correct: true
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "are",
                    correct: false
                },
                {
                    answer: "do",
                    correct: false
                },
                {
                    answer: "will",
                    correct: false
                },
            ]
        },
        {
            id: 16,
            quizQuestion: "Everybody ___ ready.",
            answers: [
                {
                    answer: "is",
                    correct: true
                },
                {
                    answer: "be",
                    correct: false
                },
                {
                    answer: "are",
                    correct: false
                },
                {
                    answer: "not",
                    correct: false
                },
                {
                    answer: "will",
                    correct: false
                },
            ]
        },
        {
            id: 17,
            quizQuestion: "Everything ___ alright.",
            answers: [
                {
                    answer: "is",
                    correct: true
                },
                {
                    answer: "be",
                    correct: false
                },
                {
                    answer: "are",
                    correct: false
                },
                {
                    answer: "not",
                    correct: false
                },
                {
                    answer: "will",
                    correct: false
                },
            ]
        },
        {
            id: 18,
            quizQuestion: "Nobody ___ home.",
            answers: [
                {
                    answer: "is",
                    correct: true
                },
                {
                    answer: "be",
                    correct: false
                },
                {
                    answer: "are",
                    correct: false
                },
                {
                    answer: "not",
                    correct: false
                },
                {
                    answer: "will",
                    correct: false
                },
            ]
        },
        {
            id: 19,
            quizQuestion: "___ everything alright?",
            answers: [
                {
                    answer: "is",
                    correct: true
                },
                {
                    answer: "when",
                    correct: false
                },
                {
                    answer: "why",
                    correct: false
                },
                {
                    answer: "are",
                    correct: false
                },
                {
                    answer: "will",
                    correct: false
                },
            ]
        },
        {
            id: 20,
            quizQuestion: "Something ___ not okay…",
            answers: [
                {
                    answer: "is",
                    correct: true
                },
                {
                    answer: "isn't",
                    correct: false
                },
                {
                    answer: "are",
                    correct: false
                },
                {
                    answer: "-",
                    correct: false
                },
                {
                    answer: "will",
                    correct: false
                },
            ]
        },
        {
            id: 21,
            quizQuestion: "Who ___ you?",
            answers: [
                {
                    answer: "are",
                    correct: true
                },
                {
                    answer: "и так сойдёт!",
                    correct: false
                },
                {
                    answer: "is",
                    correct: false
                },
                {
                    answer: "do",
                    correct: false
                },
                {
                    answer: "-",
                    correct: false
                },
            ]
        },
        {
            id: 22,
            quizQuestion: "Nothing ___ wrong with my answers!",
            answers: [
                {
                    answer: "is",
                    correct: true
                },
                {
                    answer: "does",
                    correct: false
                },
                {
                    answer: "will",
                    correct: false
                },
                {
                    answer: "be",
                    correct: false
                },
                {
                    answer: "-",
                    correct: false
                },
            ]
        },
        {
            id: 23,
            quizQuestion: "Vincent ___ not a teacher, he's my friend.",
            answers: [
                {
                    answer: "is",
                    correct: true
                },
                {
                    answer: "does",
                    correct: false
                },
                {
                    answer: "do",
                    correct: false
                },
                {
                    answer: "be",
                    correct: false
                },
                {
                    answer: "-",
                    correct: false
                },
            ]
        },
        {
            id: 24,
            quizQuestion: "I ___ not lazy",
            answers: [
                {
                    answer: "am",
                    correct: true
                },
                {
                    answer: "do",
                    correct: false
                },
                {
                    answer: "be",
                    correct: false
                },
                {
                    answer: "never",
                    correct: false
                },
                {
                    answer: "always",
                    correct: false
                },
            ]
        },
        {
            id: 25,
            quizQuestion: "Today ___ a good day",
            answers: [
                {
                    answer: "is",
                    correct: true
                },
                {
                    answer: "will",
                    correct: false
                },
                {
                    answer: "be",
                    correct: false
                },
                {
                    answer: "not",
                    correct: false
                },
                {
                    answer: "yesterday",
                    correct: false
                },
            ]
        },
        {
            id: 26,
            quizQuestion: "I ___ always do my homework",
            answers: [
                {
                    answer: "-",
                    correct: true
                },
                {
                    answer: "do",
                    correct: false
                },
                {
                    answer: "like",
                    correct: false
                },
                {
                    answer: "hate",
                    correct: false
                },
                {
                    answer: "am",
                    correct: false
                },
            ]
        },
        {
            id: 27,
            quizQuestion: "I ___ have a pet.",
            answers: [
                {
                    answer: "don't",
                    correct: true
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "like",
                    correct: false
                },
                {
                    answer: "not",
                    correct: false
                },
                {
                    answer: "beautiful",
                    correct: false
                },
            ]
        },
        {
            id: 28,
            quizQuestion: "My eyes ___ blue",
            answers: [
                {
                    answer: "are",
                    correct: true
                },
                {
                    answer: "is",
                    correct: false
                },
                {
                    answer: "not",
                    correct: false
                },
                {
                    answer: "have",
                    correct: false
                },
                {
                    answer: "color",
                    correct: false
                },
            ]
        },
        {
            id: 29,
            quizQuestion: "I ___ like English.",
            answers: [
                {
                    answer: "-",
                    correct: true
                },
                {
                    answer: "dont",
                    correct: false
                },
                {
                    answer: "very",
                    correct: false
                },
                {
                    answer: "doesn't",
                    correct: false
                },
                {
                    answer: "am",
                    correct: false
                },
            ]
        },
        {
            id: 30,
            quizQuestion: "Your children ___ attractive",
            answers: [
                {
                    answer: "aren't",
                    correct: true
                },
                {
                    answer: "is",
                    correct: false
                },
                {
                    answer: "don't",
                    correct: false
                },
                {
                    answer: "doesn't",
                    correct: false
                },
                {
                    answer: "isn't",
                    correct: false
                },
            ]
        },
        {
            id: 31,
            quizQuestion: "You and I ___ friends.",
            answers: [
                {
                    answer: "are",
                    correct: true
                },
                {
                    answer: "am",
                    correct: false
                },
                {
                    answer: "we",
                    correct: false
                },
                {
                    answer: "-",
                    correct: false
                },
                {
                    answer: "good",
                    correct: false
                },
            ]
        },
        {
            id: 32,
            quizQuestion: "It is my teacher and ___ name is Vincent.",
            answers: [
                {
                    answer: "his",
                    correct: true
                },
                {
                    answer: "her",
                    correct: false
                },
                {
                    answer: "its",
                    correct: false
                },
                {
                    answer: "it is",
                    correct: false
                },
                {
                    answer: "our",
                    correct: false
                },
            ]
        },
        {
            id: 33,
            quizQuestion: "It is Vincent and ___ is my teacher.",
            answers: [
                {
                    answer: "he",
                    correct: true
                },
                {
                    answer: "she",
                    correct: false
                },
                {
                    answer: "his",
                    correct: false
                },
                {
                    answer: "you",
                    correct: false
                },
                {
                    answer: "I love",
                    correct: false
                },
            ]
        },
        {
            id: 34,
            quizQuestion: "What is it? ___ is love.",
            answers: [
                {
                    answer: "it",
                    correct: true
                },
                {
                    answer: "this is",
                    correct: false
                },
                {
                    answer: "its",
                    correct: false
                },
                {
                    answer: "Vincent",
                    correct: false
                },
                {
                    answer: "the",
                    correct: false
                },
            ]
        },
        {
            id: 35,
            quizQuestion: "Two plus two is ___ .",
            answers: [
                {
                    answer: "four",
                    correct: true
                },
                {
                    answer: "for",
                    correct: false
                },
                {
                    answer: "fore",
                    correct: false
                },
                {
                    answer: "foor",
                    correct: false
                },
                {
                    answer: "forth",
                    correct: false
                },
            ]
        },
        {
            id: 36,
            quizQuestion: "___ is English.",
            answers: [
                {
                    answer: "it",
                    correct: true
                },
                {
                    answer: "its",
                    correct: false
                },
                {
                    answer: "this is",
                    correct: false
                },
                {
                    answer: "the",
                    correct: false
                },
                {
                    answer: "I love",
                    correct: false
                },
            ]
        },
        {
            id: 37,
            quizQuestion: "How are you?",
            answers: [
                {
                    answer: "not bad.",
                    correct: true
                },
                {
                    answer: "It is good.",
                    correct: false
                },
                {
                    answer: "I okay.",
                    correct: false
                },
                {
                    answer: "Чего бл%н?",
                    correct: false
                },
                {
                    answer: "Normal.",
                    correct: false
                },
            ]
        },
        {
            id: 38,
            quizQuestion: "I love ___ .",
            answers: [
                {
                    answer: "English",
                    correct: true
                },
                {
                    answer: "Eanglish",
                    correct: false
                },
                {
                    answer: "Inglish",
                    correct: false
                },
                {
                    answer: "Englis",
                    correct: false
                },
                {
                    answer: "is English",
                    correct: false
                },
            ]
        },
        {
            id: 39,
            quizQuestion: "Как по-английски ' наш ' ?",
            answers: [
                {
                    answer: "our",
                    correct: true
                },
                {
                    answer: "your",
                    correct: false
                },
                {
                    answer: "us",
                    correct: false
                },
                {
                    answer: "nash",
                    correct: false
                },
                {
                    answer: "aur",
                    correct: false
                },
            ]
        },
        {
            id: 40,
            quizQuestion: "Как по-английски ' их ' ?",
            answers: [
                {
                    answer: "their",
                    correct: true
                },
                {
                    answer: "they",
                    correct: false
                },
                {
                    answer: "her",
                    correct: false
                },
                {
                    answer: "our",
                    correct: false
                },
                {
                    answer: "your",
                    correct: false
                },
            ]
        },
        {
            id: 41,
            quizQuestion: "Как по-английски ' твой ' ?",
            answers: [
                {
                    answer: "your",
                    correct: true
                },
                {
                    answer: "their",
                    correct: false
                },
                {
                    answer: "her",
                    correct: false
                },
                {
                    answer: "his",
                    correct: false
                },
                {
                    answer: "yo",
                    correct: false
                },
            ]
        },
        {
            id: 42,
            quizQuestion: "Как по-английски ' ваш ' ?",
            answers: [
                {
                    answer: "your",
                    correct: true
                },
                {
                    answer: "her",
                    correct: false
                },
                {
                    answer: "their",
                    correct: false
                },
                {
                    answer: "them",
                    correct: false
                },
                {
                    answer: "us",
                    correct: false
                },
            ]
        },
        {
            id: 43,
            quizQuestion: "Как по-английски ' её ' ?",
            answers: [
                {
                    answer: "her",
                    correct: true
                },
                {
                    answer: "his",
                    correct: false
                },
                {
                    answer: "your",
                    correct: false
                },
                {
                    answer: "she",
                    correct: false
                },
                {
                    answer: "yo",
                    correct: false
                },
            ]
        },
        {
            id: 44,
            quizQuestion: "Как по-английски ' его собака ' ?",
            answers: [
                {
                    answer: "his dog",
                    correct: true
                },
                {
                    answer: "her dog",
                    correct: false
                },
                {
                    answer: "him dog",
                    correct: false
                },
                {
                    answer: "he dog",
                    correct: false
                },
                {
                    answer: "its dog",
                    correct: false
                },
            ]
        },
        {
            id: 45,
            quizQuestion: "Как произносится буква ' G ' ?",
            answers: [
                {
                    answer: "/ ДЖИ /",
                    correct: true
                },
                {
                    answer: "/ ДЖЭЙ /",
                    correct: false
                },
                {
                    answer: "/ ГЭ /",
                    correct: false
                },
                {
                    answer: "/ ЖЭ /",
                    correct: false
                },
                {
                    answer: "понятия не имею",
                    correct: false
                },
            ]
        },
        {
            id: 46,
            quizQuestion: "Как произносится буква ' J ' ?",
            answers: [
                {
                    answer: "/ ДЖЭЙ /",
                    correct: true
                },
                {
                    answer: "/ ДЖИ /",
                    correct: false
                },
                {
                    answer: "/ й /",
                    correct: false
                },
                {
                    answer: "английский мягкий знак",
                    correct: false
                },
                {
                    answer: "/ ХЭ-3Э /",
                    correct: false
                },
            ]
        },
        {
            id: 47,
            quizQuestion: "Как произносится буква ' i ' ?",
            answers: [
                {
                    answer: "/ АЙ /",
                    correct: true
                },
                {
                    answer: "/ УАЙ /",
                    correct: false
                },
                {
                    answer: "/ И /",
                    correct: false
                },
                {
                    answer: "/ палка с точкой /",
                    correct: false
                },
                {
                    answer: "/ йе /",
                    correct: false
                },
            ]
        },
        {
            id: 48,
            quizQuestion: "Как произносится буква ' Y ' ?",
            answers: [
                {
                    answer: "/ УАЙ /",
                    correct: true
                },
                {
                    answer: "/ АЙ /",
                    correct: false
                },
                {
                    answer: "/ И /",
                    correct: false
                },
                {
                    answer: "/ у /",
                    correct: false
                },
                {
                    answer: "/ йу /",
                    correct: false
                },
            ]
        },
    ],
}
export default quizQuesstionsList