$(document).ready(function() {
  $("#newQuote").on("click", function() {
    $("body").css("background-color", randomColor);
  });

  function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  function getQuote() {

  }
});
