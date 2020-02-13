import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {


    render() {
        return (
            <div className="navbar">
                <header>
                    <nav>
                        <ul className="container">
                            <>
                                <li><Link className="nav-link" to="/relationship"><img id="homeIcon" src={require('./Vector2.png')} /></Link></li>
                                <img id="add" onClick={() => { this.props.history.push("/new") }}src={require('./Group 2.png')} alt="My Dog" />
                                <li><img id="homeIcon" src={require('./Group.png')} alt="My Dog" /></li>

                            </>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default withRouter(NavBar);
