function x_o(input) {
    input = input.toLowerCase()
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'x') {
            xCount += 1
        }
        if (input[i] === 'o') {
            oCount += 1
        }
    }
    return (xCount === oCount)
}
