function bruteForceTwoSum(array, sum){
    let pairs = []; 
    // loop through array and return each pair of numbers that equal the sum argument 
    for (let i = 0; i< array.length; i++){
        let firstNumber = array[i]; 
        for (let j = i+1; j < array.length; j++){
            let secondNumber = array[j]; 
                if (firstNumber + secondNumber === sum){
                    pairs.push([firstNumber, secondNumber])
                }
        }
    }
    return pairs; 
}

function merge(a1, a2){
    let newArray = []; 
    while(a1.length !== 0 && a2.length !== 0){
        a1[0] < a2[0] ? 
        newArray.push(a1.shift())
        : 
        newArray.push(a2.shift()); 
    }
    return newArray.concat(a1).concat(a2); 
}

function mergeSort(array){
    // if array is less than 2, just return it 
    if (array.length < 2){
        return array; 
    }
    // find middle 
    let middle = array.length/2; 
    let a1 = array.slice(0,middle); 
    let a2 = array.slice(middle); 
    return merge(mergeSort(a1), mergeSort(a2)); 
}
// test mergeSort 
let testArray = [1]
for (let i = 0; i < 10; i++){
    let num = Math.floor(Math.random()*100)
    testArray.push(num); 
}
// console.log(mergeSort(testArray))

function binarySearch(target, array){
    console.log(array); 
    if (array.length <= 1){
        if (array[0] !== target){
            return false; 
        }
    }
    // assume the array is already sorted 
    let mid = Math.floor(array.length/2); 
    console.log(`mid is ${array[mid]}`)
    console.log(`array is ${array.length} elements long`)

    // check if mid is equal to target and return true if it is 
    if (array[mid] === target){
        return true; 
    }else{

        
        // make left and right side arrays 
        let leftArray = array.slice(0,mid); 
        // console.log(leftArray)
        let rightArray = array.slice(mid); 
        // console.log(rightArray)
        
        // use left or right side of the array depending on whether mid is greater or less than target 
        if (array[mid] > target){
            // use left side 
            console.log('mid is greater than target')
            return binarySearch(target,leftArray)
        }else{
            //use right side 
            console.log('mid is lesser than target')
            return binarySearch(target,rightArray)
        }
        return false; 
    }

}
// console.log(binarySearch(Math.floor(Math.random()*100), mergeSort(testArray)))


function binarySearchTwoSum(array, sum){ 
    let pairs = []; 
    const sortedArray = mergeSort(array); 
    let position = 0; 
    // loop through array and apply binary search 
    sortedArray.forEach(ele => {
        // declare target number 
        let target = sum - ele; 
        // if binary search returns true, add pair (ele and target) to pairs array 
        // then splice sortedArray so the target number is removed. 
        if (binarySearch(target,sortedArray)){
            pairs.push([ele,target])
            sortedArray.splice(position,1); 
        }
        position +=1; 

    })
    return pairs; 
}

function binaryMatch(array, missingNum){
    return binarySearch(missingNum, array);
}

function hashTwoSum(array,sum){
    let pairs = []; 
    // make placeholder hash 
    let hash = {}; 
    // make hash entry for each value in array 
    array.forEach(ele => {
        hash[ele] = ele; 
    })
    // loop through array and find all pairs
    array.forEach(ele => {
        let target = sum - ele; 
        if (hash[target]){
            pairs.push([ele, hash[target]])
            // remove that entry from the array to prevent repeats 
            // !!! use indexOf the hash[target] value, not the ele!!! 
            let position = array.indexOf(hash[target]); 
            
            array.splice(position,1); 
        }
    })
    return pairs; 
}

// hashTwoSum(testArray,0); 