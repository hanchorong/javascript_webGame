Math.random(); //0~1 사이의 유리수
Math.random() * 10; // 0~10 사이의 유리수
Math.floor(Math.random() * 10); //0~10

//number라는 배열을 만들고 0~4째자리 까지 랜덤숫자를 뽑아 배열에 넣는다. 단 중복이 되면 안되므로 do ~ while문 쓴다.
// var number = [];

// number[0] = Math.floor(Math.random() * 10);
// do {
//   number[1] = Math.floor(Math.random() * 10); //do 를 무조건 실행하고
// } while (number[1] === number[0]); // while의 조건이 같지 않을때까지 계속실행
// do {
//   number[2] = Math.floor(Math.random() * 10);
// } while (number[2] === number[1] || number[2] === number[0]);
// do {
//   number[3] = Math.floor(Math.random() * 10);
// } while (
//   number[3] === number[2] ||
//   number[3] === number[1] ||
//   number[3] === number[0]
// );

// console.log(number);

var arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var number = [];

for (var i = 0; i < 4; i++) {
  //네번 반복 for문
  var pick = Math.floor(Math.random() * arrNum.length);

  console.log("arrNum", arrNum, "number", number, "length", length);

  //arr.splice(시작위치, 자를 길이) 배열을 조각내는것.
  // 만약 pick 이 3이 나왔다면 3하나를 조각내서 반환. 자를길이를 2로 둔다면 3,4가 뽑힘.
  number[i] = arrNum.splice(pick, 1)[0];
  //배열로 반환되기 때문에 단 하나의 숫자가 나오므로 [0]을 붙여준다.
  console.log(number);
}

var count = 0;
var strike = 0;
var ball = 0;

while (count < 10) {
  //숫자를 입력받고 비교를 준비하는 부분
  var input = prompt("숫자를 입력하세요"); //숫자입력부분
  var inputArr = input.split(""); //prompt는 문자열로 받아지기때문에 문자열.spilt(구분자) 예를들어 '1234'.split('') == ['1','2','3','4']

  //스트라잌 볼 초기화
  strike = 0;
  ball = 0;
  count++; //시도횟수 증가

  //입력받은 부분 비교
  for (var j = 0; j < 4; j++) {
    for (var k = 0; k < 4; k++) {
      if (number[j] == inputArr[k]) {
        // == 을 쓴이유 number[j]는 숫자인데 inputArr[k]는  배열안에 있는 문자열일뿐이라서 타입이 같지 않으니
        if (j === k) {
          strike++;
        } else {
          ball++;
        }
        break;
      }
    }
  }

  //결과를 표시하는 부분
  if (strike === 4) {
    console.log("홈런");
    break;
  } else if (count >= 10) {
    console.error("시도횟수 초과");
  } else {
    console.info(inputArr.join("") + ":" + strike + "스트라이크" + ball + "볼");
  }
}
