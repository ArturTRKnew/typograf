Typograf.rule({
    title: 'Замена перевода строки на тег br',
    name: 'common/html/nbr',
    sortIndex: 710,
    func: function(text) {
        return text.replace(/\n/g, '<br/>');
    },
    enabled: false
});
