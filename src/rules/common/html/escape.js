export default {
    name: 'common/html/escape',
    index: '+100',
    queue: 'end',
    handler(text) {
        const entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#39;',
            '/': '&#x2F;'
        };

        return text.replace(/[&<>"'/]/g, function(s) {
            return entityMap[s];
        });
    },
    disabled: true
};
