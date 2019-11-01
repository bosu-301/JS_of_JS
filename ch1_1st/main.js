$(document).ready(function() {//js 실행전에 html이 전부 불러와졌는지 확인하는 역할
  'use strict';//인터프리터에서 코드를 엄격하게 처리한다??

  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));//그림그리기 세팅 완료 !

//  /*근본 코드
  var d  = Shape.Circle(200,200,80);
  d.fillColor = 'black';
  var text = new PointText(200,200);
  text.justification ='center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world';
//  */
  var tool = new Tool(); // 툴 세팅

  tool.onMouseDown = function(event){ // onMouseDown이라는 이벤트핸들러에 function(원 생성)을 연결
    // onMouseDown 핸들러의 경우 클릭시 function 실행 ,클릭포인트 전달의 역할을 한다.
    var c = Shape.Circle(event.point.x, event.point.y, 5); // event가 일어난 point에 c (반지름 5 짜리 원)을 생성
    c.fillColor = 'yellow'; // 노랑색사고싶다
  };
  //TODO

  paper.view.draw();
})
