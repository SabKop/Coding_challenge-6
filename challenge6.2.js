// Question 2: Write a javascript function that takes an array of numbers
// and a target number. The function should find two different numbers in
//  the array that, when added together, give the target number.
// For example: answer([1,2,3], 4) should return [1,3]

const arr = [1,2,4,4,2,1,5];

const answer = (array,number) => {
  let newArray = [];
  for(i=0; i<array.length;i++){
      for(j=i+1;j<array.length;j++){
        if(array[i] + array[j] === number) {
        return [array[i],array[j]];
        }
      }
  }
  return newArray;
}

answer(arr,5);
