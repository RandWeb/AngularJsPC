(function (app) {
    "use strict";

    app.factory('$exceptionHandler', ['$injector', function ($injector) {
        var errors = 0;
        return function (exception, cause) {
            errors += 1;
            exception.message += ' (caused by "' + cause + '")';
            if ($injector.has('$rootScope')) {
                var rootScope = $injector.get('$rootScope');
                rootScope.errors = rootScope.errors || [];
                rootScope.errors.push("Error #" + errors + ": " + exception.toString());
            }
            else {
                throw exception;
            }
        };
    }]);
})(AppMain.app);
