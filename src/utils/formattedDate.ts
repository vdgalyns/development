export function createFormattedDate(timestamp: string) {
    const date = new Date(timestamp)

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    return `${day < 10 ? `0${day}` : day}.${month}.${year}`
}