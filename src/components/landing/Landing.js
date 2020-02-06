import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import QuestionList from "../questions/QuestionList"

class Landing extends Component {
  render() {


    return (
      <>
      <img src={require('./Frame.png')} alt="Logo" />

      <Link className="nav-link" to="/relationship">Click</Link>
      <button type="button"
          className="addButton"
          onClick={() => { this.props.history.push("/new") }}>
          Add Question
      </button>

      </>
      
    )
  }
}

export default Landing