import React, { Component } from 'react'
import ApiManager from '../../ApiManager';
import QuestionCard from '../questions/QuestionCard'
//import the components we will need

class Philosophical extends Component {
    //define what this component needs to render
    state = {
        questions: [],
    }


    //componentDidMount comes from REACT (basically saying when the component mounts, do THIS)
    componentDidMount() {
        //getAll from AnimalManager and hang on to that data; put it in state
        ApiManager.getPhilosophical()
            .then((question) => {
                //setState is a method built into REACT
                this.setState({
                    questions: question
                })
            })
    }
    //Every component has a render
    render() {

        return (
            <>
                            <img id="back" onClick={() => { this.props.history.push(`/category`) }} src={require('../category/Vector.png')} alt="Logo" />

                <section className="cardsFlex">
                    <div className="container-cards">
                        {this.state.questions.map(question =>
                            <QuestionCard
                                key={question.id}
                                category={question.categoryId}
                                question={question.question}
                                {...this.props}
                            />
                        )}
                </div>
                </section>
            </>

        )
    }
}

export default Philosophical
