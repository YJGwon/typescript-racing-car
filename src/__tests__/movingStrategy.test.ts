import {DefaultMovingCondition, DefaultMovingStrategy} from "../main/movingStrategy";

describe('기본 이동 조건은', () => {
    test('값이 4 이상이면 통과한다', () => {
        expect(DefaultMovingCondition(4)).toBe(true);
    });

    test('값이 4 미만이면 실패한다', () => {
        expect(DefaultMovingCondition(3)).toBe(false);
    });
});
