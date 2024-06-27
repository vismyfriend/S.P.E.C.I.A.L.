// чтобы удалить пустые строки нужно ввести в CTRL+F или CTRL R  ^(\s)*$\n 
const benderWordOrderSentences = {
    devmode1: [
        {
            id:1,
            eng:"we are very good friends",
            ru:"мы хорошие друзья"
            },
            {
            id:2,
            eng:"Vincent is the best teacher",
            ru:"Винсент мой учитель"
            }
    ],
    devmode0: [
        {
            id:1,
            eng:"we are very good friends",
            ru:"мы хорошие друзья"
            },
            {
            id:2,
            eng:"Vincent is the best teacher",
            ru:"Винсент мой учитель"
            }
    ],
    m03: [
        {
            id:101,
            eng:"It is a very good game .",
            ru:" Это очень хорошая игра.",
           },
            {
            id:102,
            eng:"Vincent is a very cool teacher .",
            ru:"винсент очень классный учитель.",
           },
            {
            id:103,
            eng:"how do you feel today ?",
            ru:"Как вы себя чувствуете сегодня?",
           },
            {
            id:104,
            eng:"a robot wants to speak English .",
            ru:"Робот хочет разговаривать на английском.",
           },
            {
            id:105,
            eng:"I am a robot and my name is Bender.",
            ru:"Я робот и моё имя Бендер.",
           },
    ],
    helpArobot: [
        {
            id:101,
            eng:"my friends are good .",
            ru:"мои друзья хорошие.",
            },
            {
            id:102,
            eng:"are your friends good ?",
            ru:"твои друзья хорошие?",
            },
            {
            id:103,
            eng:"we are not stupid students !",
            ru:"мы не глупые студенты!",
            },
            {
            id:104,
            eng:"what is his name ?",
            ru:"Какое его имя?",
            },
            {
            id:105,
            eng:"it is a good robot .",
            ru:"это хороший робот.",
            },
            {
            id:106,
            eng:"am I a stupid robot ?",
            ru:"я глупый робот?",
            },
    ],
    m009old: [
        {
            id:1,
            eng:"we are good friends .",
            ru:"мы хорошие друзья",
            },
            {
            id:2,
            eng:"Vincent is a cool teacher.",
            ru:"Винсент классный учитель",
            },
            {
            id:3,
            eng:"Vincent is not a teacher he is my friend .",
            ru:"Винсент не учитель, он мой друг",
            },
            {
            id:4,
            eng:"where are you from ?",
            ru:"откуда вы родом?",
            },
            {
            id:5,
            eng:"how are you today ?",
            ru:"как вы сегодня себя чувствуете?",
            },
            {
            id:6,
            eng:"I am not a stupid student .",
            ru:"я не тупой студент",
            },
            {
            id:7,
            eng:"I am not lazy /лЭйзи/ .",
            ru:"я не ленивый.",
            },
            {
            id:8,
            eng:"you are very slow !",
            ru:"вы очень медленная",
            },
            {
            id:9,
            eng:"I am not fat .",
            ru:"я не жирная",
            },
            {
            id:10,
            eng:"you are my buddy .",
            ru:"вы мой приятель",
            },
            {
            id:11,
            eng:"it is their dog .",
            ru:"это их собака",
            },
            {
            id:12,
            eng:"their cat is ugly .",
            ru:"их кошка уродлива",
            },
            {
            id:13,
            eng:"our cat is always hungry .",
            ru:"наша кошка всегда голодная",
            },
            {
            id:14,
            eng:"bananas are yellow .",
            ru:"бананы желтые",
            },
            {
            id:15,
            eng:"It is a very good game .",
            ru:"Это очень хорошая игра.",
            },
            {
            id:16,
            eng:"how do you feel today ?",
            ru:"Как вы себя чувствуете сегодня?",
            },
            {
            id:17,
            eng:"a robot wants to speak English .",
            ru:"Робот хочет разговаривать на английском.",
            },
            {
            id:18,
            eng:"I am a robot and my name is Bender.",
            ru:"Я робот и моё имя Бендер.",
            },
    ],
    hw3: [
        {
            id:1,
            eng:"I am clever .",
            ru:"я умный (я умная)",
            hint:" / ай эм клЭвэ /"
            },
            {
            id:2,
            eng:"you are smart .",
            ru:"вы сообразительный",
            hint:" / ю а смарт /"
            },
            {
            id:3,
            eng:"we are ready .",
            ru:"мы готовы",
            hint:" / уи а рЭди /"
            },
            {
            id:4,
            eng:"they are silly .",
            ru:"они глупые",
            hint:" / дэй а сИли /"
            },
            {
            id:5,
            eng:"he is angry .",
            ru:"он сердитый",
            hint:" / хи из Энгри /"
            },
            {
            id:6,
            eng:"he is hungry .",
            ru:"он голодный",
            hint:" / хи из хАнГри /"
            },
            {
            id:7,
            eng:"she is beautiful .",
            ru:"она красивая",
            hint:" / щи из бьютифул /"
            },
            {
            id:8,
            eng:"he is handsome .",
            ru:"он красивый",
            hint:" / хи из хЭнсам /"
            },
            {
            id:9,
            eng:"I am not fat .",
            ru:"я не жирная (я не жирный)",
            hint:" / ай эм нот фэт /"
            },
            {
            id:10,
            eng:"you are my buddy .",
            ru:"ты мой приятель",
            hint:" / ю а май бАдди /"
            },
            {
            id:11,
            eng:"he is a good friend .",
            ru:"он хороший друг",
            hint:" / хи из э гуд фрэнд /"
            },
            {
            id:12,
            eng:"it is our cat .",
            ru:"это наша кошка",
            hint:" / ит из аУа кэт /"
            },
            {
            id:13,
            eng:"our cat is cool .",
            ru:"наша кот классный (прикольный, крутой)",
            hint:" / аУа кЭт из кул /"
            },
            {
            id:14,
            eng:"Bender is a sexy and smart robot .",
            ru:"Бэндер привлекательный и сообразительный робот",
            hint:""
            },
    ],
    test001: [
        {
            id:1,
            eng:"where does Bender work ?",
            ru:"Где работает Бендер?",
            },
            {
            id:2,
            eng:"what time do you do homework ?",
            ru:"Во сколько ты делаешь домашнюю работу?",
            },
            {
            id:3,
            eng:"where does your best friend live ?",
            ru:"Где живет твой лучший друг?",
            },
            {
            id:4,
            eng:"how often do you study English ?",
            ru:"Как часто вы учите английский?",
            },
            {
            id:5,
            eng:"my teacher is the best !",
            ru:"Мой учитель самый лучший!",
            },
            {
            id:6,
            eng:"it is not an easy test .",
            ru:"Это не лёгкий тест.",
            },
            {
            id:7,
            eng:"do you like dogs or cats more ?",
            ru:"Вам больше нравятся собаки или кошки?",
            },
            {
            id:8,
            eng:"a robot does not understand .",
            ru:"Робот не понимает.",
            },
            {
            id:9,
            eng:"what is your phone number ?",
            ru:"Какой ваш номер телефона?",
            },
            {
            id:10,
            eng:"what car does she have ?",
            ru:"Какая у неемашина?",
            },
            {
            id:11,
            eng:"he does not do homework every day.",
            ru:"Он не выполняет домашку каждый день.",
            },
            {
            id:12,
            eng:"does Vincent help you with English ?",
            ru:"Винсент помогает вам с английским?",
            },
            {
            id:13,
            eng:"you are a very smart student .",
            ru:"Вы учень сообразительный студент",
            },
            {
            id:14,
            eng:"am I your best friend ?",
            ru:"Я твой лучший друг?",
            },
            {
            id:15,
            eng:"My teacher has a young cat and an old monkey.",
            ru:"У моего учителя есть молодой кот и старая обезьяна",
            },
    ],
    m013: [
        {
            id:1,
            eng:"I don't kiss somebody every day .",
            ru:"Я не целую кого-то каждый день."
            },
            {
            id:2,
            eng:"I like to go to work on Mondays",
            ru:"Мне нравится ходить на работу по понедельникам."
            },
            {
            id:3,
            eng:"I usually do my homework after lessons",
            ru:"Обычно я делаю свою домашнюю работу после уроков."
            },
            {
            id:4,
            eng:"My friend doesn't do her homework",
            ru:"Моя подруга не делает свою домашнюю работу."
            },
            {
            id:5,
            eng:"I can't run very fast .",
            ru:"Я не могу бегать очень быстро."
            },
            {
            id:6,
            eng:"I don't jump very often .",
            ru:"Я не часто прыгаю."
            },
            {
            id:7,
            eng:"I do number one three times a day",
            ru:"Я 'хожу по-маленькому' три раза в день."
            },
            {
            id:8,
            eng:"I do number two once a day .",
            ru:"Я 'хожу по-большому' один раз в день."
            },
            {
            id:9,
            eng:"Do you like to walk ?",
            ru:"Тебе нравится гулять?"
            },
            {
            id:10,
            eng:"Does Vincent like to play football ?",
            ru:"Винсенту нравится играть в футбол?"
            },
            {
            id:11,
            eng:"I never play games .",
            ru:"Я никогда не играю в игры."
            },
            {
            id:12,
            eng:"My teacher plays the guitar .",
            ru:"Мой учитель играет на гитаре."
            },
            {
            id:13,
            eng:"I like to sing songs .",
            ru:"Мне нравится петь песни."
            },
            {
            id:14,
            eng:"Sometimes I watch movies .",
            ru:"Иногда я смотрю фильмы."
            },
            {
            id:15,
            eng:"how often do you drink alcohol ?",
            ru:"Как часто ты пьешь алкоголь?"
            },
            {
            id:16,
            eng:"what time does the shop close ?",
            ru:"Во сколько закрывается магазин?"
            },
            {
            id:17,
            eng:"When does the shop open ?",
            ru:"Когда открывается магазин?"
            },
            {
            id:18,
            eng:"I look at my teacher twice a week",
            ru:"Я встречаюсь со своим учителем два раза в неделю."
            },
            {
            id:19,
            eng:"what do you want to give me ?",
            ru:"Что ты хочешь мне подарить?"
            },
            {
            id:20,
            eng:"Please, take some food to the GYM",
            ru:"Пожалуйста, возьми немного еду в спортзал."
            },
            {
            id:21,
            eng:"do something with it !",
            ru:"Сделай что-нибудь с этим!"
            },
            {
            id:22,
            eng:"what can people make from milk?",
            ru:"Что люди могут сделать из молока?"
            },
            {
            id:23,
            eng:"what books do you like to read ?",
            ru:"Какие книги тебе нравится читать?"
            },
            {
            id:24,
            eng:"how often do you go to GYM ?",
            ru:"Как часто ты ходишь в спортзал?"
            },
            {
            id:25,
            eng:"My children don't go to university",
            ru:"Мои дети не ходят в университет."
            },
            {
            id:26,
            eng:"does Vincent want to eat in a café with me?",
            ru:"Винсент хочет поесть в кафе со мной?"
            },
            {
            id:27,
            eng:"I really love to do number one",
            ru:"Мне очень нравится ' ходить по-маленькому' ."
            },
            {
            id:28,
            eng:"what time does his cat do number two?",
            ru:"Во сколько его кошка ' ходит по-большому' ?"
            },
            {
            id:29,
            eng:"I have breakfast at 8 a.m.",
            ru:"Я завтракаю в 8 утра."
            },
            {
            id:30,
            eng:"My wife makes breakfast for me",
            ru:"Моя жена готовит завтрак для меня."
            },
            {
            id:31,
            eng:"we have dinner together.",
            ru:"Мы ужинаем вместе."
            },
            {
            id:32,
            eng:"Usually my husband makes dinner .",
            ru:"Обычно мой муж готовит ужин."
            },
            {
            id:33,
            eng:"I want to cook some food .",
            ru:"Я хочу приготовить что-нибудь поесть."
            },
            {
            id:34,
            eng:"Does your child want to eat something ?",
            ru:"Твоему ребенку хочется что-нибудь поесть?"
            },
            {
            id:35,
            eng:"What time do you do exercises ?",
            ru:"Во сколько ты занимаешься упражнениями?"
            },
            {
            id:36,
            eng:"Do you do yoga ?",
            ru:"Ты занимаешься йогой?"
            },
            {
            id:37,
            eng:"Do you do some sports ?",
            ru:"Ты занимаешься каким-то спортом?"
            },
            {
            id:38,
            eng:"how often does a man take a shower ?",
            ru:"Как часто мужчина принимает душ?"
            },
            {
            id:39,
            eng:"I have a wash every morning .",
            ru:"Я умываюсь каждое утро."
            },
            {
            id:40,
            eng:"I don't wash the dishes .",
            ru:"Я не мою посуду."
            },
            {
            id:41,
            eng:"do you wash hands before lunch ?",
            ru:"Ты моешь руки перед обедом?"
            },
            {
            id:42,
            eng:"let's have lunch together ? ",
            ru:"Давайте пообедаем вместе?"
            },
            {
            id:43,
            eng:"can you cook romantic dinner ?",
            ru:"Ты можешь приготовить романтический ужин?"
            },
            {
            id:44,
            eng:"I really need to relax .",
            ru:"Мне действительно нужно отдохнуть."
            },
            {
            id:45,
            eng:"She has some rest .",
            ru:"У нее небольшой отдых."
            },
            {
            id:46,
            eng:"how often does she surf the internet ?",
            ru:"Как часто она сидит в интернете?"
            },
    ],
    mirraLada: [
        {
            id:1,
            eng:"we are good friends",
            ru:"мы хорошие друзья"
            },
            {
            id:2,
            eng:"Vincent is my teacher",
            ru:"Винсент мой учитель"
            },
            {
            id:3,
            eng:"Vincent is not a teacher he is my friend",
            ru:"Винсент не учитель, он мой друг"
            },
            {
            id:4,
            eng:"where are you from ?",
            ru:"откуда вы родом?"
            },
            {
            id:5,
            eng:"how are you today ?",
            ru:"как вы сегодня себя чувствуете?"
            },
            {
            id:6,
            eng:"I am not a stupid student",
            ru:"я не тупой студент"
            },
            {
            id:7,
            eng:"are you stupid ?",
            ru:"ты тупица?"
            },
            {
            id:8,
            eng:"you are very slow !",
            ru:"вы очень медленная"
            },
            {
            id:9,
            eng:"I am not fat",
            ru:"я не жирная"
            },
            {
            id:10,
            eng:"you are my buddy",
            ru:"вы мой приятель"
            },
            {
            id:11,
            eng:"it is their dog",
            ru:"это их собака"
            },
            {
            id:12,
            eng:"their cat is ugly",
            ru:"их кошка уродлива"
            },
            {
            id:13,
            eng:"our cat is always hungry",
            ru:"наша кошка всегда голодная"
            },
            {
                id:14,
                eng:"I am Mirra",
                ru:"я Мирра"
                },
                {
                id:15,
                eng:"my name is Ladoha",
                ru:"меня зовут Ладоха"
                },
                {
                id:16,
                eng:"my friends like K-pop very much",
                ru:"моим друзьям очень нравится К-поп"
                },
                {
                id:17,
                eng:"we live in Vilnius",
                ru:"мы живём в Вильнюсе"
                },
                {
                id:18,
                eng:"you are my teacher",
                ru:"вы мой учитель"
                },
                {
                id:19,
                eng:"it is very interesting",
                ru:"это очень интересно"
                },
                {
                id:20,
                eng:"it is not boring",
                ru:"это не скучно"
                },
                {
                id:21,
                eng:"what is it ?",
                ru:"что это?"
                },
                {
                id:22,
                eng:"what is your name?",
                ru:"как тебя зовут?"
                },
                {
                id:23,
                eng:"how old are you ?",
                ru:"сколько тебе лет?"
                },
                {
                id:24,
                eng:"what is your phone number ?",
                ru:"какой твой номер телефона?"
                },
                {
                id:25,
                eng:"my mom works every day",
                ru:"моя мама работает каждый день"
                },
                {
                id:26,
                eng:"I don't work because I study in school",
                ru:"я не работаю, потому что я учусь"
                },
                {
                id:27,
                eng:"Vincent is the best teacher",
                ru:"Винсент - лучший учитель"
                },
                {
                id:28,
                eng:"do you have an airplane ?",
                ru:"у тебя есть самолёт?"
                },
                {
                id:29,
                eng:"do you have a copybook ?",
                ru:"у тебя есть тетрадь?"
                },
                {
                id:30,
                eng:"does Mirra have a cat?",
                ru:"у Мирры есть кошка?"
                },
                {
                id:31,
                eng:"does Lada have a cactus?",
                ru:"у Лады есть кактус?"
                },
    ],
}
export default benderWordOrderSentences