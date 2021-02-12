
exports.min = function min (array) {
    if (arguments.length === 0 || array.length === 0) return 0;

    array.sort((a,b) => a-b);
    return array[0];
}

exports.max = function max (array) {
    if (arguments.length === 0 || array.length === 0) return 0;

    array.sort((a,b) => b-a);
    return array[0];
}

exports.avg = function avg (array) {
    if (arguments.length === 0 || array.length === 0) return 0;

    return  array.reduce((sum, el) => sum + el, 0) / array.length;
}
