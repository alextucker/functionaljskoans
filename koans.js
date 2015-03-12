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
        expect(sut).toBe(__);
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
                return;
            };

            return helloizer;
        }("Goodnight");

        var result = foo("James");
        expect(result).toEqual("Goodnight James");
    });
});


var __ = undefined;
var _ = require('lodash');
