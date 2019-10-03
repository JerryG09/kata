function fat_finger(input) {
    let fatFinger = ""
    let capitalize = false;
    for (let i = 0; i < input.length; i++) {
        const letter = input[i]
        if (letter === "a") {
            capitalize = !capitalize;
        }
        else if (letter === "A") {
            capitalize = !capitalize;
        } else {
            if (capitalize) {
                fatFinger += letter.toUpperCase()
            } else {
                fatFinger += letter
            }
        }
    }
    return fatFinger
}