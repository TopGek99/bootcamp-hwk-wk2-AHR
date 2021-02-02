var aboutMeDiv = $("#about-me");
var aboutMeLink = $("#about-link");
var portfolioDiv = $("#portfolio");
var portfolioLink = $("#portfolio-link");
var contactDiv = $("#contact");
var contactLink = $("#contact-link");
var links = $(".nav-link");

links.on("click", function(event) {
    event.preventDefault();
    if ($(this).attr("id") == "about-link") {
        portfolioDiv.css("display","none");
        contactDiv.css("display","none");
        aboutMeDiv.css("display","block");
        portfolioLink.removeClass("active");
        contactLink.removeClass("active");
        aboutMeLink.addClass("active");
    } else if ($(this).attr("id") == "portfolio-link") {
        aboutMeDiv.css("display","none");
        contactDiv.css("display","none");
        portfolioDiv.css("display","block");
        aboutMeLink.removeClass("active");
        contactLink.removeClass("active");
        portfolioLink.addClass("active");
    } else if ($(this).attr("id") == "contact-link") {
        aboutMeDiv.css("display","none");
        portfolioDiv.css("display","none");
        contactDiv.css("display","block");
        aboutMeLink.removeClass("active");
        portfolioLink.removeClass("active");
        contactLink.addClass("active");
    }
});

