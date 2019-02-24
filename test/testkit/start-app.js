import app from './app-driver'

module.exports = async () => {
  await app.start(3000)
  global.app = app;
}