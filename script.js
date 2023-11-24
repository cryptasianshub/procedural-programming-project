//procedure 1: sum of distinct elements in two sets

function sumOfDistinctElements(set1, set2) {
    let sum = 0;
    const distinct = [];

    // Function to add distinct elements to sum
    function addDistinct(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (!distinct.includes(arr[i])) {
                distinct.push(arr[i]);
                sum += arr[i];
            }
        }
    }

    addDistinct(set1); // Add distinct elements from set1
    addDistinct(set2); // Add distinct elements from set2

    return sum;
}

// Example sets
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

const result = sumOfDistinctElements(set1, set2);
console.log("Output:", result); // Output: 13 (distinct elements 4, 7, 2)





//procedure 2: checking for algorithm vectors using dot product

function dotProduct(v1, v2) {
    let product = 0;
    for (let i = 0; i < v1.length; i++) {
        product += v1[i] * v2[i];
    }
    return product;
}

function areOrthogonal(vectors) {
    for (let i = 0; i < vectors.length; i++) {
        for (let j = i + 1; j < vectors.length; j++) {
            const result = dotProduct(vectors[i], vectors[j]);
            if (result !== 0) {
                console.log(`Vectors ${i + 1} and ${j + 1} are not orthogonal.`);
            } else {
                console.log(`Vectors ${i + 1} and ${j + 1} are orthogonal.`);
            }
        }
    }
}

// Example vectors
const vectorSet = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 0]
];

areOrthogonal(vectorSet);


//This code contains a dotProduct function that calculates the dot product of two vectors and an areOrthogonal function that checks if pairs of vectors are orthogonal by using the dot product function within nested loops.