const resetButton = document.getElementById('reset-button');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

resetButton.addEventListener('click', () => {
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
});