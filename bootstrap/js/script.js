//JS 

//alert("Welcome !! Voici mon quizz !");

//console.log("hey");

//faire en sorte que mon bouton "next" affiche ma 2ème question mais aussi cache la 1ère
//background-color : red; = mauvais réponse & background-color : green; = bonne réponse

$(document).ready(function() {
    $("#Question2, #Question3, #Question4, #Question5, #Question6, #Question7, #Question8, #Question9, #Question10").hide();

    $(".buttonext").on('click', function() {
        $("#Question2").show(1000) && $("#Question1").hide();
    })
    $(".buttonprev").click( function() {
        $("#Question1").show() && $("#Question2").hide();
    })
    $(".buttonext1").on('click', function() {
        $("#Question3").show(1000) && $("#Question2").hide();
    })
    $(".buttonprev1").click( function() {
        $("#Question2").show() && $("#Question3").hide();
    })
    $(".buttonext2").on('click', function() {
        $("#Question4").show(1000) && $("#Question3").hide();
    })
    $(".buttonprev2").click( function() {
        $("#Question3").show() && $("#Question4").hide();
    })
    $(".buttonext3").on('click', function() {
        $("#Question5").show(1000) && $("#Question4").hide();
    })
    $(".buttonprev3").click( function() {
        $("#Question4").show() && $("#Question5").hide();
    })
    $(".buttonext4").on('click', function() {
        $("#Question6").show(1000) && $("#Question5").hide();
    })
    $(".buttonprev4").click( function() {
        $("#Question5").show() && $("#Question6").hide();
    })
    $(".buttonext5").on('click', function() {
        $("#Question7").show(1000) && $("#Question6").hide();
    })
    $(".buttonprev5").click( function() {
        $("#Question6").show() && $("#Question7").hide();
    })
    $(".buttonext6").on('click', function() {
        $("#Question8").show(1000) && $("#Question7").hide();
    })
    $(".buttonprev6").click( function() {
        $("#Question7").show() && $("#Question8").hide();
    })
    $(".buttonext7").on('click', function() {
        $("#Question9").show(1000) && $("#Question8").hide();
    })
    $(".buttonprev7").click( function() {
        $("#Question8").show() && $("#Question9").hide();
    })
    $(".buttonext8").on('click', function() {
        $("#Question10").show(1000) && $("#Question9").hide();
    })
    $(".buttonprev8").click( function() {
        $("#Question9").show() && $("#Question10").hide();
    })
});
    
    

