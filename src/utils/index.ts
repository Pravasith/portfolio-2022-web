export const random20Id = () => {
    let result = ""
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for (var i = 20; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)]

    return result
}
