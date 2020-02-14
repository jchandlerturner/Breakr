import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

class Landing extends Component {
  render() {


    return (
      <>
        <section className="landingBody">
          <div className="logoDiv">
            <img id="logo" src={require('./breakrlogo-01.png')} alt="Logo" />
          </div>
          <div className="landingButton">
            <img onClick={() => { this.props.history.push(`/category`) }} src={require('./Vector3.png')} alt="Logo" />
          </div>
        </section>
      </>

    )
  }
}

export default Landing