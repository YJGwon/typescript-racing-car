import {Car} from "../main/car";

describe('자동차는', () => {
    test('이름을 가진다', () => {
        expect(new Car("forky").name).toBe("forky");
    });
});
