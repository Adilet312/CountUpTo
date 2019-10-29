$(document).ready(function() {
  $("form#countID").submit(function(event) {
    event.preventDefault();

    var number1 = parseInt($("#countBy").val());
    var number2 = parseInt($("#countTo").val());
    if (!number1 || !number2){
      alert ("Enter an Integer");
    }
    if (number1<0 || number2<0){
      alert ("Enter a positive Integer");
    }
    if (number1<number2){
      alert ("Enter a smaller Integer");
    }
    var newArray = [];

    for (var index=number2; index<=number1; index+=number2){
      newArray.push(index);

    }

    $("#result").text(newArray);
  });
});
