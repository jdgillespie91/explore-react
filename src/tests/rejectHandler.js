/* eslint-disable no-undef */
export default done => error => {
  expect(error).toBeUndefined()
  done()
}
