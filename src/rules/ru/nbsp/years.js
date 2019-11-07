import Typograf from '../../../typograf';

export default {
    name: 'ru/nbsp/years',
    index: '+5',
    handler(text) {
        const dashes = Typograf.getData('common/dash');
        const re = new RegExp('(^|\\D)(\\d{4})(' +
                dashes + ')(\\d{4})[ \u00A0]?г\\.?([ \u00A0]?г\\.)?(?=[,;:?!"‘“»\\s]|$)', 'gm');

        return text.replace(re, '$1$2$3$4\u00A0гг.');
    }
};
