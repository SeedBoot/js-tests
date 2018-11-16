# js-tests
Just clone or fork, and `npm i`!


## Solutions

#### No peeking!

These may not be the best solutions. I'm welcome to better/ more performant ones :D

It would be good to have a list of different code styles, and see how they each evolve as the test grow.

### grid.test
<details>
  
  <summary>findPosition()</summary>
  
  ```es6
  const findY = grid => grid.findIndex(row => row.includes(1))

  const findX = grid => grid[findY(grid)].indexOf(1);
  
  const findPosition = grid => ({
    x: findX(grid),
    y: findY(grid)
  });
  ```
  
</details>
