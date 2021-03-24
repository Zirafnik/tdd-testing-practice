function reverseString(string) {
    let arr = string.split('');
    arr.reverse();

    return arr.join('');
}

export default reverseString;