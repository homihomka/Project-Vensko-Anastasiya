export function generateRandomNumber(min, max, isRounded = true) {
    const number = min - 0.5 + Math.random() * (max - min + 1);
    return isRounded ? Math.round(number) : number;
}

export function generateRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}