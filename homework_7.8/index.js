"use strict";
// example 1
function sentenceInfo(sentence) {
	if (isNaN(sentence)) {
		let arrSent = sentence.split(" ");
		let joinedArr = arrSent.join("").toLowerCase();

		return `Given sentence has ${arrSent.length} words,they are ${arrSent},
        and has these letters ${countStringElement(joinedArr)},
        the longest word is ${arrSent.sort((a, b) => b.length - a.length)[0]}`;
	} else {
		return "Please write a sentence in a string";
	}
}
function countStringElement(str) {
	let result = [];
	for (let i = 0; i < str.length; i++) {
		let regex = new RegExp(str[i], "g");
		result.push(str[i] + "-" + str.match(regex).length);
	}
	return [...new Set(result)];
}

console.log(
	sentenceInfo("I learn something interesting and its a JavaScript ")
);
