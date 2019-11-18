let n = 5;
let type_n = typeof(n);
console.log(`${type_n} 이거실환가`);


//해체할당

const obj = {b:2,c:3,d:4}; //객체프로퍼티 할당

const {a,b,c} = obj;       //객체프로퍼티 해체
//(a : undefined, b : 2, c : 3, d : 참조에러)


const arr = [1,2,3];
let [x,y] = arr;
//(x : 1, y : 2)

const arr = [1,2,3,4,5];
let [x,y,...rest];     //... --> 확산연산자
x;      //1
y;      //2
rest;   //[3,4,5]



//값교환 쩌는거
let a = 5, b = 10;
[a, b] = [b, a];
a;      //10
b;      //5
//tempNum 같은거 필요없음
//기존 방식인 c = a --> a = b --> b = c 삼단연산 노필요


