//JS 

//alert("Welcome !! Voici mon quizz !");

//console.log("hey");

//faire en sorte que mon bouton "next" affiche ma 2ème question mais aussi cache la 1ère

$(document).ready(function() {
    $("#Question").hide();
});
$(document).ready(function(){
    $(".buttonext").on('click', function() {
        $("#Question").show();
    })
});