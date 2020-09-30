
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
  if (arguments.length && array.length) {
    let maxElement = array[0];

    array.forEach(element => {
      if (element >= maxElement) {
        maxElement = element;
      };
    });

    return maxElement;

  } else {
    return 0;
  };
}

exports.avg = function avg (array) {
  if (arguments.length && array.length) {
    let sum = 0;

    array.forEach(element => {
      sum += element;
    });

    return sum / array.length;
    
  } else {
    return 0;
  };
}
