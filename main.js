let menuIcon = document.querySelector('.menu-icon');
let cancelIcon = document.querySelector('.cancel-icon');
let headerLinks = document.querySelector('.header-links');

menuIcon.addEventListener('click', function () {
  headerLinks.style.display = 'block';
  headerLinks.style.right = '0';
});

cancelIcon.addEventListener('click', function () {
  headerLinks.style.right = '-100vh';
  headerLinks.style.display = 'none';
});
let themeInput = document.getElementById('theme');
const root = document.documentElement;
const primaryThemeColor = getComputedStyle(root).getPropertyValue('--primary-theme-color');
themeInput.value = primaryThemeColor;

themeInput.addEventListener('change', function () {
  const color = themeInput.value;
  document.documentElement.style.setProperty('--primary-theme-color', color);
});
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Select the form element by its tag name
  let contactForm = document.querySelector('form');

  // Add an event listener for the form submission
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Display an alert notification
    alert('Form submitted successfully!');

    // You can add further logic here, such as clearing the form fields
    // and other actions you want to take after successful submission.
  });
});
