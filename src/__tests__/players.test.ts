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

describe('참가자들중', () => {
    test('가장 많이 전진한 차들을 구할 수 있다', () => {
        const winningCar1 = new Car("kang",  () => true, 1);
        const winningCar2 = new Car("forky", () => true, 1);
        const losingCar = new Car("ohzzi", () => false, 0);
        const players = new Players(winningCar1, winningCar2, losingCar);

        const winners = players.getWinners();
        expect(winners).toContain(winningCar1);
        expect(winners).toContain(winningCar2);
    });
});
