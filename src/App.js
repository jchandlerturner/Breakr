import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews"
import './App.css'
import Navbar from './components/nav/Navbar'
import './components/nav/NavBar.css'

class App extends Component {

  render() {
    return (
      <>
        <Navbar />
        <ApplicationViews
        />
      </>
    )
  }
}

export default App