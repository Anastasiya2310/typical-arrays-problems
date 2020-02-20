
exports.min = function min (arr) {
  if(arr === undefined || arr.length === 0) {
    return 0;
  }
  let minValue = arr[0];
  for(let i = 0; i < arr.length; i++) 
  {
    if(minValue > arr[i]) {
      minValue = arr[i];
    }
  }
  return minValue;
}

exports.max = function max (arr) {
  if(arr === undefined || arr.length === 0) {
    return 0;
  }
  let maxValue = arr[0];
  for(let i = 0; i < arr.length; i++) 
  { 
    if(maxValue < arr[i]) {
      maxValue = arr[i];
    }
  } 
  return maxValue;
}

exports.avg = function avg (arr) {
  if(arr === undefined || arr.length === 0) {
    return 0;
  }
  let avgValue = 0;
  for(let i = 0; i < arr.length; i++) 
  {
    avgValue += arr[i] 
  }
  return avgValue/arr.length;
}
