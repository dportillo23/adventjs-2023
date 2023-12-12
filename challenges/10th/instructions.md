They are turning on the <strong style="color: #faca15">Christmas lights</strong> 🎄 in the city and, as every year, they have to be fixed!

What an idea Sam Elfman has had! He wants to offer a service that creates a <strong style="color: #faca15">customized Christmas tree</strong> 🎄 in a matter of seconds.

To create it, we are given a <strong style="color: #faca15">string to form the tree</strong> and a <strong style="color: #faca15">number that indicates its height</strong>.

Each character of the string represents an ornament of the tree, and we use them <strong style="color: #faca15">cyclically</strong> until we reach the indicated height. At <strong style="color: #faca15">least, they will always pass us one</strong>.

We must return a multiline <strong style="color: #faca15">string</strong> with the Christmas tree made with the ornaments, the indicated height <strong style="color: #faca15">plus a final line with the trunk formed by the character `|`</strong> in the center and, finally, a newline `\n`.

For example, if we receive the string "123" and the number 4 as height, we would have to build this tree:

```
   1
  2 3
 1 2 3
1 2 3 1
   |
```
If we receive the string `*@o` and the number 3, the tree we should return is:

```
  *
 @ o
* @ o
  |
```
Notes:

<ul>
  <li style="color: #faca15">The tree should always be centered, for that reason add blank spaces to the left of each line.</li>
  <li style="color: #faca15">Create spaces only to the left of each line of the tree. Do not leave blank spaces to the right.</li>
  <li style="color: #faca15">The ornaments have a white space between them for separation.</li>
</ul>
