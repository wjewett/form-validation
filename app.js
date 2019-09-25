// Name validation requires a space for first and last name of at least 2 characters each
const nameField = document.getElementById('name');
nameField.addEventListener('input', function(event) {
	if (nameField.validity.patternMismatch) {
		nameField.setCustomValidity('Please enter a first and last name, separated by a space.');
	} else {
		nameField.setCustomValidity('');
	}
});

// Email validation requires characters, an at symbol (@), more characters, a period, and then 2 or more characters
const emailField = document.getElementById('email');
emailField.addEventListener('input', function(event) {
	if (emailField.validity.patternMismatch) {
		emailField.setCustomValidity('E-mail address should be in the form youremail@example.com');
	} else {
		emailField.setCustomValidity('');
	}
});

// Password validation requires at least 8 characters, a lowercase letter, uppercase letter, number, and special character.
const passwordField = document.getElementById('password');
passwordField.addEventListener('blur', (event) => {
	let validityMessage = '';
	let errors = [];
	if (passwordField.value.length < 8) {
		errors.push('Password must be at least 8 characters.');
	}
	let regexSpecial = /[`~!@#$%^&*+=?]/;
	if (!regexSpecial.test(passwordField.value)) {
		errors.push('Password must contain a special character.');
	}
	let regexLower = /[a-z]/;
	if (!regexLower.test(passwordField.value)) {
		errors.push('Password must contain a lowercase letter.');
	}
	let regexUpper = /[A-Z]/;
	if (!regexUpper.test(passwordField.value)) {
		errors.push('Password must contain an uppercase letter.');
	}
	let regexNumber = /[0-9]/;
	if (!regexNumber.test(passwordField.value)) {
		errors.push('Password must contain a number.');
	}
	if (errors.length > 0) {
		validityMessage = errors.join(' ');
	}
	passwordField.setCustomValidity(validityMessage);
});

// Username validation requires 6 to 20 characters, and only alphanumeric characters.
const usernameField = document.getElementById('username');
usernameField.addEventListener('blur', (event) => {
	let validityMessage = '';
	let errors = [];
	if (usernameField.value.length < 6 || usernameField.value.length > 20) {
		errors.push('Username must be 6-20 characters.');
	}
	let regexSpecial = /[`~!@#$%^&*+=?]/;
	if (regexSpecial.test(usernameField.value)) {
		errors.push('Username cannot contain special characters.');
	}
	if (errors.length > 0) {
		validityMessage = errors.join(' ');
	}
	usernameField.setCustomValidity(validityMessage);
});

// Phone validation must be at least 10 numbers long and may contain only numbers and dashes.
const phoneField = document.getElementById('phone');
phoneField.addEventListener('input', function(event) {
	if (phoneField.validity.patternMismatch) {
		phoneField.setCustomValidity('Phone numbers must be 10 numbers and may only contain numbers and dashes, such as 123-456-7890 or 0123456789.');
	} else {
		phoneField.setCustomValidity('');
	}
});

// Zip code validation
const zipcodeField = document.getElementById('zipcode');
zipcodeField.addEventListener('input', function(event) {
	if (zipcodeField.validity.patternMismatch) {
		zipcodeField.setCustomValidity('Zip codes must have 5 numbers, with the +4 code optional, such as 12345 or 12345-6789.');
	} else {
		zipcodeField.setCustomValidity('');
	}
});
