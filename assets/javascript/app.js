
  $("#startBtn").on("click", countDown.start);
  $(".option").on("click", countDown.correctCount);

  $("#submitBtn").on("click", countDown.stop);
  $("#resetBtn").on("click", countDown.reset);

  let period;
  let countDown = false;
  let corrAns = 0;

    let countDown ={

    time: 60,

    
// 
    }
  

function timeConverter(t) {

let minutes = Math.floor(t / 60);
let seconds = t - (minutes * 60);

if (seconds < 10) {
  seconds = "0" + seconds;
}

 if (minutes === 0) {
   minutes = "00";
}

else if (minutes < 10) {
  minutes = "0" + minutes;
}

return minutes + ":" + seconds




};