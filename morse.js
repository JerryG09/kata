const decodeMorse = (morseCode) => {
    // Splits words at 3 spaces
    return morseCode.split('  ').map(word => {
        // Splits word into individual codes
        return word.split(' ').map(code => {
            // Convert code to letter/digit/symbol
            return (MORSE_CODE[code] || '');
        }).join('') // join letter to a single word
    }).join(' ').trim() // join all words into asingle sentence
} 


