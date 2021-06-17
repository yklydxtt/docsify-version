function docisfyVersion(hook, vm) {
    hook.beforeEach(function (html) {
        const dv = window.$docsify.dv || {};
        const option = dv.option || {};
        const model = dv.model || {};
        const STARTER = option.starter || '<%';
        const ENDER = option.ender || '%>';
        const _JS_IDENTIFIER = '[a-zA-Z\.\_0-9]+';
        const _REG_STR = new RegExp(`${STARTER}\\s*${_JS_IDENTIFIER}\\s*${ENDER}`, 'g');
        let result = html;
        function tplFormat(match) {
            const arr = ((match.match(new RegExp(_JS_IDENTIFIER, 'g')) || [])[0] || '').split('.') || [];
            let value = model;
            arr.forEach(key => {
                value = value[key];
            });
            return value || '';
        }
        return result.replace(_REG_STR, tplFormat) || '';
    });
}

window.$docsify.plugins = [].concat(docisfyVersion, (window.$docsify.plugins || []));