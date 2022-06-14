var obTimeOut;

let objectArray = new Array();
objectArray[1] = "url(./startbootstrap-freelancer-gh-pages/assets/img/first.JPG)";
objectArray[2] = "url(./startbootstrap-freelancer-gh-pages/assets/img/second.JPG)";
objectArray[3] = "url(./startbootstrap-freelancer-gh-pages/assets/img/third.JPG)";
objectArray[4] = "url(./startbootstrap-freelancer-gh-pages/assets/img/fourth.JPG)";

let nObjectCnt = 0;
function ShowDefaultRotate() {
    nObjectCnt++;	
    if (nObjectCnt == objectArray.length ) nObjectCnt=1; // 배열의 갯수 이내일때만 실행	
        document.getElementById("image-box").style.backgroundImage = objectArray[nObjectCnt];
        obTimeOut = setTimeout("ShowDefaultRotate()",3000);  // 1초후에 자기자신을 호출 
}
function startAnimation(){
    obTimeOut = window.setTimeout(ShowDefaultRotate,1000); // 윈도우 로드 후 0.1초 후에 반복함수를 호출합니다.} window.onload = startAnimation; // 윈도우 로드시 이미지 변환함수 실행
}

window.onload = startAnimation;