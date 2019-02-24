import browser from './browser-driver'

beforeAll(async () => {
  browser.start(3000)
})

export { browser }
