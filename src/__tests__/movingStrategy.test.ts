import {DefaultMovingStrategy} from "../main/movingStrategy";

describe('이동 전략은', () => {
    test('값이 4 이상이면 성공한다', () => {
        expect(DefaultMovingStrategy(4)).toBe(true);
    });
});
