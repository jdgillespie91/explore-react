function Repeater (callback) {
  const interval = 5000
  let now, nextTick, lastTick, intervalTimer, timeoutTimer

  function wrappedCallback () {
    lastTick = new Date()
    callback()
  }

  this.start = function () {
    lastTick = new Date()
    intervalTimer = setInterval(wrappedCallback, interval)
  }

  this.resume = function () {
    timeoutTimer = setTimeout(() => {
      wrappedCallback()
      intervalTimer = setInterval(wrappedCallback, interval)
    }, nextTick)
  }

  this.pause = function () {
    now = new Date()
    nextTick = interval - (now - lastTick)
    clearTimeout(intervalTimer)
    clearTimeout(timeoutTimer)
  }
}

export default Repeater
