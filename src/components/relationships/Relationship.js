import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import QuestionList from "../questions/QuestionList"
import './Relationship.css'

class Relationship extends Component {
  render() {


    return (
      <>
      <div>
      <p>Relationship</p>

      <Link className="friendly" to="/category">FRIEND</Link>
      <Link className="stranger" to="/category">STRANGER</Link>
      <Link className="funny" to="/professional">PROFESSIONAL</Link>
      <Link className="lover" to="/category">LOVER</Link>
      <Link className="political" to="/category">FAMILY</Link>
      </div>
      </>
      
    )
  }
}

export default Relationship