(function (app) {
    "use strict";
    function IntervalController($scope, $interval, $log, maxRows, maxColumns) {
        $scope.title = '$interval';
        var _this = this;
        this.$scope = $scope;
        this.$interval = $interval;
        this.maxRows = maxRows;
        this.maxColumns = maxColumns;
        this.bias = 0.5;
        this.pos = (maxColumns / 2);
        $scope.lines = [];
        this.iterate = function () {
            var idx, nextPos, prevPos, newLine = [];
            for (idx = 0; idx < _this.maxColumns; idx += 1) {
                newLine[idx] = { idx: idx, val: '#' };
            }
            newLine[_this.pos].val = 'O';
            if (Math.random() < _this.bias) {
                nextPos = _this.pos + 1;
                if (nextPos < _this.maxColumns) {
                    _this.pos = nextPos;
                }
                else {
                    _this.bias -= 0.1;
                    $log.info("Hit right wall.");
                }
            }
            else {
                prevPos = _this.pos - 1;
                if (prevPos >= 0) {
                    _this.pos = prevPos;
                }
                else {
                    _this.bias += 0.1;
                    $log.info("Hit left wall.");
                }
            }
            _this.$scope.lines.push(newLine);
            if (_this.$scope.lines.length > _this.maxRows) {
                _this.$scope.lines.splice(0, 1);
            }
        };
        $scope.cancel = function () {
            _this.$interval.cancel(_this.$scope.promise);
            _this.$scope.promise = undefined;
            $log.warn("Interval has been stopped. You must refresh the page to restart.");
        };
        $scope.promise = $interval(_this.iterate, 80);
    }

    IntervalController.$inject = ['$scope', '$interval', '$log', 'maxRows', 'maxColumns'];
    app.controller("intervalCtrl", IntervalController);
})(AppMain.app);