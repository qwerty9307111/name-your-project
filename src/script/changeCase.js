import cases from './cases'
// testAah
const fns = {
  toUpperCase (data) {
    if (Array.isArray(data)) return data.join('').toUpperCase()
    return data.toUpperCase()
  },
  toLowerCase (data) {
    if (Array.isArray(data)) return data.join('').toLowerCase()
    return data.toLowerCase()
  },
  toCamelCase (data) {
    if (Array.isArray(data)) {
      let res = ''
      data.forEach((str, idx) => {
        if (idx) {
          res += str.replace(str[0], str[0].toUpperCase())
        } else {
          res += str
        }
      })
      return res
    }
    return data
  }
}

export default (data, type) => {
  const mapArray = []
  cases.forEach(i => {
    mapArray.push([i, fns[`to${i.replace(i[0], i[0].toUpperCase())}Case`]])
  })
  const methods = new Map(mapArray)
  const fn = methods.get(type)
  return fn && fn(data)
}
