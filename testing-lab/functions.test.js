const { returnTwo, greeting, add, subtract, multiply, divide} = require('./functions')

test('This should return the number 2', () => {
    expect(returnTwo()).toBe(2)
});

test('This will check that the name is preserved in the template literal', () => {
    expect(greeting('James')).toEqual('Hello, James!');
    expect(greeting('Jill')).toEqual('Hello, Jill!');
});

describe('Math functions', () => {

    test("This checks that the two numbers get added together", () => {
        expect(add(1, 2)).toBe(3);
        expect(add(5, 9)).toBe(14);
    });

    test("check subtraction", () => {
        expect(subtract(3, 4)).toBe(-1)
        expect(subtract(5, -10)).toBe(15)
    });

    test("check multiplication", () => {
        expect(multiply(18, 4)).toBe(72)
        expect(multiply(-2, -9)).toBe(18)
    });

    test("check division", () => {
        expect(divide(20, 4)).toBe(5)
        expect(divide(343, 49)).toBe(7)
    }); 

});