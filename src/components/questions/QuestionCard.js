import React, { Component } from 'react';
import { Link } from "react-router-dom";

class QuestionCard extends Component {

    render() {
        return (
            <div className="mainCard">
                <p>{this.props.question.question}</p>
            </div>
        );
    }
}
export default QuestionCard