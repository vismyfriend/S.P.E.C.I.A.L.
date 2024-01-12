// добавляем константу с данными - с массивом // Здесь задания для теста или квиза (QuizQ) с выбором ответов
const quizQuesstionsList = {

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
    m004numbers: [
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
            answer: "/найнди/",
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
    ],
    m001: [
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
                {
                    answer: "you",
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
            id: 6,
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
            id: 7,
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
            id: 8,
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
            id: 9,
            quizQuestion: "Как на английском сказать: его",
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
                    answer: "him",
                    correct: false
                },
                {
                    answer: "she",
                    correct: false
                },
                {
                    answer: "he",
                    correct: false
                },
            ]
        },
        {
            id: 10,
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
            id: 11,
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
            id: 12,
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
            id: 13,
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
            id: 16,
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
            id: 17,
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
            id: 18,
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
            id: 19,
            quizQuestion: "Как на английском произносится указательное местоимение: 'Вот этот' ?",
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
            id: 20,
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
            id: 21,
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
            id: 22,
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
            id: 23,
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
            id: 24,
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
            id: 25,
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
            id: 26,
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
            id: 27,
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
    ],
    m002: [
        {
            id: 29,
            quizQuestion: "Каким местоимением можно заменить слово 'Машина'?",
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
            id: 30,
            quizQuestion: "Каким местоимением можно заменить слово 'Родители'?",
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
            id: 31,
            quizQuestion: "Каким местоимением можно заменить слова 'Черепашки Ниндзя'?",
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
            id: 32,
            quizQuestion: "Каким местоимением можно заменить слово 'Друзья'?",
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
            id: 33,
            quizQuestion: "Каким местоимением можно заменить слово 'Винсент'?",
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
            id: 34,
            quizQuestion: "Каким местоимением можно заменить слова 'ты и я'?",
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
            id: 35,
            quizQuestion: "Каким местоимением можно заменить слово 'обезьяны'?",
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
            id: 36,
            quizQuestion: "Каким местоимением можно заменить слова 'Умные люди'?",
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
            id: 38,
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
            id: 39,
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
            id: 40,
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
            id: 41,
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
            id: 42,
            quizQuestion: "Каким местоимением можно заменить слова 'Их имена'?",
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
            id: 43,
            quizQuestion: "Мои друзья - это тоже самое, что и",
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
            id: 45,
            quizQuestion: "Робот - это тоже самое, что и",
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
            id: 46,
            quizQuestion: "Ножка стола - это тоже самое что и ",
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
            id: 47,
            quizQuestion: "Куринный супчик это тоже самое что и ",
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
            id: 48,
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
            id: 49,
            quizQuestion: "Каким местоимением можно заменить слово 'iPhone'?",
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
            id: 50,
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
            id: 51,
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
    ],
    m003: [
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
    lettersa1: [
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
    numbersa2: [
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
    numbersspeak: [
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
    areAmIsQuizTwo: [
        {
            id: 1,
            quizq: "My friend and I ___ super cool",
            ans1: "are",
            ans2: "am",
            ans3: "is",
            ans4: "0",
            ans5: "0",
        },
        {
            id: 2,
            quizq: "Where ___ my beer?",
            ans1: "is",
            ans2: "am",
            ans3: "are",
            ans4: "0",
            ans5: "0",
        },
        {
            id: 3,
            quizq: "Who ___ our teacher?",
            ans1: "is",
            ans2: "am",
            ans3: "are",
            ans4: "0",
            ans5: "0",
        },
        {
            id: 4,
            quizq: "Who ___ our teachers?",
            ans1: "are",
            ans2: "am",
            ans3: "is",
            ans4: "0",
            ans5: "0",
        },
        {
            id: 5,
            quizq: "Why ___ they here?",
            ans1: "are",
            ans2: "am",
            ans3: "is",
            ans4: "0",
            ans5: "0",
        },
        {
            id: 6,
            quizq: "Who ___ here?",
            ans1: "is",
            ans2: "am",
            ans3: "are",
            ans4: "0",
            ans5: "0",
        },
        {
            id: 7,
            quizq: "Why ___ I here?",
            ans1: "am",
            ans2: "is",
            ans3: "are",
            ans4: "0",
            ans5: "0",
        },
    ],
    trickyTest1: [
        {
            id: 1,
            quizQuestion: "___ there by six o'clock.",
            answers: [
                {
                    answer: "be",
                    correct: true
                },
                {
                    answer: "do",
                    correct: false
                },
                {
                    answer: "have",
                    correct: false
                },
                {
                    answer: "will",
                    correct: false
                },
                {
                    answer: "was",
                    correct: false
                },
            ]
        },
        {
            id: 2,
            quizQuestion: "What ___ you do? – I'm an engineer. And you?",
            answers: [
                {
                    answer: "do",
                    correct: true
                },
                {
                    answer: "have",
                    correct: false
                },
                {
                    answer: "will",
                    correct: false
                },
                {
                    answer: "was",
                    correct: false
                },
                {
                    answer: "are",
                    correct: false
                },
            ]
        },
        {
            id: 3,
            quizQuestion: "I ___ probably stay home tonight.",
            answers: [
                {
                    answer: "will",
                    correct: true
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
                    answer: "have",
                    correct: false
                },
                {
                    answer: "was",
                    correct: false
                },
            ]
        },
        {
            id: 4,
            quizQuestion: "I didn't go to the meeting because I___ a headache.",
            answers: [
                {
                    answer: "had",
                    correct: true
                },
                {
                    answer: "did",
                    correct: false
                },
                {
                    answer: "was",
                    correct: false
                },
                {
                    answer: "would",
                    correct: false
                },
                {
                    answer: "will",
                    correct: false
                },
            ]
        },
        {
            id: 5,
            quizQuestion: "What ___ they doing?",
            answers: [
                {
                    answer: "are",
                    correct: true
                },
                {
                    answer: "do",
                    correct: false
                },
                {
                    answer: "have",
                    correct: false
                },
                {
                    answer: "will",
                    correct: false
                },
                {
                    answer: "was",
                    correct: false
                },
            ]
        },
        {
            id: 6,
            quizQuestion: "___ you help him to carry it, please? It is heavy.",
            answers: [
                {
                    answer: "will",
                    correct: true
                },
                {
                    answer: "have",
                    correct: false
                },
                {
                    answer: "do",
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
            ]
        },
        {
            id: 7,
            quizQuestion: "He ___ leaving next week.",
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
                    answer: "has",
                    correct: false
                },
                {
                    answer: "will",
                    correct: false
                },
                {
                    answer: "were",
                    correct: false
                },
            ]
        },
        {
            id: 8,
            quizQuestion: "She can't talk with you now because she ___ have time. She has to go to work now.",
            answers: [
                {
                    answer: "doesn't",
                    correct: true
                },
                {
                    answer: "hasn't",
                    correct: false
                },
                {
                    answer: "haven't",
                    correct: false
                },
                {
                    answer: "isn't",
                    correct: false
                },
                {
                    answer: "won't",
                    correct: false
                },
            ]
        },
        {
            id: 9,
            quizQuestion: "Can you call me a little later? We ___ dinner now.",
            answers: [
                {
                    answer: "are having",
                    correct: true
                },
                {
                    answer: "were doing",
                    correct: false
                },
                {
                    answer: "are being",
                    correct: false
                },
                {
                    answer: "will be",
                    correct: false
                },
                {
                    answer: "having",
                    correct: false
                },
            ]
        },
        {
            id: 10,
            quizQuestion: "I ___  ___ 212 letters to Santa!",
            answers: [
                {
                    answer: "have written",
                    correct: true
                },
                {
                    answer: "have writing",
                    correct: false
                },
                {
                    answer: "am write",
                    correct: false
                },
                {
                    answer: "will be",
                    correct: false
                },
                {
                    answer: "wrote a",
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
   
    anika: [
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
    xyz: [
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
    areAmIsQuizTwo: [
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