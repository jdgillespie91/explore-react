/* eslint-disable no-undef */
import Repeater from './Repeater'

jest.useFakeTimers()

describe('At the time of the first tick', () => {
  describe('the repeater', () => {
    it('should have called the callback if started', () => {
      const callback = jest.fn()
      const repeater = new Repeater(callback)

      repeater.start()
      jest.runOnlyPendingTimers()

      expect(callback).toHaveBeenCalled()
    })

    it('should not have called the callback if started then paused prior to this time', () => {
      const callback = jest.fn()
      const repeater = new Repeater(callback)

      repeater.start()
      repeater.pause()
      jest.runOnlyPendingTimers()

      expect(callback).not.toHaveBeenCalled()
    })

    it('should have called the callback exactly once if resumed multiple times prior to this time', () => {
      const callback = jest.fn()
      const repeater = new Repeater(callback)

      repeater.start()
      repeater.pause()
      repeater.resume()
      repeater.pause()
      repeater.resume()
      jest.runOnlyPendingTimers()

      expect(callback).toHaveBeenCalledTimes(1)
    })
  })
})
