let inputEmail = document.querySelector('input');
let form = document.querySelector('form');
let button = document.querySelector('button');
let checkBox = document.querySelector('input[value="check"]');
let terms = document.querySelector('.checkbox');
let errorElement = document.querySelector('.errors');
let success = document.querySelector('.success');
let MainBodyText = document.querySelector('.main_body_text');
let MainBodyTitle = document.querySelector('.main_body_title');
form.addEventListener('submit', function (e) {
  // Save all messages in array
  let messages = [];
  // Empty input validation
  if (inputEmail.value === '' || inputEmail.value == null) {
    messages.push('Email address is required');
  }
  // Checkbox validation
  if (checkBox.checked == false) {
    messages.push('You must accept the terms and conditions');
  }
  // Colombia emails validation
  if (inputEmail.value.endsWith('co') == true) {
    messages.push('We are not accepting subscriptions from Colombia emails');
  }
  // Spawn error messages if there is
  if (messages.length > 0) {
    e.preventDefault();
    button.disabled;
    errorElement.innerText = messages.join('. ');
  }
  // Create success page if there is no errors
  if (messages.length == 0) {
    e.preventDefault();
    errorElement.style.display = 'none';
    form.style.display = 'none';
    terms.style.display = 'none';
    success.style.display = 'initial';
    success.style.marginBottom = '30px';
    success.style.marginTop = '30px';
    MainBodyTitle.innerText = 'Thanks for subscribing!';
    MainBodyText.innerText = 'You have successfully subscribed to our email listing. Check your email for the discount code.';
    MainBodyText.style.marginBottom = '20px';
  }


});