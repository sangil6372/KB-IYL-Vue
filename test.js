const arr1 = [1, 2, 3];
const arr2 = arr1;
arr1[2] = 1;
console.log(arr1 === arr2 ? "true" : "false");
console.log(arr1);
console.log(arr2);
//  객체의 주소를 참조하기에 완전히 같음


const arr3 = [100,200,300];
const arr4 = [...arr3];

arr4[0] = 99999;

console.log('arr3 : ', arr3);
console.log('arr4 : ', arr4);