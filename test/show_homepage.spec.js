import {browser} from './testkit/feature-test'

describe('Homepage', () => {
  beforeAll(async () => {
    await browser.visit('/')
  })

  test('shows hello world', () => {
    let title = browser.text('#title')
    expect(title).toBe('Hello world')
  })
})
