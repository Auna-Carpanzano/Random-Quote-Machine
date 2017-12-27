$(document).ready(function() {
  getQuote();

  $("#newQuote").on("click", function() {
    $("body").css("background-color", randomColor);
    getQuote();
  });

  function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  function getQuote() {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(a) {
      $("#content").html(a[0].content + "<p>- " + a[0].title + "</p>");
      quote = $("#content").text();
    });
  }
});
