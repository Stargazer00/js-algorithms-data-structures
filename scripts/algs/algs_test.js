load('scripts/algs/CArray_ADT.js');

/**
 * Bubble sort test
 */

print('Testing bubble sort...');
var numElements = 10;
var mynums = new CArray(numElements);
mynums.setData();
print(mynums.toString());
mynums.bubbleSort();
print();
print(mynums.toString());