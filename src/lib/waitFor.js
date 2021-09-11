
const waitFor = (timeInMs = 1000) => new Promise(resolve => {
  window.setTimeout(resolve, timeInMs)
})

export default waitFor
