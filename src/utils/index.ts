export const random20Id = () => {
    let result = ""
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for (let i = 20; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)]

    return result
}

export const randoInt = (min: number, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
