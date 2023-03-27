(function (app) {
    "use strict";
    app.run(['$cacheFactory', function ($cacheFactory) {
        $cacheFactory('myExample');
    }]);
})(AppMain.app);
