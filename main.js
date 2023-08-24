let countDownDays = new Date("Dec 31, 2023 12:59:59").getTime();

// console.log(countDownDays);

let counter = setInterval(() => {
	// get date now
	let dayNow = new Date().getTime();
	// Thu Aug 24 2023 11:25:01 GMT+0100 (GMT+01:00)

	// find the date deffrence between date now and countdow date
	let dateDeffrence = countDownDays - dayNow;

	let daysLeft = Math.floor(dateDeffrence / (1000 * 60 * 60 * 24));
	let hoursLeft = Math.floor((dateDeffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
	let minutesLeft = Math.floor(((dateDeffrence % (1000 * 60 * 60)) / (1000 * 60)))
	let secondsLeft = Math.floor(((dateDeffrence % (1000 * 60)) / (1000)))

	document.querySelector('.time #days').innerHTML = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
	document.querySelector('.time #hours').innerHTML = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
	document.querySelector('.time #minutes').innerHTML = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
	document.querySelector('.time #seconds').innerHTML = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

	if (dateDeffrence < 0) {
		clearInterval(counter);

		document.querySelector('.time #days').innerHTML = "00";
		document.querySelector('.time #hours').innerHTML = "00";
		document.querySelector('.time #minutes').innerHTML = "00";
		document.querySelector('.time #seconds').innerHTML = "00";
	}
	// console.log(dateDeffrence);
}, 1000);
