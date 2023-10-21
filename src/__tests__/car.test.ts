import {Car} from "../main/car";

describe('자동차는', () => {
    test('이름을 가진다', () => {
        expect(new Car("forky").name).toBe("forky");
    });

    test('5글자 초과하는 이름을 가질 수 없다', () => {
        expect(() => new Car("123456"))
            .toThrowError("이름은 5글자를 초과할 수 없어요");
    });

    test('공백을 포함하는 이름을 가질 수 없다', () => {
        expect(() => new Car("for k"))
            .toThrowError("이름은 공백을 포함할 수 없어요");
    });
});

describe('자동차는', () => {
    test('전진할 수 있다', () => {
        const car = new Car("forky");
        const initialPosition = car.getPosition();
        car.move();

        expect(car.getPosition()).toBe(initialPosition + 1);
    });
});
