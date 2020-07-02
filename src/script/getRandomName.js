const FIRST_NAME = ['brave', 'witty', 'ingenious', 'smart']
const LAST_NAME = ['seaweed', 'dolphin', 'seals']

const getRandomItemFromArray = arr => arr[Math.floor((Math.random() * arr.length))]

export default () => {
  if (Math.random() > 0.5) {
    return getRandomItemFromArray(LAST_NAME)
  }
  return [getRandomItemFromArray(FIRST_NAME), getRandomItemFromArray(LAST_NAME)]
}
