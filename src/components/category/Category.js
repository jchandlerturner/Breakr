import React, { Component } from 'react'
import QuestionList from "../questions/QuestionList"
import '../relationships/Relationship.css'
import { Link } from 'react-router-dom'

class Category extends Component {
  render() {


    return (
      <>
      <div>
      <p>Category</p>

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