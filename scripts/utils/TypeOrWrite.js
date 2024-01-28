// 0001 добавляем константу с данными - с массивом // Здесь слова для игры Find a pair
const allWordsForGameTypeOrWrite = {
    devmode1: [
        {
            id:1,
            eng:"the first",
            hint: "/фест/",
            ru:"первый"
            },
            {
            id:2,
            eng:"the second",
            hint: "/cЭконд/",
            ru:"второй"
            },
            {
            id:3,
            eng:"the third",
            hint: "/THёрд/",
            ru:"третий"
            },
           
    ],
    m002: [
        {
            id:1,
            eng:"I",
            ru:"Как на английском языке написать :  я"
            },
            {
            id:2,
            eng:"you",
            ru:"Как на английском языке написать :  ты или вы"
            },
            {
            id:3,
            eng:"we",
            ru:"Как на английском языке написать :  мы"
            },
            {
            id:4,
            eng:"they",
            ru:"Как на английском языке написать :  они"
            },
            {
            id:5,
            eng:"he",
            ru:"Как на английском языке написать :  он"
            },
            {
            id:6,
            eng:"she",
            ru:"Как на английском языке написать :  она"
            },
            {
            id:7,
            eng:"it",
            ru:"Как на английском языке написать :  это"
            },
            {
            id:8,
            eng:"my",
            ru:"Как на английском языке написать :  мой, моя, мои, моё"
            },
            {
            id:9,
            eng:"his",
            ru:"Как на английском языке написать :  его"
            },
            {
            id:10,
            eng:"her",
            ru:"Как на английском языке написать :  её"
            },
            {
            id:11,
            eng:"our",
            ru:"Как на английском языке написать :  наш, наша, наше, наши"
            },
            {
            id:12,
            eng:"your",
            ru:"Как на английском языке написать :  твой, твоё, твоя, ваш, ваше, ваша, ваши, твои"
            },
    ],
    m003: [
        {
            id:1,
            eng:"A",
            ru:"Какая английская буква произносится :  / эй /"
            },
            {
            id:2,
            eng:"B",
            ru:"Какая английская буква произносится :  / би /"
            },
            {
            id:3,
            eng:"C",
            ru:"Какая английская буква произносится :  / си /"
            },
            {
            id:4,
            eng:"D",
            ru:"Какая английская буква произносится :  / ди /"
            },
            {
            id:5,
            eng:"E",
            ru:"Какая английская буква произносится :  / и /"
            },
            {
            id:6,
            eng:"F",
            ru:"Какая английская буква произносится :  / эф /"
            },
            {
            id:7,
            eng:"G",
            ru:"Какая английская буква произносится :  / джи /"
            },
            {
            id:8,
            eng:"H",
            ru:"Какая английская буква произносится :  / эйч /"
            },
            {
            id:9,
            eng:"I",
            ru:"Какая английская буква произносится :  / ай /"
            },
            {
            id:10,
            eng:"J",
            ru:"Какая английская буква произносится :  / джэй /"
            },
            {
            id:11,
            eng:"K",
            ru:"Какая английская буква произносится :  / кей /"
            },
            {
            id:12,
            eng:"L",
            ru:"Какая английская буква произносится :  / эл /"
            },
            {
            id:13,
            eng:"M",
            ru:"Какая английская буква произносится :  / эм /"
            },
            {
            id:14,
            eng:"N",
            ru:"Какая английская буква произносится :  / эн /"
            },
            {
            id:15,
            eng:"O",
            ru:"Какая английская буква произносится :  / оу /"
            },
            {
            id:16,
            eng:"P",
            ru:"Какая английская буква произносится :  / пи /"
            },
            {
            id:17,
            eng:"Q",
            ru:"Какая английская буква произносится :  / кью /"
            },
            {
            id:18,
            eng:"R",
            ru:"Какая английская буква произносится :  / а /"
            },
            {
            id:19,
            eng:"S",
            ru:"Какая английская буква произносится :  / эс /"
            },
            {
            id:20,
            eng:"T",
            ru:"Какая английская буква произносится :  / ти /"
            },
            {
            id:21,
            eng:"U",
            ru:"Какая английская буква произносится :  / ю /"
            },
            {
            id:22,
            eng:"V",
            ru:"Какая английская буква произносится :  / ви /"
            },
            {
            id:23,
            eng:"W",
            ru:"Какая английская буква произносится :  / дабл ю /"
            },
            {
            id:24,
            eng:"X",
            ru:"Какая английская буква произносится :  / экс /"
            },
            {
            id:25,
            eng:"Y",
            ru:"Какая английская буква произносится :  / уай /"
            },
            {
            id:26,
            eng:"Z",
            ru:"Какая английская буква произносится :  / зи (зэд) /"
            },


    ],
    lettersa1: [
        {
            id:1,
            eng:"A",
            ru:"Как на английском языке написать :  / эй /"
            },
            {
            id:2,
            eng:"B",
            ru:"Как на английском языке написать :  / би /"
            },
            {
            id:3,
            eng:"C",
            ru:"Как на английском языке написать :  / си /"
            },
            {
            id:4,
            eng:"D",
            ru:"Как на английском языке написать :  / ди /"
            },
            {
            id:5,
            eng:"E",
            ru:"Как на английском языке написать :  / и /"
            },
            {
            id:6,
            eng:"F",
            ru:"Как на английском языке написать :  / эф /"
            },
            {
            id:7,
            eng:"G",
            ru:"Как на английском языке написать :  / джи /"
            },
            {
            id:8,
            eng:"H",
            ru:"Как на английском языке написать :  / эйч /"
            },
            {
            id:9,
            eng:"I",
            ru:"Как на английском языке написать :  / ай /"
            },
            {
            id:10,
            eng:"J",
            ru:"Как на английском языке написать :  / джэй /"
            },
            {
            id:11,
            eng:"K",
            ru:"Как на английском языке написать :  / кей /"
            },
            {
            id:12,
            eng:"L",
            ru:"Как на английском языке написать :  / эл /"
            },
            {
            id:13,
            eng:"M",
            ru:"Как на английском языке написать :  / эм /"
            },
            {
            id:14,
            eng:"N",
            ru:"Как на английском языке написать :  / эн /"
            },
            {
            id:15,
            eng:"O",
            ru:"Как на английском языке написать :  / оу /"
            },
            {
            id:16,
            eng:"P",
            ru:"Как на английском языке написать :  / пи /"
            },
            {
            id:17,
            eng:"Q",
            ru:"Как на английском языке написать :  / кью /"
            },
            {
            id:18,
            eng:"R",
            ru:"Как на английском языке написать :  / а /"
            },
            {
            id:19,
            eng:"S",
            ru:"Как на английском языке написать :  / эс /"
            },
            {
            id:20,
            eng:"T",
            ru:"Как на английском языке написать :  / ти /"
            },
            {
            id:21,
            eng:"U",
            ru:"Как на английском языке написать :  / ю /"
            },
            {
            id:22,
            eng:"V",
            ru:"Как на английском языке написать :  / ви /"
            },
            {
            id:23,
            eng:"W",
            ru:"Как на английском языке написать :  / дабл ю /"
            },
            {
            id:24,
            eng:"X",
            ru:"Как на английском языке написать :  / экс /"
            },
            {
            id:25,
            eng:"Y",
            ru:"Как на английском языке написать :  / уай /"
            },
            {
            id:26,
            eng:"Z",
            ru:"Как на английском языке написать :  / зи (зэд) /"
            },


    ],
    lettersc2: [
        {
            id:62,
            eng:"VINCENT",
            ru:"Напиши английские буквы и отгадай слово: ` Ви Ай Эн Си И Эн Ти `"
            },
            {
            id:63,
            eng:"NIKE",
            ru:"Напиши английские буквы и отгадай слово: ` Эн Ай Кей И `"
            },
            {
            id:64,
            eng:"PASSPORT",
            ru:"Напиши английские буквы и отгадай слово: ` Пи Эй Эс Эс Пи Оу А Ти `"
            },
            {
            id:65,
            eng:"RUSSIA",
            ru:"Напиши английские буквы и отгадай слово: ` А Ю Эс Эс Ай Эй `"
            },
            {
            id:66,
            eng:"FRANCE ",
            ru:"Напиши английские буквы и отгадай слово: ` Эф А Эй Эн Си И `"
            },
            {
            id:67,
            eng:"ENGLAND",
            ru:"Напиши английские буквы и отгадай слово: ` И Эн Джи Эл Эй Эн Ди `"
            },
            {
            id:68,
            eng:"MERCEDES",
            ru:"Напиши английские буквы и отгадай слово: ` Эм И А Си И Ди И Эс - Би И Эн Зи `"
            },
            {
            id:69,
            eng:"AUDI",
            ru:"Напиши английские буквы и отгадай слово: ` Эй Ю Ди Ай `"
            },
            {
            id:70,
            eng:"VOLVO",
            ru:"Напиши английские буквы и отгадай слово: ` Ви Оу Эл Ви Оу `"
            },
            {
            id:71,
            eng:"VOLKSWAGEN",
            ru:"Напиши английские буквы и отгадай слово: ` Ви Оу Эл Кей Эс Дабл Ю Эй Джи И Эн `"
            },
            {
            id:72,
            eng:"BMW",
            ru:"Напиши английские буквы и отгадай слово: ` Би Эм Дабл Ю `"
            },
            {
            id:73,
            eng:"KANGAROO",
            ru:"Напиши английские буквы и отгадай слово: ` Кей Эй Эн Джи Эй А Оу Оу `"
            },
            {
            id:74,
            eng:"JOKER",
            ru:"Напиши английские буквы и отгадай слово: ` Джей Оу Кей И А `"
            },
            {
            id:75,
            eng:"MINECRAFT",
            ru:"Напиши английские буквы и отгадай слово: ` Эм Ай Эн И Си А Эй Эф Ти `"
            },
            {
                id:76,
                eng:"A",
                ru:"Как на английском языке написать :  / эй /"
                },
                {
                id:77,
                eng:"B",
                ru:"Как на английском языке написать :  / би /"
                },
                {
                id:78,
                eng:"C",
                ru:"Как на английском языке написать :  / си /"
                },
                {
                id:79,
                eng:"D",
                ru:"Как на английском языке написать :  / ди /"
                },
                {
                id:80,
                eng:"E",
                ru:"Как на английском языке написать :  / и /"
                },
                {
                id:81,
                eng:"F",
                ru:"Как на английском языке написать :  / эф /"
                },
                {
                id:82,
                eng:"G",
                ru:"Как на английском языке написать :  / джи /"
                },
                {
                id:83,
                eng:"H",
                ru:"Как на английском языке написать :  / эйч /"
                },
                {
                id:84,
                eng:"I",
                ru:"Как на английском языке написать :  / ай /"
                },
                {
                id:85,
                eng:"J",
                ru:"Как на английском языке написать :  / джэй /"
                },
                {
                id:86,
                eng:"K",
                ru:"Как на английском языке написать :  / кей /"
                },
                {
                id:87,
                eng:"L",
                ru:"Как на английском языке написать :  / эл /"
                },
                {
                id:88,
                eng:"M",
                ru:"Как на английском языке написать :  / эм /"
                },
                {
                id:89,
                eng:"N",
                ru:"Как на английском языке написать :  / эн /"
                },
                {
                id:90,
                eng:"O",
                ru:"Как на английском языке написать :  / оу /"
                },
                {
                id:91,
                eng:"P",
                ru:"Как на английском языке написать :  / пи /"
                },
                {
                id:92,
                eng:"Q",
                ru:"Как на английском языке написать :  / кью /"
                },
                {
                id:93,
                eng:"R",
                ru:"Как на английском языке написать :  / а /"
                },
                {
                id:94,
                eng:"S",
                ru:"Как на английском языке написать :  / эс /"
                },
                {
                id:95,
                eng:"T",
                ru:"Как на английском языке написать :  / ти /"
                },
                {
                id:96,
                eng:"U",
                ru:"Как на английском языке написать :  / ю /"
                },
                {
                id:97,
                eng:"V",
                ru:"Как на английском языке написать :  / ви /"
                },
                {
                id:98,
                eng:"W",
                ru:"Как на английском языке написать :  / дабл ю /"
                },
                {
                id:99,
                eng:"X",
                ru:"Как на английском языке написать :  / экс /"
                },
                {
                id:100,
                eng:"Y",
                ru:"Как на английском языке написать :  / уай /"
                },
                {
                id:101,
                eng:"Z",
                ru:"Как на английском языке написать :  / зи (зэд) /"
                },
    ],
    tobe: [
        {
            id:1,
            eng:"am",
            ru:"Впиши либо ARE либо AM либо IS? I___stupid."
            },
            {
            id:2,
            eng:"is",
            ru:"Впиши либо ARE либо AM либо IS? Vincent ___ a good teacher."
            },
            {
            id:3,
            eng:"are",
            ru:"Впиши либо ARE либо AM либо IS? He and I ___ friends."
            },
            {
            id:4,
            eng:"are",
            ru:"Впиши либо ARE либо AM либо IS? Tom and Jerry ___ not friends."
            },
            {
            id:5,
            eng:"are",
            ru:"Впиши либо ARE либо AM либо IS? We ___ not stupid."
            },
            {
            id:6,
            eng:"are",
            ru:"Впиши либо ARE либо AM либо IS? My bro and my sis ___ cool."
            },
            {
            id:7,
            eng:"are",
            ru:"Впиши либо ARE либо AM либо IS? Where ___ you?"
            },
            {
            id:8,
            eng:"is",
            ru:"Впиши либо ARE либо AM либо IS? Where ___ he from?"
            },
            {
            id:9,
            eng:"am",
            ru:"Впиши либо ARE либо AM либо IS? I'm sorry, I ___ late"
            },
            {
            id:10,
            eng:"is",
            ru:"Впиши либо ARE либо AM либо IS? Who ___ it?"
            },
            {
            id:11,
            eng:"is",
            ru:"Впиши либо ARE либо AM либо IS? Who ___ your teacher?"
            },
            {
            id:12,
            eng:"are",
            ru:"Впиши либо ARE либо AM либо IS? What ___ your names?"
            },
            {
            id:13,
            eng:"is",
            ru:"Впиши либо ARE либо AM либо IS? What ___ her name?"
            },
            {
            id:14,
            eng:"am",
            ru:"Впиши либо ARE либо AM либо IS? I___sexy and I know it."
            },
    ],
    doesdo: [
        {
            id:1,
            eng:"do",
            ru:"ARE, AM, IS, DO, DOES ? I___not drink vodka"
            },
            {
            id:2,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? He___not drink black coffee"
            },
            {
            id:3,
            eng:"do",
            ru:"ARE, AM, IS, DO, DOES ? My friends___not study English"
            },
            {
            id:4,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? My best friend ___n't smoke, but my friend drinks a lot!"
            },
            {
            id:5,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? Vincent___n't kiss me after lessons"
            },
            {
            id:6,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? My cat___n't sleep 8 hours. It sleeps 15 hours"
            },
            {
            id:7,
            eng:"do",
            ru:"ARE, AM, IS, DO, DOES ? Vincent always asks me: ___ you understand me?"
            },
            {
            id:8,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? ___your teacher like you? I think he likes you very much."
            },
            {
            id:9,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? When Vincent is hungry he eats burgers. But he___not eat fries (карт.фри)"
            },
            {
            id:10,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? ___anybody in your family play musical instruments?"
            },
            {
            id:11,
            eng:"do",
            ru:"ARE, AM, IS, DO, DOES ? When I was a child I liked games. But now I___not play often."
            },
            {
            id:12,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? Why___he help you?"
            },
            {
            id:13,
            eng:"am",
            ru:"ARE, AM, IS, DO, DOES ? _____I your friend?"
            },
            {
            id:14,
            eng:"do",
            ru:"ARE, AM, IS, DO, DOES ? _________ I study English?"
            },
            {
            id:15,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? _________ Vincent teach you?"
            },
            {
            id:16,
            eng:"is",
            ru:"ARE, AM, IS, DO, DOES ? _________ Vincent your teacher?"
            },
            {
            id:17,
            eng:"are",
            ru:"ARE, AM, IS, DO, DOES ? Where_____you?"
            },
            {
            id:18,
            eng:"am",
            ru:"ARE, AM, IS, DO, DOES ? I___a very smart person because I always do homework."
            },
            {
            id:19,
            eng:"do",
            ru:"ARE, AM, IS, DO, DOES ? Where_____you live?"
            },
            {
            id:20,
            eng:"does",
            ru:"ARE, AM, IS, DO, DOES ? Where_____ your girlfriend work?"
            },
    ],
 
 

}
export default allWordsForGameTypeOrWrite
