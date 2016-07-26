//JS 

//alert("Welcome !! Voici mon quizz !");

//console.log("hey");

//faire en sorte que mon bouton "next" affiche ma 2ème question mais aussi cache la 1ère
//background-color : red; = mauvais réponse & background-color : green; = bonne réponse

$(document).ready(function() {
    $("#Question2, #Question3, #Question4, #Question5, #Question6, #Question7, #Question8, #Question9, #Question10").hide();
});
$(document).ready(function(){
    $(".buttonext").on('click', function() {
        $("#Question2").show(1000) && $("#Question1").hide();
    })
    $('.buttonprev').click( function() {
        $("#Question1").show() && $("#Question2").hide();
    })
    
});