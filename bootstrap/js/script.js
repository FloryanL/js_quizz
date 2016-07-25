//JS 

//alert("Welcome !! Voici mon quizz !");

//console.log("hey");

//faire en sorte que mon bouton "next" affiche ma 2ème question mais aussi cache la 1ère
//background-color : red; = mauvais réponse & background-color : green; = bonne réponse

$(document).ready(function() {
    $("#Question, #Question2").hide();
});
$(document).ready(function(){
    $(".buttonext").on('click', function() {
        $("#Question").show();
    })
});