
const {returnTwo, greeting, add, multiply, divide, subtract} = require('./function');

test("This returns 2", () => {
    expect(returnTwo()).toEqual(2);
})

test("greeting", () => {
    expect(greeting("James")).toBe("Hello James!");
    expect(greeting("Jill")).toBe("Hello Jill!")
})


test("This adds the parameters", () => {
    expect(add(1,2)).toEqual(3);
})

// challenge 
describe("mathFunctions", () => {
    
    test('multiplies the paramaters', () => {
        expect(multiply(9,9)).toBe(81)
        expect(multiply(5,5)).toBe(25)
    })

    test('divide', () => {
        expect(divide(12,12)).toBe(1)
        expect(divide(104,4)).toBe(26)
    })

    test('subtract', () => {
        expect(subtract(50, 10)).toBe(40)
        expect(subtract(5, 4)).toBe(1)
    })

})



