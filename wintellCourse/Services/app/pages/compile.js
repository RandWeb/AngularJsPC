(function (app) {
    "use strict";
    app.factory("htmlFragment", function () {
        return window.document.getElementById('notCompiled');
    });
})(AppMain.app);
