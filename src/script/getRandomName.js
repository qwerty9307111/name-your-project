import FIRST_NAME from './adjectives'
import LAST_NAME from './name'

const getRandomItemFromArray = arr => arr[Math.floor((Math.random() * arr.length))]

export default () => {
  if (Math.random() > 0.3) {
    return getRandomItemFromArray(LAST_NAME)
  }
  return [getRandomItemFromArray(FIRST_NAME), getRandomItemFromArray(LAST_NAME)]
}
