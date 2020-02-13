import React, { Component } from 'react'
import QuestionList from "../questions/QuestionList"
import { Link } from 'react-router-dom'

class Professional extends Component {
  render() {


    return (
      <>
        <div>
        </div>
        <div className="textContent">
          <img id="back" onClick={() => { this.props.history.push(`/relationship`) }} src={require('../category/Vector.png')} alt="Logo" />

          <p>Needing an ice breaker?
          <br></br>
            <br></br>
            What kind of conversation are you having?</p>
        </div>
        <div className="buttonDiv">
          <Link className="political" to="/interview">INTERVIEW</Link>
          <Link className="stranger" to="/networking">NETWORKING</Link>
        </div>
      </>

    )
  }
}

export default Professional