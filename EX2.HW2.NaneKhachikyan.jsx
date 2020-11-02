// HW2.EX2.

let inputArr = [[3,2,1],[5,6,4],[9,8,7]];
//turns a two-dimentional array into an array
let newArr = [];
for(let i = 0; i < inputArr.length; i++)
{
    newArr = newArr.concat(inputArr[i]);
}

//sorts the array in increasing order with bubbleSorting method
function bubbleSort (inputArr){
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr.length; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let temporary = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = temporary;
            }
        }
    }
    return inputArr;
};


let sorted1 = bubbleSort(newArr);

//turns an array into two-dimentional one
function arrayToMatrix(arr, n) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < arr.length; i++) {
        if (i % n === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(arr[i]);
    }

    return matrix;
}

let matrix = arrayToMatrix(sorted1, 3);

//sorts in descending order
function reverseBubbleSort (inputArr){
    for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr.length; j++) {
            if (inputArr[i][0] > inputArr[j][0]) {
                let temporary = inputArr[i];
                inputArr[i] = inputArr[j];
                inputArr[j] = temporary;
            }
        }
    }
    return inputArr;
};
 
let sorted2 = reverseBubbleSort(matrix);
console.log(sorted2)
