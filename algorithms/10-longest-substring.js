// Longest Substring Without Repeating Characters
function longestSubstring(s) {
  let charIndex = {};
  let maxLength = 0;
  let maxStart = 0;
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    
    if (charIndex[char] !== undefined && charIndex[char] >= maxStart) {
      maxStart = charIndex[char] + 1;
    }
    
    charIndex[char] = i;
    maxLength = Math.max(maxLength, i - maxStart + 1);
  }
  
  return s.substring(maxStart, maxStart + maxLength);
}

// Get length only
function longestSubstringLength(s) {
  return longestSubstring(s).length;
}

// Test cases
console.log(longestSubstring('abcabcbb')); // 'abc'
console.log(longestSubstring('bbbbb')); // 'b'
console.log(longestSubstring('pwwkew')); // 'wke'
console.log(longestSubstringLength('au')); // 2
console.log(longestSubstring('')); // ''

module.exports = { longestSubstring, longestSubstringLength };