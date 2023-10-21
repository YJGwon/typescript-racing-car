interface MovingStrategy {
    (value: number): boolean;
}

export const DefaultMovingStrategy: MovingStrategy = (value) => {
    return value >= 4;
};
