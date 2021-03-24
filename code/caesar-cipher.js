function caesar(string, shift) {
    const alphabet= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let arr = string.split('');

    //make note which chars are uppercase
    let upperCases = [];
    for(let i=0; i<arr.length; i++) {
        if((arr[i] === arr[i].toUpperCase()) && alphabet.includes(arr[i].toLowerCase())) {
            upperCases.push(arr.indexOf(arr[i]));
        }
    }

    let nums = arr.map((char) => {
        let letter = char.toLowerCase();
        if(alphabet.includes(letter)) {
            let num = alphabet.indexOf(letter) + shift;
            if(num < 26) {
                return num;
            } else {
                return num - 26;
            }
        } else {
            return letter;
        }
    });

    let newArr= nums.map((num) => {
        if(typeof num === 'number') {
            return alphabet[num];
        } else {
            return num;
        }
    });
    
    //make certain chars back to upperCase
    upperCases.forEach(index => {
        newArr[index] = newArr[index].toUpperCase();
    })

    
    return newArr.join('');
}

export default caesar;