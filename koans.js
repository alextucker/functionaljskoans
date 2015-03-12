describe("Jasmine Tests", function(){
    // Change 'xit' to 'it' to get started
    xit("'it' represents a single test scenario", function(){
        // Anatomy of a test
        // 1. Setup some data
        var x = "Hello";

        // 2. Do some work
        // 'sut' means Subject Under Test and usually represents the object/function you want to test
        var sut = x[0];

        // 3. Assert that the 'sut' is what you expect
        // Fill in the '__' with the value you expect
        expect(sut).toEqual(__);
    });
});

describe("Equality", function(){
    // Answer the following assertions with toBeTruthy or toBeFalsy
    describe("Truthy/Falsy", function(){

        xit("Strings", function(){
            expect('').toBe();
            expect('Hello World').toBe();
        });

        xit("Numbers", function(){
            expect(0).toBe();
            expect(00).toBe();
            expect(1).toBe();
            expect(99).toBe();
            expect(NaN).toBe();
        });

        xit("Objects", function(){
            expect({}).toBe();
            expect({foo: 'bar'}).toBe();
        });

    });
});

describe("Simple Functions", function(){
    xit("should take args and do work", function(){
        var sut = function(x, y) {
            return 0;
        }

        var result = sut(2,3);

        expect(result).toEqual(5);
    });

    xit("should be able to self execute", function(){
        var result = function() {
            return "foo";
        } // <-- Hint

        expect(result).toEqual("foo");
    });

    xit("should be able to self execute with args", function(){
        var result = function(x, y) {
            return x + y;
        }(9,1) // <-- Hint

        expect(result).toEqual(__);
    });
});

describe("Closures", function(){
    xit("functions can have local functions", function(){
        var foo = function(x){
            function increment(value, incrementBy) {
                return 0;
            };

            return increment(x, __);
        };

        var result = foo(1);
        expect(result).toEqual(4);
    });

    xit("functions can dispath to other functions", function(){
        var greeter = function(type){
            var salutations = {
                "hello" : function(name) {return "Hello " + name},
                "goodbye" : function(name) {return "Goodbye " + name},
            };

            return;
        };

        var helloizer = greeter(__);
        var result = helloizer("Kirk");
        expect(result).toEqual("Hello Kirk");
    });

    xit("functions can return functions", function(){
        var foo = function(){
            function helloizer(name) {
                return "Goodbye";
            };

            return helloizer;
        }

        var result = foo("Kirk");
        expect(result).toEqual("Hello Kirk");
    });

    xit("functions can return functions with scope", function(){
        var foo = function(salutation){

            var salutation = __;

            function helloizer(name) {
                return __;
            };

            return helloizer;
        }("Goodnight");

        var result = foo("James");
        expect(result).toEqual("Goodnight James");
    });
});

describe("Higher order functions", function(){
    xit("can map", function(){
        var numbers = [1,2,3];

        var result = _.map(numbers, function(number){
            return __;
        });

        expect(result).toEqual([2,3,4]);
    });

    xit("can reduce", function(){
        var numbers = [1,2,3];

        var result = _.reduce(numbers, function(memo, number){
            return memo - number;
        });

        expect(result).toEqual(-4);
    });

    xit("can reduce w/ initial memo", function(){
        var numbers = [1,2,3];

        var result = _.reduce(numbers, function(memo, number){
            return __;
        }, __);

        expect(result).toEqual(6);
    });

    xit("can filter", function(){
        var numbers = [1,2,3];

        var result = _.filter(numbers, function(number){
            return __;
        });

        expect(result).toEqual([2]);
    });
});

describe("Higher order functions with closures", function(){
    xit("can map", function(){
        var numbers = [1,2,3];

        var incrementBy = function(inc) {

            function increment(item) {
                return;
            };

            return increment;
        };

        var result = _.map(numbers, __);

        expect(result).toEqual([3,4,5]);
    });

    xit("can filter", function(){
        var names = ["James", "Kirk", "Alex", "Ziltoid"];

        var contains = function(char) {

            function stringContains(item) {
                return __;
            }

            return stringContains;
        };

        var result = _.filter(names, contains(__));

        expect(result).toEqual((['James', 'Alex']));
    });
});

var __ = undefined;
var _ = require('lodash');
