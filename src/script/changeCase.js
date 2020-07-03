import cases from './cases'
// TestHah
const fns = {
  toUpperCase (data) {
    if (Array.isArray(data)) return data.join('').toUpperCase()
    return data.toUpperCase()
  },
  toLowerCase (data) {
    if (Array.isArray(data)) return data.join('').toLowerCase()
    return data.toLowerCase()
  },
  toLowerFirstCase (data) {
    const lowerFirstCase = str => str.replace(str[0], str[0].toLowerCase())
    if (Array.isArray(data)) return lowerFirstCase(data.join(''))
    return lowerFirstCase(data)
  },
  toUpperFirstCase (data) {
    const upperFirstCase = str => str.replace(str[0], str[0].toUpperCase())
    if (Array.isArray(data)) return upperFirstCase(data.join(''))
    return upperFirstCase(data)
  },
  toPascalCase (data) {
    const upperFirstCase = str => str.replace(str[0], str[0].toUpperCase())
    if (Array.isArray(data)) {
      let res = ''
      data.forEach(str => {
        res += upperFirstCase(str)
      })
      return res
    }
    return upperFirstCase(data)
  },
  toConstantCase (data) {
    if (Array.isArray(data)) return data.join('_').toUpperCase()
    return data.toUpperCase()
  },
  toDotCase (data) {
    if (Array.isArray(data)) return data.join('.').toLowerCase()
    return data.toLowerCase()
  },
  toKebabCase (data) {
    if (Array.isArray(data)) return data.join('-').toLowerCase()
    return data.toLowerCase()
  },
  toPathCase (data) {
    if (Array.isArray(data)) return data.join('/').toLowerCase()
    return data.toLowerCase()
  },
  toSentenceCase (data) {
    if (Array.isArray(data)) {
      let res = ''
      data.forEach((i, idx) => {
        if (idx) {
          res += ' ' + i
        } else {
          res += fns.toUpperFirstCase(i)
        }
      })
      return res
    }
    return fns.toUpperFirstCase(data)
  },
  toSnakeCase (data) {
    if (Array.isArray(data)) return data.join('_').toLowerCase()
    return data.toLowerCase()
  },
  toTitleCase (data) {
    if (Array.isArray(data)) {
      let res = ''
      data.forEach((i, idx) => {
        if (idx) {
          res += ' ' + fns.toUpperFirstCase(i)
        } else {
          res += fns.toUpperFirstCase(i)
        }
      })
      return res
    }
    return fns.toUpperFirstCase(data)
  },
  toCamelCase (data) {
    if (Array.isArray(data)) {
      let res = ''
      data.forEach((str, idx) => {
        if (idx) {
          res += fns.toUpperFirstCase(str)
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
    mapArray.push([i, fns[`to${fns.toUpperFirstCase(i)}Case`]])
  })
  const methods = new Map(mapArray)
  const fn = methods.get(type)
  return fn && fn(data)
}
