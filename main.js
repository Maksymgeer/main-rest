/*
let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}
*/
/*
let size = 0;
do {
	console.log(size);
	size++;
} while (size < 5);
*/
/*
let num = 0;
for (; num < 5; num++) {
	console.log(num);
}
*/

/*
let num = 8;
while (num) {
	console.log(num);
	num--;
}
*/
/*
firstCock: for (let num = 0; num < 5; num++) {
	for (let size = 0; size < 3; size++) {
		console.log(size);
		if (size == 1) {
			break firstCock;
		}
	}
}
*/
// эти имена свойств допустимы

let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
 };
 
 multiplyNumeric(menu);
 
 console.log(menu);
 
 function multiplyNumeric(obj) {
	for (let key in obj) {
	  if (typeof obj[key] !== 'number') continue;
	  obj[key] *= 2;
	}
 }