let currentTempC = 22; // let = var의 역할을 한다 (지금은 이렇게만 알고있자)

let targetTempC;
let targetTempC,room1 = "conference_room", room2 = "lobby"; // 변수 한꺼번에 여러개 선언가능

const roomTempC = 21.5, maxTempC = 30; //const의 경우 한번 할당한 값 변경불가

// 이제부터 camel case로 코딩하는 연습 해보자
//

//literal : 각 식별자들에 들어갈 value 들을 지칭

//Array , Date , RegExp , Map/WeakMap , Set/WeakSet , 원시타입의 숫자, 문자열, 불리언에 대응하는 Number, String, Boolean

//숫자형 표현들의 정리 
let count = 10; 숫자리터럴 , count는 double 형
const blue = 0x0000ff; 16진수형
const umask = 0o0022; 8진수형
const roomTemp = 21.5; 십진수
const c = 3.0e6; 지수(3.0 * 10^6)
const e = -1.6e19; 지수(-.16 * 10^19)
const inf = Infinity;
const ninf = -Infinity;
const nan = NaN; 얘는 숫자가 아님
