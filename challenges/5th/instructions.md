Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole road. The road is represented by a string of characters, where:

<ul>
  <li style="color: #faca15"><code>.</code> = Road</li>
  <li style="color: #faca15"><code>S</code> = Santa's Sled</li>
  <li style="color: #faca15"><code>*</code> = Open barrier</li>
  <li style="color: #faca15"><code>|</code> = Closed barrier</li>
</ul>

Example of a road: `S...|....|.....`

Each unit of time, <strong style="color: #faca15">the sled moves one position to the right</strong>. If it encounters a closed barrier, it stops until the barrier opens. If it is open, it goes through directly.

<strong style="color: #faca15">All barriers start closed</strong>, but after 5 units of time, they all open <strong style="color: #faca15">forever</strong>.

<strong style="color: #faca15">Create a function that simulates the sled's movement</strong> for a given time and <strong style="color: #faca15">returns an array</strong> of strings representing the state of the road at each unit of time:

```js
const road = 'S..|...|..'
const time = 10 // units of time
const result = cyberReindeer(road, time)

/* -> result:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]
*/
```

The result is an <strong style="color: #faca15">array where each element shows the road at each unit of time</strong>.

Take into account that <strong style="color: #faca15">if the sled is in the same position as a barrier</strong>, then it takes its place in the array.

The elves were <strong style="color: #faca15">inspired by this <a style="color: #faca15" href="https://www.codewars.com/kata/5d0ae91acac0a50232e8a547/javascript">Code Wars challenge</a></strong>.
