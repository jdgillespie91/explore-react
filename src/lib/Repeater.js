function Repeater (callback) {
  const interval = 5000
  let currentTime, remainingTime, startTime, timer

  function wrappedCallback () {
    startTime = new Date()
    callback()
  }

  this.resume = function () {
    setTimeout(() => {
      wrappedCallback()
      timer = setInterval(wrappedCallback, interval)
    }, remainingTime)
  }

  this.pause = function () {
    currentTime = new Date()
    remainingTime = interval - (currentTime - startTime)
    clearTimeout(timer)
  }

  timer = setInterval(wrappedCallback, interval)
}

export default Repeater
