$(document).ready(function() {
  getQuote();

  $("#newQuote").on("click", function() {
    $("body").css("background-color", randomColor);
    getQuote();
  });

  $("#tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + quote);
  });

  function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  function getQuote() {
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?", function(a) {
      $("#content").html("<i class='fa fa-quote-left'></i>" + a[0].content + "<i class='fa fa-quote-right'></i>" + "<p>- " + a[0].title + "</p>");
      quote = $("#content").text();
    });
  }
});
