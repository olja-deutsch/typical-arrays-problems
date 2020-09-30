
exports.min = function min (array) {
  if (arguments.length && array.length) {
    let minElement = array[0];

    array.forEach(element => {
        if (element <= minElement) {
            minElement = element;
        };
    });
    
    return minElement;
    
  } else {
    return 0;
  };
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
