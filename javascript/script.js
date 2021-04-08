const aboutMeDiv = $('#about-me');
const aboutMeLinks = $('.about-link');
const portfolioDiv = $('#portfolio');
const portfolioLinks = $('.portfolio-link');
const contactDiv = $('#contact');
const contactLinks = $('.contact-link');
const dropdown = $('#navbarDropdownMenuLink');
const title = $('title');

aboutMeLinks.on('click', function (event) {
	event.preventDefault();
	portfolioDiv.css('display', 'none');
	contactDiv.css('display', 'none');
	aboutMeDiv.css('display', 'block');
	portfolioLinks[0].classList.remove('active');
	contactLinks[0].classList.remove('active');
	aboutMeLinks[0].classList.add('active');
	portfolioLinks[1].classList.remove('disabled');
	contactLinks[1].classList.remove('disabled');
	aboutMeLinks[1].classList.add('disabled');
	dropdown.text('About Me');
});
portfolioLinks.on('click', function (event) {
	event.preventDefault();
	aboutMeDiv.css('display', 'none');
	contactDiv.css('display', 'none');
	portfolioDiv.css('display', 'block');
	aboutMeLinks[0].classList.remove('active');
	contactLinks[0].classList.remove('active');
	portfolioLinks[0].classList.add('active');
	aboutMeLinks[1].classList.remove('disabled');
	contactLinks[1].classList.remove('disabled');
	portfolioLinks[1].classList.add('disabled');
	dropdown.text('Portfolio');
});
contactLinks.on('click', function (event) {
	aboutMeDiv.css('display', 'none');
	portfolioDiv.css('display', 'none');
	contactDiv.css('display', 'block');
	aboutMeLinks[0].classList.remove('active');
	portfolioLinks[0].classList.remove('active');
	contactLinks[0].classList.add('active');
	aboutMeLinks[1].classList.remove('disabled');
	portfolioLinks[1].classList.remove('disabled');
	contactLinks[1].classList.add('disabled');
	dropdown.text('Contact');
});
