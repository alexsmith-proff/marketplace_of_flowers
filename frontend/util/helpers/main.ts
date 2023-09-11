// Проверяет строку на JSON
export const isJSONString = (str: string): boolean => {
    try {
        JSON.parse(str)
    }
    catch (e) {
        return false
    }
    return true
}