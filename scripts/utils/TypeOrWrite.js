// чтобы удалить пустые строки нужно ввести в CTRL+F или CTRL R  ^(\s)*$\n 
// 0001 добавляем константу с данными - с массивом // Здесь слова для игры Find a pair
const allWordsForGameTypeOrWrite = {
    devmode1: [
        {
            id:1,
            eng:"1",
            hint: "цифра 1",
            ru:"первый"
            },
            {
            id:2,
            eng:"2",
            hint: "два",
            ru:"второй"
            },
            {
            id:3,
            eng:". is good",
            ru:"третий"
            },
    ],
    m002: [
        {
            id:1,
            eng:"I",
            ru:"я",
            hint:" / ай /"
            },
            {
            id:2,
            eng:"you",
            ru:"ты или вы",
            hint:" / ю /"
            },
            {
            id:3,
            eng:"we",
            ru:"мы",
            hint:" / уи /"
            },
            {
            id:4,
            eng:"they",
            ru:"они",
            hint:" / дэй /"
            },
            {
            id:5,
            eng:"he",
            ru:"он",
            hint:" / хи /"
            },
            {
            id:6,
            eng:"she",
            ru:"она",
            hint:" / щи /"
            },
            {
            id:7,
            eng:"it",
            ru:"это",
            hint:" / ит /"
            },
            {
            id:8,
            eng:"my",
            ru:"мой, моя, мои, моё",
            hint:" / май /"
            },
            {
            id:9,
            eng:"his",
            ru:"его",
            hint:" / хиз /"
            },
            {
            id:10,
            eng:"her",
            ru:"её",
            hint:" / хё /"
            },
            {
            id:11,
            eng:"our",
            ru:"наш, наша, наше, наши",
            hint:" / аУа /"
            },
            {
            id:12,
            eng:"your",
            ru:"твой, твоё, твоя, ваш, ваше, ваша, ваши, твои",
            hint:" / ё /"
            },
    ],
    m004: [
        {
            id:101,
            eng:"A",
            ru:" букву / эй / ",
            hint:" / первая буква алфавита /"
            },
            {
            id:102,
            eng:"B",
            ru:" букву / би / ",
            hint:""
            },
            {
            id:103,
            eng:"C",
            ru:" букву / си / ",
            hint:" / треться буква алфавита /"
            },
            {
            id:104,
            eng:"D",
            ru:" букву / ди / ",
            hint:""
            },
            {
            id:105,
            eng:"E",
            ru:" букву / и / ",
            hint:" / пятая буква алфавита /"
            },
            {
            id:106,
            eng:"F",
            ru:" букву / эф / ",
            hint:""
            },
            {
            id:107,
            eng:"G",
            ru:" букву / джи / ",
            hint:" / седьмая буква алфавита /"
            },
            {
            id:108,
            eng:"H",
            ru:" букву / эйч / ",
            hint:""
            },
            {
            id:109,
            eng:"I",
            ru:" букву / ай / ",
            hint:" / палка с точкой /"
            },
            {
            id:110,
            eng:"J",
            ru:" букву / джэй / ",
            hint:" / на крюк похожа /"
            },
            {
            id:111,
            eng:"K",
            ru:" букву / кей / ",
            hint:""
            },
            {
            id:112,
            eng:"L",
            ru:" букву / эл / ",
            hint:""
            },
            {
            id:113,
            eng:"M",
            ru:" букву / эм / ",
            hint:""
            },
            {
            id:114,
            eng:"N",
            ru:" букву / эн / ",
            hint:""
            },
            {
            id:115,
            eng:"O",
            ru:" букву / оу / ",
            hint:""
            },
            {
            id:116,
            eng:"P",
            ru:" букву / пи / ",
            hint:""
            },
            {
            id:117,
            eng:"Q",
            ru:" букву / кью / ",
            hint:" / коэффициент Ай Кью /"
            },
            {
            id:118,
            eng:"R",
            ru:" букву / а / ",
            hint:" / рок эн ролл /"
            },
            {
            id:119,
            eng:"S",
            ru:" букву / эс / ",
            hint:" / как змея /"
            },
            {
            id:120,
            eng:"T",
            ru:" букву / ти / ",
            hint:""
            },
            {
            id:121,
            eng:"U",
            ru:" букву / ю / ",
            hint:" / на подкову похожа /"
            },
            {
            id:122,
            eng:"V",
            ru:" букву / ви / ",
            hint:""
            },
            {
            id:123,
            eng:"W",
            ru:" букву / дабл ю / ",
            hint:""
            },
            {
            id:124,
            eng:"X",
            ru:" букву / экс / ",
            hint:""
            },
            {
            id:125,
            eng:"Y",
            ru:" букву / уай / ",
            hint:" / не игрик и не У /"
            },
            {
            id:126,
            eng:"Z",
            ru:" букву / ЗИ или ZЭД / ",
            hint:""
            },
    ],
    m04: [
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
            ru:"Какая английская буква произносится :  / ЗИ и ZЭД /"
            },
    ],
    alphabet: [
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
    future01a1: [
        {
            id:1,
            eng:"on foot",
            ru:"пешком",
            hint:"/ он фут /"
            },
            {
            id:2,
            eng:"by taxi",
            ru:"на такси",
            hint:"/ бай тЭкси /"
            },
            {
            id:3,
            eng:"by train",
            ru:"на поезде",
            hint:"/ бай трэйн /"
            },
            {
            id:4,
            eng:"by bus",
            ru:"на автобусе",
            hint:"/ бай бас /"
            },
            {
            id:5,
            eng:"soon",
            ru:"скоро",
            hint:"/ сун /"
            },
            {
            id:6,
            eng:"later",
            ru:"позже, потом",
            hint:"/ лЭйтэ /"
            },
            {
            id:7,
            eng:"in two days",
            ru:"через два дня",
            hint:"/ ин ту дэйz /"
            },
            {
            id:8,
            eng:"next week",
            ru:"на следующей неделе",
            hint:"/ нэкст вик /"
            },
            {
            id:9,
            eng:"in a month",
            ru:"через месяц",
            hint:"/ ин э мАнтh /"
            },
            {
            id:10,
            eng:"next life",
            ru:" следующей жизни",
            hint:"/ нэкст лАйф /"
            },
            {
            id:11,
            eng:"in an hour",
            ru:"через час",
            hint:"/ ин эн Ауэ /"
            },
            {
            id:12,
            eng:"the day after tomorrow",
            ru:"послезавтра",
            hint:""
            },
            {
            id:13,
            eng:"after dinner",
            ru:"после ужина",
            hint:""
            },
            {
            id:14,
            eng:"on the first",
            ru:"первого числа",
            hint:"/ он дэ фёст /"
            },
            {
            id:15,
            eng:"on the second",
            ru:"второго числа",
            hint:"/ он дэ сэконд /"
            },
            {
            id:16,
            eng:"on the third",
            ru:"третьего числа",
            hint:"/ он дэ thёрд /"
            },
            {
            id:17,
            eng:"on the fifth",
            ru:"пятого числа",
            hint:"/ он дэ фИфтh /"
            },
            {
            id:18,
            eng:"in February",
            ru:"в феврале",
            hint:"/ ин фЭбрари /"
            },
            {
            id:19,
            eng:"in winter",
            ru:"зимой",
            hint:"/ ин уинтэ /"
            },
            {
            id:20,
            eng:"on the weekends",
            ru:"на выходных",
            hint:""
            },
            {
            id:21,
            eng:"at night",
            ru:"ночью",
            hint:"/ эт найт /"
            },
            {
            id:22,
            eng:"tonight",
            ru:"сегодня вечером",
            hint:"/ тунайт /"
            },
            {
            id:23,
            eng:"never",
            ru:"никогда",
            hint:"/ нЭвэ /"
            },
            {
            id:24,
            eng:"in a week",
            ru:"через неделю",
            hint:""
            },
            {
            id:25,
            eng:"in two hours",
            ru:"через два часа",
            hint:""
            },
            {
            id:26,
            eng:"in an hour",
            ru:"через час",
            hint:""
            },
            {
            id:27,
            eng:"in spring",
            ru:"весной",
            hint:"/ сприН /"
            },
            {
            id:28,
            eng:"today at midnight",
            ru:"сегодня в полночь",
            hint:"/ эт мИднайт /"
            },
            {
            id:29,
            eng:"after this lesson ",
            ru:"после этого занятия",
            hint:""
            },
            {
            id:30,
            eng:"later",
            ru:"позже, позднее",
            hint:"/ лэЙтэ /"
            },
            {
            id:31,
            eng:"tomorrow",
            ru:"завтра",
            hint:""
            },
            {
            id:32,
            eng:"on Monday",
            ru:"в понедельник",
            hint:""
            },
            {
            id:33,
            eng:"on Tuesday",
            ru:"во вторник",
            hint:""
            },
            {
            id:34,
            eng:"on Wednesday",
            ru:"в среду",
            hint:"/ уЭнсдэй /"
            },
            {
            id:35,
            eng:"on Thursday",
            ru:"в четверг",
            hint:""
            },
            {
            id:36,
            eng:"on Friday",
            ru:"в пятницу",
            hint:"/ фрайдэй /"
            },
            {
            id:37,
            eng:"on Saturday",
            ru:"в субботу",
            hint:"/ сАтэдэй /"
            },
            {
            id:38,
            eng:"on Sunday",
            ru:"в воскресенье",
            hint:"/ сАндэй /"
            },
            {
            id:39,
            eng:"next month",
            ru:"в следующем месяце",
            hint:"/ манth /"
            },
            {
            id:40,
            eng:"next life",
            ru:"в следующей жизни",
            hint:"/ лайф /"
            },
            {
                id:41,
                eng:"on the first of April",
                ru:"первого апреля",
                hint:"/ эйприл /"
                },
                {
                id:42,
                eng:"on the second of January",
                ru:"второго января",
                hint:"/ джэнэри /"
                },
                {
                id:43,
                eng:"on the third of June",
                ru:"третьего июня",
                hint:"/ джун /"
                },
                {
                id:44,
                eng:"on the fourth of July",
                ru:"четвертого июля",
                hint:"/ джулай /"
                },
                {
                id:45,
                eng:"on the fifth of August",
                ru:"пятого августа",
                hint:"/ ОгЭст /"
                },
                {
                id:46,
                eng:"on the eighth of March",
                ru:"восьмого марта",
                hint:"/ мач /"
                },
            {
            id:47,
            eng:"in a couple of hours",
            ru:"через пару часов",
            hint:"/ капл ов Аурз /"
            },
            {
            id:48,
            eng:"in thirty minutes",
            ru:"через тридцать минут",
            hint:""
            },
            {
            id:49,
            eng:"in three years",
            ru:"через три года",
            hint:""
            },
            {
            id:50,
            eng:"in a couple of days",
            ru:"через пару дней",
            hint:"/ капл ов дЭйz /"
            },
            {
            id:51,
            eng:"in March",
            ru:"в марте",
            hint:""
            },
            {
            id:52,
            eng:"later tonight",
            ru:"попозже сегодня вечером",
            hint:"/ лЭйтэ тунайт /"
            },
            {
            id:53,
            eng:"in the evening",
            ru:"вечером",
            hint:"/ Ивнин /"
            },
            {
            id:54,
            eng:"in three days",
            ru:"через три дня",
            hint:""
            },
            {
            id:55,
            eng:"in a few weeks",
            ru:"через несколько недель",
            hint:"/ ин э фью уикс /"
            },
            {
            id:56,
            eng:"in a few days",
            ru:"через несколько дней",
            hint:"/ ин э фью дэйz /"
            },
            {
            id:57,
            eng:"in a few years",
            ru:"через несколько лет",
            hint:"/ ин э фью йИэz /"
            },
            {
            id:58,
            eng:"in a few months",
            ru:"через несколько месяцев",
            hint:"/ ин э фью мАнth /"
            },
            {
            id:59,
            eng:"when pigs fly",
            ru:"когда рак на горе свистнет. (идиома)",
            hint:""
            },
            {
            id:60,
            eng:"next Tuesday",
            ru:"в следующий вторник",
            hint:"/ тьЮсдэй /"
            },
            {
            id:61,
            eng:"next Saturday",
            ru:"в следующую субботу",
            hint:"/ сАтэдэй /"
            },
            {
            id:62,
            eng:"next Sunday",
            ru:"в следующее воскресенье",
            hint:"/ сАндэй /"
            },
            {
            id:63,
            eng:"next lesson",
            ru:"на следующем уроке",
            hint:""
            },
            {
            id:64,
            eng:"next meeting",
            ru:"на следующей встрече",
            hint:""
            },
            {
            id:65,
            eng:"first thing in the morning",
            ru:"первым делом с утра",
            hint:""
            },
            {
            id:66,
            eng:"in a day or two",
            ru:"через день или два",
            hint:""
            },
            {
            id:67,
            eng:"next Wednesday",
            ru:"в следующую среду",
            hint:"/ уЭнсдэй /"
            },
            {
            id:68,
            eng:"as soon as possible",
            ru:"как можно скорее",
            hint:"/ эz сун эz посбл /"
            },
            {
            id:69,
            eng:"never again",
            ru:"никогда cнова, никогда больше",
            hint:"/ нЭвэ эгЕн /"
            },
            {
            id:70,
            eng:"today",
            ru:"сегодня",
            hint:"/ тудЭй /"
            },
            {
            id:71,
            eng:"very soon",
            ru:"очень скоро",
            hint:""
            },
            {
            id:72,
            eng:"maybe later",
            ru:"может попозже",
            hint:"/ лэЙтэ /"
            },
            {
            id:73,
            eng:"in a second",
            ru:"через секунду",
            hint:""
            },
            {
            id:74,
            eng:"in a few seconds",
            ru:"через несколько секунд",
            hint:"/ ин э фью сЭкондz /"
            },
            {
            id:75,
            eng:"at midnight",
            ru:"в полночь",
            hint:""
            },
            {
            id:76,
            eng:"tomorrow at eight",
            ru:"завтра в восемь часов",
            hint:""
            },
            {
            id:77,
            eng:"in",
            ru:"через",
            hint:""
            },
            {
            id:78,
            eng:"after",
            ru:"после",
            hint:""
            },
            {
            id:79,
            eng:"about",
            ru:"примерно",
            hint:""
            },
    ],
    naughtyB: [
        {
            id:1,
            eng:"break",
            ru:"ломать",
            hint:"/ брЭйк /"
            },
            {
            id:2,
            eng:"beat",
            ru:"побить",
            hint:"/ бит /"
            },
            {
            id:3,
            eng:"become",
            ru:"становиться",
            hint:"/ бекАм /"
            },
            {
            id:4,
            eng:"begin",
            ru:"начинать",
            hint:"/ бегИн /"
            },
            {
            id:5,
            eng:"blow",
            ru:"дуть",
            hint:"/ блОу /"
            },
            {
            id:6,
            eng:"borrow",
            ru:"брать в долг",
            hint:"/ бОроу /"
            },
            {
            id:7,
            eng:"build",
            ru:"строить",
            hint:"/ билд /"
            },
            {
            id:8,
            eng:"burn",
            ru:"сжигать, гореть",
            hint:"/ бЁрн /"
            },
            {
            id:9,
            eng:"buy",
            ru:"покупать",
            hint:"/ бАй /"
            },
            {
            id:10,
            eng:"bring",
            ru:"приносить",
            hint:"/ брин /"
            },
            {
            id:11,
            eng:"be",
            ru:"быть",
            hint:"/ эм из а /"
            },
            {
            id:12,
            eng:"bite",
            ru:"кусать",
            hint:"/ бАйт /"
            },
        {
            id:101,
            eng:"broke",
            ru:"сломал, нарушил",
            hint:"/ брОУк /"
            },
            {
            id:102,
            eng:"beat",
            ru:"побил",
            hint:"/ бит /"
            },
            {
            id:103,
            eng:"became",
            ru:"стал",
            hint:"/ бекЕйм /"
            },
            {
            id:104,
            eng:"began",
            ru:"начал",
            hint:"/ бегЭн /"
            },
            {
            id:105,
            eng:"blew",
            ru:"вторая форма глагола ` дуть `",
            hint:"/ блУ /"
            },
            {
            id:106,
            eng:"borrowed",
            ru:"вторая форма глагола ` брать в долг `",
            hint:"/ бОроуд /"
            },
            {
            id:107,
            eng:"built",
            ru:"вторая форма глагола ` строить `",
            hint:"/ билт /"
            },
            {
            id:108,
            eng:"burnt",
            ru:"вторая форма глагола ` сжигать, гореть `",
            hint:"/ бёрнт /"
            },
            {
            id:109,
            eng:"bought",
            ru:"вторая форма глагола ` покупать `",
            hint:"/ бот /"
            },
            {
            id:110,
            eng:"brought",
            ru:"вторая форма глагола ` приносить `",
            hint:"/ брот /"
            },
            {
            id:111,
            eng:"we were young",
            ru:"напиши по-английски:` мы были здесь `",
            hint:"/ ви вё хиэ/"
            },
            {
            id:112,
            eng:"bit",
            ru:"вторая форма глагола ` кусать `",
            hint:"/ бит /"
            },
            {
            id:113,
            eng:"I was young",
            ru:"напиши по-английски ` я был молодой `",
            hint:"/ ай воз ян /"
            },
            {
                id:201,
                eng:"broken",
                ru:"сломанный",
                hint:"/ брОУкэн /"
                },
                {
                id:202,
                eng:"beaten",
                ru:"побитый",
                hint:"/ битн /"
                },
                {
                id:203,
                eng:"become",
                ru:"третья форма глагола ` становиться `",
                hint:"/ бекАм /"
                },
                {
                id:204,
                eng:"begun",
                ru:"третья форма глагола ` начинать `",
                hint:"/ бегАн /"
                },
                {
                id:205,
                eng:"blown",
                ru:"третья форма глагола ` дуть `",
                hint:"/ блОун /"
                },
                {
                id:206,
                eng:"borrowed",
                ru:"третья форма глагола ` брать в долг `",
                hint:"/ бОроуд /"
                },
                {
                id:207,
                eng:"built",
                ru:"третья форма глагола ` строить `",
                hint:"/ билт /"
                },
                {
                id:208,
                eng:"burnt",
                ru:"третья форма глагола ` сжигать, гореть `",
                hint:"/ бёрнт /"
                },
                {
                id:209,
                eng:"bought",
                ru:"третья форма глагола ` покупать `",
                hint:"/ бот /"
                },
                {
                id:210,
                eng:"brought",
                ru:"третья форма глагола ` приносить `",
                hint:"/ брот /"
                },
                {
                id:211,
                eng:"been",
                ru:"третья форма глагола ` быть `",
                hint:"/ бин /"
                },
                {
                id:212,
                eng:"bit",
                ru:"третья форма глагола ` кусать `",
                hint:"/ бит /"
                },
],
tagquestions01: [
    {
        id:1,
        eng:"will you?",
        ru:"Don't talk to Peter during the lesson, ____"
        },
        {
        id:2,
        eng:"will you?",
        ru:"Shut up now, ____"
        },
        {
        id:3,
        eng:"will you?",
        ru:"Don't talk to me this way, ____"
        },
        {
        id:4,
        eng:"don't I?",
        ru:"I think he's from India, ____"
        },
        {
        id:5,
        eng:"isn't he?",
        ru:"I think he's from India, ____"
        },
        {
        id:6,
        eng:"will you?",
        ru:"Don't go swimming, ____"
        },
        {
        id:7,
        eng:"shall we?",
        ru:"Let's go to swim, ____"
        },
        {
        id:8,
        eng:"shall we?",
        ru:"Let's kiss now, ____"
        },
        {
        id:9,
        eng:"aren't I?",
        ru:"I'm late, ____"
        },
        {
        id:10,
        eng:"aren't I?",
        ru:"I'm your English teacher, ____"
        },
        {
        id:11,
        eng:"aren't there?",
        ru:"There are a lot of people here, ____"
        },
        {
        id:12,
        eng:"aren't there?",
        ru:"There are some apples left, ____"
        },
        {
        id:13,
        eng:"aren't they?",
        ru:"Andy and Marc are reading comics, ____"
        },
        {
        id:14,
        eng:"aren't you?",
        ru:"You are Indian, ____"
        },
        {
        id:15,
        eng:"did she?",
        ru:"Peggy didn't use the pencil, ____"
        },
        {
        id:16,
        eng:"didn't they?",
        ru:"They had a nice weekend, ____"
        },
        {
        id:17,
        eng:"do you?",
        ru:"You don't like yoghurt, ____"
        },
        {
        id:18,
        eng:"doesn't he?",
        ru:"He sings in the bathroom, ____"
        },
        {
        id:19,
        eng:"doesn't he?",
        ru:"He sometimes reads the newspaper, ____"
        },
        {
        id:20,
        eng:"doesn't she?",
        ru:"Peggy plays volleyball, ____"
        },
        {
        id:21,
        eng:"doesn't she?",
        ru:"She has a brother, ____"
        },
        {
        id:22,
        eng:"don't they?",
        ru:"Dogs like meat, ____"
        },
        {
        id:23,
        eng:"don't they?",
        ru:"They often talk to their neighbours, ____"
        },
        {
        id:24,
        eng:"don't they?",
        ru:"Your friends enjoy swimming, ____"
        },
        {
        id:25,
        eng:"hasn't he?",
        ru:"He's been to Texas, ____"
        },
        {
        id:26,
        eng:"hasn't she?",
        ru:"Angela has ordered pizza, ____"
        },
        {
        id:27,
        eng:"hasn't she?",
        ru:"Mary has answered the teacher's question, ____"
        },
        {
        id:28,
        eng:"haven't we?",
        ru:"We've seen this film, ____"
        },
        {
        id:29,
        eng:"is he?",
        ru:"Andrew isn't sleeping, ____"
        },
        {
        id:30,
        eng:"isn't he?",
        ru:"The boy is from Turkey, ____"
        },
        {
        id:31,
        eng:"isn't it?",
        ru:"Lovely day today, ____"
        },
        {
        id:32,
        eng:"isn't it?",
        ru:"York is in England, ____"
        },
        {
        id:33,
        eng:"isn't there?",
        ru:"There's only one cloud in the sky, ____"
        },
        {
        id:34,
        eng:"shall we?",
        ru:"Let's go, ____"
        },
        {
        id:35,
        eng:"was she?",
        ru:"Sue wasn't listening, ____"
        },
        {
        id:36,
        eng:"wasn't he?",
        ru:"The teacher was late for school, ____"
        },
        {
        id:37,
        eng:"will he?",
        ru:"He'll never know, ____"
        },
        {
        id:38,
        eng:"will you?",
        ru:"Don't smoke, ____"
        },
        {
        id:39,
        eng:"will you?",
        ru:"Open the window, ____"
        },
        {
        id:40,
        eng:"won't she?",
        ru:"Sue will be 14 next week, ____"
        },
        {
        id:41,
        eng:"won't they?",
        ru:"Tom and Maria will arrive at Heathrow, ____"
        },
        {
        id:42,
        eng:"aren't I?",
        ru:"I am a little stupid, ____"
        },
        {
        id:43,
        eng:"aren't I?",
        ru:"I am smart, ____"
        },
        {
        id:44,
        eng:"aren't I?",
        ru:"I'm clever, ____"
        },
        {
        id:45,
        eng:"aren't they?",
        ru:"Pat and John are from Bristol, ____"
        },
        {
        id:46,
        eng:"aren't they?",
        ru:"They are going home from school, ____"
        },
        {
        id:47,
        eng:"can he?",
        ru:"Vincent can't speak Mongolian, ____"
        },
        {
        id:48,
        eng:"can't he?",
        ru:"He can write, ____"
        },
        {
        id:49,
        eng:"can't he?",
        ru:"Jack can write good poems, ____"
        },
        {
        id:50,
        eng:"can't she?",
        ru:"She can speak French, ____"
        },
        {
        id:51,
        eng:"could she?",
        ru:"Anne couldn't sing well, ____"
        },
        {
        id:52,
        eng:"couldn't he?",
        ru:"He could have bought a new car, ____"
        },
        {
        id:53,
        eng:"couldn't she?",
        ru:"Barbara could have helped you, ____"
        },
        {
        id:54,
        eng:"did she?",
        ru:"Mary didn't do her homework last Monday, ____"
        },
        {
        id:55,
        eng:"did she?",
        ru:"She didn't come to the shop, ____"
        },
        {
        id:56,
        eng:"did they?",
        ru:"They did not do their homework, ____"
        },
        {
        id:57,
        eng:"did they?",
        ru:"They did not go to Vienna last week, ____"
        },
        {
        id:58,
        eng:"didn't he?",
        ru:"Chris got up at seven, ____"
        },
        {
        id:59,
        eng:"didn't he?",
        ru:"Peter played handball yesterday, ____"
        },
        {
        id:60,
        eng:"didn't they?",
        ru:"They played football on Sundays, ____"
        },
        {
        id:61,
        eng:"do they?",
        ru:"John and Max don't like maths, ____"
        },
        {
        id:62,
        eng:"do they?",
        ru:"Nobody says that you are stupid, ____"
        },
        {
        id:63,
        eng:"doesn't he?",
        ru:"He likes lasagna (лазанья), ____"
        },
        {
        id:64,
        eng:"doesn't she?",
        ru:"She plays football on Sundays, ____"
        },
        {
        id:65,
        eng:"don't they?",
        ru:"They play football on Sundays, ____"
        },
        {
        id:66,
        eng:"don't we?",
        ru:"We often watch TV in the afternoon, ____"
        },
        {
        id:67,
        eng:"doesn't he?",
        ru:"He has a car, ____"
        },
        {
        id:68,
        eng:"hasn't she?",
        ru:"She has bought a new phone, ____"
        },
        {
        id:69,
        eng:"have they?",
        ru:"They haven't finished the task, ____"
        },
        {
        id:70,
        eng:"haven't they?",
        ru:"They have finished their homework, ____"
        },
        {
        id:71,
        eng:"haven't you?",
        ru:"You have cleaned your bike, ____"
        },
        {
        id:72,
        eng:"haven't you?",
        ru:"You've got a car, ____"
        },
        {
        id:73,
        eng:"isn't it?",
        ru:"It's very hot in the Sahara, ____"
        },
        {
        id:74,
        eng:"isn't she?",
        ru:"She is collecting stickers, ____"
        },
        {
        id:75,
        eng:"shall we?",
        ru:"Let's go out for a walk, ____"
        },
        {
        id:76,
        eng:"wasn't he?",
        ru:"Shakespeare was English, ____"
        },
        {
        id:77,
        eng:"weren't they?",
        ru:"Everybody was happy with the results, ____"
        },
        {
        id:78,
        eng:"won't he?",
        ru:"Kevin will come tonight, ____"
        },
        {
        id:79,
        eng:"aren't I?",
        ru:"I am the best student in the class, ___"
        },
        {
        id:80,
        eng:"will you?",
        ru:"Pass me the salt, ____"
        },
        {
        id:81,
        eng:"will you?",
        ru:"Pass me the salt, ____"
        },
        {
        id:82,
        eng:"doesn't he?",
        ru:"Russel always smokes hookah (кальян)"
        },
        {
        id:83,
        eng:"wasn't it?",
        ru:"The slide show was fantastic, ____"
        },
        {
        id:84,
        eng:"wasn't it?",
        ru:"The slide show was fantastic, ____"
        },
        {
        id:85,
        eng:"will it?",
        ru:"The sun won't shine tomorrow, ____"
        },
        {
        id:86,
        eng:"isn't there?",
        ru:"There's a fly in your soup, ____"
        },
        {
        id:87,
        eng:"mustn't we?",
        ru:"We must be at school at 8 o'clock, ____"
        },
        {
        id:88,
        eng:"isn't there?",
        ru:"There's a fly in your soup, ____"
        },
        {
        id:89,
        eng:"didn't they?",
        ru:"They used to live in New Orleans, ____"
        },
        {
        id:90,
        eng:"didn't they?",
        ru:"They used to live in New Orleans, ____"
        },
],
roblox: [
    {
        id:1,
        eng:"blue",
        ru:"синий",
        hint:""
        },
        {
        id:2,
        eng:"green",
        ru:"зелёный",
        hint:""
        },
        {
        id:3,
        eng:"yellow",
        ru:"желтый",
        hint:""
        },
        {
        id:4,
        eng:"red",
        ru:"красный",
        hint:""
        },
        {
        id:5,
        eng:"I fell",
        ru:"я упал(а)",
        hint:""
        },
        {
        id:6,
        eng:"run",
        ru:"беги",
        hint:""
        },
        {
        id:7,
        eng:"I am standing",
        ru:"я стою",
        hint:""
        },
        {
        id:8,
        eng:"I am jumping",
        ru:"я прыгаю",
        hint:""
        },
        {
        id:9,
        eng:"They are running",
        ru:"они бегут",
        hint:""
        },
        {
        id:10,
        eng:"You have to run",
        ru:"ты должен бежать",
        hint:""
        },
        {
        id:11,
        eng:"You have to jump",
        ru:"ты должен прыгнуть",
        hint:""
        },
        {
        id:12,
        eng:"He has to run",
        ru:"он должен бежать",
        hint:""
        },
        {
        id:13,
        eng:"He has to jump",
        ru:"он должен прыгнуть",
        hint:""
        },
        {
        id:14,
        eng:"left",
        ru:"налево",
        hint:""
        },
        {
        id:15,
        eng:"I have to play",
        ru:"я должен играть",
        hint:""
        },
        {
        id:16,
        eng:"We have to play",
        ru:"мы должны играть",
        hint:""
        },
        {
        id:17,
        eng:"She has to play",
        ru:"она должна играть",
        hint:""
        },
        {
        id:18,
        eng:"press black",
        ru:"нажми на черный",
        hint:""
        },
        {
        id:19,
        eng:"press green",
        ru:"нажми на зеленый",
        hint:""
        },
        {
        id:20,
        eng:"press pink",
        ru:"нажми на розовый",
        hint:""
        },
        {
        id:21,
        eng:"fast",
        ru:"быстро",
        hint:""
        },
        {
        id:22,
        eng:"slow",
        ru:"медленно",
        hint:""
        },
        {
        id:23,
        eng:"wait",
        ru:"ждать",
        hint:""
        },
        {
        id:24,
        eng:"I am waiting",
        ru:"я жду",
        hint:""
        },
        {
        id:25,
        eng:"They",
        ru:"они",
        hint:""
        },
        {
        id:26,
        eng:"We",
        ru:"мы",
        hint:""
        },
        {
        id:27,
        eng:"Roblox",
        ru:"Роблокс",
        hint:""
        },
        {
        id:28,
        eng:"right",
        ru:"направо",
        hint:""
        },
],
}
export default allWordsForGameTypeOrWrite
