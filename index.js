function docisfyVersion(hook, vm) {
    hook.beforeEach(function (html) {
        return html.replace('<%- version %>', window.$docsify.appVersion||'v1.0.1');
    });
}

window.$docsify.plugins = [].concat(docisfyVersion,(window.$docsify.plugins||[]));