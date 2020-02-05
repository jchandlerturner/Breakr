import React, { Component } from 'react'
import ApiManager from '../../ApiManager';
import QuestionCard from './QuestionCard'
//import the components we will need

class QuestionList extends Component {
    //define what this component needs to render
    state = {
        question: [],
    }


    //componentDidMount comes from REACT (basically saying when the component mounts, do THIS)
    componentDidMount() {
        console.log("ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        ApiManager.getFunny()
            .then((question) => {
                //setState is a method built into REACT
                this.setState({
                    question: question
                })
            })
    }
    //Every component has a render
    render() {
        console.log(this.state);

        return (
            <>
            <section className="cardsFlex"> 
                <div className="container-cards">
                        <QuestionCard
                        />
                </div>
            </section>
                </>
                )
                }
        }
        
        export default QuestionList
