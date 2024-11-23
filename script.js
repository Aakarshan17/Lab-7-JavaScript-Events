// mouse
const mouseButton = document.getElementById('mouse-button');
const mouseMessage = document.getElementById('mouse-message');

mouseButton.addEventListener('mouseover', () => {
  mouseMessage.textContent = 'Mouse hovering the button!';
});

mouseButton.addEventListener('mouseout', () => {
  mouseMessage.textContent = 'Mouse has left the button.';
});

// keyboard
const keyboardInput = document.getElementById('keyboard-input');
const keyPressed = document.getElementById('key-pressed');

keyboardInput.addEventListener('keydown', (event) => {
  keyPressed.textContent = `Last key pressed: ${event.key}`;
});

// form
const myForm = document.getElementById('my-form');
const formMessage = document.getElementById('form-message');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Form submitted successfully!';
});

// Focus
const focusInput = document.getElementById('focus-input');
const focusMessage = document.getElementById('focus-message');

focusInput.addEventListener('focus', () => {
  focusMessage.textContent = 'Input has gained focus.';
});

focusInput.addEventListener('blur', () => {
  focusMessage.textContent = 'Input has lost focus.';
});

// Event Delegation
const buttonContainer = document.getElementById('button-container');
const delegationMessage = document.getElementById('delegation-message');

buttonContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const buttonText = event.target.textContent;
    delegationMessage.textContent = `You clicked ${buttonText}`;
  }
});
