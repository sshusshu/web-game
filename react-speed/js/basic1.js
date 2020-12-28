const $screen = document.querySelector("#screen");
const $result = document.querySelector("#result");
let startTime, endTime;
let records = [];
let timeoutId;

$screen.addEventListener("click", function () {
  if ($screen.classList.contains("waiting")) {
    //대기화면
    $screen.classList.remove("waiting");
    $screen.classList.add("ready");
    $screen.textContent = "초록색이 되면 클릭하세요";

    const ranSec = Math.random() * 2000 + 1000;
    timeoutId = setTimeout(function () {
      $screen.classList.remove("ready");
      $screen.classList.add("now");
      $screen.textContent = "클릭하세요!";
      startTime = new Date();
    }, ranSec);
  } else if ($screen.classList.contains("ready")) {
    //준비화면
    clearTimeout(timeoutId);
    $screen.classList.remove("ready");
    $screen.classList.add("waiting");
    $screen.textContent = "성급하시군요!";
  } else if ($screen.classList.contains("now")) {
    //클릭화면 (반응속도계산)
    endTime = new Date();
    let reactSpeed = endTime - startTime;
    records.push(reactSpeed);
    const averageSpeed = records.reduce((acc, i) => acc + i) / records.length;
    const fastestOrder = records.sort((a, b) => a - b).slice(0, 5);
    $result.textContent = `현재 ${reactSpeed}ms 평균${averageSpeed}ms  가장빠른순서 :${fastestOrder}`;
    startTime = null;
    endTime = null;
    $screen.classList.remove("now");
    $screen.classList.add("waiting");
    $screen.textContent = "클릭 후 시작하세요";
  }
});
