Santa is experimenting with new gift designs and <strong style="color: #faca15">he needs your help to visualize them in 3D</strong>.

Your task is to write a function that, given a size n (integer), <strong style="color: #faca15">generates a drawing of a 3D gift</strong> using ASCII characters.

The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:

```js
drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
```

Important: We have been told that <strong style="color: #faca15">there is always to leave a newline at the end of the drawing</strong>.
