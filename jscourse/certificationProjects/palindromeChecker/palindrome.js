const input = document.getElementById('text-input');
const btn = document.getElementById('check-btn');
const result = document.getElementById('result');

function checkPalindrome() {
  const value = input.value;

  if (value === '') {
    alert('Please input a value');
    return;
  }

  const cleaned = value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  const isPalindrome = cleaned === reversed;

  result.style.display = 'block';
  result.textContent = isPalindrome
    ? `${value} is a palindrome`
    : `${value} is not a palindrome`;

  result.className = isPalindrome ? 'palindrome' : 'not-palindrome';
}

btn.addEventListener('click', checkPalindrome);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkPalindrome();
});
