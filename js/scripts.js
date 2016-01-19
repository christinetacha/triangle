var triangle = function(a, b, c) {

  if ((a + b) <= c || (b + c) <= a || (a + c) <= b) {
  return false;
  } else if (a && b === c) {
   return "equilateral";
  } else if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
   return "isosceles";
  } else if ((a !== b) && (b !== c) && (a !== c)) {
  return "scalene";
  }
};

$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
    var a = parseInt($("input#num1").val());
    var b = parseInt($("input#num2").val());
    var c = parseInt($("input#num3").val());
    var result = triangle(a, b, c);


    if (!result) {
      $("#type").hide();
      $("#not").text("not");
    } else {
      $("#not").text("");
      $("#type").text(result);
    }

    $("#result").show();
    event.preventDefault();

  });
});
