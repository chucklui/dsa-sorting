function merge(arr1, arr2) {
  let result = [];
  let oneLength = arr1.length;
  let twoLength = arr2.length;
  let pointer2 = 0;
  let pointer1 = 0;

  //this is for one arr1 > arr2
  if(oneLength >= twoLength){
    for(let num of arr1){
      if(arr1[pointer1] > arr2[pointer2]) {
        result.push(arr2[pointer2]);
        pointer2++;
      }
      if(arr1[pointer1] <= arr2[pointer2]) {
        result.push(arr1[pointer1]);
        pointer1++;
      }
    }
  }else{
    //this is for one arr2 > arr1
    //arr1 [1*,2*,3]
    //arr2 [2*,3,4,5]
    //pointer1 2
    //pointer2 1
    //[1,2,2]
    for(let num of arr2){
      if(arr1[pointer1] > arr2[pointer2]) {
        result.push(arr2[pointer2]);
        pointer2++;
      }
      if(arr1[pointer1] <= arr2[pointer2]) {
        result.push(arr1[pointer1]);
        pointer1++;
      }
    }
  }

  
}

function mergeSort() {}

module.exports = { merge, mergeSort};