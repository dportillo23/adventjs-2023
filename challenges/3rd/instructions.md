In Santa's workshop, <strong style="color: #faca15">a mischievous elf</strong> has been playing around with the gift production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to <strong style="color: #faca15">write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain</strong>. If there is no difference between the sequences, return an empty string.

```js
const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
```
Please, keep in mind:

<ul>
  <li style="color: #faca15">There will always be one different step or none.</li>
  <li style="color: #faca15">The modification can occur anywhere in the string.</li>
  <li style="color: #faca15">The original steps could be empty</li>
</ul>