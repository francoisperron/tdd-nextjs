import url from 'url'
import http from 'http'
import next from 'next'

const nextApp = next({ dev: true, staticMarkup: true, quiet: true })
const handleNextRequests = nextApp.getRequestHandler()
const server = http.createServer((req, res) => handleNextRequests(req, res, url.parse(req.url, true)))

const app = {
  start: (port) => {
    return new Promise((resolve, reject) => {
      nextApp.prepare().then(() => {
        server
          .listen(port, () => resolve())
          .on('error', err => reject(err))
      })
    })
  },
  stop: () => {
    return new Promise((resolve, reject) => {
      nextApp.close().then(() => {
        server
          .close(() => resolve())
          .on('error', (err) => reject(err))
      })
    })
  }
}

export default app