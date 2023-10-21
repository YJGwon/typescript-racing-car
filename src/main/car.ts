import {DefaultMovingStrategy, MovingStrategy} from "./movingStrategy";

export class Car {
    readonly name: string;
    private position: number;

    readonly movingStrategy: MovingStrategy;

    constructor(name: string, movingStrategy: MovingStrategy = DefaultMovingStrategy, position: number = 0) {
        this.validateNameLength(name);
        this.validateNameIncludeBlank(name);

        this.name = name;
        this.position = position;
        this.movingStrategy = movingStrategy;
    }

    private validateNameLength(name: string) {
        if (name.length > 5) {
            throw new Error("이름은 5글자를 초과할 수 없어요");
        }
    }

    private validateNameIncludeBlank(name: string) {
        if (name.includes(' ')) {
            throw new Error("이름은 공백을 포함할 수 없어요");
        }
    }

    move() {
        if (this.movingStrategy()) {
            this.position++;
        }
    }

    hasPosition(position: number) {
        return this.position === position;
    }

    getPosition() {
        return this.position;
    }
}