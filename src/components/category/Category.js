import React, { Component } from 'react'
import '../relationships/Relationship.css'
import { Link } from 'react-router-dom'

class Category extends Component {
  render() {


    return (
      <>
        <div>
        </div>
        <div className="textContent">
          <img id="back" onClick={() => { this.props.history.push(`/relationship`) }}src={require('./Vector.png')} alt="Logo" />

          <p>Needing an ice breaker?
          <br></br>
            <br></br>
            What's your relationship to this person?</p>
        </div>
        <div className="buttonDiv">
          <Link className="friendly" to="/friendly">FRIENDLY</Link>
          <Link className="lover" to="/flirty">FLIRTY</Link>
          <Link className="stranger" to="/philosophical">PHILOSOPHICAL</Link>
          <Link className="funny" to="/funny">FUNNY</Link>
          <Link className="political" to="/political">POLITICAL</Link>
        </div>
      </>

    )
  }
}

export default Category