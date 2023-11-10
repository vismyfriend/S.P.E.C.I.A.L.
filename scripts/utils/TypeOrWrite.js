// 0001 добавляем константу с данными - с массивом // Здесь слова для игры Find a pair
const allWordsForGameTypeOrWrite = {
    testOneSeven: [
        {					
            id	:	1	,		
            eng	:	"one"	,
            ru	:	"один"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"two"	,
            ru	:	"два"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"three"	,
            ru	:	"три"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"four"	,
            ru	:	"четыре"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"five"	,
            ru	:	"пять"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"six"	,
            ru	:	"шесть"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"seven"	,
            ru	:	"семь"	
            }	,				
    ],
    compare: [
        {
            id:201,
            eng:"boring",
            ru:"скучный"
            },
            {
            id:202,
            eng:"awesome",
            ru:"офигенный"
            },
            {
            id:203,
            eng:"angry",
            ru:"сердитый"
            },
            {
            id:204,
            eng:"big",
            ru:"большой"
            },
            {
            id:205,
            eng:"black",
            ru:"Черный"
            },
            {
            id:206,
            eng:"bold",
            ru:"смелый"
            },
            {
            id:207,
            eng:"blue",
            ru:"синий"
            },
            {
            id:208,
            eng:"bald",
            ru:"лысый"
            },
            {
            id:209,
            eng:"bossy",
            ru:"властный"
            },
            {
            id:210,
            eng:"brave",
            ru:"храбрый"
            },
            {
            id:211,
            eng:"interesting",
            ru:"интересный"
            },
            {
            id:212,
            eng:"bright",
            ru:"яркий"
            },
            {
            id:213,
            eng:"green",
            ru:"зелёный"
            },
            {
            id:214,
            eng:"busy",
            ru:"занятой"
            },
            {
            id:215,
            eng:"calm",
            ru:"спокойный"
            },
            {
            id:216,
            eng:"cheap",
            ru:"дешевый"
            },
            {
            id:217,
            eng:"attractive",
            ru:"привлекательный"
            },
            {
            id:218,
            eng:"overweight",
            ru:"полноватый"
            },
            {
            id:219,
            eng:"fashionable",
            ru:"модный"
            },
            {
            id:220,
            eng:"clean",
            ru:"чистый"
            },
            {
            id:221,
            eng:"intelligent",
            ru:"образованный"
            },
            {
            id:222,
            eng:"close",
            ru:"близкий"
            },
            {
            id:223,
            eng:"cloudy",
            ru:"облачный"
            },
            {
            id:224,
            eng:"clumsy",
            ru:"неуклюжий"
            },
            {
            id:225,
            eng:"disgusting",
            ru:"отвратительный"
            },
            {
            id:226,
            eng:"cold",
            ru:"холодный"
            },
            {
            id:227,
            eng:"cool",
            ru:"крутой"
            },
            {
            id:228,
            eng:"crazy",
            ru:"сумасшедший"
            },
            {
            id:229,
            eng:"beautiful",
            ru:"красивая"
            },
            {
            id:230,
            eng:"annoying",
            ru:"бесящий"
            },
            {
            id:231,
            eng:"crispy",
            ru:"хрустящий"
            },
            {
            id:232,
            eng:"wonderful",
            ru:"замечательный"
            },
            {
            id:233,
            eng:"curly",
            ru:"кудрявый"
            },
            {
            id:234,
            eng:"amazing",
            ru:"удивительный"
            },
            {
            id:235,
            eng:"cute",
            ru:"милый"
            },
            {
            id:236,
            eng:"sexy",
            ru:"сексуальный"
            },
            {
            id:237,
            eng:"dark",
            ru:"темный"
            },
            {
            id:238,
            eng:"deadly",
            ru:"смертельный"
            },
            {
            id:239,
            eng:"deep",
            ru:"глубокий"
            },
            {
            id:240,
            eng:"expensive",
            ru:"дорогой"
            },
            {
            id:241,
            eng:"dirty",
            ru:"грязный"
            },
            {
            id:242,
            eng:"dry",
            ru:"сухой"
            },
            {
            id:243,
            eng:"dull",
            ru:"затупившийся"
            },
            {
            id:244,
            eng:"dumb",
            ru:"болван"
            },
            {
            id:245,
            eng:"dusty",
            ru:"пыльный"
            },
            {
            id:246,
            eng:"early",
            ru:"ранний"
            },
            {
            id:247,
            eng:"easy",
            ru:"легкий"
            },
            {
            id:248,
            eng:"evil",
            ru:"злой"
            },
            {
            id:249,
            eng:"fantastic",
            ru:"фантастичный"
            },
            {
            id:250,
            eng:"fair",
            ru:"справедливый"
            },
            {
            id:251,
            eng:"fancy",
            ru:"изысканный"
            },
            {
            id:252,
            eng:"far",
            ru:"далекий"
            },
            {
            id:253,
            eng:"fast",
            ru:"быстрый"
            },
            {
            id:254,
            eng:"fat",
            ru:"жирный"
            },
            {
            id:255,
            eng:"few",
            ru:"несколько"
            },
            {
            id:256,
            eng:"fierce",
            ru:"свирепый"
            },
            {
            id:257,
            eng:"filthy",
            ru:"мерзкий"
            },
            {
            id:258,
            eng:"handsome",
            ru:"красивый (муж)"
            },
            {
            id:259,
            eng:"firm",
            ru:"упругий"
            },
            {
            id:260,
            eng:"incredible",
            ru:"невероятный"
            },
            {
            id:261,
            eng:"shocking",
            ru:"шокирующий"
            },
            {
            id:262,
            eng:"flat",
            ru:"плоский"
            },
            {
            id:263,
            eng:"fresh",
            ru:"свежий"
            },
            {
            id:264,
            eng:"friendly",
            ru:"дружелюбный"
            },
            {
            id:265,
            eng:"full",
            ru:"полный"
            },
            {
            id:266,
            eng:"funny",
            ru:"смешной"
            },
            {
            id:267,
            eng:"gentle",
            ru:"нежный"
            },
            {
            id:268,
            eng:"gloomy",
            ru:"мрачный"
            },
            {
            id:269,
            eng:"shitty",
            ru:"дерьмовенький"
            },
            {
            id:270,
            eng:"great",
            ru:"великий"
            },
            {
            id:271,
            eng:"greedy",
            ru:"жадный"
            },
            {
            id:272,
            eng:"shiny",
            ru:"светящийся"
            },
            {
            id:273,
            eng:"hairy",
            ru:"волосатый"
            },
            {
            id:274,
            eng:"cozy",
            ru:"уютный"
            },
            {
            id:275,
            eng:"happy",
            ru:"счастливый"
            },
            {
            id:276,
            eng:"hard",
            ru:"трудный"
            },
            {
            id:277,
            eng:"harsh",
            ru:"суровый"
            },
            {
            id:278,
            eng:"healthy",
            ru:"здоровый"
            },
            {
            id:279,
            eng:"heavy",
            ru:"тяжелый"
            },
            {
            id:280,
            eng:"high/tall",
            ru:"высокий"
            },
            {
            id:281,
            eng:"scared",
            ru:"напуганный"
            },
            {
            id:282,
            eng:"hot",
            ru:"горячий"
            },
            {
            id:283,
            eng:"humble",
            ru:"скромный"
            },
            {
            id:284,
            eng:"hungry",
            ru:"голодный"
            },
            {
            id:285,
            eng:"icy",
            ru:"ледяной"
            },
            {
            id:286,
            eng:"itchy",
            ru:"зудящий"
            },
            {
            id:287,
            eng:"juicy",
            ru:"сочный"
            },
            {
            id:288,
            eng:"kind",
            ru:"добрый"
            },
            {
            id:289,
            eng:"large",
            ru:"большой"
            },
            {
            id:290,
            eng:"late",
            ru:"поздний"
            },
            {
            id:291,
            eng:"lazy",
            ru:"ленивый"
            },
            {
            id:292,
            eng:"light",
            ru:"светлый"
            },
            {
            id:293,
            eng:"favorite",
            ru:"любимый"
            },
            {
            id:294,
            eng:"little",
            ru:"мало"
            },
            {
            id:295,
            eng:"alive",
            ru:"живой"
            },
            {
            id:296,
            eng:"long",
            ru:"длинный"
            },
            {
            id:297,
            eng:"loud",
            ru:"громкий"
            },
            {
            id:298,
            eng:"drunk",
            ru:"пьяный"
            },
            {
            id:299,
            eng:"low",
            ru:"низкий"
            },
            {
            id:300,
            eng:"mad",
            ru:"безумный"
            },
            {
            id:301,
            eng:"mean",
            ru:"злобный"
            },
            {
            id:302,
            eng:"messy",
            ru:"неряшливый"
            },
            {
            id:303,
            eng:"bothering",
            ru:"раздражающий"
            },
            {
            id:304,
            eng:"merry",
            ru:"веселый"
            },
            {
            id:305,
            eng:"narrow",
            ru:"узкий"
            },
            {
            id:306,
            eng:"nasty",
            ru:"противный"
            },
            {
            id:307,
            eng:"naughty",
            ru:"непослушный"
            },
            {
            id:308,
            eng:"near",
            ru:"ближайший"
            },
            {
            id:309,
            eng:"neat",
            ru:"аккуратный"
            },
            {
            id:310,
            eng:"needy",
            ru:"нуждающийся"
            },
            {
            id:311,
            eng:"nervous",
            ru:"нервный"
            },
            {
            id:312,
            eng:"new",
            ru:"новый"
            },
            {
            id:313,
            eng:"nice",
            ru:"приятный"
            },
            {
            id:314,
            eng:"noisy",
            ru:"шумный"
            },
            {
            id:315,
            eng:"breathtaking",
            ru:"захватывающий дух"
            },
            {
            id:316,
            eng:"oily",
            ru:"маслянистый"
            },
            {
            id:317,
            eng:"old",
            ru:"старый"
            },
            {
            id:318,
            eng:"plain or simple",
            ru:"простой"
            },
            {
            id:319,
            eng:"polite",
            ru:"вежливый"
            },
            {
            id:320,
            eng:"poor",
            ru:"бедный"
            },
            {
            id:321,
            eng:"pretty",
            ru:"симпотный"
            },
            {
            id:322,
            eng:"proud",
            ru:"гордый"
            },
            {
            id:323,
            eng:"pure",
            ru:"безпримесный"
            },
            {
            id:324,
            eng:"quick",
            ru:"быстрый"
            },
            {
            id:325,
            eng:"quiet",
            ru:"тихий"
            },
            {
            id:326,
            eng:"rare",
            ru:"редкий"
            },
            {
            id:327,
            eng:"raw",
            ru:"сырой"
            },
            {
            id:328,
            eng:"rich",
            ru:"богатый"
            },
            {
            id:329,
            eng:"ripe",
            ru:"спелый"
            },
            {
            id:330,
            eng:"risky",
            ru:"рискованный"
            },
            {
            id:331,
            eng:"spacious",
            ru:"просторный"
            },
            {
            id:332,
            eng:"rough",
            ru:"черствый, грубый"
            },
            {
            id:333,
            eng:"rude",
            ru:"грубый в общении"
            },
            {
            id:334,
            eng:"rusty",
            ru:"ржавый"
            },
            {
            id:335,
            eng:"sad",
            ru:"грустный"
            },
            {
            id:336,
            eng:"safe",
            ru:"безопасный"
            },
            {
            id:337,
            eng:"salty",
            ru:"соленый"
            },
            {
            id:338,
            eng:"sane",
            ru:"здравый"
            },
            {
            id:339,
            eng:"scary",
            ru:"пугающий"
            },
            {
            id:340,
            eng:"correct",
            ru:"верный"
            },
            {
            id:341,
            eng:"sharp",
            ru:"острый"
            },
            {
            id:342,
            eng:"hollow",
            ru:"пустотелый"
            },
            {
            id:343,
            eng:"short",
            ru:"короткий, низкий"
            },
            {
            id:344,
            eng:"shy",
            ru:"застенчивый"
            },
            {
            id:345,
            eng:"silly",
            ru:"глупый"
            },
            {
            id:346,
            eng:"stupid",
            ru:"тупо"
            },
            {
            id:347,
            eng:"sincere",
            ru:"искренний"
            },
            {
            id:348,
            eng:"skinny",
            ru:"тощий"
            },
            {
            id:349,
            eng:"sleepy",
            ru:"сонный"
            },
            {
            id:350,
            eng:"slim",
            ru:"стройный"
            },
            {
            id:351,
            eng:"slimy",
            ru:"слизкий"
            },
            {
            id:352,
            eng:"slow",
            ru:"медленный"
            },
            {
            id:353,
            eng:"small",
            ru:"маленький"
            },
            {
            id:354,
            eng:"smart",
            ru:"сообразительный"
            },
            {
            id:355,
            eng:"smelly",
            ru:"вонючий"
            },
            {
            id:356,
            eng:"smoky",
            ru:"дымный"
            },
            {
            id:357,
            eng:"smooth",
            ru:"гладкий"
            },
            {
            id:358,
            eng:"soft",
            ru:"мягкий"
            },
            {
            id:359,
            eng:"soon",
            ru:"скоро"
            },
            {
            id:360,
            eng:"vulgar",
            ru:"вульгарный"
            },
            {
            id:361,
            eng:"sorry",
            ru:"сожалеющий"
            },
            {
            id:362,
            eng:"sour",
            ru:"кислый"
            },
            {
            id:363,
            eng:"spicy",
            ru:"острый"
            },
            {
            id:364,
            eng:"steep",
            ru:"крутой (наклон)"
            },
            {
            id:365,
            eng:"bloody",
            ru:"кровавый"
            },
            {
            id:366,
            eng:"strange or weird",
            ru:"странный"
            },
            {
            id:367,
            eng:"strict",
            ru:"строгий"
            },
            {
            id:368,
            eng:"strong",
            ru:"сильный"
            },
            {
            id:369,
            eng:"sunny",
            ru:"солнечный"
            },
            {
            id:370,
            eng:"sweaty",
            ru:"потный"
            },
            {
            id:371,
            eng:"sweet",
            ru:"сладкий"
            },
            {
            id:372,
            eng:"fabulous",
            ru:"поразительный"
            },
            {
            id:373,
            eng:"tanned",
            ru:"загорелый"
            },
            {
            id:374,
            eng:"tasty",
            ru:"вкусный"
            },
            {
            id:375,
            eng:"thin/thick",
            ru:"тонкий/толстый"
            },
            {
            id:376,
            eng:"immortal",
            ru:"бессмертный"
            },
            {
            id:377,
            eng:"thirsty",
            ru:"жаждущий"
            },
            {
            id:378,
            eng:"tiny",
            ru:"крошечный"
            },
            {
            id:379,
            eng:"legendary",
            ru:"легендарный"
            },
            {
            id:380,
            eng:"true /тру/",
            ru:"верный"
            },
            {
            id:381,
            eng:"ugly",
            ru:"уродливый"
            },
            {
            id:382,
            eng:"warm",
            ru:"теплый"
            },
            {
            id:383,
            eng:"weak",
            ru:"слабый"
            },
            {
            id:384,
            eng:"wealthy",
            ru:"состоятельный"
            },
            {
            id:385,
            eng:"wet",
            ru:"мокрый"
            },
            {
            id:386,
            eng:"wide",
            ru:"широкий"
            },
            {
            id:387,
            eng:"wild",
            ru:"дикий"
            },
            {
            id:388,
            eng:"windy",
            ru:"ветреный"
            },
            {
            id:389,
            eng:"wise",
            ru:"мудрый"
            },
            {
            id:390,
            eng:"worthy",
            ru:"достойный"
            },
            {
            id:391,
            eng:"young",
            ru:"молодой"
            },
            {
            id:392,
            eng:"reliable",
            ru:"надёжный"
            },
            {
            id:393,
            eng:"picky",
            ru:"придирчивый"
            },
            {
            id:394,
            eng:"successful",
            ru:"успешный"
            },
            {
            id:395,
            eng:"tricky",
            ru:"хитрый"
            },
            {
            id:396,
            eng:"good",
            ru:"хороший"
            },
            {
            id:397,
            eng:"bad",
            ru:"плохой"
            },
            {
            id:398,
            eng:"much or many",
            ru:"много"
            },		
    ],
    adjquest: [
        {
            id:201,
            eng:"boring",
            ru:"скучный"
            },
            {
            id:202,
            eng:"awesome",
            ru:"офигенный"
            },
            {
            id:203,
            eng:"angry",
            ru:"сердитый"
            },
            {
            id:204,
            eng:"big",
            ru:"большой"
            },
            {
            id:205,
            eng:"black",
            ru:"Черный"
            },
            {
            id:206,
            eng:"bold",
            ru:"смелый"
            },
            {
            id:207,
            eng:"blue",
            ru:"синий"
            },
            {
            id:208,
            eng:"bald",
            ru:"лысый"
            },
            {
            id:209,
            eng:"bossy",
            ru:"властный"
            },
            {
            id:210,
            eng:"brave",
            ru:"храбрый"
            },
            {
            id:211,
            eng:"interesting",
            ru:"интересный"
            },
            {
            id:212,
            eng:"bright",
            ru:"яркий"
            },
            {
            id:213,
            eng:"green",
            ru:"зелёный"
            },
            {
            id:214,
            eng:"busy",
            ru:"занятой"
            },
            {
            id:215,
            eng:"calm",
            ru:"спокойный"
            },
            {
            id:216,
            eng:"cheap",
            ru:"дешевый"
            },
            {
            id:217,
            eng:"attractive",
            ru:"привлекательный"
            },
            {
            id:218,
            eng:"overweight",
            ru:"полноватый"
            },
            {
            id:219,
            eng:"fashionable",
            ru:"модный"
            },
            {
            id:220,
            eng:"clean",
            ru:"чистый"
            },
            {
            id:221,
            eng:"intelligent",
            ru:"образованный"
            },
            {
            id:222,
            eng:"close",
            ru:"близкий"
            },
            {
            id:223,
            eng:"cloudy",
            ru:"облачный"
            },
            {
            id:224,
            eng:"clumsy",
            ru:"неуклюжий"
            },
            {
            id:225,
            eng:"disgusting",
            ru:"отвратительный"
            },
            {
            id:226,
            eng:"cold",
            ru:"холодный"
            },
            {
            id:227,
            eng:"cool",
            ru:"крутой"
            },
            {
            id:228,
            eng:"crazy",
            ru:"сумасшедший"
            },
            {
            id:229,
            eng:"beautiful",
            ru:"красивая"
            },
            {
            id:230,
            eng:"annoying",
            ru:"бесящий"
            },
            {
            id:231,
            eng:"crispy",
            ru:"хрустящий"
            },
            {
            id:232,
            eng:"wonderful",
            ru:"замечательный"
            },
            {
            id:233,
            eng:"curly",
            ru:"кудрявый"
            },
            {
            id:234,
            eng:"amazing",
            ru:"удивительный"
            },
            {
            id:235,
            eng:"cute",
            ru:"милый"
            },
            {
            id:236,
            eng:"sexy",
            ru:"сексуальный"
            },
            {
            id:237,
            eng:"dark",
            ru:"темный"
            },
            {
            id:238,
            eng:"deadly",
            ru:"смертельный"
            },
            {
            id:239,
            eng:"deep",
            ru:"глубокий"
            },
            {
            id:240,
            eng:"expensive",
            ru:"дорогой"
            },
            {
            id:241,
            eng:"dirty",
            ru:"грязный"
            },
            {
            id:242,
            eng:"dry",
            ru:"сухой"
            },
            {
            id:243,
            eng:"dull",
            ru:"затупившийся"
            },
            {
            id:244,
            eng:"dumb",
            ru:"болван"
            },
            {
            id:245,
            eng:"dusty",
            ru:"пыльный"
            },
            {
            id:246,
            eng:"early",
            ru:"ранний"
            },
            {
            id:247,
            eng:"easy",
            ru:"легкий"
            },
            {
            id:248,
            eng:"evil",
            ru:"злой"
            },
            {
            id:249,
            eng:"fantastic",
            ru:"фантастичный"
            },
            {
            id:250,
            eng:"fair",
            ru:"справедливый"
            },
            {
            id:251,
            eng:"fancy",
            ru:"изысканный"
            },
            {
            id:252,
            eng:"far",
            ru:"далекий"
            },
            {
            id:253,
            eng:"fast",
            ru:"быстрый"
            },
            {
            id:254,
            eng:"fat",
            ru:"жирный"
            },
            {
            id:255,
            eng:"few",
            ru:"несколько"
            },
            {
            id:256,
            eng:"fierce",
            ru:"свирепый"
            },
            {
            id:257,
            eng:"filthy",
            ru:"мерзкий"
            },
            {
            id:258,
            eng:"handsome",
            ru:"красивый (муж)"
            },
            {
            id:259,
            eng:"firm",
            ru:"упругий"
            },
            {
            id:260,
            eng:"incredible",
            ru:"невероятный"
            },
            {
            id:261,
            eng:"shocking",
            ru:"шокирующий"
            },
            {
            id:262,
            eng:"flat",
            ru:"плоский"
            },
            {
            id:263,
            eng:"fresh",
            ru:"свежий"
            },
            {
            id:264,
            eng:"friendly",
            ru:"дружелюбный"
            },
            {
            id:265,
            eng:"full",
            ru:"полный"
            },
            {
            id:266,
            eng:"funny",
            ru:"смешной"
            },
            {
            id:267,
            eng:"gentle",
            ru:"нежный"
            },
            {
            id:268,
            eng:"gloomy",
            ru:"мрачный"
            },
            {
            id:269,
            eng:"shitty",
            ru:"дерьмовенький"
            },
            {
            id:270,
            eng:"great",
            ru:"великий"
            },
            {
            id:271,
            eng:"greedy",
            ru:"жадный"
            },
            {
            id:272,
            eng:"shiny",
            ru:"светящийся"
            },
            {
            id:273,
            eng:"hairy",
            ru:"волосатый"
            },
            {
            id:274,
            eng:"cozy",
            ru:"уютный"
            },
            {
            id:275,
            eng:"happy",
            ru:"счастливый"
            },
            {
            id:276,
            eng:"hard",
            ru:"трудный"
            },
            {
            id:277,
            eng:"harsh",
            ru:"суровый"
            },
            {
            id:278,
            eng:"healthy",
            ru:"здоровый"
            },
            {
            id:279,
            eng:"heavy",
            ru:"тяжелый"
            },
            {
            id:280,
            eng:"high/tall",
            ru:"высокий"
            },
            {
            id:281,
            eng:"scared",
            ru:"напуганный"
            },
            {
            id:282,
            eng:"hot",
            ru:"горячий"
            },
            {
            id:283,
            eng:"humble",
            ru:"скромный"
            },
            {
            id:284,
            eng:"hungry",
            ru:"голодный"
            },
            {
            id:285,
            eng:"icy",
            ru:"ледяной"
            },
            {
            id:286,
            eng:"itchy",
            ru:"зудящий"
            },
            {
            id:287,
            eng:"juicy",
            ru:"сочный"
            },
            {
            id:288,
            eng:"kind",
            ru:"добрый"
            },
            {
            id:289,
            eng:"large",
            ru:"большой"
            },
            {
            id:290,
            eng:"late",
            ru:"поздний"
            },
            {
            id:291,
            eng:"lazy",
            ru:"ленивый"
            },
            {
            id:292,
            eng:"light",
            ru:"светлый"
            },
            {
            id:293,
            eng:"favorite",
            ru:"любимый"
            },
            {
            id:294,
            eng:"little",
            ru:"мало"
            },
            {
            id:295,
            eng:"alive",
            ru:"живой"
            },
            {
            id:296,
            eng:"long",
            ru:"длинный"
            },
            {
            id:297,
            eng:"loud",
            ru:"громкий"
            },
            {
            id:298,
            eng:"drunk",
            ru:"пьяный"
            },
            {
            id:299,
            eng:"low",
            ru:"низкий"
            },
            {
            id:300,
            eng:"mad",
            ru:"безумный"
            },
            {
            id:301,
            eng:"mean",
            ru:"злобный"
            },
            {
            id:302,
            eng:"messy",
            ru:"неряшливый"
            },
            {
            id:303,
            eng:"bothering",
            ru:"раздражающий"
            },
            {
            id:304,
            eng:"merry",
            ru:"веселый"
            },
            {
            id:305,
            eng:"narrow",
            ru:"узкий"
            },
            {
            id:306,
            eng:"nasty",
            ru:"противный"
            },
            {
            id:307,
            eng:"naughty",
            ru:"непослушный"
            },
            {
            id:308,
            eng:"near",
            ru:"ближайший"
            },
            {
            id:309,
            eng:"neat",
            ru:"аккуратный"
            },
            {
            id:310,
            eng:"needy",
            ru:"нуждающийся"
            },
            {
            id:311,
            eng:"nervous",
            ru:"нервный"
            },
            {
            id:312,
            eng:"new",
            ru:"новый"
            },
            {
            id:313,
            eng:"nice",
            ru:"приятный"
            },
            {
            id:314,
            eng:"noisy",
            ru:"шумный"
            },
            {
            id:315,
            eng:"breathtaking",
            ru:"захватывающий дух"
            },
            {
            id:316,
            eng:"oily",
            ru:"маслянистый"
            },
            {
            id:317,
            eng:"old",
            ru:"старый"
            },
            {
            id:318,
            eng:"plain or simple",
            ru:"простой"
            },
            {
            id:319,
            eng:"polite",
            ru:"вежливый"
            },
            {
            id:320,
            eng:"poor",
            ru:"бедный"
            },
            {
            id:321,
            eng:"pretty",
            ru:"симпотный"
            },
            {
            id:322,
            eng:"proud",
            ru:"гордый"
            },
            {
            id:323,
            eng:"pure",
            ru:"безпримесный"
            },
            {
            id:324,
            eng:"quick",
            ru:"быстрый"
            },
            {
            id:325,
            eng:"quiet",
            ru:"тихий"
            },
            {
            id:326,
            eng:"rare",
            ru:"редкий"
            },
            {
            id:327,
            eng:"raw",
            ru:"сырой"
            },
            {
            id:328,
            eng:"rich",
            ru:"богатый"
            },
            {
            id:329,
            eng:"ripe",
            ru:"спелый"
            },
            {
            id:330,
            eng:"risky",
            ru:"рискованный"
            },
            {
            id:331,
            eng:"spacious",
            ru:"просторный"
            },
            {
            id:332,
            eng:"rough",
            ru:"черствый, грубый"
            },
            {
            id:333,
            eng:"rude",
            ru:"грубый в общении"
            },
            {
            id:334,
            eng:"rusty",
            ru:"ржавый"
            },
            {
            id:335,
            eng:"sad",
            ru:"грустный"
            },
            {
            id:336,
            eng:"safe",
            ru:"безопасный"
            },
            {
            id:337,
            eng:"salty",
            ru:"соленый"
            },
            {
            id:338,
            eng:"sane",
            ru:"здравый"
            },
            {
            id:339,
            eng:"scary",
            ru:"пугающий"
            },
            {
            id:340,
            eng:"correct",
            ru:"верный"
            },
            {
            id:341,
            eng:"sharp",
            ru:"острый"
            },
            {
            id:342,
            eng:"hollow",
            ru:"пустотелый"
            },
            {
            id:343,
            eng:"short",
            ru:"короткий, низкий"
            },
            {
            id:344,
            eng:"shy",
            ru:"застенчивый"
            },
            {
            id:345,
            eng:"silly",
            ru:"глупый"
            },
            {
            id:346,
            eng:"stupid",
            ru:"тупо"
            },
            {
            id:347,
            eng:"sincere",
            ru:"искренний"
            },
            {
            id:348,
            eng:"skinny",
            ru:"тощий"
            },
            {
            id:349,
            eng:"sleepy",
            ru:"сонный"
            },
            {
            id:350,
            eng:"slim",
            ru:"стройный"
            },
            {
            id:351,
            eng:"slimy",
            ru:"слизкий"
            },
            {
            id:352,
            eng:"slow",
            ru:"медленный"
            },
            {
            id:353,
            eng:"small",
            ru:"маленький"
            },
            {
            id:354,
            eng:"smart",
            ru:"сообразительный"
            },
            {
            id:355,
            eng:"smelly",
            ru:"вонючий"
            },
            {
            id:356,
            eng:"smoky",
            ru:"дымный"
            },
            {
            id:357,
            eng:"smooth",
            ru:"гладкий"
            },
            {
            id:358,
            eng:"soft",
            ru:"мягкий"
            },
            {
            id:359,
            eng:"soon",
            ru:"скоро"
            },
            {
            id:360,
            eng:"vulgar",
            ru:"вульгарный"
            },
            {
            id:361,
            eng:"sorry",
            ru:"сожалеющий"
            },
            {
            id:362,
            eng:"sour",
            ru:"кислый"
            },
            {
            id:363,
            eng:"spicy",
            ru:"острый"
            },
            {
            id:364,
            eng:"steep",
            ru:"крутой (наклон)"
            },
            {
            id:365,
            eng:"bloody",
            ru:"кровавый"
            },
            {
            id:366,
            eng:"strange or weird",
            ru:"странный"
            },
            {
            id:367,
            eng:"strict",
            ru:"строгий"
            },
            {
            id:368,
            eng:"strong",
            ru:"сильный"
            },
            {
            id:369,
            eng:"sunny",
            ru:"солнечный"
            },
            {
            id:370,
            eng:"sweaty",
            ru:"потный"
            },
            {
            id:371,
            eng:"sweet",
            ru:"сладкий"
            },
            {
            id:372,
            eng:"fabulous",
            ru:"поразительный"
            },
            {
            id:373,
            eng:"tanned",
            ru:"загорелый"
            },
            {
            id:374,
            eng:"tasty",
            ru:"вкусный"
            },
            {
            id:375,
            eng:"thin/thick",
            ru:"тонкий/толстый"
            },
            {
            id:376,
            eng:"immortal",
            ru:"бессмертный"
            },
            {
            id:377,
            eng:"thirsty",
            ru:"жаждущий"
            },
            {
            id:378,
            eng:"tiny",
            ru:"крошечный"
            },
            {
            id:379,
            eng:"legendary",
            ru:"легендарный"
            },
            {
            id:380,
            eng:"true /тру/",
            ru:"верный"
            },
            {
            id:381,
            eng:"ugly",
            ru:"уродливый"
            },
            {
            id:382,
            eng:"warm",
            ru:"теплый"
            },
            {
            id:383,
            eng:"weak",
            ru:"слабый"
            },
            {
            id:384,
            eng:"wealthy",
            ru:"состоятельный"
            },
            {
            id:385,
            eng:"wet",
            ru:"мокрый"
            },
            {
            id:386,
            eng:"wide",
            ru:"широкий"
            },
            {
            id:387,
            eng:"wild",
            ru:"дикий"
            },
            {
            id:388,
            eng:"windy",
            ru:"ветреный"
            },
            {
            id:389,
            eng:"wise",
            ru:"мудрый"
            },
            {
            id:390,
            eng:"worthy",
            ru:"достойный"
            },
            {
            id:391,
            eng:"young",
            ru:"молодой"
            },
            {
            id:392,
            eng:"reliable",
            ru:"надёжный"
            },
            {
            id:393,
            eng:"picky",
            ru:"придирчивый"
            },
            {
            id:394,
            eng:"successful",
            ru:"успешный"
            },
            {
            id:395,
            eng:"tricky",
            ru:"хитрый"
            },
            {
            id:396,
            eng:"good",
            ru:"хороший"
            },
            {
            id:397,
            eng:"bad",
            ru:"плохой"
            },
            {
            id:398,
            eng:"much or many",
            ru:"много"
            },		
    ],
    abc: [
        {
            id:1,
            eng:"eat",
            ru:"кушать, есть, съесть, поедать, принимать пищу"
            },
            {
            id:2,
            eng:"like",
            ru:"нравитЬся/нравиТся"
            },
            {
            id:3,
            eng:"love",
            ru:"любить/люблю"
            },
            {
            id:4,
            eng:"break",
            ru:"ломать, сломать, поломать, разломать, нарушить"
            },
            {
            id:5,
            eng:"beat",
            ru:"бить, побить в соревновании"
            },
            {
            id:6,
            eng:"become",
            ru:"становиться/стать"
            },
            {
            id:7,
            eng:"begin",
            ru:"начинать/начать"
            },
            {
            id:8,
            eng:"blow",
            ru:"дуть/подуть"
            },
            {
            id:9,
            eng:"build",
            ru:"строить/построить"
            },
            {
            id:10,
            eng:"burn",
            ru:"сжигать или гореть"
            },
            {
            id:11,
            eng:"buy",
            ru:"покупать"
            },
            {
            id:12,
            eng:"bring",
            ru:"приносить"
            },
            {
            id:13,
            eng:"be",
            ru:"быть/яляться"
            },
            {
            id:14,
            eng:"bite",
            ru:"кусать, покусать, укусить"
            },
            {
            id:15,
            eng:"come",
            ru:"приходить"
            },
            {
            id:16,
            eng:"choose",
            ru:"выбирать"
            },
            {
            id:17,
            eng:"catch",
            ru:"ловить"
            },		
            {
            id:18,
            eng:"do",
            ru:"делать/выполнять"
            },		
    ],
    spanish: [
        {
            id:1,
            eng:"Yo",
            ru:"Я"
            },
            {
            id:2,
            eng:"Tu",
            ru:"Ты"
            },
            {
            id:3,
            eng:"Ella",
            ru:"Она"
            },
            {
            id:4,
            eng:"El",
            ru:"Он"
            },
            {
            id:5,
            eng:"Nosotros",
            ru:"Мы"
            },
            {
            id:6,
            eng:"Vosotros",
            ru:"Вы"
            },
            {
            id:7,
            eng:"Ellos",
            ru:"Они"
            },
            {
            id:8,
            eng:"muy bien",
            ru:"Очень хорошо"
            },
            {
            id:9,
            eng:"Hola",
            ru:"Привет"
            },
            {
            id:10,
            eng:"Buenos dias",
            ru:"Добрый день"
            },
            {
            id:11,
            eng:"buenos tardes",
            ru:"Добрый вечер"
            },
            {
            id:12,
            eng:"Que tal",
            ru:"Как дела"
            },
            {
            id:13,
            eng:"Adios",
            ru:"Пока"
            },
            {
            id:14,
            eng:"Hasta luego",
            ru:"Скоро увидимся"
            },
            {
            id:15,
            eng:"Mucho gusto",
            ru:"Очень приятно"
            },
            {
            id:16,
            eng:"Perdona",
            ru:"Извините, не понял"
            },
            {
            id:17,
            eng:"Encantado",
            ru:"Взаимно"
            },
            {
            id:18,
            eng:"Quien eres",
            ru:"Кто вы"
            },
            {
            id:19,
            eng:"Verde",
            ru:"Зеленый"
            },
            {
            id:20,
            eng:"Azul",
            ru:"Синий"
            },
            {
            id:21,
            eng:"Amarilo",
            ru:"Желтый"
            },
            {
            id:22,
            eng:"NaranjA",
            ru:"Оранжевый"
            },
            {
            id:23,
            eng:"Rojo",
            ru:"Красный"
            },
            {
            id:24,
            eng:"RosA",
            ru:"Розовый"
            },
            {
            id:25,
            eng:"VioletA",
            ru:"Фиолетовый"
            },
            {
            id:26,
            eng:"Marron",
            ru:"Коричневый"
            },
            {
            id:27,
            eng:"Negro",
            ru:"Черный"
            },
            {
            id:28,
            eng:"Mochila",
            ru:"Рюкзак"
            },
            {
            id:29,
            eng:"La gente",
            ru:"Народ"
            },
            {
            id:30,
            eng:"Dios mio",
            ru:"Боже мой"
            },
            {
            id:31,
            eng:"de mucho colores",
            ru:"многоцветный"
            },
            {
            id:32,
            eng:"verguenza",
            ru:"стыд, позор"
            },
            {
            id:33,
            eng:"Me parece que",
            ru:"мне кажется, что"
            },
            {
            id:34,
            eng:"Donde estas?",
            ru:"Где ты сейчас?"
            },
            {
            id:35,
            eng:"De donde eres?",
            ru:"Откуда ты родом?"
            },
            {
            id:36,
            eng:"Estoy en Rusia",
            ru:"Я сейчас в России"
            },
            {
            id:37,
            eng:"Soy de Estados Unidos",
            ru:"Я живу в США"
            },
            {
            id:38,
            eng:"Alemania",
            ru:"Германия"
            },
            {
            id:39,
            eng:"El parque",
            ru:"Парк"
            },
            {
            id:40,
            eng:"Los edificios",
            ru:"здания, строения"
            },
            {
            id:41,
            eng:"La universidad",
            ru:"университет"
            },
            {
            id:42,
            eng:"El ayuntamiento",
            ru:"администрация"
            },
            {
            id:43,
            eng:"El teatro",
            ru:"театр"
            },
            {
            id:44,
            eng:"El supermercado",
            ru:"супермаркет"
            },
            {
            id:45,
            eng:"La farmacia",
            ru:"аптека"
            },
            {
            id:46,
            eng:"La escuela",
            ru:"школа"
            },
            {
            id:47,
            eng:"La iglesia",
            ru:"церковь"
            },
            {
            id:48,
            eng:"La fabrica",
            ru:"завод, фабрика"
            },
            {
            id:49,
            eng:"El aeropuerto",
            ru:"аэропорт"
            },
            {
            id:50,
            eng:"La catedral",
            ru:"собор"
            },
            {
            id:51,
            eng:"La tienda",
            ru:"магазин"
            },
            {
            id:52,
            eng:"El restaurante",
            ru:"ресторан"
            },
            {
            id:53,
            eng:"La estacion",
            ru:"станция метро"
            },
            {
            id:54,
            eng:"El estadio",
            ru:"стадион"
            },
            {
            id:55,
            eng:"El aparcamiento",
            ru:"парковка"
            },
            {
            id:56,
            eng:"El museo",
            ru:"музей"
            },
            {
            id:57,
            eng:"Correos",
            ru:"почта"
            },
            {
            id:58,
            eng:"El hotel",
            ru:"отель"
            },
            {
            id:59,
            eng:"El bar",
            ru:"бар"
            },
            {
            id:60,
            eng:"El cine",
            ru:"кино"
            },
            {
            id:61,
            eng:"El hospital",
            ru:"Больница"
            },
            {
            id:62,
            eng:"Que es esto?",
            ru:"Что это?"
            },
            {
            id:63,
            eng:"la butaca",
            ru:"кресло"
            },		
    ],
    xyz: [
            
        {
        id:22,
        eng:"deal",
        ru:"иметь дела"
        },
        {
        id:23,
        eng:"dig",
        ru:"копать"
        },
        {
        id:24,
        eng:"do",
        ru:"выполнять, делать, заниматься"
        },
        {
        id:25,
        eng:"drive",
        ru:"водить"
        },
        {
        id:26,
        eng:"draw",
        ru:"рисовать"
        },
        {
        id:27,
        eng:"drink",
        ru:"пить"
        },
        {
        id:28,
        eng:"eat",
        ru:"кушать"
        },
        {
        id:29,
        eng:"fall",
        ru:"падать"
        },
        {
        id:30,
        eng:"feed",
        ru:"кормить"
        },
        {
        id:31,
        eng:"feel",
        ru:"чувствовать"
        },
        {
        id:32,
        eng:"fight",
        ru:"сражаться"
        },
        {
        id:33,
        eng:"find",
        ru:"находить"
        },
        {
        id:34,
        eng:"fly",
        ru:"летать"
        },
        {
        id:35,
        eng:"forbid",
        ru:"запрещать"
        },
        {
        id:36,
        eng:"forget",
        ru:"забывать"
        },
        {
        id:37,
        eng:"forgive",
        ru:"прощать"
        },
        {
        id:38,
        eng:"freeze",
        ru:"замерзать"
        },
        {
        id:39,
        eng:"grow",
        ru:"расти"
        },
        {
        id:40,
        eng:"get",
        ru:"получать"
        },
        {
        id:41,
        eng:"give",
        ru:"давать"
        },
        {
        id:42,
        eng:"go",
        ru:"ходить"
        },
        {
        id:43,
        eng:"have",
        ru:"иметь"
        },
        {
        id:44,
        eng:"hear",
        ru:"слышать"
        },
        {
        id:45,
        eng:"hide",
        ru:"прятать"
        },
        {
        id:46,
        eng:"hit",
        ru:"ударять"
        },
        {
        id:47,
        eng:"hurt",
        ru:"причинять боль"
        },
        {
        id:48,
        eng:"hold",
        ru:"держать"
        },
        {
        id:49,
        eng:"keep",
        ru:"хранить"
        },
        {
        id:50,
        eng:"know",
        ru:"знать"
        },
                
],
    stickyVerbs1: [
        {
            id:1,
            eng:"love",
            ru:"Любить"
            },
            {
            id:2,
            eng:"like",
            ru:"Нравится"
            },
            {
            id:3,
            eng:"enjoy",
            ru:"Наслаждаться, получать удовольствие от"
            },
            {
            id:4,
            eng:"give up",
            ru:"Сдаваться, прекращать делать что-то"
            },
            {
            id:5,
            eng:"go on",
            ru:"Продолжать"
            },
            {
            id:6,
            eng:"stop",
            ru:"Остановиться, перестать"
            },
            {
            id:7,
            eng:"hate",
            ru:"Ненавидеть"
            },
            {
            id:8,
            eng:"I like you",
            ru:"Ты мне нравишься"
            },
            {
            id:9,
            eng:"You like English",
            ru:"Тебе нравится английский"
            },			
    ],
    technologic: [
        {
            id:1,
            eng:"Buy it",
            ru:"Купи это"
            },
            {
            id:2,
            eng:"Use  it",
            ru:"Используй это"
            },
            {
            id:3,
            eng:"Break it",
            ru:"Сломай это"
            },
            {
            id:4,
            eng:"Fix it",
            ru:"Отремонтируй это"
            },
            {
            id:5,
            eng:"Trash it",
            ru:"Выкини это на мусорку"
            },
            {
            id:6,
            eng:"Change it",
            ru:"Поменяй это"
            },
            {
            id:7,
            eng:"Mail it",
            ru:"Пошли это по почте"
            },
            {
            id:8,
            eng:"Upgrade it",
            ru:"Усовершенствуй, обнови это"
            },
            {
            id:9,
            eng:"Charge it",
            ru:"Подзаряди это"
            },
            {
            id:10,
            eng:"Point it",
            ru:"Укажи на это"
            },
            {
            id:11,
            eng:"Zoom it",
            ru:"Увеличь это"
            },
            {
            id:12,
            eng:"Press it",
            ru:"Нажми это"
            },
            {
            id:13,
            eng:"Rename it",
            ru:"Переименуй это"
            },
            {
            id:14,
            eng:"Work it",
            ru:"Проработай это"
            },
            {
            id:15,
            eng:"Erase it",
            ru:"Сотри это"
            },
            {
            id:16,
            eng:"Write it",
            ru:"Напиши это"
            },
            {
            id:17,
            eng:"Cut it",
            ru:"Вырежи это"
            },
            {
            id:18,
            eng:"Paste it",
            ru:"Вставь это"
            },
            {
            id:19,
            eng:"Save it",
            ru:"Сохрани это"
            },
            {
            id:20,
            eng:"Load it",
            ru:"Загрузи это"
            },
            {
            id:21,
            eng:"Check it",
            ru:"Проверь это"
            },
            {
            id:22,
            eng:"Rewrite it",
            ru:"Перепиши это"
            },
            {
            id:23,
            eng:"Plug and play",
            ru:"Включи в сеть и играй"
            },
            {
            id:24,
            eng:"Burn it",
            ru:"Сожги это"
            },
            {
            id:25,
            eng:"Drag it",
            ru:"Перетащи, перетяни это"
            },
            {
            id:26,
            eng:"Zip, unzip it",
            ru:"Застегни, расстегни это"
            },
            {
            id:27,
            eng:"Lock it",
            ru:"Закрой это на замок"
            },
            {
            id:28,
            eng:"Fill it",
            ru:"Заполни это"
            },
            {
            id:29,
            eng:"Call it",
            ru:"Позови это"
            },
            {
            id:30,
            eng:"Find it",
            ru:"Найди это"
            },
            {
            id:31,
            eng:"View it",
            ru:"Осмотри это"
            },
            {
            id:32,
            eng:"Code it",
            ru:"Закодируй это"
            },
            {
            id:33,
            eng:"Jam",
            ru:"замятие, пробка, варенье"
            },
            {
            id:34,
            eng:"Unlock it",
            ru:"Разблокируй это"
            },
            {
            id:35,
            eng:"Scroll it",
            ru:"Полистай это, прокрути это"
            },
            {
            id:36,
            eng:"Pause it",
            ru:"Приостанови это"
            },
            {
            id:37,
            eng:"Cross it",
            ru:"Перечеркни это"
            },
            {
            id:38,
            eng:"Crack it",
            ru:"взломай это"
            },
            {
            id:39,
            eng:"Switch",
            ru:"Переключи"
            },
            {
            id:40,
            eng:"Name it",
            ru:"Назови это"
            },
            {
            id:41,
            eng:"Tune it",
            ru:"Настрой это (про муз.инструменты)"
            },
            {
            id:42,
            eng:"Touch it",
            ru:"Потрогай это"
            },
            {
            id:43,
            eng:"Turn it",
            ru:"Поверни это"
            },
            {
            id:44,
            eng:"Rip it",
            ru:"Разорви это"
            },
            {
            id:45,
            eng:"Leave it",
            ru:"Покинь это, оставь это"
            },
            {
            id:46,
            eng:"Stop it",
            ru:"Прекрати, останови это"
            },
            {
            id:47,
            eng:"Format it",
            ru:"Отформатируй это"
            },
            {
            id:48,
            eng:"Print it",
            ru:"Распечатай это"
            },
            {
            id:49,
            eng:"Bring it",
            ru:"Принеси это"
            },
            {
            id:50,
            eng:"Pay quickly",
            ru:"Заплати быстро"
            },
            {
            id:51,
            eng:"Click it",
            ru:"Кликни по этому"
            },
            {
            id:52,
            eng:"Drop it",
            ru:"Урони это"
            },
            {
            id:53,
            eng:"Rate it",
            ru:"Дай этому оценку, оцени это"
            },
            {
            id:54,
            eng:"Update it",
            ru:"Обнови это "
            },
            {
            id:55,
            eng:"Feel it",
            ru:"Почувствуй это"
            },
            {
            id:56,
            eng:"Look at this",
            ru:"Посмотри вот на это"
            },	
    ],
    bodyAdj: [
        {
            id:58,
            eng:"Firm",
            ru:"Упругий"
            },
            {
            id:59,
            eng:"Fit",
            ru:"Спортивный, атлетичный, подтянутый"
            },
            {
            id:60,
            eng:"Slim",
            ru:"Стройный"
            },
            {
            id:61,
            eng:"Wide",
            ru:"Широкий"
            },
            {
            id:62,
            eng:"Fat",
            ru:"Жирный"
            },
            {
            id:63,
            eng:"Short",
            ru:"Короткий"
            },
            {
            id:64,
            eng:"Hairy",
            ru:"Волосатый"
            },
            {
            id:65,
            eng:"Muscular",
            ru:"Мускулистый"
            },
            {
            id:66,
            eng:"Large",
            ru:"Крупный"
            },
            {
            id:67,
            eng:"Long",
            ru:"Длинный"
            },
            {
            id:68,
            eng:"Pierced",
            ru:"Проколотоый"
            },
            {
            id:69,
            eng:"Crooked",
            ru:"Кривые"
            },
            {
            id:70,
            eng:"Round",
            ru:"Круглый"
            },
            {
            id:71,
            eng:"Square",
            ru:"Квадратный"
            },
            {
            id:72,
            eng:"Skinny",
            ru:"Тощий"
            },
            {
            id:73,
            eng:"Thick",
            ru:"Толстый"
            },
            {
            id:74,
            eng:"Thin",
            ru:"Худой, Тонкий"
            },
            {
            id:75,
            eng:"Big",
            ru:"Большой"
            },
            {
            id:76,
            eng:"Small",
            ru:"Маленький"
            },
            {
            id:77,
            eng:"Upper",
            ru:"Верхний"
            },
            {
            id:78,
            eng:"Lower",
            ru:"Нижний"
            },
    ],
    upperBody: [
        {
            id:1,
            eng:"Head",
            ru:"Голова"
            },
            {
            id:2,
            eng:"Ear",
            ru:"Ухо"
            },
            {
            id:3,
            eng:"Ears",
            ru:"Уши"
            },
            {
            id:4,
            eng:"Eye",
            ru:"Глаз"
            },
            {
            id:5,
            eng:"Eyes",
            ru:"Глаза"
            },
            {
            id:6,
            eng:"Nose",
            ru:"Нос"
            },
            {
            id:7,
            eng:"Neck",
            ru:"Шея"
            },
            {
            id:8,
            eng:"Mouth",
            ru:"Рот"
            },
            {
            id:9,
            eng:"Lips",
            ru:"Губы"
            },
            {
            id:10,
            eng:"Teeth",
            ru:"Зубы"
            },
            {
            id:11,
            eng:"Tooth",
            ru:"Зуб"
            },
            {
            id:12,
            eng:"Eyebrows",
            ru:"Брови"
            },
            {
            id:13,
            eng:"Long Hair",
            ru:"Длинные Волосы"
            },
            {
            id:14,
            eng:"Short Hair",
            ru:"Короткие Волосы"
            },
            {
            id:15,
            eng:"Straight Hair",
            ru:"Прямые Волосы"
            },
            {
            id:16,
            eng:"Wavy Hair",
            ru:"Волнистые Волосы"
            },
            {
            id:17,
            eng:"Curly Hair",
            ru:"Кудрявые Волосы"
            },
            {
            id:18,
            eng:"Bald",
            ru:"Лысый"
            },
            {
            id:19,
            eng:"Beard",
            ru:"Борода"
            },
            {
            id:20,
            eng:"Moustache",
            ru:"Усы"
            },
            {
            id:21,
            eng:"Forehead",
            ru:"Лоб"
            },
            {
            id:22,
            eng:"Tongue",
            ru:"Язык"
            },
            {
            id:23,
            eng:"Cheeks",
            ru:"Щёки"
            },
            {
            id:24,
            eng:"Chin",
            ru:"Подбородок"
            },
            {
            id:25,
            eng:"Fringe",
            ru:"Чёлка"
            },
            {
            id:26,
            eng:"Freckles",
            ru:"Веснушки"
            },
            {
            id:27,
            eng:"Wrinkles",
            ru:"Морщинки, cкладки"
            },
            {
            id:28,
            eng:"Tattoos",
            ru:"Татуировки"
            },		
    ],
    lowerBody: [
        {
            id:29,
            eng:"Shoulders",
            ru:"Плечи"
            },
            {
            id:30,
            eng:"Arms",
            ru:"Руки"
            },
            {
            id:31,
            eng:"Arm",
            ru:"Рука"
            },
            {
            id:32,
            eng:"Breast",
            ru:"Грудь"
            },
            {
            id:33,
            eng:"Chest",
            ru:"Грудная Клетка"
            },
            {
            id:34,
            eng:"Body",
            ru:"Тело"
            },
            {
            id:35,
            eng:"Hands",
            ru:"Кисти Рук"
            },
            {
            id:36,
            eng:"Belly button",
            ru:"Пупок"
            },
            {
            id:37,
            eng:"Belly",
            ru:"Пузико"
            },
            {
            id:38,
            eng:"Tummy",
            ru:"Животик"
            },
            {
            id:39,
            eng:"Firm bottom",
            ru:"Упругая попа"
            },
            {
            id:40,
            eng:"Beer Belly",
            ru:"Пивное Пузо"
            },
            {
            id:41,
            eng:"Fingers",
            ru:"Пальцы На Руках"
            },
            {
            id:42,
            eng:"Wrist",
            ru:"Запястье"
            },
            {
            id:43,
            eng:"Lower back",
            ru:"Поясница"
            },
            {
            id:44,
            eng:"Body",
            ru:"Туловище, тело"
            },
            {
            id:45,
            eng:"Body parts",
            ru:"Части Тела"
            },
            {
            id:46,
            eng:"Knee",
            ru:"Колено"
            },
            {
            id:47,
            eng:"Knees",
            ru:"Колени"
            },
            {
            id:48,
            eng:"Legs",
            ru:"Ноги"
            },
            {
            id:49,
            eng:"A Foot",
            ru:"Ступня"
            },
            {
            id:50,
            eng:"Toes",
            ru:"Пальцы На Ногах"
            },
            {
            id:51,
            eng:"Hair",
            ru:"Волосы"
            },
            {
            id:52,
            eng:"Back",
            ru:"Спина"
            },
            {
            id:53,
            eng:"A Scar",
            ru:"Шрам"
            },
            {
            id:54,
            eng:"Birthmark",
            ru:"Родимое пятно"
            },
            {
            id:55,
            eng:"Mole",
            ru:"Родинка"
            },
            {
            id:56,
            eng:"Heels",
            ru:"Пятки"
            },
            {
            id:57,
            eng:"Abs",
            ru:"Пресс (кубики на животе)"
            },	
    ],
    allBodyParts: [
        {
            id:1,
            eng:"Head",
            ru:"Голова"
            },
            {
            id:2,
            eng:"Ear",
            ru:"Ухо"
            },
            {
            id:3,
            eng:"Ears",
            ru:"Уши"
            },
            {
            id:4,
            eng:"Eye",
            ru:"Глаз"
            },
            {
            id:5,
            eng:"Eyes",
            ru:"Глаза"
            },
            {
            id:6,
            eng:"Nose",
            ru:"Нос"
            },
            {
            id:7,
            eng:"Neck",
            ru:"Шея"
            },
            {
            id:8,
            eng:"Mouth",
            ru:"Рот"
            },
            {
            id:9,
            eng:"Lips",
            ru:"Губы"
            },
            {
            id:10,
            eng:"Teeth",
            ru:"Зубы"
            },
            {
            id:11,
            eng:"Tooth",
            ru:"Зуб"
            },
            {
            id:12,
            eng:"Eyebrows",
            ru:"Брови"
            },
            {
            id:13,
            eng:"Long Hair",
            ru:"Длинные Волосы"
            },
            {
            id:14,
            eng:"Short Hair",
            ru:"Короткие Волосы"
            },
            {
            id:15,
            eng:"Straight Hair",
            ru:"Прямые Волосы"
            },
            {
            id:16,
            eng:"Wavy Hair",
            ru:"Волнистые Волосы"
            },
            {
            id:17,
            eng:"Curly Hair",
            ru:"Кудрявые Волосы"
            },
            {
            id:18,
            eng:"Bald",
            ru:"Лысый"
            },
            {
            id:19,
            eng:"Beard",
            ru:"Борода"
            },
            {
            id:20,
            eng:"Moustache",
            ru:"Усы"
            },
            {
            id:21,
            eng:"Forehead",
            ru:"Лоб"
            },
            {
            id:22,
            eng:"Tongue",
            ru:"Язык"
            },
            {
            id:23,
            eng:"Cheeks",
            ru:"Щёки"
            },
            {
            id:24,
            eng:"Chin",
            ru:"Подбородок"
            },
            {
            id:25,
            eng:"Fringe",
            ru:"Чёлка"
            },
            {
            id:26,
            eng:"Freckles",
            ru:"Веснушки"
            },
            {
            id:27,
            eng:"Wrinkles",
            ru:"Морщинки, cкладки"
            },
            {
            id:28,
            eng:"Tattoos",
            ru:"Татуировки"
            },
            {
            id:29,
            eng:"Shoulders",
            ru:"Плечи"
            },
            {
            id:30,
            eng:"Arms",
            ru:"Руки"
            },
            {
            id:31,
            eng:"Arm",
            ru:"Рука"
            },
            {
            id:32,
            eng:"Breast",
            ru:"Грудь"
            },
            {
            id:33,
            eng:"Chest",
            ru:"Грудная Клетка"
            },
            {
            id:34,
            eng:"Body",
            ru:"Тело"
            },
            {
            id:35,
            eng:"Hands",
            ru:"Кисти Рук"
            },
            {
            id:36,
            eng:"Belly button",
            ru:"Пупок"
            },
            {
            id:37,
            eng:"Belly",
            ru:"Пузико"
            },
            {
            id:38,
            eng:"Tummy",
            ru:"Животик"
            },
            {
            id:39,
            eng:"Firm bottom",
            ru:"Упругая попа"
            },
            {
            id:40,
            eng:"Beer Belly",
            ru:"Пивное Пузо"
            },
            {
            id:41,
            eng:"Fingers",
            ru:"Пальцы На Руках"
            },
            {
            id:42,
            eng:"Wrist",
            ru:"Запястье"
            },
            {
            id:43,
            eng:"Lower back",
            ru:"Поясница"
            },
            {
            id:44,
            eng:"Body",
            ru:"Туловище, тело"
            },
            {
            id:45,
            eng:"Body parts",
            ru:"Части Тела"
            },
            {
            id:46,
            eng:"Knee",
            ru:"Колено"
            },
            {
            id:47,
            eng:"Knees",
            ru:"Колени"
            },
            {
            id:48,
            eng:"Legs",
            ru:"Ноги"
            },
            {
            id:49,
            eng:"A Foot",
            ru:"Ступня"
            },
            {
            id:50,
            eng:"Toes",
            ru:"Пальцы На Ногах"
            },
            {
            id:51,
            eng:"Hair",
            ru:"Волосы"
            },
            {
            id:52,
            eng:"Back",
            ru:"Спина"
            },
            {
            id:53,
            eng:"A Scar",
            ru:"Шрам"
            },
            {
            id:54,
            eng:"Birthmark",
            ru:"Родимое пятно"
            },
            {
            id:55,
            eng:"Mole",
            ru:"Родинка"
            },
            {
            id:56,
            eng:"Heels",
            ru:"Пятки"
            },
            {
            id:57,
            eng:"Abs",
            ru:"Пресс (кубики на животе)"
            },
            {
            id:58,
            eng:"Firm",
            ru:"Упругий"
            },
            {
            id:59,
            eng:"Fit",
            ru:"Спортивный, атлетичный, подтянутый"
            },
            {
            id:60,
            eng:"Slim",
            ru:"Стройный"
            },
            {
            id:61,
            eng:"Wide",
            ru:"Широкий"
            },
            {
            id:62,
            eng:"Fat",
            ru:"Жирный"
            },
            {
            id:63,
            eng:"Short",
            ru:"Короткий"
            },
            {
            id:64,
            eng:"Hairy",
            ru:"Волосатый"
            },
            {
            id:65,
            eng:"Muscular",
            ru:"Мускулистый"
            },
            {
            id:66,
            eng:"Large",
            ru:"Крупный"
            },
            {
            id:67,
            eng:"Long",
            ru:"Длинный"
            },
            {
            id:68,
            eng:"Pierced",
            ru:"Проколотоый"
            },
            {
            id:69,
            eng:"Crooked",
            ru:"Кривые"
            },
            {
            id:70,
            eng:"Round",
            ru:"Круглый"
            },
            {
            id:71,
            eng:"Square",
            ru:"Квадратный"
            },
            {
            id:72,
            eng:"Skinny",
            ru:"Тощий"
            },
            {
            id:73,
            eng:"Thick",
            ru:"Толстый"
            },
            {
            id:74,
            eng:"Thin",
            ru:"Худой, Тонкий"
            },
            {
            id:75,
            eng:"Big",
            ru:"Большой"
            },
            {
            id:76,
            eng:"Small",
            ru:"Маленький"
            },
            {
            id:77,
            eng:"Upper",
            ru:"Верхний"
            },
            {
            id:78,
            eng:"Lower",
            ru:"Нижний"
            },	
    ],
    testing: [
        {					
            id	:	1	,		
            eng	:	"1one"	,
            ru	:	"один"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"2two"	,
            ru	:	"два"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"3three"	,
            ru	:	"три"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"4four"	,
            ru	:	"четыре"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"5five"	,
            ru	:	"пять"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"6six"	,
            ru	:	"шесть"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"7seven"	,
            ru	:	"семь"	
            }	,				
    ],
    affirmations1: [
        {
            id:1,
            eng:"Affirmations",
            ru:"Аффирмации"
            },
            {
            id:2,
            eng:"Statements",
            ru:"Утверждения"
            },
            {
            id:3,
            eng:"Guide",
            ru:"Гид"
            },
            {
            id:4,
            eng:"Take care",
            ru:"Проявлять заботу (это два слова из четырёх букв)"
            },
            {
            id:5,
            eng:"Make up ideas",
            ru:"Придумывать идеи"
            },
            {
            id:6,
            eng:"We do our best",
            ru:"Мы стараемя по максимуму"
            },
            {
            id:7,
            eng:"Achievements",
            ru:"Достижения"
            },
            {
            id:8,
            eng:"I am loved",
            ru:"Меня любят"
            },
            {
            id:9,
            eng:"fears",
            ru:"Страхи"
            },
            {
            id:10,
            eng:"Feelings",
            ru:"Чувства"
            },
            {
            id:11,
            eng:"Care",
            ru:"Заботиться (4 буквы)"
            },
            {
            id:12,
            eng:"Believe",
            ru:"Верить"
            },
            {
            id:13,
            eng:"Awesome",
            ru:"Офигенно"
            },
            {
            id:14,
            eng:"I feel happy",
            ru:"Я чувствую себя счастливым"
            },
            {
            id:15,
            eng:"Overcome",
            ru:"Преодолевать"
            },
            {
            id:16,
            eng:"Challenges",
            ru:"Испытания, вызовы"
            },
            {
            id:17,
            eng:"I trust her",
            ru:"Я доверяю ей"
            },
            {
            id:18,
            eng:"I follow you",
            ru:"Я следую за тобой"
            },
            {
            id:19,
            eng:"boss",
            ru:"Начальник, шеф, хозяин"
            },
            {
            id:20,
            eng:"A goal",
            ru:"Цель"
            },
            {
            id:21,
            eng:"Allow",
            ru:"Давать разрешение, позволять"
            },
            {
            id:22,
            eng:"Inner",
            ru:"Внутренний, внутренняя"
            },
    ],
    affirmations2: [
        {
            id:1,
            eng:"Affirmations",
            ru:"Аффирмации"
            },
            {
            id:2,
            eng:"Statements",
            ru:"Утверждения"
            },
            {
            id:3,
            eng:"Who do you believe?",
            ru:"Кому ты веришь?"
            },
            {
            id:4,
            eng:"Are you proud of this?",
            ru:"Ты гордишься этим?"
            },
            {
            id:5,
            eng:"I don't feel safe",
            ru:"Я не чувствую себя безопасно"
            },
            {
            id:6,
            eng:"Make up ideas",
            ru:"Придумывать идеи"
            },
            {
            id:7,
            eng:"We do our best",
            ru:"Мы стараемя по максимуму"
            },
            {
            id:8,
            eng:"Achievements",
            ru:"Достижения"
            },
            {
            id:9,
            eng:"I am loved",
            ru:"Меня любят"
            },
            {
            id:10,
            eng:"I am not afraid of anything",
            ru:"Мне ничего не страшно"
            },
            {
            id:11,
            eng:"My feelings matter",
            ru:"Мои чувства имеют значение"
            },
            {
            id:12,
            eng:"I take care of myself",
            ru:"Я проявляю заботу о себе"
            },
            {
            id:13,
            eng:"They believe in themselves",
            ru:"Они верят в себя"
            },
            {
            id:14,
            eng:"She does her best",
            ru:"Она старается по максимуму"
            },
            {
            id:15,
            eng:"They do their best",
            ru:"Они стараются по максимуму"
            },
            {
            id:16,
            eng:"Awesome",
            ru:"Офигенно"
            },
            {
            id:17,
            eng:"I feel happy",
            ru:"Я чувствую себя счастливым"
            },
            {
            id:18,
            eng:"Overcome challenges",
            ru:"Преодолевать испытания"
            },
            {
            id:19,
            eng:"It's a hard challenge ",
            ru:"Это трудный вызов"
            },
            {
            id:20,
            eng:"I trust only Vincent",
            ru:"Я доверяю только училке!"
            },
            {
            id:21,
            eng:"I follow my heart",
            ru:"Я следую сердцу /харт/"
            },
            {
            id:22,
            eng:"I am the boss of my time",
            ru:"Я хозяин своего времени"
            },
            {
            id:23,
            eng:"A goal",
            ru:"Цель"
            },
            {
            id:24,
            eng:"Allow",
            ru:"Давать разрешение, позволять"
            },
            {
            id:25,
            eng:"Inner guide",
            ru:"Внутреннее чутьё"
            },						
    ],
    thirtieth: [
        {
            id:99,
            eng:"first",
            ru:"первый"
            },
            {
            id:100,
            eng:"second",
            ru:"второй"
            },
            {
            id:101,
            eng:"third",
            ru:"третий"
            },
            {
            id:102,
            eng:"fourth",
            ru:"четвертый"
            },
            {
            id:103,
            eng:"fifth",
            ru:"пятый"
            },
            {
            id:104,
            eng:"sixth",
            ru:"шестой"
            },
            {
            id:105,
            eng:"eighth",
            ru:"восьмой"
            },
            {
            id:106,
            eng:"ninth",
            ru:"девятый"
            },
            {
            id:107,
            eng:"tenth",
            ru:"десятый"
            },
            {
            id:108,
            eng:"twelvth",
            ru:"двенадцатый"
            },
            {
            id:109,
            eng:"twentieth",
            ru:"двадцатый"
            },
            {
            id:110,
            eng:"fortieth",
            ru:"сороковой"
            },
            {
            id:111,
            eng:"fourteenth",
            ru:"четырнадцатый"
            },
            {
            id:112,
            eng:"zeroth",
            ru:"нулевой"
            },
            {
            id:113,
            eng:"thirtieth",
            ru:"тринадцатый"
            },
            {
            id:114,
            eng:"hundredth",
            ru:"сотый"
            },
            {
            id:115,
            eng:"thousandth",
            ru:"тысячный"
            },						
    ],
    naughtyVerbs: [
        {
            id:239,
            eng:"Break",
            ru:"Ломать"
            },
            {
            id:240,
            eng:"Begin",
            ru:"Начинать"
            },
            {
            id:241,
            eng:"Blow",
            ru:"Дуть"
            },
            {
            id:242,
            eng:"Build",
            ru:"Строить"
            },
            {
            id:243,
            eng:"Burn",
            ru:"Сжигать"
            },
            {
            id:244,
            eng:"Burnt",
            ru:"Сгорел"
            },
            {
            id:245,
            eng:"Bring",
            ru:"Приносить"
            },
            {
            id:246,
            eng:"Bite",
            ru:"Кусать"
            },
            {
            id:247,
            eng:"Do",
            ru:"Делать"
            },
            {
            id:248,
            eng:"Drink",
            ru:"Пить"
            },
            {
            id:249,
            eng:"Drank",
            ru:"Выпил"
            },
            {
            id:250,
            eng:"Can",
            ru:"Могу"
            },
            {
            id:251,
            eng:"Could",
            ru:"Мог"
            },
            {
            id:252,
            eng:"Broke",
            ru:"Сломал"
            },
            {
            id:253,
            eng:"Began",
            ru:"Начал"
            },
            {
            id:254,
            eng:"Built",
            ru:"Построил"
            },
            {
            id:255,
            eng:"Burnt",
            ru:"Сжег"
            },
            {
            id:256,
            eng:"Burnt",
            ru:"Сгорел"
            },
            {
            id:257,
            eng:"Brought",
            ru:"Принёс"
            },
            {
            id:258,
            eng:"Did",
            ru:"Сделал"
            },
            {
            id:259,
            eng:"Done",
            ru:"Сделано"
            },
            {
            id:260,
            eng:"Drunk",
            ru:"Пьяный"
            },		
            {
                id:261,
                eng:"Bit",
                ru:"Укусил"
                },		
    ],
    formulas0: [
        {					
            id	:	1	,		
            eng	:	"One"	,
            ru	:	"     Как по-английски пишется       Один"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"Two"	,
            ru	:	"     Как по-английски пишется       Два"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"Three"	,
            ru	:	"     Как по-английски пишется       Три"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"Four"	,
            ru	:	"     Как по-английски пишется       Четыре"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"Five"	,
            ru	:	"     Как по-английски пишется       Пять"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"Six"	,
            ru	:	"     Как по-английски пишется       Шесть"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"Seven"	,
            ru	:	"     Как по-английски пишется       Семь"	
            }	,				
            {					
            id	:	8	,		
            eng	:	"Eight"	,
            ru	:	"     Как по-английски пишется       Восемь"	
            }	,				
            {					
            id	:	9	,		
            eng	:	"Nine"	,
            ru	:	"     Как по-английски пишется       Девять"	
            }	,				
            {					
            id	:	10	,		
            eng	:	"Eleven"	,
            ru	:	"     Как по-английски пишется       Одинадцать"	
            }	,				
            {					
            id	:	11	,		
            eng	:	"Twelve"	,
            ru	:	"     Как по-английски пишется       Двенадцать"	
            }	,				
            {					
            id	:	12	,		
            eng	:	"Twenty"	,
            ru	:	"     Как по-английски пишется       Двадцать"	
            }	,		
            {					
            id	:	13	,		
            eng	:	"Thirty"	,
            ru	:	"     Как по-английски пишется       Тридцать"	
            }	,		
            {					
            id	:	14	,		
            eng	:	"Hundred"	,
            ru	:	"     Как по-английски пишется       Сто"	
            }	,				
    ],
    questions0: [
        {					
            id	:	102	,		
            eng	:	"You"	,
            ru	:	"Напишите  как по-английски будет Вы"	
            }	,				
            {					
            id	:	103	,		
            eng	:	"Your"	,
            ru	:	"Напишите  как по-английски будет 	Ваше, твоё	"	
            }	,				
            {					
            id	:	104	,		
            eng	:	"He"	,
            ru	:	"Напишите  как по-английски будет Он"	
            }	,				
            {					
            id	:	105	,		
            eng	:	"His number"	,
            ru	:	"Напишите  как по-английски будет Его номер	"	
            }	,				
            {					
            id	:	106	,		
            eng	:	"She"	,
            ru	:	"Напишите  как по-английски будет Она"	
            }	,				
            {					
            id	:	107	,		
            eng	:	"Her"	,
            ru	:	"Напишите  как по-английски будет Её"	
            }	,				
            {					
            id	:	108	,		
            eng	:	"I"	,
            ru	:	"Напишите  как по-английски будет Я"	
            }	,				
            {					
            id	:	109	,		
            eng	:	"My"	,
            ru	:	"Напишите  как по-английски будет мой, моё, моя, мои"	
            }	,				
            {					
            id	:	110	,		
            eng	:	"We"	,
            ru	:	"Напишите  как по-английски будет Мы"	
            }	,				
            {					
            id	:	111	,		
            eng	:	"Our"	,
            ru	:	"Напишите  как по-английски будет наш, наше, наши, наша	"	
            }	,				
            {					
            id	:	112	,		
            eng	:	"They	"	,
            ru	:	"Напишите  как по-английски будет Они"	
            }	,				
            {					
            id	:	113	,		
            eng	:	"Their children"	,
            ru	:	"Напишите  как по-английски будет Их дети"	
            }	,				
            {					
            id	:	114	,		
            eng	:	"Their child"	,
            ru	:	"Напишите  как по-английски будет Их ребёнок"	
            }	,				
            {					
            id	:	115	,		
            eng	:	"Their dog"	,
            ru	:	"Напишите  как по-английски будет Их собака"	
            }	,				
            {					
            id	:	116	,		
            eng	:	"It"	,
            ru	:	"Напишите  как по-английски будет Это"	
            }	,				
            {					
            id	:	117	,		
            eng	:	"This"	,
            ru	:	"Напишите  как по-английски будет Вот это"	
            }	,					
    ],
    numbers0: [
        {					
            id	:	1	,		
            eng	:	"One"	,
            ru	:	"     Как по-английски пишется       Один"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"Two"	,
            ru	:	"     Как по-английски пишется       Два"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"Three"	,
            ru	:	"     Как по-английски пишется       Три"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"Four"	,
            ru	:	"     Как по-английски пишется       Четыре"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"Five"	,
            ru	:	"     Как по-английски пишется       Пять"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"Six"	,
            ru	:	"     Как по-английски пишется       Шесть"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"Seven"	,
            ru	:	"     Как по-английски пишется       Семь"	
            }	,				
            {					
            id	:	8	,		
            eng	:	"Eight"	,
            ru	:	"     Как по-английски пишется       Восемь"	
            }	,				
            {					
            id	:	9	,		
            eng	:	"Nine"	,
            ru	:	"     Как по-английски пишется       Девять"	
            }	,				
            {					
            id	:	10	,		
            eng	:	"Eleven"	,
            ru	:	"     Как по-английски пишется       Одинадцать"	
            }	,				
            {					
            id	:	11	,		
            eng	:	"Twelve"	,
            ru	:	"     Как по-английски пишется       Двенадцать"	
            }	,				
            {					
            id	:	12	,		
            eng	:	"Twenty"	,
            ru	:	"     Как по-английски пишется       Двадцать"	
            }	,		
            {					
            id	:	13	,		
            eng	:	"Thirty"	,
            ru	:	"     Как по-английски пишется       Тридцать"	
            }	,		
            {					
            id	:	14	,		
            eng	:	"Hundred"	,
            ru	:	"     Как по-английски пишется       Сто"	
            }	,		
    ],
    letters: [
        {					
            id	:	1	,		
            eng	:	"J"	,
            ru	:	"Напечатайте английскую букву / Джей / заглавную (большую)"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"G"	,
            ru	:	"Напечатайте английскую букву / Джи / заглавную (большую)"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"С"	,
            ru	:	"Напечатайте английскую букву / Си / заглавную (большую)"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"S"	,
            ru	:	"Напечатайте английскую букву / Эс / заглавную (большую)"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"Q"	,
            ru	:	"Напечатайте английскую букву / Кью / заглавную (большую)"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"V"	,
            ru	:	"Напечатайте английскую букву / Ви / заглавную (большую)"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"E"	,
            ru	:	"Напечатайте английскую букву / И / заглавную (большую)"	
            }	,				
            {					
            id	:	8	,		
            eng	:	"A"	,
            ru	:	"Напечатайте английскую букву / Эй / заглавную (большую)"	
            }	,				
            {					
            id	:	9	,		
            eng	:	"I"	,
            ru	:	"Напечатайте английскую букву / Ай / заглавную (большую)"	
            }	,				
            {					
            id	:	10	,		
            eng	:	"U"	,
            ru	:	"Напечатайте английскую букву / Ю / заглавную (большую)"	
            }	,				
            {					
            id	:	11	,		
            eng	:	"Y"	,
            ru	:	"Напечатайте английскую букву / уАй / заглавную (большую)"	
            }	,				
            {					
            id	:	12	,		
            eng	:	"X"	,
            ru	:	"Напечатайте английскую букву / Экс / заглавную (большую)"	
            }	,				
            {					
            id	:	13	,		
            eng	:	"H"	,
            ru	:	"Напечатайте английскую букву / Эйч / заглавную (большую)"	
            }	,				
    ],
    ac: [
        {					
            id	:	1	,		
            eng	:	"1one"	,
            ru	:	"один"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"2two"	,
            ru	:	"два"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"3three"	,
            ru	:	"три"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"4four"	,
            ru	:	"четыре"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"5five"	,
            ru	:	"пять"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"6six"	,
            ru	:	"шесть"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"7seven"	,
            ru	:	"семь"	
            }	,				
    ],
    ae: [
        {					
            id	:	1	,		
            eng	:	"1one"	,
            ru	:	"один"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"2two"	,
            ru	:	"два"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"3three"	,
            ru	:	"три"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"4four"	,
            ru	:	"четыре"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"5five"	,
            ru	:	"пять"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"6six"	,
            ru	:	"шесть"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"7seven"	,
            ru	:	"семь"	
            }	,				
    ],
    cf: [
        {					
            id	:	1	,		
            eng	:	"1one"	,
            ru	:	"один"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"2two"	,
            ru	:	"два"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"3three"	,
            ru	:	"три"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"4four"	,
            ru	:	"четыре"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"5five"	,
            ru	:	"пять"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"6six"	,
            ru	:	"шесть"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"7seven"	,
            ru	:	"семь"	
            }	,				
    ],
    cg: [
        {					
            id	:	1	,		
            eng	:	"1one"	,
            ru	:	"один"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"2two"	,
            ru	:	"два"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"3three"	,
            ru	:	"три"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"4four"	,
            ru	:	"четыре"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"5five"	,
            ru	:	"пять"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"6six"	,
            ru	:	"шесть"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"7seven"	,
            ru	:	"семь"	
            }	,				
    ],
    eg: [
        {					
            id	:	1	,		
            eng	:	"1one"	,
            ru	:	"один"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"2two"	,
            ru	:	"два"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"3three"	,
            ru	:	"три"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"4four"	,
            ru	:	"четыре"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"5five"	,
            ru	:	"пять"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"6six"	,
            ru	:	"шесть"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"7seven"	,
            ru	:	"семь"	
            }	,				
    ],
    eh: [
        {					
            id	:	1	,		
            eng	:	"1one"	,
            ru	:	"один"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"2two"	,
            ru	:	"два"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"3three"	,
            ru	:	"три"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"4four"	,
            ru	:	"четыре"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"5five"	,
            ru	:	"пять"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"6six"	,
            ru	:	"шесть"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"7seven"	,
            ru	:	"семь"	
            }	,				
    ],
    hm: [
        {					
            id	:	1	,		
            eng	:	"1one"	,
            ru	:	"один"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"2two"	,
            ru	:	"два"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"3three"	,
            ru	:	"три"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"4four"	,
            ru	:	"четыре"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"5five"	,
            ru	:	"пять"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"6six"	,
            ru	:	"шесть"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"7seven"	,
            ru	:	"семь"	
            }	,				
    ],
    hr:[
        {					
            id	:	1	,		
            eng	:	"1one"	,
            ru	:	"один"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"2two"	,
            ru	:	"два"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"3three"	,
            ru	:	"три"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"4four"	,
            ru	:	"четыре"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"5five"	,
            ru	:	"пять"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"6six"	,
            ru	:	"шесть"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"7seven"	,
            ru	:	"семь"	
            }	,				
    ],
    s1: [

        {					
            id	:	67	,		
            eng	:	"	say	"	,
            ru	:	"	said , said , сказать, произнести	"	
            }	,				
            {					
            id	:	68	,		
            eng	:	"	see	"	,
            ru	:	"	saw , seen , (у)видеть	"	
            }	,				
            {					
            id	:	69	,		
            eng	:	"	sell	"	,
            ru	:	"	sold , sold , продавать	"	
            }	,				
            {					
            id	:	70	,		
            eng	:	"	send	"	,
            ru	:	"	sent , sent , отправлять	"	
            }	,				
            {					
            id	:	71	,		
            eng	:	"	shake	"	,
            ru	:	"	shook , shaken , трясти	"	
            }	,				
            {					
            id	:	72	,		
            eng	:	"	shoot	"	,
            ru	:	"	shot , shot , стрелять	"	
            }	,				
            {					
            id	:	73	,		
            eng	:	"	shut	"	,
            ru	:	"	shut , shut , захлопнуть	"	
            }	,				
            {					
            id	:	74	,		
            eng	:	"	sing	"	,
            ru	:	"	sang , sung , петь	"	
            }	,				
            {					
            id	:	75	,		
            eng	:	"	sink	"	,
            ru	:	"	sank , sunk , затонуть	"	
            }	,				
            {					
            id	:	76	,		
            eng	:	"	sit	"	,
            ru	:	"	sat , sat , сидеть	"	
            }	,				

    ],
    q1: [

        {
            id: 1,
            eng: "	when	",
            ru: "	когда	"
        },
        {
            id: 2,
            eng: "	why	",
            ru: "	почему, зачем, для чего	"
        },
        {
            id: 3,
            eng: "	what time	",
            ru: "	во сколько	"
        },
        {
            id: 4,
            eng: "	where",
            ru: "	где	"
        },
        {
            id: 5,
            eng: "	whose	",
            ru: "	чей	"
        },
        {
            id: 6,
            eng: "	how	",
            ru: "	как	"
        },
        {
            id: 7,
            eng: "	what	",
            ru: "	какой, что	"
        },
        {
            id: 8,
            eng: "	what color	",
            ru: "	какого цвета	"
        },
        {
            id: 9,
            eng: "	what size	",
            ru: "	какого размера	"
        },
        {
            id: 10,
            eng: "	what car	",
            ru: "	какая машина	"
        },
        {
            id: 11,
            eng: "	Who	",
            ru: "	кто, кого	"
        },
        {
            id: 12,
            eng: "	How often	",
            ru: "	как часто	"
        },
        {
            id: 13,
            eng: "	How long	",
            ru: "	как долго	"
        },
        {
            id: 14,
            eng: "	How fast	",
            ru: "	как быстро	"
        },
        {
            id: 15,
            eng: "	How many pelmenis	",
            ru: "	сколько пельменей	"
        },
        {
            id: 16,
            eng: "	How much money	",
            ru: "	сколько денег	"
        },
        {
            id: 17,
            eng: "	with or without	",
            ru: "	с или без	"
        },

    ],
    pr: [

        {
            id: 1,
            eng: "	pay	",
            ru: "	paid , paid , платить	"
        },
        {
            id: 2,
            eng: "	put	",
            ru: "	put , put , класть	"
        },
        {
            id: 3,
            eng: "	read	",
            ru: "	read , read , читать	"
        },
        {
            id: 4,
            eng: "	ride	",
            ru: "	rode , ridden , ездить верхом	"
        },
        {
            id: 5,
            eng: "	ring	",
            ru: "	rang , rung , звенеть, звонить	"
        },
        {
            id: 6,
            eng: "	run	",
            ru: "	ran , run , бегать	"
        },
        {
            id: 7,
            eng: "	rise	",
            ru: "	rose , risen , подниматься	"
        },

    ],
    lr: [

        {
            id: 50,
            eng: "	learn	",
            ru: "	learnt , learnt , изучать	"
        },
        {
            id: 51,
            eng: "	leave	",
            ru: "	left , left , покидать	"
        },
        {
            id: 52,
            eng: "	lend	",
            ru: "	lent , lent , давать в долг	"
        },
        {
            id: 53,
            eng: "	let	",
            ru: "	let , let , позволять	"
        },
        {
            id: 54,
            eng: "	lose	",
            ru: "	lost , lost , терять	"
        },
        {
            id: 55,
            eng: "	tell a lie	",
            ru: "	lied , lied , говорить неправду	"
        },
        {
            id: 56,
            eng: "	lie	",
            ru: "	lay , lain , лежать	"
        },
        {
            id: 57,
            eng: "	make	",
            ru: "	made , made , создавать, делать	"
        },
        {
            id: 58,
            eng: "	mean	",
            ru: "	meant , meant , иметь ввиду	"
        },
        {
            id: 59,
            eng: "	meet	",
            ru: "	met , met , встречать(ся)	"
        },
        {
            id: 60,
            eng: "	pay	",
            ru: "	paid , paid , платить	"
        },
        {
            id: 61,
            eng: "	put	",
            ru: "	put , put , класть	"
        },
        {
            id: 62,
            eng: "	read	",
            ru: "	read , read , читать	"
        },
        {
            id: 63,
            eng: "	ride	",
            ru: "	rode , ridden , ездить верхом	"
        },
        {
            id: 64,
            eng: "	ring	",
            ru: "	rang , rung , звенеть, звонить	"
        },
        {
            id: 65,
            eng: "	run	",
            ru: "	ran , run , бегать	"
        },
        {
            id: 66,
            eng: "	rise	",
            ru: "	rose , risen , подниматься	"
        },

    ],
    ls: [

        {
            id: 50,
            eng: "	learn	",
            ru: "	learnt , learnt , изучать	"
        },
        {
            id: 51,
            eng: "	leave	",
            ru: "	left , left , покидать	"
        },
        {
            id: 52,
            eng: "	lend	",
            ru: "	lent , lent , давать в долг	"
        },
        {
            id: 53,
            eng: "	let	",
            ru: "	let , let , позволять	"
        },
        {
            id: 54,
            eng: "	lose	",
            ru: "	lost , lost , терять	"
        },
        {
            id: 55,
            eng: "	tell a lie	",
            ru: "	lied , lied , говорить неправду	"
        },
        {
            id: 56,
            eng: "	lie	",
            ru: "	lay , lain , лежать	"
        },
        {
            id: 57,
            eng: "	make	",
            ru: "	made , made , создавать, делать	"
        },
        {
            id: 58,
            eng: "	mean	",
            ru: "	meant , meant , иметь ввиду	"
        },
        {
            id: 59,
            eng: "	meet	",
            ru: "	met , met , встречать(ся)	"
        },
        {
            id: 60,
            eng: "	pay	",
            ru: "	paid , paid , платить	"
        },
        {
            id: 61,
            eng: "	put	",
            ru: "	put , put , класть	"
        },
        {
            id: 62,
            eng: "	read	",
            ru: "	read , read , читать	"
        },
        {
            id: 63,
            eng: "	ride	",
            ru: "	rode , ridden , ездить верхом	"
        },
        {
            id: 64,
            eng: "	ring	",
            ru: "	rang , rung , звенеть, звонить	"
        },
        {
            id: 65,
            eng: "	run	",
            ru: "	ran , run , бегать	"
        },
        {
            id: 66,
            eng: "	rise	",
            ru: "	rose , risen , подниматься	"
        },
        {
            id: 67,
            eng: "	say	",
            ru: "	said , said , сказать, произнести	"
        },
        {
            id: 68,
            eng: "	see	",
            ru: "	saw , seen , (у)видеть	"
        },
        {
            id: 69,
            eng: "	sell	",
            ru: "	sold , sold , продавать	"
        },
        {
            id: 70,
            eng: "	send	",
            ru: "	sent , sent , отправлять	"
        },
        {
            id: 71,
            eng: "	shake	",
            ru: "	shook , shaken , трясти	"
        },
        {
            id: 72,
            eng: "	shoot	",
            ru: "	shot , shot , стрелять	"
        },
        {
            id: 73,
            eng: "	shut	",
            ru: "	shut , shut , захлопнуть	"
        },
        {
            id: 74,
            eng: "	sing	",
            ru: "	sang , sung , петь	"
        },
        {
            id: 75,
            eng: "	sink	",
            ru: "	sank , sunk , затонуть	"
        },
        {
            id: 76,
            eng: "	sit	",
            ru: "	sat , sat , сидеть	"
        },
        {
            id: 77,
            eng: "	sleep	",
            ru: "	slept , slept , спать	"
        },
        {
            id: 78,
            eng: "	slide	",
            ru: "	slid , slid , скользить	"
        },
        {
            id: 79,
            eng: "	speak	",
            ru: "	spoke , spoken , разговаривать	"
        },
        {
            id: 80,
            eng: "	spend	",
            ru: "	spent , spent , тратить	"
        },
        {
            id: 81,
            eng: "	spit	",
            ru: "	spat , spat , плеваться	"
        },
        {
            id: 82,
            eng: "	stand	",
            ru: "	stood , stood , встать, стоять	"
        },
        {
            id: 83,
            eng: "	steal	",
            ru: "	stole , stolen , воровать	"
        },
        {
            id: 84,
            eng: "	stick	",
            ru: "	stuck , stuck , приклеить, застрять 	"
        },
        {
            id: 85,
            eng: "	stink	",
            ru: "	stank , stunk , вонять	"
        },
        {
            id: 86,
            eng: "	strike	",
            ru: "	struck , struck , ударять	"
        },
        {
            id: 87,
            eng: "	swear	",
            ru: "	swore , sworn , клясться/материться 	"
        },
        {
            id: 88,
            eng: "	sweep	",
            ru: "	swept , swept , подметать	"
        },
        {
            id: 89,
            eng: "	swim	",
            ru: "	swam , swum , плавать	"
        },
        {
            id: 90,
            eng: "	swing	",
            ru: "	swung , swung , качаться	"
        },
    ],
    rs: [

        {
            id: 62,
            eng: "	read	",
            ru: "	read , read , читать	"
        },
        {
            id: 63,
            eng: "	ride	",
            ru: "	rode , ridden , ездить верхом	"
        },
        {
            id: 64,
            eng: "	ring	",
            ru: "	rang , rung , звенеть, звонить	"
        },
        {
            id: 65,
            eng: "	run	",
            ru: "	ran , run , бегать	"
        },
        {
            id: 66,
            eng: "	rise	",
            ru: "	rose , risen , подниматься	"
        },
        {
            id: 67,
            eng: "	say	",
            ru: "	said , said , сказать, произнести	"
        },
        {
            id: 68,
            eng: "	see	",
            ru: "	saw , seen , (у)видеть	"
        },
        {
            id: 69,
            eng: "	sell	",
            ru: "	sold , sold , продавать	"
        },
        {
            id: 70,
            eng: "	send	",
            ru: "	sent , sent , отправлять	"
        },
        {
            id: 71,
            eng: "	shake	",
            ru: "	shook , shaken , трясти	"
        },
        {
            id: 72,
            eng: "	shoot	",
            ru: "	shot , shot , стрелять	"
        },
        {
            id: 73,
            eng: "	shut	",
            ru: "	shut , shut , захлопнуть	"
        },
        {
            id: 74,
            eng: "	sing	",
            ru: "	sang , sung , петь	"
        },
        {
            id: 75,
            eng: "	sink	",
            ru: "	sank , sunk , затонуть	"
        },
        {
            id: 76,
            eng: "	sit	",
            ru: "	sat , sat , сидеть	"
        },
        {
            id: 77,
            eng: "	sleep	",
            ru: "	slept , slept , спать	"
        },
        {
            id: 78,
            eng: "	slide	",
            ru: "	slid , slid , скользить	"
        },
        {
            id: 79,
            eng: "	speak	",
            ru: "	spoke , spoken , разговаривать	"
        },
        {
            id: 80,
            eng: "	spend	",
            ru: "	spent , spent , тратить	"
        },
        {
            id: 81,
            eng: "	spit	",
            ru: "	spat , spat , плеваться	"
        },
        {
            id: 82,
            eng: "	stand	",
            ru: "	stood , stood , встать, стоять	"
        },
        {
            id: 83,
            eng: "	steal	",
            ru: "	stole , stolen , воровать	"
        },
        {
            id: 84,
            eng: "	stick	",
            ru: "	stuck , stuck , приклеить, застрять 	"
        },
        {
            id: 85,
            eng: "	stink	",
            ru: "	stank , stunk , вонять	"
        },
        {
            id: 86,
            eng: "	strike	",
            ru: "	struck , struck , ударять	"
        },
        {
            id: 87,
            eng: "	swear	",
            ru: "	swore , sworn , клясться/материться 	"
        },
        {
            id: 88,
            eng: "	sweep	",
            ru: "	swept , swept , подметать	"
        },
        {
            id: 89,
            eng: "	swim	",
            ru: "	swam , swum , плавать	"
        },
        {
            id: 90,
            eng: "	swing	",
            ru: "	swung , swung , качаться	"
        },

    ],
    rt: [

        {
            id: 62,
            eng: "	read	",
            ru: "	read , read , читать	"
        },
        {
            id: 63,
            eng: "	ride	",
            ru: "	rode , ridden , ездить верхом	"
        },
        {
            id: 64,
            eng: "	ring	",
            ru: "	rang , rung , звенеть, звонить	"
        },
        {
            id: 65,
            eng: "	run	",
            ru: "	ran , run , бегать	"
        },
        {
            id: 66,
            eng: "	rise	",
            ru: "	rose , risen , подниматься	"
        },
        {
            id: 67,
            eng: "	say	",
            ru: "	said , said , сказать, произнести	"
        },
        {
            id: 68,
            eng: "	see	",
            ru: "	saw , seen , (у)видеть	"
        },
        {
            id: 69,
            eng: "	sell	",
            ru: "	sold , sold , продавать	"
        },
        {
            id: 70,
            eng: "	send	",
            ru: "	sent , sent , отправлять	"
        },
        {
            id: 71,
            eng: "	shake	",
            ru: "	shook , shaken , трясти	"
        },
        {
            id: 72,
            eng: "	shoot	",
            ru: "	shot , shot , стрелять	"
        },
        {
            id: 73,
            eng: "	shut	",
            ru: "	shut , shut , захлопнуть	"
        },
        {
            id: 74,
            eng: "	sing	",
            ru: "	sang , sung , петь	"
        },
        {
            id: 75,
            eng: "	sink	",
            ru: "	sank , sunk , затонуть	"
        },
        {
            id: 76,
            eng: "	sit	",
            ru: "	sat , sat , сидеть	"
        },
        {
            id: 77,
            eng: "	sleep	",
            ru: "	slept , slept , спать	"
        },
        {
            id: 78,
            eng: "	slide	",
            ru: "	slid , slid , скользить	"
        },
        {
            id: 79,
            eng: "	speak	",
            ru: "	spoke , spoken , разговаривать	"
        },
        {
            id: 80,
            eng: "	spend	",
            ru: "	spent , spent , тратить	"
        },
        {
            id: 81,
            eng: "	spit	",
            ru: "	spat , spat , плеваться	"
        },
        {
            id: 82,
            eng: "	stand	",
            ru: "	stood , stood , встать, стоять	"
        },
        {
            id: 83,
            eng: "	steal	",
            ru: "	stole , stolen , воровать	"
        },
        {
            id: 84,
            eng: "	stick	",
            ru: "	stuck , stuck , приклеить, застрять 	"
        },
        {
            id: 85,
            eng: "	stink	",
            ru: "	stank , stunk , вонять	"
        },
        {
            id: 86,
            eng: "	strike	",
            ru: "	struck , struck , ударять	"
        },
        {
            id: 87,
            eng: "	swear	",
            ru: "	swore , sworn , клясться/материться 	"
        },
        {
            id: 88,
            eng: "	sweep	",
            ru: "	swept , swept , подметать	"
        },
        {
            id: 89,
            eng: "	swim	",
            ru: "	swam , swum , плавать	"
        },
        {
            id: 90,
            eng: "	swing	",
            ru: "	swung , swung , качаться	"
        },
        {
            id: 91,
            eng: "	take	",
            ru: "	took , taken , брать	"
        },
        {
            id: 92,
            eng: "	teach	",
            ru: "	taught , taught , обучать	"
        },
        {
            id: 93,
            eng: "	tear	",
            ru: "	tore , torn , рвать, вырывать	"
        },
        {
            id: 94,
            eng: "	tell	",
            ru: "	told , told , рассказывать	"
        },
        {
            id: 95,
            eng: "	think	",
            ru: "	thought , thought , думать	"
        },
        {
            id: 96,
            eng: "	throw	",
            ru: "	threw , thrown , бросать	"
        },

    ],
    st: [

        {
            id: 67,
            eng: "	say	",
            ru: "	said , said , сказать, произнести	"
        },
        {
            id: 68,
            eng: "	see	",
            ru: "	saw , seen , (у)видеть	"
        },
        {
            id: 69,
            eng: "	sell	",
            ru: "	sold , sold , продавать	"
        },
        {
            id: 70,
            eng: "	send	",
            ru: "	sent , sent , отправлять	"
        },
        {
            id: 71,
            eng: "	shake	",
            ru: "	shook , shaken , трясти	"
        },
        {
            id: 72,
            eng: "	shoot	",
            ru: "	shot , shot , стрелять	"
        },
        {
            id: 73,
            eng: "	shut	",
            ru: "	shut , shut , захлопнуть	"
        },
        {
            id: 74,
            eng: "	sing	",
            ru: "	sang , sung , петь	"
        },
        {
            id: 75,
            eng: "	sink	",
            ru: "	sank , sunk , затонуть	"
        },
        {
            id: 76,
            eng: "	sit	",
            ru: "	sat , sat , сидеть	"
        },
        {
            id: 77,
            eng: "	sleep	",
            ru: "	slept , slept , спать	"
        },
        {
            id: 78,
            eng: "	slide	",
            ru: "	slid , slid , скользить	"
        },
        {
            id: 79,
            eng: "	speak	",
            ru: "	spoke , spoken , разговаривать	"
        },
        {
            id: 80,
            eng: "	spend	",
            ru: "	spent , spent , тратить	"
        },
        {
            id: 81,
            eng: "	spit	",
            ru: "	spat , spat , плеваться	"
        },
        {
            id: 82,
            eng: "	stand	",
            ru: "	stood , stood , встать, стоять	"
        },
        {
            id: 83,
            eng: "	steal	",
            ru: "	stole , stolen , воровать	"
        },
        {
            id: 84,
            eng: "	stick	",
            ru: "	stuck , stuck , приклеить, застрять 	"
        },
        {
            id: 85,
            eng: "	stink	",
            ru: "	stank , stunk , вонять	"
        },
        {
            id: 86,
            eng: "	strike	",
            ru: "	struck , struck , ударять	"
        },
        {
            id: 87,
            eng: "	swear	",
            ru: "	swore , sworn , клясться/материться 	"
        },
        {
            id: 88,
            eng: "	sweep	",
            ru: "	swept , swept , подметать	"
        },
        {
            id: 89,
            eng: "	swim	",
            ru: "	swam , swum , плавать	"
        },
        {
            id: 90,
            eng: "	swing	",
            ru: "	swung , swung , качаться	"
        },
        {
            id: 91,
            eng: "	take	",
            ru: "	took , taken , брать	"
        },
        {
            id: 92,
            eng: "	teach	",
            ru: "	taught , taught , обучать	"
        },
        {
            id: 93,
            eng: "	tear	",
            ru: "	tore , torn , рвать, вырывать	"
        },
        {
            id: 94,
            eng: "	tell	",
            ru: "	told , told , рассказывать	"
        },
        {
            id: 95,
            eng: "	think	",
            ru: "	thought , thought , думать	"
        },
        {
            id: 96,
            eng: "	throw	",
            ru: "	threw , thrown , бросать	"
        },

    ],
    sw: [

        {
            id: 67,
            eng: "	say	",
            ru: "	said , said , сказать, произнести	"
        },
        {
            id: 68,
            eng: "	see	",
            ru: "	saw , seen , (у)видеть	"
        },
        {
            id: 69,
            eng: "	sell	",
            ru: "	sold , sold , продавать	"
        },
        {
            id: 70,
            eng: "	send	",
            ru: "	sent , sent , отправлять	"
        },
        {
            id: 71,
            eng: "	shake	",
            ru: "	shook , shaken , трясти	"
        },
        {
            id: 72,
            eng: "	shoot	",
            ru: "	shot , shot , стрелять	"
        },
        {
            id: 73,
            eng: "	shut	",
            ru: "	shut , shut , захлопнуть	"
        },
        {
            id: 74,
            eng: "	sing	",
            ru: "	sang , sung , петь	"
        },
        {
            id: 75,
            eng: "	sink	",
            ru: "	sank , sunk , затонуть	"
        },
        {
            id: 76,
            eng: "	sit	",
            ru: "	sat , sat , сидеть	"
        },
        {
            id: 77,
            eng: "	sleep	",
            ru: "	slept , slept , спать	"
        },
        {
            id: 78,
            eng: "	slide	",
            ru: "	slid , slid , скользить	"
        },
        {
            id: 79,
            eng: "	speak	",
            ru: "	spoke , spoken , разговаривать	"
        },
        {
            id: 80,
            eng: "	spend	",
            ru: "	spent , spent , тратить	"
        },
        {
            id: 81,
            eng: "	spit	",
            ru: "	spat , spat , плеваться	"
        },
        {
            id: 82,
            eng: "	stand	",
            ru: "	stood , stood , встать, стоять	"
        },
        {
            id: 83,
            eng: "	steal	",
            ru: "	stole , stolen , воровать	"
        },
        {
            id: 84,
            eng: "	stick	",
            ru: "	stuck , stuck , приклеить, застрять 	"
        },
        {
            id: 85,
            eng: "	stink	",
            ru: "	stank , stunk , вонять	"
        },
        {
            id: 86,
            eng: "	strike	",
            ru: "	struck , struck , ударять	"
        },
        {
            id: 87,
            eng: "	swear	",
            ru: "	swore , sworn , клясться/материться 	"
        },
        {
            id: 88,
            eng: "	sweep	",
            ru: "	swept , swept , подметать	"
        },
        {
            id: 89,
            eng: "	swim	",
            ru: "	swam , swum , плавать	"
        },
        {
            id: 90,
            eng: "	swing	",
            ru: "	swung , swung , качаться	"
        },
        {
            id: 91,
            eng: "	take	",
            ru: "	took , taken , брать	"
        },
        {
            id: 92,
            eng: "	teach	",
            ru: "	taught , taught , обучать	"
        },
        {
            id: 93,
            eng: "	tear	",
            ru: "	tore , torn , рвать, вырывать	"
        },
        {
            id: 94,
            eng: "	tell	",
            ru: "	told , told , рассказывать	"
        },
        {
            id: 95,
            eng: "	think	",
            ru: "	thought , thought , думать	"
        },
        {
            id: 96,
            eng: "	throw	",
            ru: "	threw , thrown , бросать	"
        },
        {
            id: 97,
            eng: "	understand	",
            ru: "	understood , understood , понимать	"
        },
        {
            id: 98,
            eng: "	wake up	",
            ru: "	woke up , woken up , будить, просыпаться	"
        },
        {
            id: 99,
            eng: "	wear	",
            ru: "	wore , worn , носить одежду	"
        },
        {
            id: 100,
            eng: "	write	",
            ru: "	wrote , written , писать	"
        },
        {
            id: 101,
            eng: "	weep	",
            ru: "	wept , wept , хныкать	"
        },
        {
            id: 102,
            eng: "	win	",
            ru: "	won , won , выигрывать	"
        },

    ],
    tstar: [

        {
            id: 91,
            eng: "	take	",
            ru: "	took , taken , брать	"
        },
        {
            id: 92,
            eng: "	teach	",
            ru: "	taught , taught , обучать	"
        },
        {
            id: 93,
            eng: "	tear	",
            ru: "	tore , torn , рвать, вырывать	"
        },
        {
            id: 94,
            eng: "	tell	",
            ru: "	told , told , рассказывать	"
        },
        {
            id: 95,
            eng: "	think	",
            ru: "	thought , thought , думать	"
        },
        {
            id: 96,
            eng: "	throw	",
            ru: "	threw , thrown , бросать	"
        },
        {
            id: 97,
            eng: "	understand	",
            ru: "	understood , understood , понимать	"
        },
        {
            id: 98,
            eng: "	wake up	",
            ru: "	woke up , woken up , будить, просыпаться	"
        },
        {
            id: 99,
            eng: "	wear	",
            ru: "	wore , worn , носить одежду	"
        },
        {
            id: 100,
            eng: "	write	",
            ru: "	wrote , written , писать	"
        },
        {
            id: 101,
            eng: "	weep	",
            ru: "	wept , wept , хныкать	"
        },
        {
            id: 102,
            eng: "	win	",
            ru: "	won , won , выигрывать	"
        },
        {
            id: 103,
            eng: "	misunderstand	",
            ru: "	misunderstood , misunderstood , не так понять	"
        },
        {
            id: 104,
            eng: "	misspell	",
            ru: "	misspelt , misspelt , неправильно написать	"
        },
        {
            id: 105,
            eng: "	mistake	",
            ru: "	mistook , mistaken , ошибаться	"
        },
        {
            id: 106,
            eng: "	mishear	",
            ru: "	misheard , misheard , неправильно услышать	"
        },
        {
            id: 107,
            eng: "	oversleep	",
            ru: "	overslept , overslept , переспать (проспать)	"
        },
        {
            id: 108,
            eng: "	overeat	",
            ru: "	overate , overeaten , переесть 	"
        },
        {
            id: 109,
            eng: "	overpay	",
            ru: "	overpaid , overpaid , переплатить	"
        },
        {
            id: 110,
            eng: "	can	",
            ru: "	could-мог, умел, могу 	"
        },
        {
            id: 111,
            eng: "	shall	",
            ru: "	shall - следует. Should - следовало	"
        },
        {
            id: 112,
            eng: "	may	",
            ru: "	might - можно, возможно	"
        },
    ],
    bm: [
        
        {
            id: 4,
            eng: "	break	",
            ru: "	broke , broken , ломать	"
        },
        {
            id: 5,
            eng: "	beat	",
            ru: "	beat , beaten , бить, побить в соревновании	"
        },
        {
            id: 6,
            eng: "	become	",
            ru: "	became , become , становиться	"
        },
        {
            id: 7,
            eng: "	begin	",
            ru: "	began , begun , начинать	"
        },
        {
            id: 8,
            eng: "	blow	",
            ru: "	blew , blown , дуть	"
        },
        {
            id: 9,
            eng: "	build	",
            ru: "	built , built , строить	"
        },
        {
            id: 10,
            eng: "	burn	",
            ru: "	burnt , burnt , сжигать, гореть	"
        },
        {
            id: 11,
            eng: "	buy	",
            ru: "	bought , bought , покупать	"
        },
        {
            id: 12,
            eng: "	bring	",
            ru: "	brought , brought , приносить	"
        },
        {
            id: 13,
            eng: "	be	",
            ru: "	was/were , been , быть	"
        },
        {
            id: 14,
            eng: "	bite	",
            ru: "	bit , bit , кусать	"
        },
        {
            id: 15,
            eng: "	come	",
            ru: "	came , come , приходить	"
        },
        {
            id: 16,
            eng: "	choose	",
            ru: "	chose , chosen , выбирать	"
        },
        {
            id: 17,
            eng: "	catch	",
            ru: "	caught , caught , ловить	"
        },
        {
            id: 18,
            eng: "	creep	",
            ru: "	crept , crept , ползать	"
        },
        {
            id: 19,
            eng: "	cost	",
            ru: "	cost , cost , стоить	"
        },
        {
            id: 20,
            eng: "	cut	",
            ru: "	cut , cut , резать	"
        },
        {
            id: 21,
            eng: "	deal	",
            ru: "	dealt , dealt , иметь дела	"
        },
        {
            id: 22,
            eng: "	dig	",
            ru: "	dug , dug , копать	"
        },
        {
            id: 23,
            eng: "	do	",
            ru: "	did , done , выполнять, делать, заниматься	"
        },
        {
            id: 24,
            eng: "	drive	",
            ru: "	drove , driven , водить	"
        },
        {
            id: 25,
            eng: "	draw	",
            ru: "	drew , drawn , рисовать	"
        },
        {
            id: 26,
            eng: "	drink	",
            ru: "	drank , drunk , пить	"
        },
        {
            id: 27,
            eng: "	eat	",
            ru: "	ate , eaten , кушать	"
        },
        {
            id: 28,
            eng: "	fall	",
            ru: "	fell , fallen , падать	"
        },
        {
            id: 29,
            eng: "	feed	",
            ru: "	fed , fed , кормить	"
        },
        {
            id: 30,
            eng: "	feel	",
            ru: "	felt , felt , чувствовать	"
        },
        {
            id: 31,
            eng: "	fight	",
            ru: "	fought , fought , сражаться	"
        },
        {
            id: 32,
            eng: "	find	",
            ru: "	found , found , находить	"
        },
        {
            id: 33,
            eng: "	fly	",
            ru: "	flew , flown , летать	"
        },
        {
            id: 34,
            eng: "	forbid	",
            ru: "	forbade , forbidden , запрещать	"
        },
        {
            id: 35,
            eng: "	forget	",
            ru: "	forgot , forgotten , забывать	"
        },
        {
            id: 36,
            eng: "	forgive	",
            ru: "	forgave , forgiven , прощать	"
        },
        {
            id: 37,
            eng: "	freeze	",
            ru: "	froze , frozen , замерзать	"
        },
        {
            id: 38,
            eng: "	grow	",
            ru: "	grew , grown , расти	"
        },
        {
            id: 39,
            eng: "	get	",
            ru: "	got , got , получать	"
        },
        {
            id: 40,
            eng: "	give	",
            ru: "	gave , given , давать	"
        },
        {
            id: 41,
            eng: "	go	",
            ru: "	went , gone , ходить	"
        },
        {
            id: 42,
            eng: "	have	",
            ru: "	had , had , иметь	"
        },
        {
            id: 43,
            eng: "	hear	",
            ru: "	heard , heard , слышать	"
        },
        {
            id: 44,
            eng: "	hide	",
            ru: "	hid , hidden , прятать	"
        },
        {
            id: 45,
            eng: "	hit	",
            ru: "	hit , hit , ударять	"
        },
        {
            id: 46,
            eng: "	hurt	",
            ru: "	hurt , hurt , причинять боль	"
        },
        {
            id: 47,
            eng: "	hold	",
            ru: "	held , held , держать	"
        },
        {
            id: 48,
            eng: "	keep	",
            ru: "	kept , kept , хранить	"
        },
        {
            id: 49,
            eng: "	know	",
            ru: "	knew , known , знать	"
        },
        {
            id: 50,
            eng: "	learn	",
            ru: "	learnt , learnt , изучать	"
        },
        {
            id: 51,
            eng: "	leave	",
            ru: "	left , left , покидать	"
        },
        {
            id: 52,
            eng: "	lend	",
            ru: "	lent , lent , давать в долг	"
        },
        {
            id: 53,
            eng: "	let	",
            ru: "	let , let , позволять	"
        },
        {
            id: 54,
            eng: "	lose	",
            ru: "	lost , lost , терять	"
        },
        
        {
            id: 55,
            eng: "	lie	",
            ru: "	lay , lain , лежать	"
        },
        {
            id: 56,
            eng: "	make	",
            ru: "	made , made , создавать, делать	"
        },
        {
            id: 57,
            eng: "	mean	",
            ru: "	meant , meant , иметь ввиду	"
        },
        {
            id: 58,
            eng: "	meet	",
            ru: "	met , met , встречать(ся)	"
        },
        
    ],
    astar: [
        {
            id: 1,
            eng: "	arise	",
            ru: "	arose , arisen , возникнуть	"
        },
        {
            id: 2,
            eng: "	awake	",
            ru: "	awoke , awoken , пробудиться	"
        },
        {
            id: 3,
            eng: "	abide	",
            ru: "	abode , abidden , соблюдать	"
        },
        {
            id: 4,
            eng: "	break	",
            ru: "	broke , broken , ломать	"
        },
        {
            id: 5,
            eng: "	beat	",
            ru: "	beat , beaten , бить, побить в соревновании	"
        },
        {
            id: 6,
            eng: "	become	",
            ru: "	became , become , становиться	"
        },
        {
            id: 7,
            eng: "	begin	",
            ru: "	began , begun , начинать	"
        },
        {
            id: 8,
            eng: "	blow	",
            ru: "	blew , blown , дуть	"
        },
        {
            id: 9,
            eng: "	build	",
            ru: "	built , built , строить	"
        },
        {
            id: 10,
            eng: "	burn	",
            ru: "	burnt , burnt , сжигать, гореть	"
        },
        {
            id: 11,
            eng: "	buy	",
            ru: "	bought , bought , покупать	"
        },
        {
            id: 12,
            eng: "	bring	",
            ru: "	brought , brought , приносить	"
        },
        {
            id: 13,
            eng: "	be	",
            ru: "	was/were , been , быть	"
        },
        {
            id: 14,
            eng: "	bite	",
            ru: "	bit , bit , кусать	"
        },
        {
            id: 15,
            eng: "	come	",
            ru: "	came , come , приходить	"
        },
        {
            id: 16,
            eng: "	choose	",
            ru: "	chose , chosen , выбирать	"
        },
        {
            id: 17,
            eng: "	catch	",
            ru: "	caught , caught , ловить	"
        },
        {
            id: 18,
            eng: "	creep	",
            ru: "	crept , crept , ползать	"
        },
        {
            id: 19,
            eng: "	cost	",
            ru: "	cost , cost , стоить	"
        },
        {
            id: 20,
            eng: "	cut	",
            ru: "	cut , cut , резать	"
        },
        {
            id: 21,
            eng: "	deal	",
            ru: "	dealt , dealt , иметь дела	"
        },
        {
            id: 22,
            eng: "	dig	",
            ru: "	dug , dug , копать	"
        },
        {
            id: 23,
            eng: "	do	",
            ru: "	did , done , выполнять, делать, заниматься	"
        },
        {
            id: 24,
            eng: "	drive	",
            ru: "	drove , driven , водить	"
        },
        {
            id: 25,
            eng: "	draw	",
            ru: "	drew , drawn , рисовать	"
        },
        {
            id: 26,
            eng: "	drink	",
            ru: "	drank , drunk , пить	"
        },
        {
            id: 27,
            eng: "	eat	",
            ru: "	ate , eaten , кушать	"
        },
        {
            id: 28,
            eng: "	fall	",
            ru: "	fell , fallen , падать	"
        },
        {
            id: 29,
            eng: "	feed	",
            ru: "	fed , fed , кормить	"
        },
        {
            id: 30,
            eng: "	feel	",
            ru: "	felt , felt , чувствовать	"
        },
        {
            id: 31,
            eng: "	fight	",
            ru: "	fought , fought , сражаться	"
        },
        {
            id: 32,
            eng: "	find	",
            ru: "	found , found , находить	"
        },
        {
            id: 33,
            eng: "	fly	",
            ru: "	flew , flown , летать	"
        },
        {
            id: 34,
            eng: "	forbid	",
            ru: "	forbade , forbidden , запрещать	"
        },
        {
            id: 35,
            eng: "	forget	",
            ru: "	forgot , forgotten , забывать	"
        },
        {
            id: 36,
            eng: "	forgive	",
            ru: "	forgave , forgiven , прощать	"
        },
        {
            id: 37,
            eng: "	freeze	",
            ru: "	froze , frozen , замерзать	"
        },
        {
            id: 38,
            eng: "	grow	",
            ru: "	grew , grown , расти	"
        },
        {
            id: 39,
            eng: "	get	",
            ru: "	got , got , получать	"
        },
        {
            id: 40,
            eng: "	give	",
            ru: "	gave , given , давать	"
        },
        {
            id: 41,
            eng: "	go	",
            ru: "	went , gone , ходить	"
        },
        {
            id: 42,
            eng: "	have	",
            ru: "	had , had , иметь	"
        },
        {
            id: 43,
            eng: "	hear	",
            ru: "	heard , heard , слышать	"
        },
        {
            id: 44,
            eng: "	hide	",
            ru: "	hid , hidden , прятать	"
        },
        {
            id: 45,
            eng: "	hit	",
            ru: "	hit , hit , ударять	"
        },
        {
            id: 46,
            eng: "	hurt	",
            ru: "	hurt , hurt , причинять боль	"
        },
        {
            id: 47,
            eng: "	hold	",
            ru: "	held , held , держать	"
        },
        {
            id: 48,
            eng: "	keep	",
            ru: "	kept , kept , хранить	"
        },
        {
            id: 49,
            eng: "	know	",
            ru: "	knew , known , знать	"
        },
        {
            id: 50,
            eng: "	learn	",
            ru: "	learnt , learnt , изучать	"
        },
        {
            id: 51,
            eng: "	leave	",
            ru: "	left , left , покидать	"
        },
        {
            id: 52,
            eng: "	lend	",
            ru: "	lent , lent , давать в долг	"
        },
        {
            id: 53,
            eng: "	let	",
            ru: "	let , let , позволять	"
        },
        {
            id: 54,
            eng: "	lose	",
            ru: "	lost , lost , терять	"
        },
        {
            id: 55,
            eng: "	tell a lie	",
            ru: "	lied , lied , говорить неправду	"
        },
        {
            id: 56,
            eng: "	lie	",
            ru: "	lay , lain , лежать	"
        },
        {
            id: 57,
            eng: "	make	",
            ru: "	made , made , создавать, делать	"
        },
        {
            id: 58,
            eng: "	mean	",
            ru: "	meant , meant , иметь ввиду	"
        },
        {
            id: 59,
            eng: "	meet	",
            ru: "	met , met , встречать(ся)	"
        },
        {
            id: 60,
            eng: "	pay	",
            ru: "	paid , paid , платить	"
        },
        {
            id: 61,
            eng: "	put	",
            ru: "	put , put , класть	"
        },
        {
            id: 62,
            eng: "	read	",
            ru: "	read , read , читать	"
        },
        {
            id: 63,
            eng: "	ride	",
            ru: "	rode , ridden , ездить верхом	"
        },
        {
            id: 64,
            eng: "	ring	",
            ru: "	rang , rung , звенеть, звонить	"
        },
        {
            id: 65,
            eng: "	run	",
            ru: "	ran , run , бегать	"
        },
        {
            id: 66,
            eng: "	rise	",
            ru: "	rose , risen , подниматься	"
        },
        {
            id: 67,
            eng: "	say	",
            ru: "	said , said , сказать, произнести	"
        },
        {
            id: 68,
            eng: "	see	",
            ru: "	saw , seen , (у)видеть	"
        },
        {
            id: 69,
            eng: "	sell	",
            ru: "	sold , sold , продавать	"
        },
        {
            id: 70,
            eng: "	send	",
            ru: "	sent , sent , отправлять	"
        },
        {
            id: 71,
            eng: "	shake	",
            ru: "	shook , shaken , трясти	"
        },
        {
            id: 72,
            eng: "	shoot	",
            ru: "	shot , shot , стрелять	"
        },
        {
            id: 73,
            eng: "	shut	",
            ru: "	shut , shut , захлопнуть	"
        },
        {
            id: 74,
            eng: "	sing	",
            ru: "	sang , sung , петь	"
        },
        {
            id: 75,
            eng: "	sink	",
            ru: "	sank , sunk , затонуть	"
        },
        {
            id: 76,
            eng: "	sit	",
            ru: "	sat , sat , сидеть	"
        },
        {
            id: 77,
            eng: "	sleep	",
            ru: "	slept , slept , спать	"
        },
        {
            id: 78,
            eng: "	slide	",
            ru: "	slid , slid , скользить	"
        },
        {
            id: 79,
            eng: "	speak	",
            ru: "	spoke , spoken , разговаривать	"
        },
        {
            id: 80,
            eng: "	spend	",
            ru: "	spent , spent , тратить	"
        },
        {
            id: 81,
            eng: "	spit	",
            ru: "	spat , spat , плеваться	"
        },
        {
            id: 82,
            eng: "	stand	",
            ru: "	stood , stood , встать, стоять	"
        },
        {
            id: 83,
            eng: "	steal	",
            ru: "	stole , stolen , воровать	"
        },
        {
            id: 84,
            eng: "	stick	",
            ru: "	stuck , stuck , приклеить, застрять 	"
        },
        {
            id: 85,
            eng: "	stink	",
            ru: "	stank , stunk , вонять	"
        },
        {
            id: 86,
            eng: "	strike	",
            ru: "	struck , struck , ударять	"
        },
        {
            id: 87,
            eng: "	swear	",
            ru: "	swore , sworn , клясться/материться 	"
        },
        {
            id: 88,
            eng: "	sweep	",
            ru: "	swept , swept , подметать	"
        },
        {
            id: 89,
            eng: "	swim	",
            ru: "	swam , swum , плавать	"
        },
        {
            id: 90,
            eng: "	swing	",
            ru: "	swung , swung , качаться	"
        },
        {
            id: 91,
            eng: "	take	",
            ru: "	took , taken , брать	"
        },
        {
            id: 92,
            eng: "	teach	",
            ru: "	taught , taught , обучать	"
        },
        {
            id: 93,
            eng: "	tear	",
            ru: "	tore , torn , рвать, вырывать	"
        },
        {
            id: 94,
            eng: "	tell	",
            ru: "	told , told , рассказывать	"
        },
        {
            id: 95,
            eng: "	think	",
            ru: "	thought , thought , думать	"
        },
        {
            id: 96,
            eng: "	throw	",
            ru: "	threw , thrown , бросать	"
        },
        {
            id: 97,
            eng: "	understand	",
            ru: "	understood , understood , понимать	"
        },
        {
            id: 98,
            eng: "	wake up	",
            ru: "	woke up , woken up , будить, просыпаться	"
        },
        {
            id: 99,
            eng: "	wear	",
            ru: "	wore , worn , носить одежду	"
        },
        {
            id: 100,
            eng: "	write	",
            ru: "	wrote , written , писать	"
        },
        {
            id: 101,
            eng: "	weep	",
            ru: "	wept , wept , хныкать	"
        },
        {
            id: 102,
            eng: "	win	",
            ru: "	won , won , выигрывать	"
        },
        {
            id: 103,
            eng: "	misunderstand	",
            ru: "	misunderstood , misunderstood , не так понять	"
        },
        {
            id: 104,
            eng: "	misspell	",
            ru: "	misspelt , misspelt , неправильно написать	"
        },
        {
            id: 105,
            eng: "	mistake	",
            ru: "	mistook , mistaken , ошибаться	"
        },
        {
            id: 106,
            eng: "	mishear	",
            ru: "	misheard , misheard , неправильно услышать	"
        },
        {
            id: 107,
            eng: "	oversleep	",
            ru: "	overslept , overslept , переспать (проспать)	"
        },
        {
            id: 108,
            eng: "	overeat	",
            ru: "	overate , overeaten , переесть 	"
        },
        {
            id: 109,
            eng: "	overpay	",
            ru: "	overpaid , overpaid , переплатить	"
        },
        {
            id: 110,
            eng: "	can	",
            ru: "	could-мог, умел, могу 	"
        },
        {
            id: 111,
            eng: "	shall	",
            ru: "	shall - следует. Should - следовало	"
        },
        {
            id: 112,
            eng: "	may	",
            ru: "	might - можно, возможно	"
        },
    ],
    cook3: [
        {					
            id	:	1	,		
            eng	:	"	pour /пО/	"	,
            ru	:	"	наливать	"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"	a sip	"	,
            ru	:	"	глоток	"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"	a lid	"	,
            ru	:	"	крышка	"	
            }	,				
            {					
            id	:	4	,		
            eng	:	"	spread butter	"	,
            ru	:	"	намазать масло	"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"	squeeze	"	,
            ru	:	"	сжимать	"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"	To health!	"	,
            ru	:	"	За здоровье!	"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"	weigh /уЭй/	"	,
            ru	:	"	Взвешивать	"	
            }	,				
            {					
            id	:	8	,		
            eng	:	"	measure /мЭжэ/	"	,
            ru	:	"	мерить, измерять	"	
            }	,				
            {					
            id	:	9	,		
            eng	:	"	mix	"	,
            ru	:	"	перемешать	"	
            }	,				
            {					
            id	:	10	,		
            eng	:	"	put	"	,
            ru	:	"	поставить, положить, разместить	"	
            }	,				
            {					
            id	:	11	,		
            eng	:	"	scales	"	,
            ru	:	"	весы	"	
            }	,				
            {					
            id	:	12	,		
            eng	:	"	layer	"	,
            ru	:	"	слой	"	
            }	,				
            {					
            id	:	13	,		
            eng	:	"	wash hands	"	,
            ru	:	"	Мыть руки	"	
            }	,				
            {					
            id	:	14	,		
            eng	:	"	peel	"	,
            ru	:	"	чистить от кожуры	"	
            }	,				
            {					
            id	:	15	,		
            eng	:	"	seasoning	"	,
            ru	:	"	приправа	"	
            }	,				
            {					
            id	:	16	,		
            eng	:	"	dip	"	,
            ru	:	"	Макать	"	
            }	,				
            {					
            id	:	17	,		
            eng	:	"	crush	"	,
            ru	:	"	Давить	"	
            }	,				
            {					
            id	:	18	,		
            eng	:	"	prepare	"	,
            ru	:	"	Подготавливать, приготавливаться	"	
            }	,				
            {					
            id	:	19	,		
            eng	:	"	sprinkle 	"	,
            ru	:	"	посыпать	"	
            }	,				
            {					
            id	:	20	,		
            eng	:	"	decorate 	"	,
            ru	:	"	украшать	"	
            }	,				
            {					
            id	:	21	,		
            eng	:	"	flip	"	,
            ru	:	"	переворачивать	"	
            }	,				
            {					
            id	:	22	,		
            eng	:	"	microwave /мАйкровэйв/	"	,
            ru	:	"	греть в микроволновке	"	
            }	,				
            {					
            id	:	23	,		
            eng	:	"	put in a fridge	"	,
            ru	:	"	класть в холодильник	"	
            }	,				
            {					
            id	:	24	,		
            eng	:	"	put in a freezer	"	,
            ru	:	"	класть в морозильник	"	
            }	,				
            {					
            id	:	25	,		
            eng	:	"	blend	"	,
            ru	:	"	измельчить, перемолоть	"	
            }	,				
            {					
            id	:	26	,		
            eng	:	"	heat	"	,
            ru	:	"	Жар, огонь	"	
            }	,				
            {					
            id	:	27	,		
            eng	:	"	roast	"	,
            ru	:	"	Запекать	"	
            }	,				
            {					
            id	:	28	,		
            eng	:	"	sharpen 	"	,
            ru	:	"	Точить	"	
            }	,				
            {					
            id	:	29	,		
            eng	:	"	serve	"	,
            ru	:	"	Сервировать, обслуживать, подавать	"	
            }	,				
            {					
            id	:	30	,		
            eng	:	"	celebrate	"	,
            ru	:	"	Праздновать, отмечать	"	
            }	,				
            {					
            id	:	31	,		
            eng	:	"	add	"	,
            ru	:	"	добавлять	"	
            }	,				
            {					
            id	:	32	,		
            eng	:	"	sift	"	,
            ru	:	"	просеивать	"	
            }	,				
            {					
            id	:	33	,		
            eng	:	"	roll	"	,
            ru	:	"	раскатывать, катить	"	
            }	,				
            {					
            id	:	34	,		
            eng	:	"	toss	"	,
            ru	:	"	подкидывать	"	
            }	,				
            {					
            id	:	35	,		
            eng	:	"	grate	"	,
            ru	:	"	натереть на терке	"	
            }	,				
            {					
            id	:	36	,		
            eng	:	"	top	"	,
            ru	:	"	положить сверху	"	
            }	,				
            {					
            id	:	37	,		
            eng	:	"	bake	"	,
            ru	:	"	выпекать	"	
            }	,				
            {					
            id	:	38	,		
            eng	:	"	cool down	"	,
            ru	:	"	остывать	"	
            }	,				
            {					
            id	:	39	,		
            eng	:	"	carve	"	,
            ru	:	"	вырезАть	"	
            }	,				
            {					
            id	:	40	,		
            eng	:	"	mash /мэш/	"	,
            ru	:	"	толочь	"	
            }	,				
            {					
            id	:	41	,		
            eng	:	"	tenderize /тЭндэрайз/	"	,
            ru	:	"	отбивать, делать мягким	"	
            }	,				
            {					
            id	:	42	,		
            eng	:	"	BBQ /бАрбекю/	"	,
            ru	:	"	Делать Барбекю (шашлыки)	"	
            }	,				
            {					
            id	:	43	,		
            eng	:	"	simmer	"	,
            ru	:	"	готовить на минимальной мощности	"	
            }	,				
            {					
            id	:	44	,		
            eng	:	"	melt	"	,
            ru	:	"	растопить, таять	"	
            }	,				
            {					
            id	:	45	,		
            eng	:	"	fry	"	,
            ru	:	"	жарить	"	
            }	,				
            {					
            id	:	46	,		
            eng	:	"	sauté /cАтэй/	"	,
            ru	:	"	обжаривать	"	
            }	,				
            {					
            id	:	47	,		
            eng	:	"	boil	"	,
            ru	:	"	варить, кипятить	"	
            }	,				
            {					
            id	:	48	,		
            eng	:	"	A pot	"	,
            ru	:	"	Кастрлюля	"	
            }	,				
            {					
            id	:	49	,		
            eng	:	"	stir	"	,
            ru	:	"	Помешивать	"	
            }	,				
            {					
            id	:	50	,		
            eng	:	"	taste	"	,
            ru	:	"	Пробовать на вкус	"	
            }	,				
            {					
            id	:	51	,		
            eng	:	"	light	"	,
            ru	:	"	включать огонь	"	
            }	,				
            {					
            id	:	52	,		
            eng	:	"	cover with a lid	"	,
            ru	:	"	накрывать крышкой	"	
            }	,				
            {					
            id	:	53	,		
            eng	:	"	remove	"	,
            ru	:	"	убирать	"	
            }	,				
            {					
            id	:	54	,		
            eng	:	"	turn on/off	"	,
            ru	:	"	включать или выключать	"	
            }	,				
            {					
            id	:	55	,		
            eng	:	"	steam	"	,
            ru	:	"	пар / готовить на пару	"	
            }	,				
            {					
            id	:	56	,		
            eng	:	"	whisk with a whisker	"	,
            ru	:	"	взбивать венчиком	"	
            }	,				
            {					
            id	:	57	,		
            eng	:	"	A frying pan	"	,
            ru	:	"	сковорода	"	
            }	,				
            {					
            id	:	58	,		
            eng	:	"	drain	"	,
            ru	:	"	слить воду	"	
            }	,				
            {					
            id	:	59	,		
            eng	:	"	rinse	"	,
            ru	:	"	прополоскать, ополоснуть	"	
            }	,				
            {					
            id	:	60	,		
            eng	:	"	uncork	"	,
            ru	:	"	открыть пробку	"	
            }	,				
            {					
            id	:	61	,		
            eng	:	"	an oven	"	,
            ru	:	"	духовка	"	
            }	,				
            {					
            id	:	62	,		
            eng	:	"	a stove	"	,
            ru	:	"	печь	"	
            }	,				
            {					
            id	:	63	,		
            eng	:	"	a fork	"	,
            ru	:	"	вилка	"	
            }	,				
            {					
            id	:	64	,		
            eng	:	"	a spoon	"	,
            ru	:	"	ложка	"	
            }	,				
            {					
            id	:	65	,		
            eng	:	"	a cup and a mug	"	,
            ru	:	"	чашка и кружка	"	
            }	,				
            {					
            id	:	66	,		
            eng	:	"	a knife / нАйф/	"	,
            ru	:	"	нож и два ножа	"	
            }	,				
            {					
            id	:	67	,		
            eng	:	"	a cutting board	"	,
            ru	:	"	разделоочная доска	"	
            }	,				
            {					
            id	:	68	,		
            eng	:	"	foil	"	,
            ru	:	"	фольга	"	
            }	,				
            {					
            id	:	69	,		
            eng	:	"	sausage /сОсидж/	"	,
            ru	:	"	Колбаса и сосиски	"	
            }	,				
            {					
            id	:	70	,		
            eng	:	"	Delicious /делИшэс / dinner	"	,
            ru	:	"	Наивкуснейший ужин	"	
            }	,				
            {					
            id	:	71	,		
            eng	:	"	chop	"	,
            ru	:	"	рубить	"	
            }	,				
            {					
            id	:	72	,		
            eng	:	"	salt / солт/	"	,
            ru	:	"	соль	"	
            }	,				
            {					
            id	:	73	,		
            eng	:	"	cover	"	,
            ru	:	"	накрывать	"	
            }	,				
            {					
            id	:	74	,		
            eng	:	"	lid	"	,
            ru	:	"	крышка	"	
            }	,				
            {					
            id	:	75	,		
            eng	:	"	whisk	"	,
            ru	:	"	взбивать	"	
            }	,				
            {					
            id	:	76	,		
            eng	:	"	cut in pieces	"	,
            ru	:	"	порезвать на кусочки	"	
            }	,				
            {					
            id	:	77	,		
            eng	:	"	spices /спАйсиз/	"	,
            ru	:	"	специи	"	
            }	,				
            {					
            id	:	78	,		
            eng	:	"	pepper /пЭппэ/	"	,
            ru	:	"	перец	"	
            }	,				
            {					
            id	:	79	,		
            eng	:	"	baking paper /пЭйпа/	"	,
            ru	:	"	бумага для выпечки	"	
            }	,				
            {					
            id	:	80	,		
            eng	:	"	spatula /спЭчула/	"	,
            ru	:	"	лопатка	"	
            }	,				
            {					
            id	:	81	,		
            eng	:	"	a tablespoon /тЭйблспун/	"	,
            ru	:	"	столовая ложка	"	
            }	,				
            {					
            id	:	82	,		
            eng	:	"	a teaspoon /тИспун/	"	,
            ru	:	"	чайная ложка	"	
            }	,				
            {					
            id	:	83	,		
            eng	:	"	a wooden spoon	"	,
            ru	:	"	деревянная ложка	"	
            }	,				
            {					
            id	:	84	,		
            eng	:	"	sugar /щУга/	"	,
            ru	:	"	сахар	"	
            }	,				
            {					
            id	:	85	,		
            eng	:	"	honey /хАни/	"	,
            ru	:	"	мёд	"	
            }	,				
            {					
            id	:	86	,		
            eng	:	"	pancakes /пЭнкейкс/	"	,
            ru	:	"	блины	"	
            }	,				
            {					
            id	:	87	,		
            eng	:	"	a cook	"	,
            ru	:	"	повар	"	
            }	,				
            {					
            id	:	88	,		
            eng	:	"	to cook	"	,
            ru	:	"	готовить	"	
            }	,				
            {					
            id	:	89	,		
            eng	:	"	a chef /шЭф/	"	,
            ru	:	"	главный повар	"	
            }	,				
    ],
    mission90: [
        {
            id: 1,
            ru: "и потом сюда 2",
            eng: "1 Нажми сюда	"
        },
        {
            id: 2,
            ru: "Привет!",
            eng: "Hi!"
        },
        {
            id: 3,
            ru: "= six",
            eng: "2 + 2 + 2 is ="
        },
        {
            id: 4,
            ru: "...eight",
            eng: "восемь на английском это..."
        },
        {
            id: 5,
            ru: "You can do it!",
            eng: "Ты справишься!"
        },
        {
            id: 6,
            ru: "Отличная работа агент!",
            eng: "Great job, agent!"
        },
    ],
    mission0: [
        {					
            id	:	1	,		
            eng	:	"One"	,
            ru	:	"     Как по-английски пишется       Один"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"Two"	,
            ru	:	"     Как по-английски пишется       Два"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"Three"	,
            ru	:	"     Как по-английски пишется       Три"	
            }	,			
            {					
            id	:	4	,		
            eng	:	"Four"	,
            ru	:	"     Как по-английски пишется       Четыре"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"Five"	,
            ru	:	"     Как по-английски пишется       Пять"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"Six"	,
            ru	:	"     Как по-английски пишется       Шесть"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"Seven"	,
            ru	:	"     Как по-английски пишется       Семь"	
            }	,				
            {					
            id	:	8	,		
            eng	:	"Eight"	,
            ru	:	"     Как по-английски пишется       Восемь"	
            }	,				
            {					
            id	:	9	,		
            eng	:	"Nine"	,
            ru	:	"     Как по-английски пишется       Девять"	
            }	,				
            {					
            id	:	10	,		
            eng	:	"Eleven"	,
            ru	:	"     Как по-английски пишется       Одинадцать"	
            }	,				
            {					
            id	:	11	,		
            eng	:	"Twelve"	,
            ru	:	"     Как по-английски пишется       Двенадцать"	
            }	,				
            {					
            id	:	12	,		
            eng	:	"Twenty"	,
            ru	:	"     Как по-английски пишется       Двадцать"	
            }	,		
            {					
            id	:	13	,		
            eng	:	"Thirty"	,
            ru	:	"     Как по-английски пишется       Тридцать"	
            }	,		
            {					
            id	:	14	,		
            eng	:	"Hundred"	,
            ru	:	"     Как по-английски пишется       Сто"	
            }	,	
    ],
    mission2: [
        {
            id: 1,
            ru: "	...Эйт	",
            eng: "	8...	"
        },
        {
            id: 2,
            ru: "	..eight	",
            eng: "	восемь..	"
        },
        {
            id: 3,
            ru: "	...твэлв	",
            eng: "	12...	"
        },
        {
            id: 4,
            ru: "	...твэнти	",
            eng: "	20...	"
        },
        {
            id: 5,
            ru: "	..is 12	",
            eng: "	six plus six..	"
        },
        {
            id: 6,
            ru: "	is twenty 20	",
            eng: "	Ten plus ten	"
        },
        {
            id: 7,
            ru: "	..is sixteen	",
            eng: "	Eight plus eight..	"
        },
        {
            id: 8,
            ru: "	..is nine	",
            eng: "	one plus eight..	"
        },
        {
            id: 9,
            ru: "	....12	",
            eng: "	твЭлв....	"
        },
        {
            id: 10,
            ru: "	Десять	",
            eng: "	Ten	"
        },
        {
            id: 11,
            ru: "	Одиннадцать	",
            eng: "	Eleven	"
        },
        {
            id: 12,
            ru: "	(Двенадцать)	",
            eng: "	(Twelve)	"
        },
        {
            id: 13,
            ru: "	Тринадцать	",
            eng: "	Thirteen	"
        },
        {
            id: 14,
            ru: "	Четырнадцать	",
            eng: "	Fourteen	"
        },
        {
            id: 15,
            ru: "	Пятнадцать	",
            eng: "	Fifteen	"
        },
        {
            id: 16,
            ru: "	Шестнадцать	",
            eng: "	Sixteen	"
        },
        {
            id: 17,
            ru: "	Семнадцать	",
            eng: "	Seventeen	"
        },
        {
            id: 18,
            ru: "	Восемнадцать	",
            eng: "	Eighteen	"
        },
        {
            id: 19,
            ru: "	Девятнадцать	",
            eng: "	Nineteen	"
        },
        {
            id: 20,
            ru: "	Двадцать	",
            eng: "	Twenty	"
        },
        {
            id: 21,
            ru: "	Двадцать один	",
            eng: "	Twenty-one	"
        },
        {
            id: 22,
            ru: "	Двадцать два	",
            eng: "	Twenty-two	"
        },
        {
            id: 23,
            ru: "	Тридцать	",
            eng: "	Thirty	"
        },
        {
            id: 24,
            ru: "	Тридцать три	",
            eng: "	Thirty-three	"
        },
        {
            id: 25,
            ru: "	Сорок	",
            eng: "	Forty	"
        },
        {
            id: 26,
            ru: "	Пятьдесят пять	",
            eng: "	Fifty-five /фИфти файВ/	"
        },
        {
            id: 27,
            ru: " /э хАндрэд хАнгри хУлигэнz/ 100 голодных хулиганов",
            eng: " a hundred hungry hooligans "
        },


    ],
    mission3: [
        {
            id: 1,
            ru: "красивый",
            eng: "handsome /хЭнсам/"
        },
        {
            id: 2,
            ru: "все (ударение на Э)",
            eng: "everybody /Эврибади/"
        },
        {
            id: 3,
            ru: "Все люди",
            eng: "all people /ол пипл/"
        },
        {
            id: 4,
            ru: "ставим is, если нет глагола",
            eng: "после it,he,she"
        },
        {
            id: 5,
            ru: "ставим ARE, если нет глагола",
            eng: "после you,we,they"
        },
        {
            id: 6,
            ru: " I am a secret agent",
            eng: " Я - секретный агент"
        },
        {
            id: 7,
            ru: " Винсент мой друг",
            eng: " Vismyfriend"
        },
        {
            id: 8,
            ru: " Я особенная",
            eng: " I'm special"
        },
        {
            id: 9,
            ru: " I am special /спэшл/",
            eng: " Я особенный"
        },
        {
            id: 10,
            ru: " You are special! /ю а спэшл/",
            eng: " Особенные вы!"
        },
        {
            id: 11,
            ru: " Я не ленивая z4dniцa",
            eng: " I'm not a lazzy bOttom!"
        },


    ],
    mission1: [
        {					
            id	:	102	,		
            eng	:	"You"	,
            ru	:	"Напишите  как по-английски будет Вы"	
            }	,				
            {					
            id	:	103	,		
            eng	:	"Your"	,
            ru	:	"Напишите  как по-английски будет 	Ваше, твоё	"	
            }	,				
            {					
            id	:	104	,		
            eng	:	"He"	,
            ru	:	"Напишите  как по-английски будет Он"	
            }	,				
            {					
            id	:	105	,		
            eng	:	"His number"	,
            ru	:	"Напишите  как по-английски будет Его номер	"	
            }	,				
            {					
            id	:	106	,		
            eng	:	"She"	,
            ru	:	"Напишите  как по-английски будет Она"	
            }	,				
            {					
            id	:	107	,		
            eng	:	"Her"	,
            ru	:	"Напишите  как по-английски будет Её"	
            }	,				
            {					
            id	:	108	,		
            eng	:	"I"	,
            ru	:	"Напишите  как по-английски будет Я"	
            }	,				
            {					
            id	:	109	,		
            eng	:	"My"	,
            ru	:	"Напишите  как по-английски будет мой, моё, моя, мои"	
            }	,				
            {					
            id	:	110	,		
            eng	:	"We"	,
            ru	:	"Напишите  как по-английски будет Мы"	
            }	,				
            {					
            id	:	111	,		
            eng	:	"Our"	,
            ru	:	"Напишите  как по-английски будет наш, наше, наши, наша	"	
            }	,				
            {					
            id	:	112	,		
            eng	:	"They	"	,
            ru	:	"Напишите  как по-английски будет Они"	
            }	,				
            {					
            id	:	113	,		
            eng	:	"Their children"	,
            ru	:	"Напишите  как по-английски будет Их дети"	
            }	,				
            {					
            id	:	114	,		
            eng	:	"Their child"	,
            ru	:	"Напишите  как по-английски будет Их ребёнок"	
            }	,				
            {					
            id	:	115	,		
            eng	:	"Their dog"	,
            ru	:	"Напишите  как по-английски будет Их собака"	
            }	,				
            {					
            id	:	116	,		
            eng	:	"It"	,
            ru	:	"Напишите  как по-английски будет Это"	
            }	,				
            {					
            id	:	117	,		
            eng	:	"This"	,
            ru	:	"Напишите  как по-английски будет Вот это"	
            }	,				
    ],
    seasons: [
        {
            id: 1,
            ru: "	лето	",
            eng: "	summer /сАмэ/	"
        },
        {
            id: 2,
            ru: "	зима	",
            eng: "	winter	/уИнтэ/"
        },
        {
            id: 3,
            ru: "	осень	",
            eng: "	fall /фол/ or autumn /Отэм/	"
        },
        {
            id: 4,
            ru: "	весна	",
            eng: "	spring /сприн/	"
        },
        {
            id: 5,
            ru: "	январь	",
            eng: "	january "
        },
        {
            id: 6,
            ru: "	февраль	",
            eng: "	february	"
        },
        {
            id: 7,
            ru: "	март	",
            eng: "	march	"
        },
        {
            id: 8,
            ru: "	апрель	",
            eng: "	april /Эйприл/"
        },
        {
            id: 9,
            ru: "	май	",
            eng: "	may /мэй/"
        },
        {
            id: 10,
            ru: "	июнь	",
            eng: "	june	/джун/"
        },
        {
            id: 11,
            ru: "	июль	",
            eng: "	july	/джулАй/"
        },
        {
            id: 12,
            ru: "	август	",
            eng: "	august	/Огэст/"
        },
        {
            id: 13,
            ru: "	сентябрь	",
            eng: "	september	"
        },
        {
            id: 14,
            ru: "	октябрь	",
            eng: "	october	"
        },
        {
            id: 15,
            ru: "	ноябрь	",
            eng: "	november	"
        },
        {
            id: 16,
            ru: "	декабрь	",
            eng: "	december	"
        },

    ],
    animals: [
        {
            id: 101,
            ru: "	Лев	",
            eng: "	Lion /лАйэн/"
        },
        {
            id: 102,
            ru: "	Слон	",
            eng: "	Elephant	"
        },
        {
            id: 103,
            ru: "	Тигр	",
            eng: "	Tiger /тАйгэ/	"
        },
        {
            id: 104,
            ru: "	жираф	",
            eng: "	Giraffe	"
        },
        {
            id: 105,
            ru: "	Обезьяна	",
            eng: "	Monkey	"
        },
        {
            id: 106,
            ru: "	Панда	",
            eng: "	Panda	/пЭнда/"
        },
        {
            id: 107,
            ru: "	Полярный медведь	",
            eng: "	a bear with beer /бЭа/ /бИэ/"
        },
        {
            id: 108,
            ru: "	пингвин	",
            eng: "	Penguin	"
        },
        {
            id: 109,
            ru: "	Кенгуру	",
            eng: "	Kangaroo	"
        },
        {
            id: 110,
            ru: "	Крокодил	",
            eng: "	Crocodile	/крокодАйл"
        },
        {
            id: 111,
            ru: "	Волк	",
            eng: "	Wolf /вулф/"
        },
        {
            id: 112,
            ru: "	Овечка	",
            eng: "	Sheep	"
        },
        {
            id: 113,
            ru: "	Зебра	",
            eng: "	Zebra	/зИбрэ/"
        },
        {
            id: 114,
            ru: "	Лиса	",
            eng: "	Fox	"
        },
        {
            id: 115,
            ru: "	Курица	",
            eng: "	hen	/хэн/"
        },
        {
            id: 116,
            ru: "	Петух	",
            eng: "	Rooster	/рУстэ/"
        }
    ],
    commonVerbs: [
        {
            id:1,
            eng:"break something",
            ru:"сломать что-то"
            },
            {
            id:2,
            eng:"beat somebody",
            ru:"побить кого-то"
            },
            {
            id:3,
            eng:"dance on the table",
            ru:"танцевать на столе"
            },
            {
            id:4,
            eng:"go to the toilet",
            ru:"пойти в туалет"
            },
            {
            id:5,
            eng:"go to a bar",
            ru:"пойти в бар"
            },
            {
            id:6,
            eng:"go to the GYM",
            ru:"пойти в спортзал"
            },
            {
            id:7,
            eng:"buy something",
            ru:"купить что-то"
            },
            {
            id:8,
            eng:"buy food",
            ru:"купить еду"
            },
            {
            id:9,
            eng:"bring the children to school",
            ru:"отвести детей в школу"
            },
            {
            id:10,
            eng:"bite nails",
            ru:"грызть ногти"
            },
            {
            id:11,
            eng:"choose songs to sing",
            ru:"выбирать песни для пения"
            },
            {
            id:12,
            eng:"deal with hooligans",
            ru:"(неправильный глагол;) Иметь дела с хулиганами"
            },
            {
            id:13,
            eng:"dig potatoes",
            ru:"копать картошку"
            },
            {
            id:14,
            eng:"do English homework",
            ru:"делать домашнее задание по английскому"
            },
            {
            id:15,
            eng:"drive a car",
            ru:"водить машину"
            },
            {
            id:16,
            eng:"draw pictures",
            ru:"рисовать картинки"
            },
            {
            id:17,
            eng:"eat something",
            ru:"есть что-то"
            },
            {
            id:18,
            eng:"kiss somebody",
            ru:"поцеловать кого-то"
            },
            {
            id:19,
            eng:"listen to music",
            ru:"слушать музыку"
            },
            {
            id:20,
            eng:"drink alcohol",
            ru:"пить алкоголь"
            },
            {
            id:21,
            eng:"hide money",
            ru:"скрывать деньги"
            },
            {
            id:22,
            eng:"learn something new",
            ru:"учить что-то новое"
            },
            {
            id:23,
            eng:"lose something",
            ru:"потерять что-то"
            },
            {
            id:24,
            eng:"tell a lie",
            ru:"сказать ложь"
            },
            {
            id:25,
            eng:"sleep",
            ru:"спать"
            },
            {
            id:26,
            eng:"cook",
            ru:"готовить"
            },
            {
            id:27,
            eng:"cry",
            ru:"плакать"
            },
            {
            id:28,
            eng:"think about something",
            ru:"думать о чем-то"
            },
            {
            id:29,
            eng:"play computer games",
            ru:"играть в компьютерные игры"
            },
            {
            id:30,
            eng:"speak with somebody",
            ru:"разговаривать с кем-то"
            },
            {
            id:31,
            eng:"wash a car",
            ru:"мыть машину"
            },
            {
            id:32,
            eng:"watch TV",
            ru:"смотреть телевизор"
            },
            {
            id:33,
            eng:"check e-mails",
            ru:"проверять электронную почту"
            },
            {
            id:34,
            eng:"call someone",
            ru:"позвонить кому-то"
            },
            {
            id:35,
            eng:"call the police",
            ru:"вызвать полицию"
            },
            {
            id:36,
            eng:"run to work",
            ru:"бежать на работу"
            },
            {
            id:37,
            eng:"work hard",
            ru:"усердно работать"
            },
            {
            id:38,
            eng:"meet with somebody",
            ru:"встречаться с кем-то"
            },
            {
            id:39,
            eng:"ride a horse",
            ru:"ездить верхом на лошади"
            },
            {
            id:40,
            eng:"read a book",
            ru:"читать книгу"
            },
            {
            id:41,
            eng:"sing favorite songs",
            ru:"петь любимые песни"
            },
            {
            id:42,
            eng:"speak English",
            ru:"разговаривать на английском"
            },
            {
            id:43,
            eng:"fly to a business trip",
            ru:"лететь в командировку"
            },
            {
            id:44,
            eng:"send romantic postcards to a teacher",
            ru:"отправлять романтические открытки учителю"
            },
            {
            id:45,
            eng:"spend a lot of money",
            ru:"тратить много денег"
            },
            {
            id:46,
            eng:"sleep",
            ru:"спать"
            },
            {
            id:47,
            eng:"walk with a dog",
            ru:"гулять с собакой"
            },
            {
            id:48,
            eng:"relax",
            ru:"расслабиться"
            },
            {
            id:49,
            eng:"swim in a swimming pool",
            ru:"плавать в бассейне"
            },
            {
            id:50,
            eng:"swim in the sea",
            ru:"плавать в море"
            },
            {
            id:51,
            eng:"have a shower",
            ru:"принимать душ"
            },
            {
            id:52,
            eng:"do yoga",
            ru:"заниматься йогой"
            },
            {
            id:53,
            eng:"sit in the cinema",
            ru:"сидеть в кинотеатре"
            },
            {
            id:54,
            eng:"write dirty comments under somebody's post",
            ru:"писать грязные комментарии под чьим-то постом"
            },
            {
            id:55,
            eng:"drink behind the garages",
            ru:"пить за гаражами"
            },
            {
            id:56,
            eng:"smoke a cigar",
            ru:"курить сигару"
            },
            {
            id:57,
            eng:"ride a motorbike",
            ru:"ездить на мотоцикле"
            },
            {
            id:58,
            eng:"ride a bicycle",
            ru:"кататься на велосипеде"
            },
            {
            id:59,
            eng:"touch my bellybutton",
            ru:"трогать свой пупок"
            },
            {
            id:60,
            eng:"wash my body",
            ru:"мыть свое тело"
            },
            {
            id:61,
            eng:"wash floors",
            ru:"мыть полы"
            },
            {
            id:62,
            eng:"do the housework",
            ru:"заниматься домашними делами"
            },			
    ],
    numbers: [
        {
            id: 301,
            ru: "	один	",
            eng: "	one	"
        },
        {
            id: 302,
            ru: "	два	",
            eng: "	two	"
        },
        {
            id: 303,
            ru: "	три	",
            eng: "	three	"
        },
        {
            id: 304,
            ru: "	четыре	",
            eng: "	four	"
        },
        {
            id: 305,
            ru: "	пять	",
            eng: "	five	"
        },
        {
            id: 306,
            ru: "	шесть	",
            eng: "	six	"
        },
        {
            id: 307,
            ru: "	семь	",
            eng: "	seven	"
        },
    ],
    Irregular_verbs_1_form: [
        {
            id: 1001,
            ru: "	ломать	",
            eng: "	break	"
        },
        {
            id: 1002,
            ru: "	бить, побеждать	",
            eng: "	beat	"
        },
        {
            id: 1003,
            ru: "	становиться	",
            eng: "	become	"
        },
        {
            id: 1004,
            ru: "	начинать	",
            eng: "	begin	"
        },
        {
            id: 1005,
            ru: "	дуть	",
            eng: "	blow	"
        },
        {
            id: 1006,
            ru: "	строить	",
            eng: "	build	"
        },
        {
            id: 1007,
            ru: "	сжигать, гореть	",
            eng: "	burn	"
        },
        {
            id: 1008,
            ru: "	покупать	",
            eng: "	buy	"
        },
        {
            id: 1009,
            ru: "	приносить	",
            eng: "	bring	"
        },
        {
            id: 1010,
            ru: "	быть	",
            eng: "	be	"
        },
        {
            id: 1011,
            ru: "	кусать	",
            eng: "	bite	"
        },
        {
            id: 1012,
            ru: "	приходить	",
            eng: "	come	"
        },
        {
            id: 1013,
            ru: "	выбирать	",
            eng: "	choose	"
        },
        {
            id: 1014,
            ru: "	ловить	",
            eng: "	catch	"
        },
        {
            id: 1015,
            ru: "	ползать	",
            eng: "	creep	"
        },
        {
            id: 1016,
            ru: "	стоить	",
            eng: "	cost	"
        },
        {
            id: 1017,
            ru: "	резать	",
            eng: "	cut	"
        },
        {
            id: 1018,
            ru: "	иметь дела	",
            eng: "	deal	"
        },
        {
            id: 1019,
            ru: "	копать	",
            eng: "	dig	"
        },
        {
            id: 1020,
            ru: "	делать	",
            eng: "	do	"
        },
        {
            id: 1021,
            ru: "	водить	",
            eng: "	drive	"
        },
        {
            id: 1022,
            ru: "	рисовать	",
            eng: "	draw	"
        },
        {
            id: 1023,
            ru: "	пить	",
            eng: "	drink	"
        },
        {
            id: 1024,
            ru: "	кушать	",
            eng: "	eat	"
        },
        {
            id: 1025,
            ru: "	падать	",
            eng: "	fall	"
        },
        {
            id: 1026,
            ru: "	кормить	",
            eng: "	feed	"
        },
        {
            id: 1027,
            ru: "	чувствовать	",
            eng: "	feel	"
        },
        {
            id: 1028,
            ru: "	сражаться	",
            eng: "	fight	"
        },
        {
            id: 1029,
            ru: "	находить	",
            eng: "	find	"
        },
        {
            id: 1030,
            ru: "	летать	",
            eng: "	fly	"
        },
        {
            id: 1031,
            ru: "	запрещать	",
            eng: "	forbid	"
        },
        {
            id: 1032,
            ru: "	забывать	",
            eng: "	forget	"
        },
        {
            id: 1033,
            ru: "	прощать	",
            eng: "	forgive	"
        },
        {
            id: 1034,
            ru: "	замерзать	",
            eng: "	freeze	"
        },
        {
            id: 1035,
            ru: "	расти	",
            eng: "	grow	"
        },
        {
            id: 1036,
            ru: "	получать	",
            eng: "	get	"
        },
        {
            id: 1037,
            ru: "	давать	",
            eng: "	give	"
        },
        {
            id: 1038,
            ru: "	ходить	",
            eng: "	go	"
        },
        {
            id: 1039,
            ru: "	иметь	",
            eng: "	have	"
        },
        {
            id: 1040,
            ru: "	слышать	",
            eng: "	hear	"
        },
        {
            id: 1041,
            ru: "	прятать	",
            eng: "	hide	"
        },
        {
            id: 1042,
            ru: "	ударять	",
            eng: "	hit	"
        },
        {
            id: 1043,
            ru: "	причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 1044,
            ru: "	держать	",
            eng: "	hold	"
        },
        {
            id: 1045,
            ru: "	хранить	",
            eng: "	keep	"
        },
        {
            id: 1046,
            ru: "	знать	",
            eng: "	know	"
        },
        {
            id: 1047,
            ru: "	изучать	",
            eng: "	learn	"
        },
        {
            id: 1048,
            ru: "	покидать	",
            eng: "	leave	"
        },
        {
            id: 1049,
            ru: "	давать в долг	",
            eng: "	lend	"
        },
        {
            id: 1050,
            ru: "	позволять	",
            eng: "	let	"
        },
        {
            id: 1051,
            ru: "	терять	",
            eng: "	lose	"
        },
        {
            id: 1052,
            ru: "	укладывать	",
            eng: "	lay	"
        },
        {
            id: 1053,
            ru: "	лежать	",
            eng: "	lie	"
        },
        {
            id: 1054,
            ru: "	делать, создавать	",
            eng: "	make	"
        },
        {
            id: 1055,
            ru: "	иметь ввиду	",
            eng: "	mean	"
        },
        {
            id: 1056,
            ru: "	встречаться	",
            eng: "	meet	"
        },
        {
            id: 1057,
            ru: "	платить	",
            eng: "	pay	"
        },
        {
            id: 1058,
            ru: "	класть	",
            eng: "	put	"
        },
        {
            id: 1059,
            ru: "	читать	",
            eng: "	read	"
        },
        {
            id: 1060,
            ru: "	ездить верхом	",
            eng: "	ride	"
        },
        {
            id: 1061,
            ru: "	звенеть	",
            eng: "	ring	"
        },
        {
            id: 1062,
            ru: "	бегать	",
            eng: "	run	"
        },
        {
            id: 1063,
            ru: "	подниматься	",
            eng: "	rise	"
        },
        {
            id: 1064,
            ru: "	 сказать, произнести	",
            eng: "	say	"
        },
        {
            id: 1065,
            ru: "	(у)видеть	",
            eng: "	see	"
        },
        {
            id: 1066,
            ru: "	продавать	",
            eng: "	sell	"
        },
        {
            id: 1067,
            ru: "	отправлять	",
            eng: "	send	"
        },
        {
            id: 1068,
            ru: "	трясти	",
            eng: "	shake	"
        },
        {
            id: 1069,
            ru: "	стрелять	",
            eng: "	shoot	"
        },
        {
            id: 1070,
            ru: "	захлопывать	",
            eng: "	shut	"
        },
        {
            id: 1071,
            ru: "	петь	",
            eng: "	sing	"
        },
        {
            id: 1072,
            ru: "	затонуть	",
            eng: "	sink	"
        },
        {
            id: 1073,
            ru: "	сидеть	",
            eng: "	sit	"
        },
        {
            id: 1074,
            ru: "	спать	",
            eng: "	sleep	"
        },
        {
            id: 1075,
            ru: "	скользить	",
            eng: "	slide	"
        },
        {
            id: 1076,
            ru: "	разговаривать	",
            eng: "	speak	"
        },
        {
            id: 1077,
            ru: "	тратить	",
            eng: "	spend	"
        },
        {
            id: 1078,
            ru: "	плеваться	",
            eng: "	spit	"
        },
        {
            id: 1079,
            ru: "	встать, стоять	",
            eng: "	stand	"
        },
        {
            id: 1080,
            ru: "	воровать	",
            eng: "	steal	"
        },
        {
            id: 1081,
            ru: "	приклеить, застрять 	",
            eng: "	stick	"
        },
        {
            id: 1082,
            ru: "	вонять	",
            eng: "	stink	"
        },
        {
            id: 1083,
            ru: "	ударять	",
            eng: "	strike	"
        },
        {
            id: 1084,
            ru: "	клясться/материться 	",
            eng: "	swear	"
        },
        {
            id: 1085,
            ru: "	подметать	",
            eng: "	sweep	"
        },
        {
            id: 1086,
            ru: "	плавать	",
            eng: "	swim	"
        },
        {
            id: 1087,
            ru: "	качаться	",
            eng: "	swing	"
        },
        {
            id: 1088,
            ru: "	брать	",
            eng: "	take	"
        },
        {
            id: 1089,
            ru: "	 обучать	",
            eng: "	teach	"
        },
        {
            id: 1090,
            ru: "	рвать, вырывать	",
            eng: "	tear	"
        },
        {
            id: 1091,
            ru: "	рассказывать	",
            eng: "	tell	"
        },
        {
            id: 1092,
            ru: "	думать	",
            eng: "	think	"
        },
        {
            id: 1093,
            ru: "	бросать	",
            eng: "	throw	"
        },
        {
            id: 1094,
            ru: "	понимать	",
            eng: "	understand	"
        },
        {
            id: 1095,
            ru: "	 будить, просыпаться	",
            eng: "	wake up	"
        },
        {
            id: 1096,
            ru: "	носить одежду	",
            eng: "	wear	"
        },
        {
            id: 1097,
            ru: "	писать	",
            eng: "	write	"
        },
        {
            id: 1098,
            ru: "	хныкать	",
            eng: "	weep	"
        },
        {
            id: 1099,
            ru: "	выигрывать	",
            eng: "	win	"
        },
        {
            id: 1100,
            ru: "	неправ. понять	",
            eng: "	misunderstand	"
        },
        {
            id: 1101,
            ru: "	неправ. написать	",
            eng: "	misspell	"
        },
        {
            id: 1102,
            ru: "	ошибаться	",
            eng: "	mistake	"
        },
        {
            id: 1103,
            ru: "	неправ. услышать	",
            eng: "	mishear	"
        },
        {
            id: 1104,
            ru: "	переспать	",
            eng: "	oversleep	"
        },
        {
            id: 1105,
            ru: "	переесть 	",
            eng: "	overeat	"
        },
        {
            id: 1106,
            ru: "	переплатить	",
            eng: "	overpay	"
        },
        {
            id: 1107,
            ru: "	могу - мог	",
            eng: "	can	"
        },
        {
            id: 1108,
            ru: "	следует	",
            eng: "	shall	"
        },
        {
            id: 1109,
            ru: "	можно / возможно	",
            eng: "	may	"
        },
        {
            id: 1110,
            ru: "	 в будущем / бы	",
            eng: "	will	"
        },
    ],
    Irr_v_3_forms: [
        {
            id: 3001,
            ru: "	broke , broken	",
            eng: "	break	"
        },
        {
            id: 3002,
            ru: "	beat , beaten	",
            eng: "	beat	"
        },
        {
            id: 3003,
            ru: "	became , become	",
            eng: "	become	"
        },
        {
            id: 3004,
            ru: "	began , begun	",
            eng: "	begin	"
        },
        {
            id: 3005,
            ru: "	blew , blown	",
            eng: "	blow	"
        },
        {
            id: 3006,
            ru: "	built , built	",
            eng: "	build	"
        },
        {
            id: 3007,
            ru: "	burnt , burnt	",
            eng: "	burn	"
        },
        {
            id: 3008,
            ru: "	bought , bought	",
            eng: "	buy	"
        },
        {
            id: 3009,
            ru: "	brought , brought	",
            eng: "	bring	"
        },
        {
            id: 3010,
            ru: "	was/were , been	",
            eng: "	be	"
        },
        {
            id: 3011,
            ru: "	bit , bit	",
            eng: "	bite	"
        },
        {
            id: 3012,
            ru: "	came , come	",
            eng: "	come	"
        },
        {
            id: 3013,
            ru: "	chose , chosen	",
            eng: "	choose	"
        },
        {
            id: 3014,
            ru: "	caught , caught	",
            eng: "	catch	"
        },
        {
            id: 3015,
            ru: "	crept , crept	",
            eng: "	creep	"
        },
        {
            id: 3016,
            ru: "	cost , cost	",
            eng: "	cost	"
        },
        {
            id: 3017,
            ru: "	cut , cut	",
            eng: "	cut	"
        },
        {
            id: 3018,
            ru: "	dealt , dealt	",
            eng: "	deal	"
        },
        {
            id: 3019,
            ru: "	dug , dug	",
            eng: "	dig	"
        },
        {
            id: 3020,
            ru: "	did , done	",
            eng: "	do	"
        },
        {
            id: 3021,
            ru: "	drove , driven	",
            eng: "	drive	"
        },
        {
            id: 3022,
            ru: "	drew , drawn	",
            eng: "	draw	"
        },
        {
            id: 3023,
            ru: "	drank , drunk	",
            eng: "	drink	"
        },
        {
            id: 3024,
            ru: "	ate , eaten	",
            eng: "	eat	"
        },
        {
            id: 3025,
            ru: "	fell , fallen	",
            eng: "	fall	"
        },
        {
            id: 3026,
            ru: "	fed , fed	",
            eng: "	feed	"
        },
        {
            id: 3027,
            ru: "	felt , felt	",
            eng: "	feel	"
        },
        {
            id: 3028,
            ru: "	fought , fought	",
            eng: "	fight	"
        },
        {
            id: 3029,
            ru: "	found , found	",
            eng: "	find	"
        },
        {
            id: 3030,
            ru: "	flew , flown	",
            eng: "	fly	"
        },
        {
            id: 3031,
            ru: "	forbade , forbidden	",
            eng: "	forbid	"
        },
        {
            id: 3032,
            ru: "	forgot , forgotten	",
            eng: "	forget	"
        },
        {
            id: 3033,
            ru: "	forgave , forgiven	",
            eng: "	forgive	"
        },
        {
            id: 3034,
            ru: "	froze , frozen	",
            eng: "	freeze	"
        },
        {
            id: 3035,
            ru: "	grew , grown	",
            eng: "	grow	"
        },
        {
            id: 3036,
            ru: "	got , got	",
            eng: "	get	"
        },
        {
            id: 3037,
            ru: "	gave , given	",
            eng: "	give	"
        },
        {
            id: 3038,
            ru: "	went , gone	",
            eng: "	go	"
        },
        {
            id: 3039,
            ru: "	had , had	",
            eng: "	have	"
        },
        {
            id: 3040,
            ru: "	heard , heard	",
            eng: "	hear	"
        },
        {
            id: 3041,
            ru: "	hid , hidden	",
            eng: "	hide	"
        },
        {
            id: 3042,
            ru: "	hit , hit	",
            eng: "	hit	"
        },
        {
            id: 3043,
            ru: "	hurt , hurt	",
            eng: "	hurt	"
        },
        {
            id: 3044,
            ru: "	held , held	",
            eng: "	hold	"
        },
        {
            id: 3045,
            ru: "	kept , kept	",
            eng: "	keep	"
        },
        {
            id: 3046,
            ru: "	knew , known	",
            eng: "	know	"
        },
        {
            id: 3047,
            ru: "	learnt , learnt	",
            eng: "	learn	"
        },
        {
            id: 3048,
            ru: "	left , left	",
            eng: "	leave	"
        },
        {
            id: 3049,
            ru: "	lent , lent	",
            eng: "	lend	"
        },
        {
            id: 3050,
            ru: "	let , let	",
            eng: "	let	"
        },
        {
            id: 3051,
            ru: "	lost , lost	",
            eng: "	lose	"
        },
        {
            id: 3052,
            ru: "	laid , laid	",
            eng: "	lay	"
        },
        {
            id: 3053,
            ru: "	lay , lain	",
            eng: "	lie	"
        },
        {
            id: 3054,
            ru: "	made , made	",
            eng: "	make	"
        },
        {
            id: 3055,
            ru: "	meant , meant	",
            eng: "	mean	"
        },
        {
            id: 3056,
            ru: "	met , met	",
            eng: "	meet	"
        },
        {
            id: 3057,
            ru: "	paid , paid	",
            eng: "	pay	"
        },
        {
            id: 3058,
            ru: "	put , put	",
            eng: "	put	"
        },
        {
            id: 3059,
            ru: "	read , read	",
            eng: "	read	"
        },
        {
            id: 3060,
            ru: "	rode , ridden	",
            eng: "	ride	"
        },
        {
            id: 3061,
            ru: "	rang , rung	",
            eng: "	ring	"
        },
        {
            id: 3062,
            ru: "	ran , run	",
            eng: "	run	"
        },
        {
            id: 3063,
            ru: "	rose , risen	",
            eng: "	rise	"
        },
        {
            id: 3064,
            ru: "	said , said	",
            eng: "	say	"
        },
        {
            id: 3065,
            ru: "	saw , seen	",
            eng: "	see	"
        },
        {
            id: 3066,
            ru: "	sold , sold	",
            eng: "	sell	"
        },
        {
            id: 3067,
            ru: "	sent , sent	",
            eng: "	send	"
        },
        {
            id: 3068,
            ru: "	shook , shaken	",
            eng: "	shake	"
        },
        {
            id: 3069,
            ru: "	shot , shot	",
            eng: "	shoot	"
        },
        {
            id: 3070,
            ru: "	shut , shut	",
            eng: "	shut	"
        },
        {
            id: 3071,
            ru: "	sang , sung	",
            eng: "	sing	"
        },
        {
            id: 3072,
            ru: "	sank , sunk	",
            eng: "	sink	"
        },
        {
            id: 3073,
            ru: "	sat , sat	",
            eng: "	sit	"
        },
        {
            id: 3074,
            ru: "	slept , slept	",
            eng: "	sleep	"
        },
        {
            id: 3075,
            ru: "	slid , slid	",
            eng: "	slide	"
        },
        {
            id: 3076,
            ru: "	spoke , spoken	",
            eng: "	speak	"
        },
        {
            id: 3077,
            ru: "	spent , spent	",
            eng: "	spend	"
        },
        {
            id: 3078,
            ru: "	spat , spat	",
            eng: "	spit	"
        },
        {
            id: 3079,
            ru: "	stood , stood	",
            eng: "	stand	"
        },
        {
            id: 3080,
            ru: "	stole , stolen	",
            eng: "	steal	"
        },
        {
            id: 3081,
            ru: "	stuck , stuck	",
            eng: "	stick	"
        },
        {
            id: 3082,
            ru: "	stank , stunk	",
            eng: "	stink	"
        },
        {
            id: 3083,
            ru: "	struck , struck	",
            eng: "	strike	"
        },
        {
            id: 3084,
            ru: "	swore , sworn	",
            eng: "	swear	"
        },
        {
            id: 3085,
            ru: "	swept , swept	",
            eng: "	sweep	"
        },
        {
            id: 3086,
            ru: "	swam , swum	",
            eng: "	swim	"
        },
        {
            id: 3087,
            ru: "	swung , swung	",
            eng: "	swing	"
        },
        {
            id: 3088,
            ru: "	took , taken	",
            eng: "	take	"
        },
        {
            id: 3089,
            ru: "	taught , taught	",
            eng: "	teach	"
        },
        {
            id: 3090,
            ru: "	tore , torn	",
            eng: "	tear	"
        },
        {
            id: 3091,
            ru: "	told , told	",
            eng: "	tell	"
        },
        {
            id: 3092,
            ru: "	thought , thought	",
            eng: "	think	"
        },
        {
            id: 3093,
            ru: "	threw , thrown	",
            eng: "	throw	"
        },
        {
            id: 3094,
            ru: "	understood , understood	",
            eng: "	understand	"
        },
        {
            id: 3095,
            ru: "	woke up , woken up	",
            eng: "	wake up	"
        },
        {
            id: 3096,
            ru: "	wore , worn	",
            eng: "	wear	"
        },
        {
            id: 3097,
            ru: "	wrote , written	",
            eng: "	write	"
        },
        {
            id: 3098,
            ru: "	wept , wept	",
            eng: "	weep	"
        },
        {
            id: 3099,
            ru: "	won , won	",
            eng: "	win	"
        },
        {
            id: 3100,
            ru: "	misunderstood , misunderstood	",
            eng: "	misunderstand	"
        },
        {
            id: 3101,
            ru: "	misspelt , misspelt	",
            eng: "	misspell	"
        },
        {
            id: 3102,
            ru: "	mistook , mistaken	",
            eng: "	mistake	"
        },
        {
            id: 3103,
            ru: "	misheard , misheard	",
            eng: "	mishear	"
        },
        {
            id: 3104,
            ru: "	overslept , overslept	",
            eng: "	oversleep	"
        },
        {
            id: 3105,
            ru: "	overate , overeaten	",
            eng: "	overeat	"
        },
        {
            id: 3106,
            ru: "	overpaid , overpaid	",
            eng: "	overpay	"
        },
        {
            id: 3107,
            ru: "	could	",
            eng: "	can	"
        },
        {
            id: 3108,
            ru: "	should	",
            eng: "	shall	"
        },
        {
            id: 3109,
            ru: "	might	",
            eng: "	may	"
        },
        {
            id: 3110,
            ru: "	would + V	",
            eng: "	will	"
        },
    ],
    Irregular_verbs_En_Ru: [
        {
            id: 2001,
            ru: "	broke , broken , ломать	",
            eng: "	break	"
        },
        {
            id: 2002,
            ru: "	beat , beaten , бить, побеждать	",
            eng: "	beat	"
        },
        {
            id: 2003,
            ru: "	became , become , становиться	",
            eng: "	become	"
        },
        {
            id: 2004,
            ru: "	began , begun , начинать	",
            eng: "	begin	"
        },
        {
            id: 2005,
            ru: "	blew , blown , дуть	",
            eng: "	blow	"
        },
        {
            id: 2006,
            ru: "	built , built , строить	",
            eng: "	build	"
        },
        {
            id: 2007,
            ru: "	burnt , burnt , сжигать, гореть	",
            eng: "	burn	"
        },
        {
            id: 2008,
            ru: "	bought , bought , покупать	",
            eng: "	buy	"
        },
        {
            id: 2009,
            ru: "	brought , brought , приносить	",
            eng: "	bring	"
        },
        {
            id: 2010,
            ru: "	was/were , been , быть	",
            eng: "	be	"
        },
        {
            id: 2011,
            ru: "	bit , bit , кусать	",
            eng: "	bite	"
        },
        {
            id: 2012,
            ru: "	came , come , приходить	",
            eng: "	come	"
        },
        {
            id: 2013,
            ru: "	chose , chosen , выбирать	",
            eng: "	choose	"
        },
        {
            id: 2014,
            ru: "	caught , caught , ловить	",
            eng: "	catch	"
        },
        {
            id: 2015,
            ru: "	crept , crept , ползать	",
            eng: "	creep	"
        },
        {
            id: 2016,
            ru: "	cost , cost , стоить	",
            eng: "	cost	"
        },
        {
            id: 2017,
            ru: "	cut , cut , резать	",
            eng: "	cut	"
        },
        {
            id: 2018,
            ru: "	dealt , dealt , иметь дела	",
            eng: "	deal	"
        },
        {
            id: 2019,
            ru: "	dug , dug , копать	",
            eng: "	dig	"
        },
        {
            id: 2020,
            ru: "	did , done , делать	",
            eng: "	do	"
        },
        {
            id: 2021,
            ru: "	drove , driven , водить	",
            eng: "	drive	"
        },
        {
            id: 2022,
            ru: "	drew , drawn , рисовать	",
            eng: "	draw	"
        },
        {
            id: 2023,
            ru: "	drank , drunk , пить	",
            eng: "	drink	"
        },
        {
            id: 2024,
            ru: "	ate , eaten , кушать	",
            eng: "	eat	"
        },
        {
            id: 2025,
            ru: "	fell , fallen , падать	",
            eng: "	fall	"
        },
        {
            id: 2026,
            ru: "	fed , fed , кормить	",
            eng: "	feed	"
        },
        {
            id: 2027,
            ru: "	felt , felt , чувствовать	",
            eng: "	feel	"
        },
        {
            id: 2028,
            ru: "	fought , fought , сражаться	",
            eng: "	fight	"
        },
        {
            id: 2029,
            ru: "	found , found , находить	",
            eng: "	find	"
        },
        {
            id: 2030,
            ru: "	flew , flown , летать	",
            eng: "	fly	"
        },
        {
            id: 2031,
            ru: "	forbade , forbidden , запрещать	",
            eng: "	forbid	"
        },
        {
            id: 2032,
            ru: "	forgot , forgotten , забывать	",
            eng: "	forget	"
        },
        {
            id: 2033,
            ru: "	forgave , forgiven , прощать	",
            eng: "	forgive	"
        },
        {
            id: 2034,
            ru: "	froze , frozen , замерзать	",
            eng: "	freeze	"
        },
        {
            id: 2035,
            ru: "	grew , grown , расти	",
            eng: "	grow	"
        },
        {
            id: 2036,
            ru: "	got , got , получать	",
            eng: "	get	"
        },
        {
            id: 2037,
            ru: "	gave , given , давать	",
            eng: "	give	"
        },
        {
            id: 2038,
            ru: "	went , gone , ходить	",
            eng: "	go	"
        },
        {
            id: 2039,
            ru: "	had , had , иметь	",
            eng: "	have	"
        },
        {
            id: 2040,
            ru: "	heard , heard , слышать	",
            eng: "	hear	"
        },
        {
            id: 2041,
            ru: "	hid , hidden , прятать	",
            eng: "	hide	"
        },
        {
            id: 2042,
            ru: "	hit , hit , ударять	",
            eng: "	hit	"
        },
        {
            id: 2043,
            ru: "	hurt , hurt , причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 2044,
            ru: "	held , held , держать	",
            eng: "	hold	"
        },
        {
            id: 2045,
            ru: "	kept , kept , хранить	",
            eng: "	keep	"
        },
        {
            id: 2046,
            ru: "	knew , known , знать	",
            eng: "	know	"
        },
        {
            id: 2047,
            ru: "	learnt , learnt , изучать	",
            eng: "	learn	"
        },
        {
            id: 2048,
            ru: "	left , left , покидать	",
            eng: "	leave	"
        },
        {
            id: 2049,
            ru: "	lent , lent , давать в долг	",
            eng: "	lend	"
        },
        {
            id: 2050,
            ru: "	let , let , позволять	",
            eng: "	let	"
        },
        {
            id: 2051,
            ru: "	lost , lost , терять	",
            eng: "	lose	"
        },
        {
            id: 2052,
            ru: "	laid , laid , укладывать	",
            eng: "	lay	"
        },
        {
            id: 2053,
            ru: "	lay , lain , лежать	",
            eng: "	lie	"
        },
        {
            id: 2054,
            ru: "	made , made , делать, создавать	",
            eng: "	make	"
        },
        {
            id: 2055,
            ru: "	meant , meant , иметь ввиду	",
            eng: "	mean	"
        },
        {
            id: 2056,
            ru: "	met , met , встречаться	",
            eng: "	meet	"
        },
        {
            id: 2057,
            ru: "	paid , paid , платить	",
            eng: "	pay	"
        },
        {
            id: 2058,
            ru: "	put , put , класть	",
            eng: "	put	"
        },
        {
            id: 2059,
            ru: "	read , read , читать	",
            eng: "	read	"
        },
        {
            id: 2060,
            ru: "	rode , ridden , ездить верхом	",
            eng: "	ride	"
        },
        {
            id: 2061,
            ru: "	rang , rung , звенеть	",
            eng: "	ring	"
        },
        {
            id: 2062,
            ru: "	ran , run , бегать	",
            eng: "	run	"
        },
        {
            id: 2063,
            ru: "	rose , risen , подниматься	",
            eng: "	rise	"
        },
        {
            id: 2064,
            ru: "	said , said ,  сказать, произнести	",
            eng: "	say	"
        },
        {
            id: 2065,
            ru: "	saw , seen , (у)видеть	",
            eng: "	see	"
        },
        {
            id: 2066,
            ru: "	sold , sold , продавать	",
            eng: "	sell	"
        },
        {
            id: 2067,
            ru: "	sent , sent , отправлять	",
            eng: "	send	"
        },
        {
            id: 2068,
            ru: "	shook , shaken , трясти	",
            eng: "	shake	"
        },
        {
            id: 2069,
            ru: "	shot , shot , стрелять	",
            eng: "	shoot	"
        },
        {
            id: 2070,
            ru: "	shut , shut , захлопывать	",
            eng: "	shut	"
        },
        {
            id: 2071,
            ru: "	sang , sung , петь	",
            eng: "	sing	"
        },
        {
            id: 2072,
            ru: "	sank , sunk , затонуть	",
            eng: "	sink	"
        },
        {
            id: 2073,
            ru: "	sat , sat , сидеть	",
            eng: "	sit	"
        },
        {
            id: 2074,
            ru: "	slept , slept , спать	",
            eng: "	sleep	"
        },
        {
            id: 2075,
            ru: "	slid , slid , скользить	",
            eng: "	slide	"
        },
        {
            id: 2076,
            ru: "	spoke , spoken , разговаривать	",
            eng: "	speak	"
        },
        {
            id: 2077,
            ru: "	spent , spent , тратить	",
            eng: "	spend	"
        },
        {
            id: 2078,
            ru: "	spat , spat , плеваться	",
            eng: "	spit	"
        },
        {
            id: 2079,
            ru: "	stood , stood , встать, стоять	",
            eng: "	stand	"
        },
        {
            id: 2080,
            ru: "	stole , stolen , воровать	",
            eng: "	steal	"
        },
        {
            id: 2081,
            ru: "	stuck , stuck , приклеить, застрять 	",
            eng: "	stick	"
        },
        {
            id: 2082,
            ru: "	stank , stunk , вонять	",
            eng: "	stink	"
        },
        {
            id: 2083,
            ru: "	struck , struck , ударять	",
            eng: "	strike	"
        },
        {
            id: 2084,
            ru: "	swore , sworn , клясться/материться 	",
            eng: "	swear	"
        },
        {
            id: 2085,
            ru: "	swept , swept , подметать	",
            eng: "	sweep	"
        },
        {
            id: 2086,
            ru: "	swam , swum , плавать	",
            eng: "	swim	"
        },
        {
            id: 2087,
            ru: "	swung , swung , качаться	",
            eng: "	swing	"
        },
        {
            id: 2088,
            ru: "	took , taken , брать	",
            eng: "	take	"
        },
        {
            id: 2089,
            ru: "	taught , taught ,  обучать	",
            eng: "	teach	"
        },
        {
            id: 2090,
            ru: "	tore , torn , рвать, вырывать	",
            eng: "	tear	"
        },
        {
            id: 2091,
            ru: "	told , told , рассказывать	",
            eng: "	tell	"
        },
        {
            id: 2092,
            ru: "	thought , thought , думать	",
            eng: "	think	"
        },
        {
            id: 2093,
            ru: "	threw , thrown , бросать	",
            eng: "	throw	"
        },
        {
            id: 2094,
            ru: "	understood , understood , понимать	",
            eng: "	understand	"
        },
        {
            id: 2095,
            ru: "	woke up , woken up ,  будить, просыпаться	",
            eng: "	wake up	"
        },
        {
            id: 2096,
            ru: "	wore , worn , носить одежду	",
            eng: "	wear	"
        },
        {
            id: 2097,
            ru: "	wrote , written , писать	",
            eng: "	write	"
        },
        {
            id: 2098,
            ru: "	wept , wept , хныкать	",
            eng: "	weep	"
        },
        {
            id: 2099,
            ru: "	won , won , выигрывать	",
            eng: "	win	"
        },
        {
            id: 2100,
            ru: "	misunderstood , misunderstood , неправ. понять	",
            eng: "	misunderstand	"
        },
        {
            id: 2101,
            ru: "	misspelt , misspelt , неправ. написать	",
            eng: "	misspell	"
        },
        {
            id: 2102,
            ru: "	mistook , mistaken , ошибаться	",
            eng: "	mistake	"
        },
        {
            id: 2103,
            ru: "	misheard , misheard , неправ. услышать	",
            eng: "	mishear	"
        },
        {
            id: 2104,
            ru: "	overslept , overslept , переспать	",
            eng: "	oversleep	"
        },
        {
            id: 2105,
            ru: "	overate , overeaten , переесть 	",
            eng: "	overeat	"
        },
        {
            id: 2106,
            ru: "	overpaid , overpaid , переплатить	",
            eng: "	overpay	"
        },
        {
            id: 2107,
            ru: "	could , могу - мог	",
            eng: "	can	"
        },
        {
            id: 2108,
            ru: "	should , следует	",
            eng: "	shall	"
        },
        {
            id: 2109,
            ru: "	might , можно / возможно	",
            eng: "	may	"
        },
        {
            id: 2110,
            ru: "	would + V ,  в будущем / бы	",
            eng: "	will	"
        },
    ],
    Irregular_verbs_F_K: [

        {
            id: 2025,
            ru: "	fell , fallen , падать	",
            eng: "	fall	"
        },
        {
            id: 2026,
            ru: "	fed , fed , кормить	",
            eng: "	feed	"
        },
        {
            id: 2027,
            ru: "	felt , felt , чувствовать	",
            eng: "	feel	"
        },
        {
            id: 2028,
            ru: "	fought , fought , сражаться	",
            eng: "	fight	"
        },
        {
            id: 2029,
            ru: "	found , found , находить	",
            eng: "	find	"
        },
        {
            id: 2030,
            ru: "	flew , flown , летать	",
            eng: "	fly	"
        },
        {
            id: 2031,
            ru: "	forbade , forbidden , запрещать	",
            eng: "	forbid	"
        },
        {
            id: 2032,
            ru: "	forgot , forgotten , забывать	",
            eng: "	forget	"
        },
        {
            id: 2033,
            ru: "	forgave , forgiven , прощать	",
            eng: "	forgive	"
        },
        {
            id: 2034,
            ru: "	froze , frozen , замерзать	",
            eng: "	freeze	"
        },
        {
            id: 2035,
            ru: "	grew , grown , расти	",
            eng: "	grow	"
        },
        {
            id: 2036,
            ru: "	got , got , получать	",
            eng: "	get	"
        },
        {
            id: 2037,
            ru: "	gave , given , давать	",
            eng: "	give	"
        },
        {
            id: 2038,
            ru: "	went , gone , ходить	",
            eng: "	go	"
        },
        {
            id: 2039,
            ru: "	had , had , иметь	",
            eng: "	have	"
        },
        {
            id: 2040,
            ru: "	heard , heard , слышать	",
            eng: "	hear	"
        },
        {
            id: 2041,
            ru: "	hid , hidden , прятать	",
            eng: "	hide	"
        },
        {
            id: 2042,
            ru: "	hit , hit , ударять	",
            eng: "	hit	"
        },
        {
            id: 2043,
            ru: "	hurt , hurt , причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 2044,
            ru: "	held , held , держать	",
            eng: "	hold	"
        },
        {
            id: 2045,
            ru: "	kept , kept , хранить	",
            eng: "	keep	"
        },
        {
            id: 2046,
            ru: "	knew , known , знать	",
            eng: "	know	"
        }
    ],
    Irregular_verbs_B_K: [

        {
            id: 3001,
            ru: "	broke , broken , ломать	",
            eng: "	break	"
        },
        {
            id: 3002,
            ru: "	beat , beaten , бить, побеждать	",
            eng: "	beat	"
        },
        {
            id: 3003,
            ru: "	became , become , становиться	",
            eng: "	become	"
        },
        {
            id: 3004,
            ru: "	began , begun , начинать	",
            eng: "	begin	"
        },
        {
            id: 3005,
            ru: "	blew , blown , дуть	",
            eng: "	blow	"
        },
        {
            id: 3006,
            ru: "	built , built , строить	",
            eng: "	build	"
        },
        {
            id: 3007,
            ru: "	burnt , burnt , сжигать, гореть	",
            eng: "	burn	"
        },
        {
            id: 3008,
            ru: "	bought , bought , покупать	",
            eng: "	buy	"
        },
        {
            id: 3009,
            ru: "	brought , brought , приносить	",
            eng: "	bring	"
        },
        {
            id: 3010,
            ru: "	was/were , been , быть	",
            eng: "	be	"
        },
        {
            id: 3011,
            ru: "	bit , bit , кусать	",
            eng: "	bite	"
        },
        {
            id: 3012,
            ru: "	came , come , приходить	",
            eng: "	come	"
        },
        {
            id: 3013,
            ru: "	chose , chosen , выбирать	",
            eng: "	choose	"
        },
        {
            id: 3014,
            ru: "	caught , caught , ловить	",
            eng: "	catch	"
        },
        {
            id: 3015,
            ru: "	crept , crept , ползать	",
            eng: "	creep	"
        },
        {
            id: 3016,
            ru: "	cost , cost , стоить	",
            eng: "	cost	"
        },
        {
            id: 3017,
            ru: "	cut , cut , резать	",
            eng: "	cut	"
        },
        {
            id: 3018,
            ru: "	dealt , dealt , иметь дела	",
            eng: "	deal	"
        },
        {
            id: 3019,
            ru: "	dug , dug , копать	",
            eng: "	dig	"
        },
        {
            id: 3020,
            ru: "	did , done , делать	",
            eng: "	do	"
        },
        {
            id: 3021,
            ru: "	drove , driven , водить	",
            eng: "	drive	"
        },
        {
            id: 3022,
            ru: "	drew , drawn , рисовать	",
            eng: "	draw	"
        },
        {
            id: 3023,
            ru: "	drank , drunk , пить	",
            eng: "	drink	"
        },
        {
            id: 3024,
            ru: "	ate , eaten , кушать	",
            eng: "	eat	"
        },
        {
            id: 3025,
            ru: "	fell , fallen , падать	",
            eng: "	fall	"
        },
        {
            id: 3026,
            ru: "	fed , fed , кормить	",
            eng: "	feed	"
        },
        {
            id: 3027,
            ru: "	felt , felt , чувствовать	",
            eng: "	feel	"
        },
        {
            id: 3028,
            ru: "	fought , fought , сражаться	",
            eng: "	fight	"
        },
        {
            id: 3029,
            ru: "	found , found , находить	",
            eng: "	find	"
        },
        {
            id: 3030,
            ru: "	flew , flown , летать	",
            eng: "	fly	"
        },
        {
            id: 3031,
            ru: "	forbade , forbidden , запрещать	",
            eng: "	forbid	"
        },
        {
            id: 3032,
            ru: "	forgot , forgotten , забывать	",
            eng: "	forget	"
        },
        {
            id: 3033,
            ru: "	forgave , forgiven , прощать	",
            eng: "	forgive	"
        },
        {
            id: 3034,
            ru: "	froze , frozen , замерзать	",
            eng: "	freeze	"
        },
        {
            id: 3035,
            ru: "	grew , grown , расти	",
            eng: "	grow	"
        },
        {
            id: 3036,
            ru: "	got , got , получать	",
            eng: "	get	"
        },
        {
            id: 3037,
            ru: "	gave , given , давать	",
            eng: "	give	"
        },
        {
            id: 3038,
            ru: "	went , gone , ходить	",
            eng: "	go	"
        },
        {
            id: 3039,
            ru: "	had , had , иметь	",
            eng: "	have	"
        },
        {
            id: 3040,
            ru: "	heard , heard , слышать	",
            eng: "	hear	"
        },
        {
            id: 3041,
            ru: "	hid , hidden , прятать	",
            eng: "	hide	"
        },
        {
            id: 3042,
            ru: "	hit , hit , ударять	",
            eng: "	hit	"
        },
        {
            id: 3043,
            ru: "	hurt , hurt , причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 3044,
            ru: "	held , held , держать	",
            eng: "	hold	"
        },
        {
            id: 3045,
            ru: "	kept , kept , хранить	",
            eng: "	keep	"
        },
        {
            id: 3046,
            ru: "	knew , known , знать	",
            eng: "	know	"
        },
    ],
    Naughty_verbs_challenge: [
        {
            id: 3001,
            ru: "	broke , broken , ломать	",
            eng: "	break	"
        },
        {
            id: 3002,
            ru: "	beat , beaten , бить, побеждать	",
            eng: "	beat	"
        },
        {
            id: 3003,
            ru: "	became , become , становиться	",
            eng: "	become	"
        },
        {
            id: 3004,
            ru: "	began , begun , начинать	",
            eng: "	begin	"
        },
        {
            id: 3005,
            ru: "	blew , blown , дуть	",
            eng: "	blow	"
        },
        {
            id: 3006,
            ru: "	built , built , строить	",
            eng: "	build	"
        },
        {
            id: 3007,
            ru: "	burnt , burnt , сжигать, гореть	",
            eng: "	burn	"
        },
        {
            id: 3008,
            ru: "	bought , bought , покупать	",
            eng: "	buy	"
        },
        {
            id: 3009,
            ru: "	brought , brought , приносить	",
            eng: "	bring	"
        },
        {
            id: 3010,
            ru: "	was/were , been , быть	",
            eng: "	be	"
        },
        {
            id: 3011,
            ru: "	bit , bit , кусать	",
            eng: "	bite	"
        },
        {
            id: 3012,
            ru: "	came , come , приходить	",
            eng: "	come	"
        },
        {
            id: 3013,
            ru: "	chose , chosen , выбирать	",
            eng: "	choose	"
        },
        {
            id: 3014,
            ru: "	caught , caught , ловить	",
            eng: "	catch	"
        },
        {
            id: 3015,
            ru: "	crept , crept , ползать	",
            eng: "	creep	"
        },
        {
            id: 3016,
            ru: "	cost , cost , стоить	",
            eng: "	cost	"
        },
        {
            id: 3017,
            ru: "	cut , cut , резать	",
            eng: "	cut	"
        },
        {
            id: 3018,
            ru: "	dealt , dealt , иметь дела	",
            eng: "	deal	"
        },
        {
            id: 3019,
            ru: "	dug , dug , копать	",
            eng: "	dig	"
        },
        {
            id: 3020,
            ru: "	did , done , делать	",
            eng: "	do	"
        },
        {
            id: 3021,
            ru: "	drove , driven , водить	",
            eng: "	drive	"
        },
        {
            id: 3022,
            ru: "	drew , drawn , рисовать	",
            eng: "	draw	"
        },
        {
            id: 3023,
            ru: "	drank , drunk , пить	",
            eng: "	drink	"
        },
        {
            id: 3024,
            ru: "	ate , eaten , кушать	",
            eng: "	eat	"
        },
        {
            id: 3025,
            ru: "	fell , fallen , падать	",
            eng: "	fall	"
        },
        {
            id: 3026,
            ru: "	fed , fed , кормить	",
            eng: "	feed	"
        },
        {
            id: 3027,
            ru: "	felt , felt , чувствовать	",
            eng: "	feel	"
        },
        {
            id: 3028,
            ru: "	fought , fought , сражаться	",
            eng: "	fight	"
        },
        {
            id: 3029,
            ru: "	found , found , находить	",
            eng: "	find	"
        },
        {
            id: 3030,
            ru: "	flew , flown , летать	",
            eng: "	fly	"
        },
        {
            id: 3031,
            ru: "	forbade , forbidden , запрещать	",
            eng: "	forbid	"
        },
        {
            id: 3032,
            ru: "	forgot , forgotten , забывать	",
            eng: "	forget	"
        },
        {
            id: 3033,
            ru: "	forgave , forgiven , прощать	",
            eng: "	forgive	"
        },
        {
            id: 3034,
            ru: "	froze , frozen , замерзать	",
            eng: "	freeze	"
        },
        {
            id: 3035,
            ru: "	grew , grown , расти	",
            eng: "	grow	"
        },
        {
            id: 3036,
            ru: "	got , got , получать	",
            eng: "	get	"
        },
        {
            id: 3037,
            ru: "	gave , given , давать	",
            eng: "	give	"
        },
        {
            id: 3038,
            ru: "	went , gone , ходить	",
            eng: "	go	"
        },
        {
            id: 3039,
            ru: "	had , had , иметь	",
            eng: "	have	"
        },
        {
            id: 3040,
            ru: "	heard , heard , слышать	",
            eng: "	hear	"
        },
        {
            id: 3041,
            ru: "	hid , hidden , прятать	",
            eng: "	hide	"
        },
        {
            id: 3042,
            ru: "	hit , hit , ударять	",
            eng: "	hit	"
        },
        {
            id: 3043,
            ru: "	hurt , hurt , причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 3044,
            ru: "	held , held , держать	",
            eng: "	hold	"
        },
        {
            id: 3045,
            ru: "	kept , kept , хранить	",
            eng: "	keep	"
        },
        {
            id: 3046,
            ru: "	knew , known , знать	",
            eng: "	know	"
        },
        {
            id: 3047,
            ru: "	learnt , learnt , изучать	",
            eng: "	learn	"
        },
        {
            id: 3048,
            ru: "	left , left , покидать	",
            eng: "	leave	"
        },
        {
            id: 3049,
            ru: "	lent , lent , давать в долг	",
            eng: "	lend	"
        },
    ],
    Irregular_verbs_ALL: [
        {
            id: 9001,
            ru: "	broke , broken , ломать	",
            eng: "	break	"
        },
        {
            id: 9002,
            ru: "	beat , beaten , бить, побеждать	",
            eng: "	beat	"
        },
        {
            id: 9003,
            ru: "	became , become , становиться	",
            eng: "	become	"
        },
        {
            id: 9004,
            ru: "	began , begun , начинать	",
            eng: "	begin	"
        },
        {
            id: 9005,
            ru: "	blew , blown , дуть	",
            eng: "	blow	"
        },
        {
            id: 9006,
            ru: "	built , built , строить	",
            eng: "	build	"
        },
        {
            id: 9007,
            ru: "	burnt , burnt , сжигать, гореть	",
            eng: "	burn	"
        },
        {
            id: 9008,
            ru: "	bought , bought , покупать	",
            eng: "	buy	"
        },
        {
            id: 9009,
            ru: "	brought , brought , приносить	",
            eng: "	bring	"
        },
        {
            id: 9010,
            ru: "	was/were , been , быть	",
            eng: "	be	"
        },
        {
            id: 9011,
            ru: "	bit , bit , кусать	",
            eng: "	bite	"
        },
        {
            id: 9012,
            ru: "	came , come , приходить	",
            eng: "	come	"
        },
        {
            id: 9013,
            ru: "	chose , chosen , выбирать	",
            eng: "	choose	"
        },
        {
            id: 9014,
            ru: "	caught , caught , ловить	",
            eng: "	catch	"
        },
        {
            id: 9015,
            ru: "	crept , crept , ползать	",
            eng: "	creep	"
        },
        {
            id: 9016,
            ru: "	cost , cost , стоить	",
            eng: "	cost	"
        },
        {
            id: 9017,
            ru: "	cut , cut , резать	",
            eng: "	cut	"
        },
        {
            id: 9018,
            ru: "	dealt , dealt , иметь дела	",
            eng: "	deal	"
        },
        {
            id: 9019,
            ru: "	dug , dug , копать	",
            eng: "	dig	"
        },
        {
            id: 9020,
            ru: "	did , done , делать	",
            eng: "	do	"
        },
        {
            id: 9021,
            ru: "	drove , driven , водить	",
            eng: "	drive	"
        },
        {
            id: 9022,
            ru: "	drew , drawn , рисовать	",
            eng: "	draw	"
        },
        {
            id: 9023,
            ru: "	drank , drunk , пить	",
            eng: "	drink	"
        },
        {
            id: 9024,
            ru: "	ate , eaten , кушать	",
            eng: "	eat	"
        },
        {
            id: 9025,
            ru: "	fell , fallen , падать	",
            eng: "	fall	"
        },
        {
            id: 9026,
            ru: "	fed , fed , кормить	",
            eng: "	feed	"
        },
        {
            id: 9027,
            ru: "	felt , felt , чувствовать	",
            eng: "	feel	"
        },
        {
            id: 9028,
            ru: "	fought , fought , сражаться	",
            eng: "	fight	"
        },
        {
            id: 9029,
            ru: "	found , found , находить	",
            eng: "	find	"
        },
        {
            id: 9030,
            ru: "	flew , flown , летать	",
            eng: "	fly	"
        },
        {
            id: 9031,
            ru: "	forbade , forbidden , запрещать	",
            eng: "	forbid	"
        },
        {
            id: 9032,
            ru: "	forgot , forgotten , забывать	",
            eng: "	forget	"
        },
        {
            id: 9033,
            ru: "	forgave , forgiven , прощать	",
            eng: "	forgive	"
        },
        {
            id: 9034,
            ru: "	froze , frozen , замерзать	",
            eng: "	freeze	"
        },
        {
            id: 9035,
            ru: "	grew , grown , расти	",
            eng: "	grow	"
        },
        {
            id: 9036,
            ru: "	got , got , получать	",
            eng: "	get	"
        },
        {
            id: 9037,
            ru: "	gave , given , давать	",
            eng: "	give	"
        },
        {
            id: 9038,
            ru: "	went , gone , ходить	",
            eng: "	go	"
        },
        {
            id: 9039,
            ru: "	had , had , иметь	",
            eng: "	have	"
        },
        {
            id: 9040,
            ru: "	heard , heard , слышать	",
            eng: "	hear	"
        },
        {
            id: 9041,
            ru: "	hid , hidden , прятать	",
            eng: "	hide	"
        },
        {
            id: 9042,
            ru: "	hit , hit , ударять	",
            eng: "	hit	"
        },
        {
            id: 9043,
            ru: "	hurt , hurt , причинять боль	",
            eng: "	hurt	"
        },
        {
            id: 9044,
            ru: "	held , held , держать	",
            eng: "	hold	"
        },
        {
            id: 9045,
            ru: "	kept , kept , хранить	",
            eng: "	keep	"
        },
        {
            id: 9046,
            ru: "	knew , known , знать	",
            eng: "	know	"
        },
        {
            id: 9047,
            ru: "	learnt , learnt , изучать	",
            eng: "	learn	"
        },
        {
            id: 9048,
            ru: "	left , left , покидать	",
            eng: "	leave	"
        },
        {
            id: 9049,
            ru: "	lent , lent , давать в долг	",
            eng: "	lend	"
        },
        {
            id: 9050,
            ru: "	let , let , позволять	",
            eng: "	let	"
        },
        {
            id: 9051,
            ru: "	lost , lost , терять	",
            eng: "	lose	"
        },
        {
            id: 9052,
            ru: "	laid , laid , укладывать	",
            eng: "	lay	"
        },
        {
            id: 9053,
            ru: "	lay , lain , лежать	",
            eng: "	lie	"
        },
        {
            id: 9054,
            ru: "	made , made , делать, создавать	",
            eng: "	make	"
        },
        {
            id: 9055,
            ru: "	meant , meant , иметь ввиду	",
            eng: "	mean	"
        },
        {
            id: 9056,
            ru: "	met , met , встречаться	",
            eng: "	meet	"
        },
        {
            id: 9057,
            ru: "	paid , paid , платить	",
            eng: "	pay	"
        },
        {
            id: 9058,
            ru: "	put , put , класть	",
            eng: "	put	"
        },
        {
            id: 9059,
            ru: "	read , read , читать	",
            eng: "	read	"
        },
        {
            id: 9060,
            ru: "	rode , ridden , ездить верхом	",
            eng: "	ride	"
        },
        {
            id: 9061,
            ru: "	rang , rung , звенеть	",
            eng: "	ring	"
        },
        {
            id: 9062,
            ru: "	ran , run , бегать	",
            eng: "	run	"
        },
        {
            id: 9063,
            ru: "	rose , risen , подниматься	",
            eng: "	rise	"
        },
        {
            id: 9064,
            ru: "	said , said ,  сказать, произнести	",
            eng: "	say	"
        },
        {
            id: 9065,
            ru: "	saw , seen , (у)видеть	",
            eng: "	see	"
        },
        {
            id: 9066,
            ru: "	sold , sold , продавать	",
            eng: "	sell	"
        },
        {
            id: 9067,
            ru: "	sent , sent , отправлять	",
            eng: "	send	"
        },
        {
            id: 9068,
            ru: "	shook , shaken , трясти	",
            eng: "	shake	"
        },
        {
            id: 9069,
            ru: "	shot , shot , стрелять	",
            eng: "	shoot	"
        },
        {
            id: 9070,
            ru: "	shut , shut , захлопывать	",
            eng: "	shut	"
        },
        {
            id: 9071,
            ru: "	sang , sung , петь	",
            eng: "	sing	"
        },
        {
            id: 9072,
            ru: "	sank , sunk , затонуть	",
            eng: "	sink	"
        },
        {
            id: 9073,
            ru: "	sat , sat , сидеть	",
            eng: "	sit	"
        },
        {
            id: 9074,
            ru: "	slept , slept , спать	",
            eng: "	sleep	"
        },
        {
            id: 9075,
            ru: "	slid , slid , скользить	",
            eng: "	slide	"
        },
        {
            id: 9076,
            ru: "	spoke , spoken , разговаривать	",
            eng: "	speak	"
        },
        {
            id: 9077,
            ru: "	spent , spent , тратить	",
            eng: "	spend	"
        },
        {
            id: 9078,
            ru: "	spat , spat , плеваться	",
            eng: "	spit	"
        },
        {
            id: 9079,
            ru: "	stood , stood , встать, стоять	",
            eng: "	stand	"
        },
        {
            id: 9080,
            ru: "	stole , stolen , воровать	",
            eng: "	steal	"
        },
        {
            id: 9081,
            ru: "	stuck , stuck , приклеить, застрять 	",
            eng: "	stick	"
        },
        {
            id: 9082,
            ru: "	stank , stunk , вонять	",
            eng: "	stink	"
        },
        {
            id: 9083,
            ru: "	struck , struck , ударять	",
            eng: "	strike	"
        },
        {
            id: 9084,
            ru: "	swore , sworn , клясться/материться 	",
            eng: "	swear	"
        },
        {
            id: 9085,
            ru: "	swept , swept , подметать	",
            eng: "	sweep	"
        },
        {
            id: 9086,
            ru: "	swam , swum , плавать	",
            eng: "	swim	"
        },
        {
            id: 9087,
            ru: "	swung , swung , качаться	",
            eng: "	swing	"
        },
        {
            id: 9088,
            ru: "	took , taken , брать	",
            eng: "	take	"
        },
        {
            id: 9089,
            ru: "	taught , taught ,  обучать	",
            eng: "	teach	"
        },
        {
            id: 9090,
            ru: "	tore , torn , рвать, вырывать	",
            eng: "	tear	"
        },
        {
            id: 9091,
            ru: "	told , told , рассказывать	",
            eng: "	tell	"
        },
        {
            id: 9092,
            ru: "	thought , thought , думать	",
            eng: "	think	"
        },
        {
            id: 9093,
            ru: "	threw , thrown , бросать	",
            eng: "	throw	"
        },
        {
            id: 9094,
            ru: "	understood , understood , понимать	",
            eng: "	understand	"
        },
        {
            id: 9095,
            ru: "	woke up , woken up ,  будить, просыпаться	",
            eng: "	wake up	"
        },
        {
            id: 9096,
            ru: "	wore , worn , носить одежду	",
            eng: "	wear	"
        },
        {
            id: 9097,
            ru: "	wrote , written , писать	",
            eng: "	write	"
        },
        {
            id: 9098,
            ru: "	wept , wept , хныкать	",
            eng: "	weep	"
        },
        {
            id: 9099,
            ru: "	won , won , выигрывать	",
            eng: "	win	"
        },
        {
            id: 9100,
            ru: "	misunderstood , misunderstood , неправ. понять	",
            eng: "	misunderstand	"
        },
        {
            id: 9101,
            ru: "	misspelt , misspelt , неправ. написать	",
            eng: "	misspell	"
        },
        {
            id: 9102,
            ru: "	mistook , mistaken , ошибаться	",
            eng: "	mistake	"
        },
        {
            id: 9103,
            ru: "	misheard , misheard , неправ. услышать	",
            eng: "	mishear	"
        },
        {
            id: 9104,
            ru: "	overslept , overslept , переспать	",
            eng: "	oversleep	"
        },
        {
            id: 9105,
            ru: "	overate , overeaten , переесть 	",
            eng: "	overeat	"
        },
        {
            id: 9106,
            ru: "	overpaid , overpaid , переплатить	",
            eng: "	overpay	"
        },
        {
            id: 9107,
            ru: "	could , могу - мог	",
            eng: "	can	"
        },
        {
            id: 9108,
            ru: "	should , следует	",
            eng: "	shall	"
        },
        {
            id: 9109,
            ru: "	might , можно / возможно	",
            eng: "	may	"
        },
        {
            id: 9110,
            ru: "	would + V ,  сделал бы	",
            eng: "	will	"
        },
    ],
    a_cook_cooks: [
        {
            id: 1,
            ru: "Готовить",
            eng: "to cook	"
        },
        {
            id: 2,
            ru: "Повар",
            eng: "a cook"
        },
        {
            id: 3,
            ru: "Шеф-повар",
            eng: "a chef /шеф/"
        },
        {
            id: 4,
            ru: "готовка",
            eng: "cooking"
        },
        {
            id: 5,
            ru: "пища",
            eng: "food"
        },
        {
            id: 6,
            ru: "порция, блюдо, еда",
            eng: "a meal /мил/"
        },
        {
            id: 7,
            ru: "резать, нарезать, порезать, разрезать",
            eng: "to cut"
        },
        {
            id: 8,
            ru: "нарезать тонкими ломтиками",
            eng: "to slice /слайс/"
        },
        {
            id: 9,
            ru: "покрошить, нарезать кубиками,",
            eng: "to dice /дайс/"
        },
        {
            id: 10,
            ru: "рубить лук, покрошить лучок",
            eng: "to chop the onion /Аниэн/"
        },
        {
            id: 11,
            ru: "	pour me a cup of tea	",
            eng: "	налейте мне чашечку чая	"
        },
        {
            id: 12,
            ru: "	May I have a sip?	",
            eng: "	Можно мне мал.глоток?	"
        },
        {
            id: 13,
            ru: "	toast	",
            eng: "	поджарить хлеб, сделать тост	"
        },
        {
            id: 14,
            ru: "	spread butter	",
            eng: "	намазать масло	"
        },
        {
            id: 15,
            ru: "	squeeze	",
            eng: "	сжимать	"
        },
        {
            id: 16,
            ru: "	Let's drink TO Vincent	",
            eng: "	Выпьем за Винсента	"
        },
        {
            id: 17,
            ru: "	weigh	",
            eng: "	Взвешивать	"
        },
        {
            id: 18,
            ru: "	measure	",
            eng: "	мерить, измерять	"
        },
        {
            id: 19,
            ru: "	mix	",
            eng: "	перемешать	"
        },
        {
            id: 20,
            ru: "	put	",
            eng: "	поставить, положить, разместить	"
        },
        {
            id: 21,
            ru: "	I weigh 73 kilos	",
            eng: "	Я вешу 73 кг	"
        },
        {
            id: 22,
            ru: "	layer	",
            eng: "	Класть слоями	"
        },
        {
            id: 23,
            ru: "	wash hands	",
            eng: "	Мыть руки	"
        },
        {
            id: 24,
            ru: "	peel	",
            eng: "	чистить от кожуры	"
        },
        {
            id: 25,
            ru: "	My weight is 73 kilos	",
            eng: "	Мой вес 73 кг	"
        },
        {
            id: 26,
            ru: "	dip	",
            eng: "	Макать	"
        },
        {
            id: 27,
            ru: "	crush	",
            eng: "	Давить	"
        },
        {
            id: 28,
            ru: "	prepare	",
            eng: "	Подготавливать, приготавливаться	"
        },
        {
            id: 29,
            ru: "	sprinkle spices /спАйсиз/	",
            eng: "	посыпать приправами	"
        },
        {
            id: 30,
            ru: "	decorate 	",
            eng: "	украшать	"
        },
        {
            id: 31,
            ru: "	flip	",
            eng: "	переворачивать	"
        },
        {
            id: 32,
            ru: "	microwave /мАйкровэйв/	",
            eng: "	греть в микроволновке	"
        },
        {
            id: 33,
            ru: "	refrigerate	",
            eng: "	to put in a fridge	"
        },
        {
            id: 34,
            ru: "	freeze	",
            eng: "	to put in a freezer	"
        },
        {
            id: 35,
            ru: "	blend	",
            eng: "	измельчить, перемолоть	"
        },
        {
            id: 36,
            ru: "	heat	",
            eng: "	Жар, огонь	"
        },
        {
            id: 37,
            ru: "	roast	",
            eng: "	Запекать	"
        },
        {
            id: 38,
            ru: "	sharpen 	",
            eng: "	Точить	"
        },
        {
            id: 39,
            ru: "	serve	",
            eng: "	Сервировать, обслуживать, подавать	"
        },
        {
            id: 40,
            ru: "	celebrate	",
            eng: "	Праздновать, отмечать	"
        },
        {
            id: 41,
            ru: "	add	",
            eng: "	добавлять	"
        },
        {
            id: 42,
            ru: "	sift	",
            eng: "	просеивать	"
        },
        {
            id: 43,
            ru: "	roll	",
            eng: "	раскатывать, катить	"
        },
        {
            id: 44,
            ru: "	toss	",
            eng: "	подкидывать	"
        },
        {
            id: 45,
            ru: "	grate	",
            eng: "	натереть на терке	"
        },
        {
            id: 46,
            ru: "	top	",
            eng: "	положить сверху	"
        },
        {
            id: 47,
            ru: "	bake	",
            eng: "	выпекать	"
        },
        {
            id: 48,
            ru: "	cool down	",
            eng: "	остывать	"
        },
        {
            id: 49,
            ru: "	carve	",
            eng: "	вырезАть	"
        },
        {
            id: 50,
            ru: "	mash /мэш/ smash 	",
            eng: "	толочь	"
        },
        {
            id: 51,
            ru: "	tenderize	",
            eng: "	отбивать, делать мягким	"
        },
        {
            id: 52,
            ru: "	BBQ	",
            eng: "	Делать Барбекю	"
        },
        {
            id: 53,
            ru: "	simmer	",
            eng: "	готовить на минимальной мощности	"
        },
        {
            id: 54,
            ru: "	melt	",
            eng: "	растопить, таять	"
        },
        {
            id: 55,
            ru: "	fry	",
            eng: "	жарить	"
        },
        {
            id: 56,
            ru: "	sauté 	",
            eng: "	обжаривать	"
        },
        {
            id: 57,
            ru: "	boil	",
            eng: "	варить, кипятить	"
        },
        {
            id: 58,
            ru: "	A pot	",
            eng: "	Кастрлюля	"
        },
        {
            id: 59,
            ru: "	stir	",
            eng: "	Помешивать	"
        },
        {
            id: 60,
            ru: "	taste	",
            eng: "	Пробовать на вкус	"
        },
        {
            id: 61,
            ru: "	light	",
            eng: "	включать огонь	"
        },
        {
            id: 62,
            ru: "	cover with a lid	",
            eng: "	накрывать крышкой	"
        },
        {
            id: 63,
            ru: "	remove	",
            eng: "	убирать	"
        },
        {
            id: 64,
            ru: "	turn on/off	",
            eng: "	включать или выключать	"
        },
        {
            id: 65,
            ru: "	steam	",
            eng: "	пар / готовить на пару	"
        },
        {
            id: 66,
            ru: "	whisk with a whisker	",
            eng: "	взбивать венчиком	"
        },
        {
            id: 67,
            ru: "	A frying pan	",
            eng: "	сковорода	"
        },
        {
            id: 68,
            ru: "	drain	",
            eng: "	слить воду	"
        },
        {
            id: 69,
            ru: "	rinse	",
            eng: "	прополоскать, ополоснуть	"
        },
        {
            id: 70,
            ru: "	uncork	",
            eng: "	открыть пробку	"
        },
        {
            id: 71,
            ru: "	an oven	",
            eng: "	духовка	"
        },
        {
            id: 72,
            ru: "	a stove	",
            eng: "	печь	"
        },
        {
            id: 73,
            ru: "	a fork	",
            eng: "	вилка	"
        },
        {
            id: 74,
            ru: "	a spoon	",
            eng: "	ложка	"
        },
        {
            id: 75,
            ru: "	a cup and a mug	",
            eng: "	чашка и кружка	"
        },
        {
            id: 76,
            ru: "	one knife or 2 knives	",
            eng: "	нож или два ножа	"
        },
        {
            id: 77,
            ru: "	a cutting board	",
            eng: "	разделоочная доска	"
        },
        {
            id: 78,
            ru: "	foil	",
            eng: "	фольга	"
        },
        {
            id: 79,
            ru: "	sausage and sausages /сОсиджэз/	",
            eng: "	Колбаса и сосиски	"
        },
        {
            id: 80,
            ru: "	Delicious /делИшэс / dinner	",
            eng: "	Наивкуснейший ужин	"
        },
        {
            id: 81,
            ru: "	A pepper is not paper	",
            eng: "	/э пЭппэ из нот ПэЙпэ/ не бумага	"
        },
        {
            id: 82,
            ru: "	salt / солт/	",
            eng: "	соль	"
        },

    ],
    cooking: [
        {
            id: 1,
            ru: "Готовить",
            eng: "to cook	"
        },
        {
            id: 2,
            ru: "Повар",
            eng: "a cook"
        },
        {
            id: 3,
            ru: "Шеф-повар",
            eng: "a chef /шеф/"
        },
        {
            id: 4,
            ru: "готовка",
            eng: "cooking"
        },
        {
            id: 5,
            ru: "пища",
            eng: "food"
        },
        {
            id: 6,
            ru: "порция, блюдо, еда",
            eng: "a meal /мил/"
        },
        {
            id: 7,
            ru: "резать, нарезать, порезать, разрезать",
            eng: "to cut"
        },
        {
            id: 8,
            ru: "нарезать тонкими ломтиками",
            eng: "to slice /слайс/"
        },
        {
            id: 9,
            ru: "покрошить, нарезать кубиками,",
            eng: "to dice /дайс/"
        },
        {
            id: 10,
            ru: "рубить лук, покрошить лучок",
            eng: "to chop the onion /Аниэн/"
        },
        {
            id: 11,
            ru: "	pour me a cup of tea	",
            eng: "	налейте мне чашечку чая	"
        },
        {
            id: 12,
            ru: "	May I have a sip?	",
            eng: "	Можно мне мал.глоток?	"
        },
        {
            id: 13,
            ru: "	toast	",
            eng: "	поджарить хлеб, сделать тост	"
        },
        {
            id: 14,
            ru: "	spread butter	",
            eng: "	намазать масло	"
        },
        {
            id: 15,
            ru: "	squeeze	",
            eng: "	сжимать	"
        },
        {
            id: 16,
            ru: "	Let's drink TO Vincent	",
            eng: "	Выпьем за Винсента	"
        },
        {
            id: 17,
            ru: "	weigh	",
            eng: "	Взвешивать	"
        },
        {
            id: 18,
            ru: "	measure	",
            eng: "	мерить, измерять	"
        },
        {
            id: 19,
            ru: "	mix	",
            eng: "	перемешать	"
        },
        {
            id: 20,
            ru: "	put	",
            eng: "	поставить, положить, разместить	"
        },
        {
            id: 21,
            ru: "	I weigh 73 kilos	",
            eng: "	Я вешу 73 кг	"
        },
        {
            id: 22,
            ru: "	layer	",
            eng: "	Класть слоями	"
        },
        {
            id: 23,
            ru: "	wash hands	",
            eng: "	Мыть руки	"
        },
        {
            id: 24,
            ru: "	peel	",
            eng: "	чистить от кожуры	"
        },
        {
            id: 25,
            ru: "	My weight is 73 kilos	",
            eng: "	Мой вес 73 кг	"
        },
        {
            id: 26,
            ru: "	dip	",
            eng: "	Макать	"
        },
        {
            id: 27,
            ru: "	crush	",
            eng: "	Давить	"
        },
        {
            id: 28,
            ru: "	prepare	",
            eng: "	Подготавливать, приготавливаться	"
        },
        {
            id: 29,
            ru: "	sprinkle spices /спАйсиз/	",
            eng: "	посыпать приправами	"
        },
        {
            id: 30,
            ru: "	decorate 	",
            eng: "	украшать	"
        },
        {
            id: 31,
            ru: "	flip	",
            eng: "	переворачивать	"
        },
        {
            id: 32,
            ru: "	microwave /мАйкровэйв/	",
            eng: "	греть в микроволновке	"
        },
        {
            id: 33,
            ru: "	refrigerate	",
            eng: "	to put in a fridge	"
        },
        {
            id: 34,
            ru: "	freeze	",
            eng: "	to put in a freezer	"
        },
        {
            id: 35,
            ru: "	blend	",
            eng: "	измельчить, перемолоть	"
        },
        {
            id: 36,
            ru: "	heat	",
            eng: "	Жар, огонь	"
        },
        {
            id: 37,
            ru: "	roast	",
            eng: "	Запекать	"
        },
        {
            id: 38,
            ru: "	sharpen 	",
            eng: "	Точить	"
        },
        {
            id: 39,
            ru: "	serve	",
            eng: "	Сервировать, обслуживать, подавать	"
        },
        {
            id: 40,
            ru: "	celebrate	",
            eng: "	Праздновать, отмечать	"
        },
        {
            id: 41,
            ru: "	add	",
            eng: "	добавлять	"
        },
        {
            id: 42,
            ru: "	sift	",
            eng: "	просеивать	"
        },
        {
            id: 43,
            ru: "	roll	",
            eng: "	раскатывать, катить	"
        },
        {
            id: 44,
            ru: "	toss	",
            eng: "	подкидывать	"
        },
        {
            id: 45,
            ru: "	grate	",
            eng: "	натереть на терке	"
        },
        {
            id: 46,
            ru: "	top	",
            eng: "	положить сверху	"
        },
        {
            id: 47,
            ru: "	bake	",
            eng: "	выпекать	"
        },
        {
            id: 48,
            ru: "	cool down	",
            eng: "	остывать	"
        },
        {
            id: 49,
            ru: "	carve	",
            eng: "	вырезАть	"
        },
        {
            id: 50,
            ru: "	mash /мэш/ smash 	",
            eng: "	толочь	"
        },
        {
            id: 51,
            ru: "	tenderize	",
            eng: "	отбивать, делать мягким	"
        },
        {
            id: 52,
            ru: "	BBQ	",
            eng: "	Делать Барбекю	"
        },
        {
            id: 53,
            ru: "	simmer	",
            eng: "	готовить на минимальной мощности	"
        },
        {
            id: 54,
            ru: "	melt	",
            eng: "	растопить, таять	"
        },
        {
            id: 55,
            ru: "	fry	",
            eng: "	жарить	"
        },
        {
            id: 56,
            ru: "	sauté 	",
            eng: "	обжаривать	"
        },
        {
            id: 57,
            ru: "	boil	",
            eng: "	варить, кипятить	"
        },
        {
            id: 58,
            ru: "	A pot	",
            eng: "	Кастрлюля	"
        },
        {
            id: 59,
            ru: "	stir	",
            eng: "	Помешивать	"
        },
        {
            id: 60,
            ru: "	taste	",
            eng: "	Пробовать на вкус	"
        },
        {
            id: 61,
            ru: "	light	",
            eng: "	включать огонь	"
        },
        {
            id: 62,
            ru: "	cover with a lid	",
            eng: "	накрывать крышкой	"
        },
        {
            id: 63,
            ru: "	remove	",
            eng: "	убирать	"
        },
        {
            id: 64,
            ru: "	turn on/off	",
            eng: "	включать или выключать	"
        },
        {
            id: 65,
            ru: "	steam	",
            eng: "	пар / готовить на пару	"
        },
        {
            id: 66,
            ru: "	whisk with a whisker	",
            eng: "	взбивать венчиком	"
        },
        {
            id: 67,
            ru: "	A frying pan	",
            eng: "	сковорода	"
        },
        {
            id: 68,
            ru: "	drain	",
            eng: "	слить воду	"
        },
        {
            id: 69,
            ru: "	rinse	",
            eng: "	прополоскать, ополоснуть	"
        },
        {
            id: 70,
            ru: "	uncork	",
            eng: "	открыть пробку	"
        },
        {
            id: 71,
            ru: "	an oven	",
            eng: "	духовка	"
        },
        {
            id: 72,
            ru: "	a stove	",
            eng: "	печь	"
        },
        {
            id: 73,
            ru: "	a fork	",
            eng: "	вилка	"
        },
        {
            id: 74,
            ru: "	a spoon	",
            eng: "	ложка	"
        },
        {
            id: 75,
            ru: "	a cup and a mug	",
            eng: "	чашка и кружка	"
        },
        {
            id: 76,
            ru: "	one knife / 2 knives	",
            eng: "	нож и два ножа	"
        },
        {
            id: 77,
            ru: "	a cutting board	",
            eng: "	разделоочная доска	"
        },
        {
            id: 78,
            ru: "	foil	",
            eng: "	фольга	"
        },
        {
            id: 79,
            ru: "	sausage and sausages /сОсиджэз/	",
            eng: "	Колбаса и сосиски	"
        },
        {
            id: 80,
            ru: "	Delicious /делИшэс / dinner	",
            eng: "	Наивкуснейший ужин	"
        },
        {
            id: 81,
            ru: "	A pepper is not paper	",
            eng: "	/э пЭппэ из нот ПэЙпэ/ не бумага	"
        },
        {
            id: 82,
            ru: "	salt / солт/	",
            eng: "	соль	"
        },

    ],
    travel: [
        {
            id: 1,
            ru: "	Какую страну ты хочешь посетить и почему?	",
            eng: "	What country do you want to Visit and why?	"
        },
        {
            id: 2,
            ru: "	Какую страну ты НЕ хочешь посещать и почему?	",
            eng: "	What country do you not want to Visit? Why?	"
        },
        {
            id: 3,
            ru: "	Антананариво - столица какой страны?	",
            eng: "	Antananarivo is a capital of what country?	"
        },
        {
            id: 4,
            ru: "	Африка - это страна?	",
            eng: "	Is Africa a country? 	"
        },
        {
            id: 5,
            ru: "	Сколько стран в Африке ты знаешь?	",
            eng: "	How many countries in Africa do you know?	"
        },
        {
            id: 6,
            ru: "	Какая страна известна своими Кенгуру?	",
            eng: "	What country is famous for its kangaroo?	"
        },
        {
            id: 7,
            ru: "	Какая страна известна своими винами?	",
            eng: "	What country is famous for its wine?	"
        },
        {
            id: 8,
            ru: "	Какая страна известна своей популяцией (густонаселенностью)?	",
            eng: "	What country is famous for its population?	"
        },
        {
            id: 9,
            ru: "	Какая страна находится близко к твоей стране?	",
            eng: "	What country is very close to your country?	"
        },
        {
            id: 10,
            ru: "	Какие страны посетила твоя семья?	",
            eng: "	What countries did your family visit?	"
        },
        {
            id: 11,
            ru: "	Какой лучший способ путешествовать?	",
            eng: "	What is the best way to travel?	"
        },
        {
            id: 12,
            ru: "	Сможешь назвать 2 страны начинающихся с буквы Z?	",
            eng: "	Can you name 2 countries beginning with Z ?	"
        },
        {
            id: 13,
            ru: "	Сможешь назвать 3 страны начинающихся с буквы R?	",
            eng: "	Can you name 3 countries beginning with R ?	"
        },
        {
            id: 14,
            ru: "	Знаешь что-нибудь про Северную Корею?	",
            eng: "	Do you know anything about North Korea?	"
        },
        {
            id: 15,
            ru: "	Какая самая большая о площади страна?	",
            eng: "	What is the biggest country in the world?	"
        },
        {
            id: 16,
            ru: "	Сколько текущих президентов ты сможешь назвать?	",
            eng: "	How many current presidents can you name?	"
        },
        {
            id: 17,
            ru: "	Вы бы согласились выйти замуж за иностранца?	",
            eng: "	Would you agree to marry a foreigner?	"
        },
        {
            id: 18,
            ru: "	Вы бы согласились съесть легушачьи лапки?	",
            eng: "	Would you agree to eat frog legs in France?	"
        },
        {
            id: 19,
            ru: "	Вы бы согласились попробовать наркотики в Амстердаме?	",
            eng: "	Would you agree to try drugs in Amsterdam?	"
        },
        {
            id: 20,
            ru: "	Вы бы согласились поехать вокруг света на машине?	",
            eng: "	Would you agree to travel around the world by car?	"
        },
        {
            id: 21,
            ru: "	Вы знаете какие-нибудь интересные факты о странах?	",
            eng: "	Do u know any interesting facts about any country? 	"
        },

    ],
    when: [
        {					
            id	:	1	,		
            eng	:	"	at 14:30	"	,
            ru	:	"	at half past two PM	"	
            }	,				
            {					
            id	:	2	,		
            eng	:	"	at 13:15	"	,
            ru	:	"	at a quarter past one PM	"	
            }	,				
            {					
            id	:	3	,		
            eng	:	"	at 13:00	"	,
            ru	:	"	at one PM	"	
            }	,				
            {					
            id	:	4	,		
            eng	:	"	at 00:00	"	,
            ru	:	"	at twelve AM at midnight	"	
            }	,				
            {					
            id	:	5	,		
            eng	:	"	at 12:00	"	,
            ru	:	"	at twelve PM at noon	"	
            }	,				
            {					
            id	:	6	,		
            eng	:	"	at 13:58	"	,
            ru	:	"	at two to two PM	"	
            }	,				
            {					
            id	:	7	,		
            eng	:	"	at 21:00	"	,
            ru	:	"	at nine PM	"	
            }	,				
            {					
            id	:	8	,		
            eng	:	"	at 23:30	"	,
            ru	:	"	at half past eleven PM	"	
            }	,				
            {					
            id	:	9	,		
            eng	:	"	at 23:45	"	,
            ru	:	"	at a quarter to midnight	"	
            }	,				
            {					
            id	:	10	,		
            eng	:	"	at 23:15	"	,
            ru	:	"	at a quarter past eleven PM	"	
            }	,				
            {					
            id	:	11	,		
            eng	:	"	at 13:13	"	,
            ru	:	"	at thirteen past one PM	"	
            }	,				
            {					
            id	:	12	,		
            eng	:	"	at 13:30	"	,
            ru	:	"	at half past one PM	"	
            }	,				
            {					
            id	:	13	,		
            eng	:	"	at 01:30	"	,
            ru	:	"	at half past one AM	"	
            }	,				
            {					
            id	:	14	,		
            eng	:	"	at 02:30	"	,
            ru	:	"	at half past two AM	"	
            }	,				
            {					
            id	:	15	,		
            eng	:	"	at 01:15	"	,
            ru	:	"	at a quarter past one AM	"	
            }	,				
            {					
            id	:	16	,		
            eng	:	"	at 01:00	"	,
            ru	:	"	at one AM	"	
            }	,				
            {					
            id	:	17	,		
            eng	:	"	at 19:00	"	,
            ru	:	"	at seven PM	"	
            }	,							

    ],
    time: [
        {
            id: 1,
            ru: "	В полночь я сплю!	",
            eng: "	I sleep at midnight!	"
        },
        {
            id: 2,
            ru: "	Это обалденное утро!	",
            eng: "	It is an awesome morning!	"
        },
        {
            id: 3,
            ru: "	Добрый день.	",
            eng: "	Good afternoon.	"
        },
        {
            id: 4,
            ru: "	Хорошего вам вечера	",
            eng: "	Have a nice evening	"
        },
        {
            id: 5,
            ru: "	ноль часов, ноль минут	",
            eng: "	midnight 00:00 AM	"
        },
        {
            id: 6,
            ru: "	двенадцать часов дня	",
            eng: "	twelve pm	"
        },
        {
            id: 7,
            ru: "	двенадцать часов ночи	",
            eng: "	12 am	"
        },
        {
            id: 8,
            ru: "	в полночь	",
            eng: "	at midnight	"
        },
        {
            id: 9,
            ru: "	днем	",
            eng: "	in the afternoon	"
        },
        {
            id: 10,
            ru: "	утром	",
            eng: "	in the morning	"
        },
        {
            id: 11,
            ru: "	вечером	",
            eng: "	in the evening	"
        },
        {
            id: 12,
            ru: "	ночью	",
            eng: "	at night	"
        },
        {
            id: 13,
            ru: "	в полдень	",
            eng: "	at noon	"
        },
        {
            id: 14,
            ru: "	пол второго	",
            eng: "	half past one	"
        },
        {
            id: 15,
            ru: "	пол девятого	",
            eng: "	half past eight	"
        },
        {
            id: 16,
            ru: "	пол деcятого	",
            eng: "	half past nine	"
        },
        {
            id: 17,
            ru: "	eleven thirty	",
            eng: "	half past eleven	"
        },
        {
            id: 18,
            ru: "	без 20 девять	",
            eng: "	twenty to nine	"
        },
        {
            id: 19,
            ru: "	без пятнадцати четыре	",
            eng: "	a quarter to four	"
        },
        {
            id: 20,
            ru: "	без двух минут час	",
            eng: "	two minutes to two	"
        },
        {
            id: 21,
            ru: "	пятнадцать минут пятого	",
            eng: "	a quarter past four	"
        },
        {
            id: 22,
            ru: "	пятнадцать пятнадцать	",
            eng: "	it is three fifteen	"
        },
        {
            id: 23,
            ru: "	Двадцать ноль ноль	",
            eng: "	it is 8 PM	"
        },
        {
            id: 24,
            ru: "	Десять ноль одна	",
            eng: "	ten o one (Или one past ten)	"
        },
        {
            id: 25,
            ru: "	Восемь часов, тринадцать минут	",
            eng: "	thirteen past eight	"
        },
        {
            id: 26,
            ru: "	Приходите в 2 часа	",
            eng: "	Come at 2 o'clock	"
        },
        {
            id: 27,
            ru: "	Перезвоните после обеда",
            eng: "	call back after lunch	"
        },
        {
            id: 28,
            ru: "	До обеда пожалуйста сделайте это	",
            eng: "	do it before lunch, please	"
        },
        {
            id: 29,
            ru: "	Через 10 минут	",
            eng: "	in 10 minutes	"
        },
        {
            id: 30,
            ru: "	в 10 часов и 10 минут	",
            eng: "	at Ten Ten (Или at ten past ten)	"
        },
        {
            id: 31,
            ru: "	в 10 часов	",
            eng: "	at ten o'clock	"
        },
        {
            id: 32,
            ru: "	через 2 часа	",
            eng: "	in two hours	"
        },
        {
            id: 33,
            ru: "	60 минут это один час	",
            eng: "	60 minutes…. it is an hour	"
        },

    ],
}
export default allWordsForGameTypeOrWrite
