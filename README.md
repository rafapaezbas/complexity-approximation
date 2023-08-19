# Time complexity approximation

Calculate time complexity approximation for a function. Returns an array of the approximation for 6 approximation, the lower the value, the closer the approximation.

```js

const f = (e) => new Promise((resolve) => setTimeout(resolve, 10)) // O(1) complexity
const args = [...Array(1000).keys()].map(e => [e])
console.log(await aproximateComplexity(f, args)) 

/*

{ name: 'constant', value: 0.06848684880222623 },
{ name: 'log', value: 0.21249479935745633 },
{ name: 'n', value: 0.5674868488022266 },
{ name: 'n²', value: 0.7339866819687262 },
{ name: 'n³', value: 0.8172365985519765 },
{ name: 'n⁵', value: 0.900486431718559 }

*/
```
