import {Car} from "../main/car";
import {Players} from "../main/players";

describe('참가자들은', () => {
    test('이름이 중복될 수 없다', () => {
        const car1 = new Car("kang");
        const car2 = new Car("kang");

        expect(() => new Players(car1, car2))
            .toThrowError("중복된 이름의 참가자가 있어요");
    });
});
