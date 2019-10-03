function accum(input) {
    let output = ""
    for (let index = 0; index < input.length; index++) {
      let currentLetter = input[index]
      let totalCount = index + 1
        for (let count = 0; count < totalCount; count++) {
          if (count == 0) {
            output += currentLetter.toUpperCase()
          }
          else {
            output += currentLetter.toLowerCase()
            console.log(output)
          }
        }
        if (index != input.length - 1) {
          output += '-'
        }
    }
    return output
}


