function analyze(arr) {
    let avg = arr.reduce((sum, current) => sum+= current, 0) / arr.length;

    let minVal = Math.min(...arr);

    let maxVal = Math.max(...arr);

    return {
        average: avg,
        min: minVal,
        max: maxVal,
        length: arr.length
    };
}

export default analyze;