(function (app) {
    "use strict";
    app.config(['$anchorScrollProvider', function ($anchorScrollProvider) {
        $anchorScrollProvider.disableAutoScrolling();
    }]);
})(AppMain.app);
