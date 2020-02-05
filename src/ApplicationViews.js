import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Landing from './components/landing/Landing'
import Relationship from './components/relationships/Relationship'
import Category from './components/category/Category'
import Flirty from './components/flirty/Flirty'
import Friendly from './components/friendly/Friendly'
import Funny from './components/funny/Funny'
import Political from './components/political/Political'
import Philosophical from './components/philosophical/Philosophical'
import Interview from './components/interview/Interview'
import Networking from './components/networking/Networking'
import Professional from './components/professional/Professional'


class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Landing />
                }} />
                {/* Make sure you add the `exact` attribute here */}
                <Route exact path="/relationship" render={(props) => {
                    return <Relationship />
                }} />
                <Route exact path="/category" render={(props) => {
                    return <Category />
                }} />
                <Route exact path="/friendly" render={(props) => {
                    return <Friendly />
                }} />
                <Route exact path="/funny" render={(props) => {
                    return <Funny />
                }} />
                <Route exact path="/flirty" render={(props) => {
                    return <Flirty />
                }} />
                <Route exact path="/political" render={(props) => {
                    return <Political />
                }} />
                <Route exact path="/interview" render={(props) => {
                    return <Interview />
                }} />
                <Route exact path="/networking" render={(props) => {
                    return <Networking />
                }} />
                <Route exact path="/philosophical" render={(props) => {
                    return <Philosophical />
                }} />
                <Route exact path="/professional" render={(props) => {
                    return <Professional />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews