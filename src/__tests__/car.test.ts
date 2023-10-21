import {Car} from "../main/car";

describe('자동차는', () => {
    test('이름을 가진다', () => {
        expect(new Car("forky").name).toBe("forky");
    });

    test('5글자 초과하는 이름을 가질 수 없다', () => {
        expect(() => new Car("123456"))
            .toThrowError("이름은 5글자를 초과할 수 없어요");
    });
});
