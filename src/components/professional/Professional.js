import React, { Component } from 'react'
import QuestionList from "../questions/QuestionList"
import { Link } from 'react-router-dom'

class Professional extends Component {
  render() {


    return (
      <>
      <div>
      <p>Category</p>

      <Link className="political" to="/interview">INTERVIEW</Link>
      <Link className="stranger" to="/networking">NETWORKING</Link>
      </div>
      </>
      
    )
  }
}

export default Professional