import {browser} from './testkit/feature-test'

describe('Homepage', () => {
  beforeAll(async () => {
    await browser.visit('/')
  })

  test('shows dummy button', () => {
    let button = browser.text('#button')

    expect(button).toBe('Click me')
  })
})
