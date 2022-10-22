gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

let smoother = ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 0.66,
    effects: true
});

$(document).ready(function() {

    $("#waste_smart_btn").click(function() {
        window.location.href = "casestudy.html";
    });

    $("#copy_btn").click(function() {
        navigator.clipboard.writeText("sean.dant@gmail.com");

        $("#myTooltip").addClass("showTooltip");
        setTimeout(function() {
            $("#myTooltip").removeClass("showTooltip");
        }, 2000);
    });

    gsap.from("#fab", {
        scrollTrigger: {
            trigger: ".heroImg",
            start: "bottom top",
            end: "+=200px",
            toggleActions: "play none none none",
            scrub: true,
        },
        opacity: 0,
        y: 200,
        duration: 1
    });

    gsap.from("#mobileOne", {
        scrollTrigger: {
            trigger: "#myWork",
            start: "top center",
            end: "+=400",
            toggleActions: "play none none none",
            scrub: true,
        },
        opacity: 0,
        x: "-100",
        y: "-50",
    });

    gsap.from("#mobileTwo", {
        scrollTrigger: {
            trigger: "#myWork",
            start: "top center",
            end: "+=400",
            toggleActions: "play none none none",
            scrub: true
        },
        opacity: 0,
        x: "100",
        y: "-50",
    });

    gsap.from("#desktopOne", {
        scrollTrigger: {
            trigger: "#myWork",
            start: "top center-=50px",
            end: "+=600",
            toggleActions: "play none none none",
            scrub: true
        },
        opacity: 0,
        y: 200,
    });

    gsap.from(".skillContainer", {
        scrollTrigger: {
            trigger: "#mySkills",
            start: "top 80%",
            end: "center center",
            toggleActions: "play none none none",
            scrub: true,
        },
        opacity: 0,
        y: 100,
        duration: 3
    });

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
        smoother.scrollTo("#mySkills", true, "center center");
    });

    $("#a_work").click(function() {
        $('html, body').animate({
            scrollTop: $("#myWork").offset().top,
            easing: "easin"
        }, 500);
    });

    $("#a_contact").click(function() {
        smoother.scrollTo("footer", true, "center center");
    });

    $("button").mouseenter(function() {
        gsap.to(this, {
            background: "linear-gradient(93.48deg, #4158D0 -13.71%, #C850C0 9.52%)",
            duration: 0.3
        });
    });
    $("button").mouseleave(function() {
        gsap.to(this, {
            background: "linear-gradient(89.25deg, #4158D0 1.29%, #C850C0 98.71%)",
            duration: 0.3
        });
    });

    $("button").mousedown(function() {
        gsap.to(this, {
            background: "linear-gradient(92.18deg, #4158D0 86.98%, #C850C0 115.21%)",
            boxShadow: "none",
            duration: 0.3
        });
    });
    $("button").mouseup(function() {
        gsap.to(this, {
            background: "linear-gradient(93.48deg, #4158D0 -13.71%, #C850C0 9.52%)",
            boxShadow: "0 2px 5px 0 hsla(304, 100%, 14%, 0.441)",
            duration: 0.3
        });
    });
});

