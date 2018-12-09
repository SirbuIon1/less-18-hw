var calcObj = require('./arguments');

describe('calculate sum with  arguments', function () {
    var a, b, c, d, e;

    describe('calculateSum with 0 arguments', function () {

        test('should return 0 when a = 0, b = 0, c = 0, d = 0, e = 0', function () {
            a = 0;
            b = 0;
            c = 0;
            d = 0;
            e = 0;
            expect(calcObj.calculateSum(a, b, c, d, e)).toEqual(0);
        });
        describe('calculateSum with 1 argument', function () {
            test('should return 5 when a = 5, b = 0, c = 0, d = 0, e = 0 ', function () {
                a = 5;
                b = 0;
                c = 0;
                d = 0;
                e = 0;
                expect(calcObj.calculateSum(a, b, c, d, e)).toEqual(5);
            });

            describe('calculateSum with 2 arguments', function () {
                test('should return 5 when a = 5, b = 10, c = 0, d = 0, e = 0 ', function () {
                    a = 5;
                    b = 10;
                    c = 0;
                    d = 0;
                    e = 0;
                    expect(calcObj.calculateSum(a, b, c, d, e)).toEqual(15);
                });
            });

            describe('calculateSum with 3 arguments', function () {
                test('should return 5 when a = 5, b = 10, c = 0, d = 0, e = 0 ', function () {
                    a = 5;
                    b = 10;
                    c = 20;
                    d = 0;
                    e = 0;
                    expect(calcObj.calculateSum(a, b, c, d, e)).toEqual(35);
                });
            });
            describe('calculateSum with 4 arguments', function () {
                test('should return 5 when a = 5, b = 10, c = 0, d = 0, e = 0 ', function () {
                    a = 5;
                    b = 10;
                    c = 20;
                    d = 30;
                    e = 0;
                    expect(calcObj.calculateSum(a, b, c, d, e)).toEqual(65);
                });
            });
            describe('calculateSum with 5 arguments', function () {
                test('should return 5 when a = 5, b = 10, c = 0, d = 0, e = 0 ', function () {
                    a = 5;
                    b = 10;
                    c = 20;
                    d = 30;
                    e = 25;
                    expect(calcObj.calculateSum(a, b, c, d, e)).toEqual(90);
                });
            });
        });