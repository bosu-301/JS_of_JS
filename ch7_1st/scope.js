//스코프는 시야범위라고 인식하자!

f = (x) =>{
    return x + 3;
}

f(5);

//위 코드에서 x는 함수 f 안에서는 존재하나 그 밖에서는 x를 사용 할 수 없다
//이때 x의 스코프는 함수f 이다

minyoungjun = (bs) =>{
    if (bs>150){
        bs -= 30;
    }
    console.log(`민영준 키는 ${bs}cm 입니다(리얼임) \n`);
}

