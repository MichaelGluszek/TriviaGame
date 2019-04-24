$("document").ready(function () {

  $("#startBtn").on("click", countDown.start);
  $(".option").on("click", countDown.correctCount);

  $("#submitBtn").on("click", countDown.stop);
  $("#resetBtn").on("click", countDown.reset);

  let period;
  let countDown = false;
  let corrAns = 0;

    let countDown ={

    time: 50,

    correctCount: function() {
// 
    }
  }
});