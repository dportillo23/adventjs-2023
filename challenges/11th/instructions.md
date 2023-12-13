In Santa's workshop, the elves love puzzles 🧠. This year, they have created a special one: a challenge to form a Christmas palindrome.

<strong style="color: #faca15">A palindrome is a word that reads the same forwards and backwards</strong>. The elves want to know if it is possible to form a palindrome by making, at most, one exchange of letters.

Create a function getIndexsForPalindrome that receives a string and returns:

<ul>
  <li style="color: #faca15">The tree should always be centered, for that reason add blank spaces to the left of each line.</li>
  <li style="color: #faca15">Create spaces only to the left of each line of the tree. Do not leave blank spaces to the right.</li>
  <li style="color: #faca15">The ornaments have a white space between them for separation.</li>
</ul>

For example:

```js
getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null
```
If the palindrome can be formed with different swaps, <strong style="color: #faca15">always return the first one found</strong>.
