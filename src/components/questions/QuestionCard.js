import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Question.css'

class QuestionCard extends Component {

    cardDisplay = () => {
        if (Number(this.props.category) === 2) {
            return ("flirtyCard")
        } else if (this.props.category === 1) {
            return ("funnyCard")
        } else if (this.props.category === 3) {
            return ("friendlyCard")
        } else if (this.props.category === 4) {
            return ("deepCard")
        } else if (this.props.category === 5) {
            return ("politicalCard")
        } else if (this.props.category === 6) {
            return ("interviewCard")
        } else if (this.props.category === 7) {
            return ("networkingCard")
        }
    }



    render() {
        return (

            <div id={this.cardDisplay()}>
                    <p className="cardText">{this.props.question}</p>
            </div>
        );
    }
}
export default QuestionCard