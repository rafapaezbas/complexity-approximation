const test = require('brittle')
const aproximateComplexity = require('./index.js')

test('constant function', async (t) => {
  const f = (e) => new Promise((resolve) => setTimeout(resolve, 10))
  const args = [...Array(1000).keys()].map(e => [e])
  console.log(await aproximateComplexity(f, args))
})

test('log function', async (t) => {
  const log = (x, y) => Math.log(y) / Math.log(x)
  const f = (e) => new Promise((resolve) => setTimeout(resolve, log(2, e)))
  const args = [...Array(1000).keys()].map(e => [e])
  console.log(await aproximateComplexity(f, args))
})

test('lineal function', async (t) => {
  const f = (e) => new Promise((resolve) => setTimeout(resolve, 1 * e))
  const args = [...Array(1000).keys()].map(e => [e])
  console.log(await aproximateComplexity(f, args))
})

test('squared function', async (t) => {
  const f = (e) => new Promise((resolve) => setTimeout(resolve, Math.pow(e, 2)))
  const args = [...Array(30).keys()].map(e => [e])
  console.log(await aproximateComplexity(f, args))
})

test('cubic function', async (t) => {
  const f = (e) => new Promise((resolve) => setTimeout(resolve, Math.pow(e, 3)))
  const args = [...Array(30).keys()].map(e => [e])
  console.log(await aproximateComplexity(f, args))
})
