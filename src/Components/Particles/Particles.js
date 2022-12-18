import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

class Particles extends Component {
    render () {
      return (
        <>
          <div>...</div>
          <ParticlesBg type="cobweb" number={30} color='#ffffff' bg={true} />
        </>
      )
    }
  }

export default Particles