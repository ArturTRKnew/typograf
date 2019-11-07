import Typograf from '../../../typograf';

export default {
    name: 'ru/dash/izza',
    handler(text) {
        const re = new RegExp(Typograf.getData('ru/dashBefore') + '(И|и)з за' + Typograf.getData('ru/dashAfter'), 'g');

        return text.replace(re, '$1$2з-за');
    }
};
