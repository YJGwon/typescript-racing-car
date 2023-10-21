import {Car} from "./car";

export class Players {

    private readonly cars: Car[];

    constructor(...cars: Car[]) {
        this.validateNameUniqueness(cars);

        this.cars = cars;
    }

    private validateNameUniqueness(cars: Car[]) {
        if (cars.length > this.countUniqueNames(cars)) {
            throw Error("중복된 이름의 참가자가 있어요")
        }
    }

    private countUniqueNames(cars: Car[]) {
        return new Set(cars.map(it => it.name)).size;
    }


    getWinners() {
        const maxPosition = this.getMaxPosition();
        return this.cars.filter(it => it.hasPosition(maxPosition));
    }

    private getMaxPosition() {
        return Math.max(...(this.cars.map(it => it.getPosition())));
    }
}