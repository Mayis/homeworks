"use strict";
function myFilter(arr, callback) {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i)) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
let arri = [1, 2, 3, 4, 5];
let x = myFilter(arri, (val, i) => val % 2 !== 0);
console.log(x);

function myForEach(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i);
	}
}
myForEach(arri, (val, i) => console.log(val * 2));

function mySort(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			if (callback(arr[j], arr[i])) {
				let x = arr[i];
				arr[i] = arr[j];
				arr[j] = x;
			}
		}
	}
	return arr;
}

function mySplit(string, param) {
	const newArr = [];
	for (let i = 0; i < string.length; i++) {
		if (param === "") {
			newArr.push(string.substring(0, 1));
			string = string.substring(i, string.length);
			i = 0;
		}
		if (string[i] === param) {
			newArr.push(string.substring(0, i));
			string = string.substring(i + 1, string.length);
			i = 0;
		}
	}
	return newArr;
}
console.log(mySplit("cccabbbadddafffa", "a"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~some examples how to copy reference types
// copy with spread
let obj = {
	a: 55,
	b: 66
};
let copyObj = { ...obj };
obj.a = 77;

console.log(obj);
console.log(copyObj);

// copy with assign;
let obj1 = {
	a: 55,
	b: 66
};
let copyObj1 = Object.assign({}, obj1);
obj1.a = 77;
console.log(obj1);
console.log(copyObj1);

// copy with function

let obj2 = {
	a: 55,
	b: 66
};
let copyObj2 = copyObjectFn(obj2);
obj2.a = 77;
function copyObjectFn(obj) {
	const newObj = {};
	for (let key in obj) {
		newObj[key] = obj[key];
	}

	return newObj;
}
console.log(obj2);
console.log(copyObj2);

// copy arr with spread
let arr = [1, 2, 3, 4];
let copyArr = [...arr];
arr[1] = 0;
console.log(arr);
console.log(copyArr);

// copy arr with slice;
let arr1 = [1, 2, 3, 4];
let copyArr1 = arr1.slice();
arr1[1] = 0;
console.log(arr1);
console.log(copyArr1);

// copy arr with function;
let arr2 = [1, 2, 3, 4];
let copyArr2 = copyArrayFn(arr2);
arr2[1] = 0;
console.log(arr2);
console.log(copyArr2);
function copyArrayFn(arr) {
	const newArr = [];
	for (let i in arr) {
		newArr[i] = arr[i];
	}
	return newArr;
}

// spread operator

function mySpreadWithArr(mainArr, spreadArr) {
	for (let i = 0; i < spreadArr.length; i++) {
		mainArr.push(spreadArr[i]);
	}
	return mainArr;
}

console.log(mySpreadWithArr([1, 2, 3], [4, 5]));
