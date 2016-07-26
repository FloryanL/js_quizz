//JS 

//alert("Welcome !! Voici mon quizz !");

//console.log("hey");

//faire en sorte que mon bouton "next" affiche ma 2ème question mais aussi cache la 1ère
//background-color : red; = mauvais réponse & background-color : green; = bonne réponse

$(document).ready(function() {
    $("#Question2, #Question3, #Question4, #Question5, #Question6, #Question7, #Question8, #Question9, #Question10").hide();

    //pourrait être optimisé je pense
    
    $(".buttonext").on('click', function() {
        $("#Question2").fadeIn(1000) && $("#Question1").hide();
    })
    $(".buttonprev").click( function() {
        $("#Question1").fadeIn() && $("#Question2").hide();
    })
    $(".buttonext").on('click', function() {
        $("#Question3").fadeIn(1000) && $("#Question2").hide();
    })
    $(".buttonprev").click( function() {
        $("#Question2").fadeIn() && $("#Question3").hide();
    })
    $(".buttonext").on('click', function() {
        $("#Question4").fadeIn(1000) && $("#Question3").hide();
    })
    $(".buttonprev").click( function() {
        $("#Question3").fadeIn() && $("#Question4").hide();
    })
    $(".buttonext").on('click', function() {
        $("#Question5").fadeIn(1000) && $("#Question4").hide();
    })
    $(".buttonprev").click( function() {
        $("#Question4").fadeIn() && $("#Question5").hide();
    })
    $(".buttonext").on('click', function() {
        $("#Question6").fadeIn(1000) && $("#Question5").hide();
    })
    $(".buttonprev").click( function() {
        $("#Question5").fadeIn() && $("#Question6").hide();
    })
    $(".buttonext").on('click', function() {
        $("#Question7").fadeIn(1000) && $("#Question6").hide();
    })
    $(".buttonprev").click( function() {
        $("#Question6").fadeIn() && $("#Question7").hide();
    })
    $(".buttonext").on('click', function() {
        $("#Question8").fadeIn(1000) && $("#Question7").hide();
    })
    $(".buttonprev").click( function() {
        $("#Question7").fadeIn() && $("#Question8").hide();
    })
    $(".buttonext").on('click', function() {
        $("#Question9").fadeIn(1000) && $("#Question8").hide();
    })
    $(".buttonprev").click( function() {
        $("#Question8").fadeIn() && $("#Question9").hide();
    })
    $(".buttonext").on('click', function() {
        $("#Question10").fadeIn(1000) && $("#Question9").hide();
    })
    $(".buttonprev").click( function() {
        $("#Question9").fadeIn() && $("#Question10").hide();
    })

    //reponse correct
    $("p.reponse").css(".reponsetrue");
});
    
    

