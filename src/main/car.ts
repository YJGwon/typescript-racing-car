export class Car {
    readonly name: string;

    constructor(name: string) {
        if (name.length > 5) {
            throw new Error("이름은 5글자를 초과할 수 없어요");
        }
        this.name = name;
    }
}