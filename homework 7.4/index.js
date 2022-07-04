"use strict";

const myCountry = {
	name: "Armenia",
	capital: "Yerevan",
	DialingCode: "+374",
	Area: "29,743km",
	currency: "Armenian Dram",
	fullname() {
		return "Republic of Armenia";
	},
	culture: {
		music: {
			duduk: "Jivan Gasparian",
			composer: "Aram Xachatryan",
			singerComposer: "Charles Aznavour",
			pianist: "Sahan Arzruni"
		},
		sport: {
			football: {
				player: "Henrikh Mkhitaryan",
				player1: "Youri Djorkaeff",
				player2: "Edgar Manucharyan"
			},
			wrestling: {
				wrestler: "Armen Nazaryan",
				wrestler1: "Artur Aleksanyan"
			},
			chess: {
				player: "Levon Aronyan"
			}
		}
	},
	education: {
		university: {
			name: "Yerevan State University",
			founded: 1919
		},
		university1: {
			name: "The National Polytechnic University of Armenia",
			founded: 1993
		},
		academy: {
			name: "The Armenian National Academy of Sciences",
			founded: 1943
		}
	},
	population: {
		now: "2,963 milion",
		ethnicGroups: {
			first: "Armenians - 98.1%",
			second: "Yezidis - 1.2%",
			third: "Russians - 0.4%",
			other: ["Ukrainians", "Kurds", "Georgians", "Greeks"]
		}
	}
};

function returnObjectAsString(obj) {
	let result = ``;
	for (let key in obj) {
		if (typeof obj[key] === "object") {
			result += `key:${key} `;
			result += "\n";
			for (let keyN in obj[key]) {
				if (typeof obj[key][keyN] === "object") {
					result += `   key:${keyN}`;
					result += "\n";
					for (let keyM in obj[key][keyN]) {
						if (typeof obj[key][keyN][keyM] === "object") {
							result += `   key:${keyM}`;
							result += "\n";
							for (let keyK in obj[key][keyN][keyM]) {
								result += `     key:${keyK}  value:${obj[key][keyN][keyM][keyK]}`;
								result += "\n";
							}
						} else {
							result += `     key:${keyM}  value:${obj[key][keyN][keyM]}`;
							result += "\n";
						}
					}
				} else {
					result += `     key:${keyN}  value:${obj[key][keyN]}`;
					result += "\n";
				}
			}
		} else {
			result += `key:${key}    value:${obj[key]}`;
			result += "\n";
		}
	}
	return result;
}
// console.log(returnObjectAsString(myCountry));

const hardArray = [
	"home",
	"some Sweet",
	"car",
	"fesival",
	1915,
	function returnSomething(smt) {
		return smt;
	},
	["BMW", ["X5", "X6", "E60", "i8"], "AUDI", "MERCEDES", "TOYOTA", "FERRARI"],
	["ASUS", "ACER", "TOSHIBA", "SAMSUNG", "MACBOOK"],
	["Marlboro", "Parlament", "Winston", "Ararat"],
	["JAVASCRIPT", "C++", "C#", "PYTHON", "TYPESCRIPT"],
	["google", "yahoo", "yandex", "mail", "gmail", "facebook"]
];

function getArrayElements(arr) {
	let result = ``;
	for (let el of arr) {
		result += el;
		result += "\n";
	}
	return result;
}
console.log(getArrayElements(hardArray));

const destrArr = [
	"some",
	"arr",
	function EvenOrNot(num) {
		return num % 2 === 0 ? num : `its not even`;
	},
	function OddOrNot(num) {
		return num % 2 !== 0 ? num : `its not odd`;
	}
];

const [, , EvenOrNot] = destrArr;
const [, , , OddOrNot] = destrArr;
console.log(EvenOrNot(12));
console.log(OddOrNot(8));

const destrObj = {
	private: false,
	public: true,
	ageLimit: "21+",

	getInfo(name, surname, age) {
		return {
			name: name,
			surname: surname,
			age: age
		};
	}
};
const { getInfo } = destrObj;
console.log(getInfo("Jack", "Trump", 63));
