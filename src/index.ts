function random(num1: number, num2: number): number {
    if (num1 === num2) {
        return num1
    }
    const max: number = Math.max(num1, num2)
    const min: number = Math.min(num1, num2)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(random(4, 8))