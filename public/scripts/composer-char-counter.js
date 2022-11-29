$(document).ready(function() {
  console.log("this is:", this);
  // --- character counter function ---
  $("#tweet-text").on("input", function() {
    const text = $(this).val();
    const charLength = text.length;
    const remainingChar = 140 - charLength;
    $(".counter").text(remainingChar);
    if (remainingChar < 0) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }

  });
});