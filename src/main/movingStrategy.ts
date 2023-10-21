export interface MovingStrategy {
    (): boolean;
}

export const DefaultMovingStrategy: MovingStrategy = () => {
    const value = getRandomInteger0To9();
    return DefaultMovingCondition(value);
};

function getRandomInteger0To9() {
    return Math.floor(Math.random() * 10);
}

export const DefaultMovingCondition = (value: number) => {
    return value >= 4;
}
