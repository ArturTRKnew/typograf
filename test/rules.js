var tests = [],
    innerTests = [];

module.exports = {
    tests: tests,
    innerTests: innerTests
};

/*jshint maxlen:1000 */
tests.push(['common/html/escape', [
    ['Hello, world!<br/>Hello world!<p>Hello world!</p>', 'Hello, world!&lt;br&#x2F;&gt;Hello world!&lt;p&gt;Hello world!&lt;&#x2F;p&gt;']
]]);

/*jshint maxlen:1000 */
tests.push(['common/html/mail', [
    ['example@example.com', '<a href="mailto:example@example.com">example@example.com</a>'],
    ['E-mail: example@example.com', 'E-mail: <a href="mailto:example@example.com">example@example.com</a>'],
    ['E-mail: example@example.com, example2@example.com', 'E-mail: <a href="mailto:example@example.com">example@example.com</a>, <a href="mailto:example2@example.com">example2@example.com</a>'],
    ['>example@example.com<', '>example@example.com<']
]]);

tests.push(['common/html/nbr', [
    ['a\nb\nc', 'a<br/>\nb<br/>\nc'],
    ['a<br/>\nb\nc', 'a<br/>\nb\nc']
]]);

tests.push(['common/html/pbr', [
    ['a\n\nb\nc\n\nd', '<p>a</p>\n<p>b<br/>\nc</p>\n<p>d</p>'],
    ['a', '<p>a</p>']
]]);

tests.push(['common/html/stripTags', [
    ['123123 12<br/>12312 312 3<p>asdlalsdpa</p>', '123123 1212312 312 3asdlalsdpa'],
    ['<p', '<p'],
    ['<p align="center">Hello</p>', 'Hello']
]]);

/*jshint maxlen:1000 */
tests.push(['common/html/url', [
    ['Ссылка ftp://example.com', 'Ссылка <a href="ftp://example.com">ftp://example.com</a>'],
    ['Ссылка https://example.com', 'Ссылка <a href="https://example.com">https://example.com</a>'],
    ['Ссылка http://example.com/path/', 'Ссылка <a href="http://example.com/path/">example.com/path/</a>'],
    ['Ссылка http://ww2.example.com/path/', 'Ссылка <a href="http://ww2.example.com/path/">ww2.example.com/path/</a>'],
    ['Ссылка http://www.example.com/path/', 'Ссылка <a href="http://www.example.com/path/">example.com/path/</a>'],
    ['Ссылка http://www.example.com/', 'Ссылка <a href="http://www.example.com">example.com</a>'],
    ['Ссылка http://www.example.com?', 'Ссылка <a href="http://www.example.com">example.com</a>'],
    [
        'Ссылка 1: http://www.example.com/?\nСсылка 2: https://www.example2.ru/?',
        'Ссылка 1: <a href="http://www.example.com">example.com</a>\nСсылка 2: <a href="https://www.example2.ru">https://example2.ru</a>'
    ],
    ['Ссылка http://www.example.com/?', 'Ссылка <a href="http://www.example.com">example.com</a>'],
    ['Ссылка http://www.example.com#', 'Ссылка <a href="http://www.example.com">example.com</a>'],
    ['Ссылка http://www.example.com/#', 'Ссылка <a href="http://www.example.com">example.com</a>'],
    ['Ссылка http://www.example.com:80', 'Ссылка <a href="http://www.example.com">example.com</a>'],
    ['Ссылка http://www.example.com:800', 'Ссылка <a href="http://www.example.com:800">example.com:800</a>'],
    ['Ссылка http://www.example.com:80/?', 'Ссылка <a href="http://www.example.com">example.com</a>'],
    ['Ссылка http://www.example.com:80/?query=hello', 'Ссылка <a href="http://www.example.com/?query=hello">example.com/?query=hello</a>'],
    ['Ссылка http://www.example.com:443', 'Ссылка <a href="http://www.example.com:443">example.com:443</a>'],
    ['Ссылка https://www.example.com:443/?', 'Ссылка <a href="https://www.example.com">https://example.com</a>'],
    ['Ссылка https://www.example.com:443/?query=hello', 'Ссылка <a href="https://www.example.com/?query=hello">https://example.com/?query=hello</a>'],
    ['Ссылка https://www.example.com:4434/?query=hello', 'Ссылка <a href="https://www.example.com:4434/?query=hello">https://example.com:4434/?query=hello</a>']
]]);

tests.push(['common/nbsp/afterNumber', [
    [' 123 дня ', ' 123\u00A0дня '],
    ['2 кошки', '2\u00A0кошки'],
    ['12 миллиардов рублей', '12\u00A0миллиардов рублей'],
    ['20 years', '20\u00A0years']
]]);

tests.push(['common/nbsp/afterPara', [
    [' § 123', ' §\u00A0123'],
    [' §123', ' §\u00A0123'],
    [' §XX', ' §\u00A0XX']
]]);

/*jshint maxlen:1000 */
tests.push(['common/nbsp/afterShortWord', [
    ['Apply non-breaking spaces to all frames of the current page.', 'Apply non-breaking spaces to\u00A0all frames of\u00A0the current page.'],
    ['Повторять, пока процесс не свернётся в навык.', 'Повторять, пока процесс не\u00A0свернётся в\u00A0навык.'],
    ['ТУ 14577-234-224', 'ТУ\u00A014577-234-224'],
    ['И вещи', 'И\u00A0вещи'],
    ['И в Москве', 'И\u00A0в\u00A0Москве'],
    ['И в г. Москве', 'И\u00A0в\u00A0г.\u00A0Москве']
]]);

tests.push(['common/nbsp/beforeShortLastWord', [
    ['Fedora, SuSE, Gentoo, Mandrake, or PLD.', 'Fedora, SuSE, Gentoo, Mandrake, or\u00A0PLD.'],
    ['Голубка дряхлая моя!', 'Голубка дряхлая\u00A0моя!']
]]);

tests.push(['common/nbsp/dpi', [
    ['Значение 10 lpi.', 'Значение 10\u00A0lpi.'],
    ['Значение 10 lpi', 'Значение 10\u00A0lpi'],
    ['Значение 10 lpii', 'Значение 10 lpii'],
    ['Значение 10\u00A0lpi и 20\u00A0dpi.', 'Значение 10\u00A0lpi и 20\u00A0dpi.']
]]);

/* jshint maxlen:1000 */
tests.push(['common/nbsp/nowrap', [
    ['<nowrap>Hello\u00A0world!</nowrap>', '<nowrap>Hello world!</nowrap>'],
    ['<nobr>\u00A0\u00A0\u00A0Hello\u00A0world!\u00A0\u00A0</nobr>', '<nobr>\u00A0\u00A0\u00A0Hello world!\u00A0\u00A0</nobr>'],
    ['<nobr>Hello\u00A0\u00A0world!</nobr>', '<nobr>Hello\u00A0\u00A0world!</nobr>'],
    ['В глуши долин, <nowrap>в\u00A0печальной\u00A0тьме</nowrap> лесов,', 'В глуши долин, <nowrap>в печальной тьме</nowrap> лесов,'],
    ['В глуши долин, <nobr>в\u00A0печальной\u00A0тьме</nobr> лесов,', 'В глуши долин, <nobr>в печальной тьме</nobr> лесов,']
]]);

tests.push(['common/number/fraction', [
    ['1/2', '½'],
    [' 1/2 ', ' ½ '],
    ['1/4', '¼'],
    [' 1/4 ', ' ¼ '],
    ['3/4', '¾'],
    [' 3/4 ', ' ¾ ']
]]);

tests.push(['common/number/plusMinus', [
    ['+-', '±'],
    ['+-100', '±100']
]]);

tests.push(['common/number/times', [
    ['100 x 2', '100×2'],
    ['Пример: 30x3=90', 'Пример: 30×3=90']
]]);

tests.push(['common/other/repeatWord', [
    ['Я пошел домой.', 'Я пошел домой.'],
    ['Я пошел пошел домой.', 'Я пошел домой.'],
    ['Я пошел пошел пошел домой домой.', 'Я пошел пошел домой.'],
    ['Я пошел пошел пошел домой домой.', 'Я пошел пошел домой.'],
    ['Пью молоко\u0301 молоко\u0301.', 'Пью молоко\u0301.'],
    ['Hello world world!', 'Hello world!']
]]);

/* jshint maxlen:1000 */
tests.push(['common/punctuation/delDoublePunctuation', [
    ['У меня была только синяя краска;; но,, несмотря на это,, я затеял нарисовать охоту.', 'У меня была только синяя краска; но, несмотря на это, я затеял нарисовать охоту.'],
    ['Никогда не отказывайся от малого в работе:: из малого строится великое.', 'Никогда не отказывайся от малого в работе: из малого строится великое.']
]]);

tests.push(['common/punctuation/exclamation', [
    ['!!', '!'],
    ['Ура!!  ', 'Ура!  '],
    ['!!!!', '!!!'],
    ['Ура!!!!  ', 'Ура!!!  ']
]]);

tests.push(['common/punctuation/exclamationQuestion', [
    ['!?', '?!'],
    ['Может домой!?', 'Может домой?!']
]]);

tests.push(['common/punctuation/hellip', [
    ['Текст текст... Другой текст... ', 'Текст текст… Другой текст… '],
    ['..', '..'],
    ['...', '…'],
    ['.....', '.....']
]]);

tests.push(['common/space/afterPunctuation', [
    ['Солнце садилось за горизонт,и поднялся ветер. Вот.', 'Солнце садилось за горизонт, и поднялся ветер. Вот.'],
    ['Солнце садилось за горизонт,и поднялся ветер!Вот.', 'Солнце садилось за горизонт, и поднялся ветер! Вот.'],
    ['Солнце садилось за горизонт,и поднялся ветер?Вот.', 'Солнце садилось за горизонт, и поднялся ветер? Вот.'],
    ['Солнце садилось за горизонт,и поднялся ветер??Вот.', 'Солнце садилось за горизонт, и поднялся ветер?? Вот.'],
    ['Солнце садилось за горизонт,?', 'Солнце садилось за горизонт,?'],
    ['Солнце садилось за горизонт1,и поднялся ветер?', 'Солнце садилось за горизонт1,и поднялся ветер?'],
    ['"Я!"', '"Я!"'],
    ['«Я!»', '«Я!»'],
    ['‹I!›', '‹I!›']
]]);

tests.push(['common/space/delBeforePercent', [
    ['20 %', '20%'],
    ['около 4\u00A0%', 'около 4%']
]]);

/*jshint maxlen:1000 */
tests.push(['common/space/delBeforePunctuation', [
    ['И был посажен в крепость вместе с Измайловым ( странна судьба и союз сих имен ! ) .', 'И был посажен в крепость вместе с Измайловым (странна судьба и союз сих имен!).']
]]);

/*jshint maxlen:1000 */
tests.push(['common/space/delLeadingBlanks', [
    ['Hello world!  \t \n \t \t  Hello world!       \n\n\n\n   \t\t\t   Hello world!\n',
        'Hello world!  \t \nHello world!       \n\n\n\nHello world!\n']
]]);

tests.push(['common/space/delRepeatN', [
    ['asdk oasdk\nas\n\n\n\nd koa\n\n\nsd       ', 'asdk oasdk\nas\n\nd koa\n\nsd       ']
]]);

tests.push(['common/space/delRepeatSpace', [
    ['  \n  \n  Hello   world  !  \n  \n  ', '  \n  \n  Hello world !  \n  \n  ']
]]);

/*jshint maxlen:1000 */
tests.push(['common/space/delTrailingBlanks', [
    ['Hello world!  \t \n Hello world!       \n\n\n\nHello world!\n',
        'Hello world!\n Hello world!\n\n\n\nHello world!\n']
]]);

tests.push(['common/space/replaceTab', [
    ['  \t \t \t  ', '         ']
]]);

tests.push(['common/space/trimLeft', [
    ['   Hello world!    ', 'Hello world!    '],
    [' \n\n \n Hello world!  \n\n  \n  ', 'Hello world!  \n\n  \n  ']
]]);

tests.push(['common/space/trimRight', [
    ['   Hello world!    ', '   Hello world!'],
    [' \n\n \n Hello world!  \n\n  \n  ', ' \n\n \n Hello world!']
]]);

tests.push(['common/sym/arrow', [
    ['20 + 10 -> 30', '20 + 10 → 30'],
    ['20 + 10 <- 30', '20 + 10 ← 30'],
    ['<-', '←'],
    ['->', '→']
]]);

tests.push(['common/sym/cf', [
    [' 200 C', ' 200 °C'],
    [' 200 C.', ' 200 °C.'],
    [' 20d C', ' 20d C'],
    [' 20 C1', ' 20 C1'],
    [' 200 F', ' 200 °F']
]]);

tests.push(['common/sym/copy', [
    ['(c)', '©'],
    ['(с)', '©'],
    ['Copyright (с)', '©'],
    ['copyright (с)', '©'],
    ['(r)', '®'],
    ['(tm)', '™']
]]);

/*jshint maxlen:1000 */
tests.push(['en/punctuation/quot', [
    ['One of the most famous phrases is "to be or not to be".', 'One of the most famous phrases is “to be or not to be”.'],
    ['"I have no special talent," Einstein. "I am only curious enough."', '“I have no special talent,” Einstein. “I am only curious enough.”'],
    ['"I was reading "The Economics of the USA" yesterday," she replied to me.', '“I was reading ‘The Economics of the USA’ yesterday,” she replied to me.']
]]);

tests.push(['ru/dash/izpod', [
    [' из под печки', ' из-под печки'],
    [' Из под печки', ' Из-под печки']
]]);

tests.push(['ru/dash/izza', [
    ['Из за лесу', 'Из-за лесу'],
    ['  Из за лесу', '  Из-за лесу'],
    ['из за гор', 'из-за гор'],
    ['  из за гор', '  из-за гор']
]]);

tests.push(['ru/dash/kade', [
    ['скажите ка  на ка? на-кась!', 'скажите-ка  на-ка? на-кась!'],
    ['он де, ну ка, ну кась нате ка! нате кась?', 'он-де, ну-ка, ну-кась нате-ка! нате-кась?']
]]);

tests.push(['ru/dash/koe', [
    ['Завелись кое какие деньжонки.', 'Завелись кое-какие деньжонки.'],
    ['Кое какие деньжонки.', 'Кое-какие деньжонки.'],
    ['Кое как', 'Кое-как'],
    ['Кой как', 'Кой-как'],
    ['кой с каким', 'кой с каким'],
    ['Кое в чем', 'Кое в чем'],
    ['Кой какой', 'Кой-какой']
]]);

/* jshint maxlen: 300 */
tests.push(['ru/dash/main', [
    ['Правда - небольшая ложь', 'Правда\u00A0— небольшая ложь'],
    ['Сатрап смутился изумленный -\nИ гнев в нем душу помрачил...', 'Сатрап смутился изумленный\u00A0—\nИ гнев в нем душу помрачил...'],
    ['Маленькая девочка бежала и кричала: \n- Не видали маму?', 'Маленькая девочка бежала и кричала: \n—\u00A0Не видали маму?'],
    ['XX-XXI', 'XX—XXI'],
    ['XX - XXI', 'XX—XXI']
]]);

tests.push(['ru/dash/month', [
    ['Март-декабрь', 'Март—декабрь'],
    ['январь-май', 'январь—май']
]]);

tests.push(['ru/dash/taki', [
    ['верно таки', 'верно-таки'],
    ['довольно таки', 'довольно-таки'],
    ['опять таки', 'опять-таки'],
    ['прямо таки', 'прямо-таки'],
    ['так таки', 'так-таки'],
    ['всё таки', 'всё-таки'],
    ['действительно таки', 'действительно-таки'],
    ['неужели таки', 'неужели-таки']
]]);

tests.push(['ru/dash/to', [
    ['когда то', 'когда-то'],
    ['Какой либо', 'Какой-либо'],
    ['откуда либо', 'откуда-либо'],
    ['Кто нибудь', 'Кто-нибудь'],
    ['кое у кого, кое в чем', 'кое у кого, кое в чем'],
    ['кое с какими', 'кое с какими']
]]);

tests.push(['ru/dash/weekday', [
    ['Вторник-среда', 'Вторник—среда'],
    ['понедельник-четверг', 'понедельник—четверг']
]]);

tests.push(['ru/date/main', [
    ['2010-02-01', '01.02.2010'],
    [' 2010-02-01 ', ' 01.02.2010 '],
    ['11/22/2010', '22.11.2010'],
    [' 11/22/2010 ', ' 22.11.2010 ']
]]);

tests.push(['ru/date/weekday', [
    ['25 Мая, Понедельник', '25 мая, понедельник'],
    ['25 Мая, Понедельник', '25 мая, понедельник'],
    ['25 Мая, понедельник', '25 мая, понедельник'],
    ['25 мая, Понедельник', '25 мая, понедельник']
]]);

tests.push(['ru/money/dollar', [
    ['100$', '100\u00A0$'],
    ['100 $', '100\u00A0$'],
    ['У меня есть $2!', 'У меня есть 2\u00A0$!'],
    ['У меня есть $2.5!', 'У меня есть 2.5\u00A0$!'],
    ['У меня есть $ 2!', 'У меня есть 2\u00A0$!'],
    ['У меня есть $ 2.5!', 'У меня есть 2.5\u00A0$!'],
    ['У меня есть $ 2.5! У тебя есть $ 4.5!', 'У меня есть 2.5\u00A0$! У тебя есть 4.5\u00A0$!'],
    ['20 $ 30 центов', '20\u00A0$ 30 центов']
]]);

tests.push(['ru/money/euro', [
    ['100€', '100\u00A0€'],
    ['100 €', '100\u00A0€'],
    ['У меня есть €2!', 'У меня есть 2\u00A0€!'],
    ['У меня есть €2.5!', 'У меня есть 2.5\u00A0€!'],
    ['У меня есть € 2!', 'У меня есть 2\u00A0€!'],
    ['У меня есть € 2.5!', 'У меня есть 2.5\u00A0€!'],
    ['У меня есть € 2.5! У тебя есть € 2.5!', 'У меня есть 2.5\u00A0€! У тебя есть 2.5\u00A0€!'],
    ['20 € 30 центов', '20\u00A0€ 30 центов']
]]);

tests.push(['ru/money/ruble', [
    ['100 руб.', '100\u00A0₽'],
    ['100руб.', '100\u00A0₽'],
    ['100р.', '100\u00A0₽'],
    ['100 р.', '100\u00A0₽'],
    ['100 р.!', '100\u00A0₽!'],
    ['100 р.?', '100\u00A0₽?'],
    ['100 р. 20 коп.', '100 р. 20 коп.'],
    ['У меня 100 р., а у тебя нет.', 'У меня 100\u00A0₽, а у тебя нет.'],
    ['У меня 100 р., а у тебя нет.', 'У меня 100\u00A0₽, а у тебя нет.'],
    ['У меня 100 р., а у тебя 200 р.', 'У меня 100\u00A0₽, а у тебя 200 р.'],
    ['У меня 100 р. У Миши 20 р.', 'У меня 100\u00A0₽. У Миши 20 р.']
]]);

tests.push(['ru/nbsp/afterNumberSign', [
    [' № 123', ' №\u00A0123'],
    ['№ 123', '№\u00A0123'],
    [' №123', ' №\u00A0123'],
    [' №п/п ', ' №\u00A0п/п ']
]]);

tests.push(['ru/nbsp/beforeParticle', [
    ['Может ли быть?', 'Может\u00A0ли быть?'],
    ['Может же быть?', 'Может\u00A0же быть?']
]]);

/*jshint maxlen:1000 */
tests.push(['ru/nbsp/but', [
    ['Его лодка скользнула вниз но бедняга держался по-прежнему стойко.', 'Его лодка скользнула вниз, но бедняга держался по-прежнему стойко.'],
    ['Я пошёл домой а он остался.', 'Я пошёл домой, а он остался.']
]]);

tests.push(['ru/nbsp/cc', [
    ['20 в. в.', '20\u00A0вв.'],
    ['1934 в. в.', '1934\u00A0вв.'],
    ['1934в.в.', '1934\u00A0вв.'],
    ['1934в. в.', '1934\u00A0вв.'],
    ['1934 в.в.', '1934\u00A0вв.']
]]);

tests.push(['ru/nbsp/dayMonth', [
    ['20 декабря', '20\u00A0декабря'],
    ['20 дек 2010', '20\u00A0дек 2010'],
    ['1 мая 2015', '1\u00A0мая 2015']
]]);

tests.push(['ru/nbsp/m', [
    [' 2 м2 ', ' 2\u00A0м² '],
    [' 2.0 м2 ', ' 2.0\u00A0м² '],
    [' dd м2 ', ' dd м2 '],
    [' 20 м3 ', ' 20\u00A0м³ ']
]]);

tests.push(['ru/nbsp/ooo', [
    ['ООО "Пример"', 'ООО\u00A0"Пример"'],
    ['ОАО "Пример"', 'ОАО\u00A0"Пример"'],
    ['НИИ "Пример"', 'НИИ\u00A0"Пример"'],
    ['ПБОЮЛ "Пример"', 'ПБОЮЛ\u00A0"Пример"'],
    ['ЗАО "Пример"', 'ЗАО\u00A0"Пример"'],
    ['ззЗАО "Пример"', 'ззЗАО "Пример"']
]]);

tests.push(['ru/nbsp/page', [
    ['На стр. 22', 'На\u00A0стр. 22'],
    ['в гл. 2', 'в\u00A0гл. 2'],
    ['вокруг рис. 7', 'вокруг\u00A0рис. 7'],
    ['у илл. 5', 'у\u00A0илл. 5']
]]);

tests.push(['ru/nbsp/xxxx', [
    ['2012 г.', '2012\u00A0г.'],
    [' (2012 г.) ', ' (2012\u00A0г.) '],
    [' В 2015 году ', ' В 2015\u00A0году '],
    [' 1 год ', ' 1\u00A0год '],
    [' С 25 годом ', ' С 25\u00A0годом ']
]]);

tests.push(['ru/nbsp/yy', [
    ['2012-2015 г. г. ', '2012-2015\u00A0гг. '],
    ['2012-2015г.г. ', '2012-2015\u00A0гг. ']
]]);

tests.push(['ru/number/ordinals', [
    ['5-ая', '5-я'],
    ['5-ый', '5-й'],
    ['102-ой', '102-й'],
    ['2-ое', '2-е'],
    ['К 13-ому марта', 'К 13-му марта'],
    ['22-ого июля', '22-го июля'],
    ['Будите 121-ыми', 'Будите 121-ми'],
    ['4-ых', '4-х']
]]);

/*jshint maxlen:1000 */
tests.push(['ru/optalign/bracket', [
    ['В самом добром (кино)', 'В самом добром<span class="typograf-oa-sp-lbracket"> </span><span class="typograf-oa-lbracket">(</span>кино)'],
    ['В самом добром\n(кино)', 'В самом добром\n<span class="typograf-oa-n-lbracket">(</span>кино)']
]]);

innerTests.push(['ru/optalign/bracket', [
    ['<span class="typograf-oa-sp-lbracket"> </span>', ' '],
    ['<span class="typograf-oa-lbracket">(</span>', '(']
]]);

/*jshint maxlen:1000 */
tests.push(['ru/optalign/comma', [
    ['Смеркалось, шёл дождь', 'Смеркалось<span class="typograf-oa-comma">,</span><span class="typograf-oa-comma-sp"> </span>шёл дождь'],
    ['Было 2, стало 5', 'Было 2<span class="typograf-oa-comma">,</span><span class="typograf-oa-comma-sp"> </span>стало 5']
]]);

innerTests.push(['ru/optalign/comma', [
    ['<span class="typograf-oa-comma">,</span>', ','],
    ['<span class="typograf-oa-comma-sp"> </span>', ' ']
]]);

/*jshint maxlen:1000 */
tests.push(['ru/optalign/quot', [
    ['Вот у вас «Мой спутник».', 'Вот у вас<span class="typograf-oa-sp-lquot"> </span><span class="typograf-oa-lquot">«</span>Мой спутник».'],
    ['Вот у вас\n«Мой спутник».', 'Вот у вас\n<span class="typograf-oa-n-lquot">«</span>Мой спутник».'],
    ['Вот у вас \uDBFF«Мой спутник».\uDBFF', 'Вот у вас \uDBFF<span class="typograf-oa-n-lquot">«</span>Мой спутник».\uDBFF'],
    ['"что-то", "где-то!"', '<span class="typograf-oa-n-lquot">"</span>что-то",<span class="typograf-oa-sp-lquot"> </span><span class="typograf-oa-lquot">"</span>где-то!"'],
    ['"что-то, где-то" и "почему-то."', '<span class="typograf-oa-n-lquot">"</span>что-то, где-то" и<span class="typograf-oa-sp-lquot"> </span><span class="typograf-oa-lquot">"</span>почему-то."'],
    ['тестовый эфир 1 «постно — значит вкусно»', 'тестовый эфир 1<span class="typograf-oa-sp-lquot"> </span><span class="typograf-oa-lquot">«</span>постно — значит вкусно»']
]]);

innerTests.push(['ru/optalign/quot', [
    ['<span class="typograf-oa-sp-lquot"> </span>', ' '],
    ['<span class="typograf-oa-lquot">«</span>', '«'],
    ['\n<span class="typograf-oa-n-lquot">«</span>', '\n«']
]]);

tests.push(['ru/other/accent', [
    ['ногА', 'нога́'],
    ['(ногА)', '(нога́)'],
    [' АлексИй ', ' Алекси́й '],
    ['прИнял', 'при́нял'],
    ['клЯтвопреступлЕние', 'кля́твопреступле́ние']
]]);

/*jshint maxlen:1000 */
tests.push(['ru/punctuation/quot', [
    ['Вот у вас "Мой спутник" – это не сочинение, это хорошо, потому что не выдумано.', 'Вот у вас «Мой спутник» – это не сочинение, это хорошо, потому что не выдумано.'],
    ['««Цыганы» мои не продаются вовсе»', '«„Цыганы“ мои не продаются вовсе»'],
    ['"Пример"', '«Пример»'],
    ['ОАО "Пример"', 'ОАО «Пример»'],
    ['В "самом "добром" кино" Мамы. В "самом "добром" кино" Мамы', 'В «самом „добром“ кино» Мамы. В «самом „добром“ кино» Мамы'],
    ['В самом добром кино “Мамы”, в молодежном триллере “Закрытая школа” на СТС. А еще на сцене театра им. Вл. Маяковского в спектакле “Не все коту масленица”.', 'В самом добром кино «Мамы», в молодежном триллере «Закрытая школа» на СТС. А еще на сцене театра им. Вл. Маяковского в спектакле «Не все коту масленица».'],
    ['В самом добром кино “Мамы”, в молодежном триллере “Закрытая школа” на СТС', 'В самом добром кино «Мамы», в молодежном триллере «Закрытая школа» на СТС'],
    ['В самом добром кино “Мамы, в молодежном триллере “Закрытая школа” на СТС"', 'В самом добром кино «Мамы, в молодежном триллере „Закрытая школа“ на СТС»'],
    ['Печорин писал: "Я не помню утра более голубого и свежего!"', 'Печорин писал: «Я не помню утра более голубого и свежего!»'],
    ['Печорин признавался: "Я иногда себя презираю..."', 'Печорин признавался: «Я иногда себя презираю...»'],
    ['Печорин спрашивает: "И зачем было судьбе кинуть меня в мирный круг честных контрабандистов?"', 'Печорин спрашивает: «И зачем было судьбе кинуть меня в мирный круг честных контрабандистов?»'],
    [
        'Печорин размышляет: "…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие..."',
        'Печорин размышляет: «…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие...»'
    ],
    [
        'Печорин размышляет: "…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие…"',
        'Печорин размышляет: «…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие…»'
    ],
    [
        'Печорин размышляет: "…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие…"\n\n',
        'Печорин размышляет: «…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие…»\n\n'
    ],
    [
        'Печорин размышляет: "…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие…"\n\nПечорин...',
        'Печорин размышляет: «…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие…»\n\nПечорин...'
    ],
    [
        'Лермонтов восклицает в предисловии, что это "старая и жалкая шутка!"',
        'Лермонтов восклицает в предисловии, что это «старая и жалкая шутка!»'
    ],
    [
        '"Лермонтов восклицает в "предисловии", что это "старая и жалкая шутка!""',
        '«Лермонтов восклицает в „предисловии“, что это „старая и жалкая шутка!“»'
    ],
    [
        '"Лермонтов восклицает в "предисловии", что это "старая и жалкая шутка!"" "Лермонтов восклицает в "предисловии", что это "старая и жалкая шутка!""',
        '«Лермонтов восклицает в „предисловии“, что это „старая и жалкая шутка!“» «Лермонтов восклицает в „предисловии“, что это „старая и жалкая шутка!“»'
    ],
    [
        '"Лермонтов восклицает в предисловии, что это "старая и жалкая шутка!"" "Лермонтов восклицает в предисловии, что это "старая и жалкая шутка!""',
        '«Лермонтов восклицает в предисловии, что это „старая и жалкая шутка!“» «Лермонтов восклицает в предисловии, что это „старая и жалкая шутка!“»'
    ],
    [
        '"Лермонтов восклицает в предисловии, что это "старая и жалкая шутка!"" "Лермонтов восклицает в предисловии, что это "старая и жалкая шутка!"" "Лермонтов восклицает в предисловии, что это "старая и жалкая шутка!""',
        '«Лермонтов восклицает в предисловии, что это „старая и жалкая шутка!“» «Лермонтов восклицает в предисловии, что это „старая и жалкая шутка!“» «Лермонтов восклицает в предисловии, что это „старая и жалкая шутка!“»'
    ],
    [
        '<p>"Энергия соблазна: "от внутреннего" к внешнему".</p>        <p>"Энергия соблазна: "от внутреннего" к внешнему".</p>',
        '<p>«Энергия соблазна: „от внутреннего“ к внешнему».</p>        <p>«Энергия соблазна: „от внутреннего“ к внешнему».</p>'
    ],
    [
        '<p>"Энергия\nсоблазна: "от\nвнутреннего" к\nвнешнему".</p>        <p>"Энергия\nсоблазна: "от\nвнутреннего" к\nвнешнему".</p>',
        '<p>«Энергия\nсоблазна: „от\nвнутреннего“ к\nвнешнему».</p>        <p>«Энергия\nсоблазна: „от\nвнутреннего“ к\nвнешнему».</p>'
    ],
    [
        '"Полотенцесушители из нержавеющей стали"\n\nПолотенцесушитель из черного металла, сделанные из нержавеющей стали, очень хорошо подходят к использованию в наших условиях. Снаружи они могут иметь полированную, матовую, или даже окрашенную поверхность. Модели с окрашенной поверхностью обычно стоят меньше других. Еще один плюс окрашенных полотенцесушителей — возможность разместить их в любом интерьере благодаря широкой цветовой гамме.',
        '«Полотенцесушители из нержавеющей стали»\n\nПолотенцесушитель из черного металла, сделанные из нержавеющей стали, очень хорошо подходят к использованию в наших условиях. Снаружи они могут иметь полированную, матовую, или даже окрашенную поверхность. Модели с окрашенной поверхностью обычно стоят меньше других. Еще один плюс окрашенных полотенцесушителей — возможность разместить их в любом интерьере благодаря широкой цветовой гамме.'
    ]
]]);
