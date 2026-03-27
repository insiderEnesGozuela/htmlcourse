const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// Valid formats:
// 5555555555
// 555-555-5555
// (555)555-5555
// 1 555-555-5555
// 1 (555) 555-5555
// 1(555)555-5555
// 1 555 555 5555
const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

function isValidPhone(number) {
  return phoneRegex.test(number);
}

function checkPhone() {
  const value = userInput.value.trim();

  if (value === '') {
    alert('Please provide a phone number');
    return;
  }

  const valid = isValidPhone(value);
  const item = document.createElement('p');
  item.classList.add('result-item', valid ? 'valid' : 'invalid');
  item.textContent = valid
    ? `Valid US number: ${value}`
    : `Invalid US number: ${value}`;

  resultsDiv.appendChild(item);
}

function clearResults() {
  resultsDiv.innerHTML = '';
}

checkBtn.addEventListener('click', checkPhone);
clearBtn.addEventListener('click', clearResults);

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkPhone();
});
