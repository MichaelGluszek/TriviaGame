$(function () {

  $("startBtn").on("click", countDown.start);
  $(".option").on("click", countDown.correctCount);

  $("#submitBtn").on("click", countDown.stop);
  $("#resetBtn").on("click", countDown.reset);


});