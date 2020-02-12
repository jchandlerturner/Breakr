import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Relationship.css'

class Relationship extends Component {
  render() {


    return (
      <>
        <section className="mainBody">
          <div className="textContent">

            <p>Needing an ice breaker?
          <br></br>
              <br></br>
              What's your relationship to this person?</p>
          </div>
          <div className="buttonDiv">
            <Link className="friendly" to="/category">FRIEND</Link>
            <Link className="stranger" to="/category">STRANGER</Link>
            <Link className="funny" to="/professional">PROFESSIONAL</Link>
            <Link className="lover" to="/category">LOVER</Link>
            <Link className="political" to="/category">FAMILY</Link>

          </div>
          {/* <div className="addButton">
            <img id="add" src={require('./Group 2.png')} alt="My Dog" />
          </div> */}
        </section>
      </>

    )
  }
}

export default Relationship