let hello = `world`;

function doubleNum(a){
    if (typeof(a)=="number"){
        return 2*a;
    }
    console.log(`wlong type!!!\n`);
    return null;
}

let num = 35;
doubleNum(num);
let str = "string";
doubleNum(str);

function testF(){
    return "이것은 테스트야요\n";
}

let a = testF;

const b = testF;

const c = {};
c.f = testF;

const d = [1,2,3];
d[1] = testF;

//함수를 변수에 할당, 객체프로퍼티에 할당, 배열요소로 할당 가능 
//유연성 장난이 아니야 ㄷㄷ


function addOne(a){
    if (typeof(a)=="number"){
        return a+1;
    }
    console.log("wlong type!!!\n");
    return null;
}

a = 3;
a = addOne(a);



//매개변수의 해체할당

function veryhungry({very, hungry}){  //값을 받는 객체프로퍼티의 이름과 함수에서 선언되는 이름이 같아야 연동이 된답니다
    return `${very} ${hungry}`;
}
const hgr = {
    very : "very",
    hungry : "hungry"
};
veryhungry(hgr);

function imhungry([str1,str2]){ //배열의 경우에는 그냥 순서대로 할당, 확장연산자인 ... 도 사용가능
    return `${str1} ${str2}`;
}
const ihgr = ["im","hungry"];
imhungry(ihgr);


//매개변수에 기본값 설정 가능함 hogogok

function veryhgr(a, b ="very", c="hungry"){
    return `${a} ${b} ${c}`;
}          
veryhgr("im");              //"im very hungry"
veryhgr("im","really");     //"im really hungry"



//객체의 프로퍼티인 함수 (mathod)

const o = {
    hgr : "dead",
    cry() {
        return "so sad";
    }
}

const o = {
    feel : "hungry",
    p(){
        return `im very ${this.feel}`;  //this 키워드를 이용해 해당 매서드의 객체를 지칭할수 있어요 
    }                                   //해당 매서드 안에서 this.feel === o.feel
}





//this 키워드를 이해하기 위한 예제

const o = {
    name: 'hana',
    greetBackwards: function(){
        function getReverseName(){
            let nameBackwards = '';
            for (let i = this.name.length - 1; i >= 0; i--){
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    }
};
o.greetBackwards();
//이 경우에는 this의 방향이 정확하지 않아서 위 매서드가 잘 작동하지 않는다. 이를 해결한 것이 바로 아래의 코드
const o = {
    name: 'hana',
    greetBackwards: function(){
        const self = this;  //this 키워드의 위치를 self에 할당해놓고 그 후에는 self를 사용해서 프로퍼티를 호출한다
        function getReverseName(){
            let nameBackwards = '';
            for (let i = self.name.length - 1; i >= 0; i--){
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    }
};
o.greetBackwards();

//////////////////////////////////////////


//화살표 표기법

const f1 = function() {return "hello!";}
const f1 = ()=>"hello";

const f2 = function(name) {return `hello ${name}!`;}
const f2 = name => `hello ${name}!`; 

const f3 = function(a,b) {return a+b;}
const f3 = (a,b) => a+b;
//단순히 function의 문법을 줄이는 수준에서만 작동하는게 아니라
//함수형 프로그래밍을 js에 적용하는데 상당히 중요한 역할을 하는 표기법이다 ! => 앞으로 이 표기법으로 코딩하는것을 버릇하자

const o = {
    name: 'hana',
    greetBackwards: function(){
        const getReverseName = () => {
            let nameBackwards = '';
            for (let i = this.name.length - 1; i >= 0; i--){
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        };
        return `${getReverseName()} si eman ym ,olleH`;
    }
};
//위의 this 키워드를 설명할때 나온 예제이다. 위에서는 o의 프로퍼티 안의 내부함수에서 this가 제대로 동작하지 않았지만
//함수의 표기법을 => 로 바꾸는것 만으로도 this 키워드가 길을 잃지 않고 정상적으로 작동하게 된다. (짱신기)



//  call & apply & bind

const moti = { name:"Moti"};
const taem = { name:"Taem"};

function greet(){return `hello, I'm ${this.name}!`;}  //위에서 배웠던 화살표표기법을 사용하면 동작 안함
greet();
greet.call(moti);
greet.call(taem);



function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
update.call(moti,1949,'singer');
update.call(taem,1994,'streamer');

update.apply(moti,[1999,"dancer"]);
update.apply(taem,[2005,"student"]);

//call과 apply의 경우 값을 입력받는 형태만 다르고 그 동작은 같다.
//apply의 경우 값을 배열의 형태로 전달하는 특성때문에 배열단위의 데이터 처리에 유용하다.

const updateMoti = update.bind(moti);

