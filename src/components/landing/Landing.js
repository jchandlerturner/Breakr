import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

class Landing extends Component {
  render() {


    return (
      <>
        <section className="landingBody">
          <img src={require('./Frame.png')} alt="Logo" />

          <div className="landingButton">
            <Link className="nav-link" to="/relationship">Click</Link>
          </div>
        </section>
      </>

    )
  }
}

export default Landing