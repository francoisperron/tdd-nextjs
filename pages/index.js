import React from 'react'
import Button from '@material-ui/core/Button'

function Home () {
  return (
    <div>
      <div id='title'>Hello world</div>
      <div><img src="/static/bee-logo.png" alt="my image" /></div>
      <Button id='button' variant="contained" color="primary">Click me</Button>
    </div>
  )
}

export default Home