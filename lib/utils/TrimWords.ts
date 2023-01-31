/**
 * Trim words function
 * @param text String
 * @param limit Number
 * @returns String
 */
const trimWords = (text: string, limit: number) : string => {
    if (text.length <= limit) return text;
    return text.split(" ").splice(0, limit).join(" ");
}

export default trimWords;
