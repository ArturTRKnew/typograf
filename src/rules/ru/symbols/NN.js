export default {
    name: 'ru/symbols/NN',
    handler(text) {
        return text.replace(/№№/g, '№');
    }
};
