export function randomInt(max: number, min = 0) {
    return Math.floor(Math.random() * (max - min) + min)
}

export function randomNum(max: number, min = 0) {
    return Math.random() * (max - min) + min
}