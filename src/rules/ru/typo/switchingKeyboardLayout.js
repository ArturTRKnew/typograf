const replacements = {
    A: 'А', // Latin: Russian
    a: 'а',
    B: 'В',
    E: 'Е',
    e: 'е',
    K: 'К',
    M: 'М',
    H: 'Н',
    O: 'О',
    o: 'о',
    P: 'Р',
    p: 'р',
    C: 'С',
    c: 'с',
    T: 'Т',
    y: 'у',
    X: 'Х',
    x: 'х'
};

const keys = Object.keys(replacements).join('');

export default {
    name: 'ru/typo/switchingKeyboardLayout',
    handler(text) {
        const re = new RegExp('([' + keys + ']{1,3})(?=[А-ЯЁа-яё]+?)', 'g');

        return text.replace(re, function(str, $1) {
            let result = '';
            for (let i = 0; i < $1.length; i++) {
                result += replacements[$1[i]];
            }

            return result;
        });
    }
};
