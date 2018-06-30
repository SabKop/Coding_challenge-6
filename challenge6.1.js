// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
 // make a function that organizes these into individual array that is ordered.
 // For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

const arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const answer = (arr) => {
    let newArray = [];
    let sorted = arr.sort((a,b) => a-b)
    const groupSorted = groupArray(sorted);
    newArray = groupSorted;
    return newArray;
}

const groupArray = (array) => {
 for (i=0; i< array.length;i++){
   let value = array[i];
   let index = array.lastIndexOf(value);
   let count = index + 1 - i;

   if (count > 1) {
     array.splice(i, count, Array(count).fill(value));
   }
 }
     return array;
};

answer(arr);

// Bonus: Make it so it organizes strings differently from number types.
 // i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


const arr2 = [1,"2","3",5,3,6,"7","4","6",4];

const answer = (arr) =>{
 let newArray=[];
 const sorted = arr.sort((a,b)=>a-b);
 const numbers = sorted.filter(el => typeof(el) === 'number');
 const strings = sorted.filter(el => typeof(el) === 'string');
 newArray.splice(0,0,numbers,strings);
 return newArray;
}

answer(arr2);
