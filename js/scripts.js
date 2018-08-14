$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();

    var userResponses = [];
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      userResponses.push(workTransportationMode);
      // $('#work-responses').append(workTransportationMode + "<br>");
    });
      for (var index = 0; index < userResponses.length; index+=1) {

      if (userResponses[index] === "bike" || userResponses[index] === "walk") {
        $("#work-responses").show();
      } else if (userResponses[index] === "skateboard" || userResponses[index] === "scooter" || userResponses[index] === "rollerblade") {
      $("#dream-responses").show();
      } else {
        $("#fun-responses").show();
      }
    }

    // if (userResponses === "bike") {
    //   alert("You're good. You love to use muscle power");
    // } else {
    //   alert("You like to use gas");
    // }

    // $("#fun-responses").show();
    // $("input:checkbox[name=fun-transportation]:checked").each(function(){
    //   var funTransportationMode = $(this).val();
    //   $('#fun-responses').append(funTransportationMode + "<br>");
    // });
    // $("#dream-responses").show();
    // $("input:checkbox[name=dream-transportation]:checked").each(function(){
    //   var dreamTransportationMode = $(this).val();
    //   $('#dream-responses').append(dreamTransportationMode + "<br>");
    // });
    $('#transportation_survey').hide();
  });
});
