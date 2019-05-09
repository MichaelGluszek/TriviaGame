$(function() {
  
$("#startBtn").on("click", stopwatch.start);
$(".option").on("click", stopwatch.correctCount);
$("#submitBtn").on("click", stopwatch.stop);
$("#resetBtn").on("click", stopwatch.reset);
});

var intervalId;
var clockRunning = false;
var correctAnswers = 0;

var stopwatch = {

  time: 60,

  correctCount: function () {

    if (clockRunning) {
      var selection = $(this).val().trim();
      if (selection === "true" && correctAnswers < 9) {
        correctAnswers++
      }

      else if (correctAnswers > 7) {
        stopwatch.stop();
      }
    }

    else if (!clockRunning) {
      event.preventDefault();
    }
  },

  reset: function () {

    stopwatch.stop();
    stopwatch.time = 60;
    correctAnswers = 0;
    $("#timer").text("60");
    $("input[type='radio']").prop("checked", false);
  },

  start: function () {
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
    }
  },

  stop: function () {
    clearInterval(intervalId);
    clockRunning = false;

    $("#timer").html("Score:" + correctAnswers + "/9");
    $("h2").html("");
  },

  count: function () {

    if (stopwatch.time > 0) {
      stopwatch.time--;
      var converted = stopwatch.timeConverter(stopwatch.time);

      $("#timer").text(converted);
    }


    else {
      stopwatch.stop();
    }
  },


  timeConverter: function (t) {

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




  }
};