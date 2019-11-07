export default {
    name: 'ru/number/ordinals',
    handler(text, settings, context) {
        const re = new RegExp('(\\d[%‰]?)-(ый|ой|ая|ое|ые|ым|ом|ых|ого|ому|ыми)(?![' + context.getData('char') + '])', 'g');

        return text.replace(re, function($0, $1, $2) {
            const parts = {
                'ой': 'й',
                'ый': 'й',
                'ая': 'я',
                'ое': 'е',
                'ые': 'е',
                'ым': 'м',
                'ом': 'м',
                'ых': 'х',
                'ого': 'го',
                'ому': 'му',
                'ыми': 'ми',
            };

            return $1 + '-' + parts[$2];
        });
    }
};
