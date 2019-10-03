String.prototype.toJadenCase1 = function () {
    let jadenCase = '';
    let capitalize = true;
    for (let i = 0; i < this.length; i++) {
        const letter = this[i];
        if (letter === ' ') {
            capitalize = true;
            jadenCase += ' '
        }
        else {
            if (capitalize) {
                jadenCase += letter.toUpperCase();
                capitalize = false
            }
            else {
              jadenCase += letter.toLowerCase()
            }
        }
    }
    return jadenCase
}
