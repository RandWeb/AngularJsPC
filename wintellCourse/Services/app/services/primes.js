(function (app) {
    "use strict";
    app.service("primes", ['$q', '$timeout', function ($q, $timeout) {
        var primeService = {
            computePrimes: function (max) {
                var defer = $q.defer(),
                    sieve = [],
                    i = 2,
                    primes = [],
                    block = function (s, i1, p) {
                        var cnt = 100, j;
                        while (cnt >= 0 && i1 <= max) {
                            if (!s[i1]) {
                                p.push(i1);
                                for (j = i1 * 2; j <= max; j += i1) {
                                    s[j] = true;
                                }
                            }
                            i1 += 1;
                            cnt -= 1;
                        }
                        defer.notify(i1);
                        if (i1 >= max) {
                            defer.resolve(p);
                        }
                        else {
                            (function (s1, i2, p1) {
                                $timeout(function () {
                                    block(s1, i2, p1);
                                }, 1);
                            })(s, i1, p);
                        }
                    };
                block(sieve, i, primes);
                return defer.promise;
            }
        };
        return primeService;
    }]);
})(AppMain.app);