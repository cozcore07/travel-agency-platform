$(document).ready(function () {
  $("#searchBtn").click(function () {
    let destination = $("#destination").val();
    alert("Searching for: " + destination);
    // Add AJAX call to backend here
  });

  // Dummy reviews
  $("#reviewList").append("<p>“Amazing trip to Bali!” – Alice</p>");
  $("#reviewList").append("<p>“Smooth booking experience.” – Bob</p>");
});
