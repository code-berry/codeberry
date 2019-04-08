$(document).ready(() => {
	$('#nav-home').addClass('active');
});

// function expression for icoChanger
function icoChanger(elem, ico) {
	// i don't know why i saved my filenames so silly
	let before = "url('../images/" + ico + "-ico1.png')";
	let after = "url('../images/" + ico + "-ico.png')";
	// but it works hehe
	$(elem).mouseenter(() => {
		// ok this should all be very self-explanatory
		$(elem).css('background-image', after);
		$(elem).mouseout(() => {
			$(elem).css('background-image', before);
		});
	});
}

// call these bad boys into play
icoChanger('#fb', 'fb');
icoChanger('#ig', 'ig');
icoChanger('#gh', 'gh');
icoChanger('#li', 'li');

// let's get it boys, cabs are here
AOS.init();