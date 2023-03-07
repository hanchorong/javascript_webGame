// var arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var arrPick = [];

// for (var i = 0; i < 4; i++) {
//   //0~9까지의 배열중 4번 반복하여 새로운 arrPick이라는 배열에 0~4자리에 4가지 숫자를 조각내서 반환.
//   var pickNum = Math.floor(Math.random() * arrNum.length);

//   // console.log("arrNum", arrNum, "arrPick", arrPick);

//   arrPick[i] = arrNum.splice(pickNum, 1)[0];
//   console.log(arrPick);
// }

// var count = 0;
// var strike = 0;
// var ball = 0;

// while (count < 10) {
//   //10번 반복해라
//   var input = prompt("숫자 네개를 입력하세요");
//   var inputArr = input.split("");

//   strike = 0;
//   ball = 0;
//   count++; //카운트는 증가 스트라잌 볼은 초기화

//   //입력받은 숫자와 랜덤 숫자 비교
//   for (var j = 0; j < 4; j++) {
//     for (var k = 0; k < 4; k++) {
//       // console.log(arrPick[j], inputArr[k]);
//       if (arrPick[j] == inputArr[k]) {
//         //랜덤숫자 네자리를 조회. 예) 랜덤배열[1,2,3,4]입력받은 배열 ['2','5','3','0']일때 arrPick[0] = 1, arrPick[1] = 2, arrPick[2] = 3 ...
//         if (j === k) {
//           strike++;
//         } else {
//           ball++;
//         }
//         break;
//       }
//     }
//   }
// }

//배열안의 숫자 네개를 뽑기
var arr = [0, 2, 3, 4, 5, 6, 7, 8, 9];
var pick = [];

for (var i = 0; i < 4; i++) {
  var random = Math.floor(Math.random() * arr.length);
  // pick[i] = random; //이렇게 하면 중복된 수가 뽑힐수있다.
  pick[i] = arr.splice(random, 1)[0];
  console.log("시작하자마자 자동으로 뽑히는 네가지 숫자", pick);
}

//prompt로 네가지 숫자 입력받기
var strike = 0;
var ball = 0;
var count = 0;

while (count <= 10) {
  var promptNum = prompt("네가지 숫자 입력해!");
  var promptResult = promptNum.split(""); //연달아 받은 숫자를 '' 이렇게 조각내라.

  console.log(promptResult);
  strike = 0;
  ball = 0;
  count++;
  for (var j = 0; j < 4; j++) {
    for (var k = 0; k < 4; k++) {
      if (pick[j] == promptResult[k]) {
        console.log("pick[j]", pick[j]);
        if (j === k) {
          console.log("j", j);
          strike++;
        } else {
          ball++;
        }
        break;
      }
    }
  }

  if (strike === 4) {
    console.log("홈런" + (count - 1) + "번만에 맞추셨습니다.");
  } else if (count > 10) {
    console.log("시도횟수초과");
  } else {
    console.log(
      promptResult.join("") + ": " + strike + "스트라이크 " + ball + "볼"
    );
  }
}
