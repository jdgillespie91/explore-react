/* eslint-disable no-undef */
import Nightmare from 'nightmare'
import rejectHandler from './rejectHandler'
import resolveHandler from './resolveHandler'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000

let nightmare
const nightmareOptions = {
  show: true
}
const baseUrl = 'http://localhost:3000'

describe('The UI', () => {
  beforeEach(() => {
    nightmare = Nightmare(nightmareOptions)
  })

  it('should display', done => {
    nightmare
      .goto(baseUrl)
      .wait('#menuButton')
      .end()
      .then(resolveHandler(done))
      .catch(rejectHandler(done))
  })

  it('should display an avatar', done => {
    nightmare
      .goto(baseUrl)
      .wait('#avatarComponent')
      .end()
      .then(resolveHandler(done))
      .catch(rejectHandler(done))
  })

  it('should display stats', done => {
    nightmare
      .goto(baseUrl)
      .wait('#statsComponent')
      .end()
      .then(resolveHandler(done))
      .catch(rejectHandler(done))
  })

  it('should display an inventory', done => {
    nightmare
      .goto(baseUrl)
      .wait('#inventoryComponent')
      .end()
      .then(resolveHandler(done))
      .catch(rejectHandler(done))
  })

  it('should display the avatar of the focused unit', done => {
    nightmare
      .goto(baseUrl)
      .click('#peonComponent')
      .wait('#avatarComponent')
      // Here, want to check for existence of peon avatar which can only be done by looking at the text currently.
      .wait(() => true)
      .end()
      .then(resolveHandler(done))
      .catch(rejectHandler(done))
  })
})

describe('The menu', () => {
  beforeEach(() => {
    nightmare = Nightmare(nightmareOptions)
  })

  it('should open and close', done => {
    nightmare
      .goto(baseUrl)
      .wait('#menuButton')
      .click('#menuButton')
      .wait('#returnToGameButton')
      .click('#returnToGameButton')
      .wait(() => !document.querySelector('#returnToGameButton'))
      .end()
      .then(resolveHandler(done))
      .catch(rejectHandler(done))
  })
})
