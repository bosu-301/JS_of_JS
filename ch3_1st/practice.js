let currentTempC = 22; // let = var의 역할을 한다 (지금은 이렇게만 알고있자)

let targetTempC;
let targetTempC,room1 = "conference_room", room2 = "lobby"; // 변수 한꺼번에 여러개 선언가능

const roomTempC = 21.5, maxTempC = 30; //const의 경우 한번 할당한 값 변경불가

// 이제부터 camel case로 코딩하는 연습 해보자
//

//literal : 각 식별자들에 들어갈 value 들을 지칭

//Array , Date , RegExp , Map/WeakMap , Set/WeakSet , 원시타입의 숫자, 문자열, 불리언에 대응하는 Number, String, Boolean

//숫자형 표현들의 정리 
let count = 10; //숫자리터럴 , count는 double 형
const blue = 0x0000ff; //16진수형
const umask = 0o0022; //8진수형
const roomTemp = 21.5; //십진수
const c = 3.0e6; //지수(3.0 * 10^6)
const e = -1.6e19; //지수(-.16 * 10^19)
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN; //얘는 숫자가 아님


//javascript에서는 '123'이라는 문자열을 필요에 따라 숫자로 바꾸는 경우가 있다.
const result1 = 3 + "30"; // 3이 문자열로 바뀜 결과는 문자열 330
const result2 = 3 * "30"; // 30이 숫로 바뀜 결과는 숫자 90

//boolean
let heating = true;
let cooling = false;

//symbol! 토큰을 나타내는데 사용되는 타입, symbol은 유일하다
const RED = Symbol("the color if a sunset!");
//자세한 활용법은 뒤를 가봐야 알게될듯 ㅎㅎ


// null과 undefined
let testNull = null; // 널값
let testundefined; //값이 정의되지 않음

//객체만들기
const obj = {};
obj.color = "yellow"; //심볼의 프로퍼티가 유효한 식별자인 경우
obj["not an identifier"] = 3; // 프로퍼티가 유효한 식별자가 아닌경우

obj["not an identifier"]; // 3
obj["color"]; //"yellow"

const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE];   // 8

//obj에는 "color"(유효한 식별자 문자열)  "not an identifier" (유효한 식별자가 아닌 문자열)  SIZE (심볼) 요 세가지 프로퍼티 존재



//위에처럼 빈 깡통객체에다 프로퍼티를 채워넣는 경우와는 다른방법으로 만들기
const sam1 = {
    name: 'SAM',
    age: 4,
};

const sam2 = {name: 'SAM', age: 4};

const sam3 = {
    name: 'SAM',
    classification: {  //프로퍼티의 값 또한 객체가 될 수 있다
        kingdom: 'anamalia',
        phylum: 'hellooo',
        age: 3885,
    },
};

sam3.classification.age; //3885
sam3["classification"].age; //3885
sam3.classification[age]; //3885
sam3["classification"]["age"] //3885
//모두 같은 값이지만 여러 표현을 사용할 수 있다

//객체에는 함수도 담을 수 있데용
sam3.speak = function() {return "wangwang!!"; };
sam3.speak(); //"wangwang!!"



//객체에서 프로퍼티 제거할때는 delete 연산자 쓰세요
delete sam3.name;
delete sam3.classification.kingdom;


//자바스크립트의 배열

const a1 = [1,2,3,4];
const a2 = [1, 'two', 3, null];
const a3 = [
    "helloooo",
    "bonjure",
    "nihao",
    "annyung"
];

const a4 = [ //객체가 들어있는 배열
    {name:"suji", age: 10},
    {name: "jisu", age: 12},
    {name: "sujin", age : 13}
];

const a5 = [ //배열이 들어있는 배열 
    [1,3,5],
    [2,4,6]   //마지막 배열 혹은 객체에는 쉼표 넣어도 되고 안넣어도 됨 앵간하면 넣지말자
]

a1[0];   //1
a4[0].name;   //"suji"