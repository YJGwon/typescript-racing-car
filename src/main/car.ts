export class Car {
    readonly name: string;

    constructor(name: string) {
        this.validateNameLength(name);
        this.validateNameIncludeBlank(name);

        this.name = name;
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
}