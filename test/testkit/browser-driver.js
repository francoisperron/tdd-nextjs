import Browser from 'zombie'

Browser.extend((browser) => {
  browser.start = (port) => { Browser.localhost('localhost:', port) }
})

const options = {waitDuration: '20s', silent: true}
const browser = new Browser(options)

export default browser
