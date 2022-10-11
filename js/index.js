$(document).ready(function() {
    $("button").click(function() {
        console.log("here");
    });

    $("#fab").click(function() {
        $("html, body").animate({
            scrollTop: 0,
            easing: "easin"
        }, 500);
    })

    $("#a_skills").click(function() {
        $('html, body').animate({
            scrollTop: $("#mySkills").offset().top,
            easing: "easin"
        }, 500);
    });

    $("#a_work").click(function() {
        $('html, body').animate({
            scrollTop: $("#myWork").offset().top,
            easing: "easin"
        }, 500);
    });
})