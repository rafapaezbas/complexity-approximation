const baseLog = (x, y) => Math.log(y) / Math.log(x)

const compare = (a, b) => {
  const aNormalized = a.map(e => e / a[a.length - 1])
  const bNormalized = b.map(e => e / b[b.length - 1])
  const total = aNormalized.reduce((acc, val, i) => acc + val - bNormalized[i], 0)
  return Math.abs(total) / a.length
}

const aproximateComplexity = async (f, args) => {
  const sets = []
  const ref = [...Array(args.length).keys()] // 1,2,3...n (args.length)
  ref.shift()
  ref.push(ref.length)
  const set = (name, f) => ({ name, values: ref.map(f) })

  sets.push(set('constant', (e) => 1))
  sets.push(set('log', (e) => baseLog(2, e)))
  sets.push(set('n', (e) => e))
  sets.push(set('n²', (e) => Math.pow(e, 2)))
  sets.push(set('n³', (e) => Math.pow(e, 3)))
  sets.push(set('n⁵', (e) => Math.pow(e, 5)))

  const a = await Promise.all(args.map(async (e) => {
    const start = performance.now()
    await f(...e)
    return performance.now() - start
  }))

  return Promise.all(sets.map(async b => ({ name: b.name, value: await compare(a, b.values) })))
}

module.exports = aproximateComplexity
