import React, { Component } from 'react';
import ApiManager from '../../ApiManager';
import './Question.css'

class AddQuestionForm extends Component {
    state = {
        categoryId: "",
        question: "",
        categories: [],
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    addQuestion = evt => {
        evt.preventDefault();
        if (this.state.question === "") {
            window.alert("Please input a question");
        } else {
            this.setState({ loadingStatus: true });
            const question = {
                question:  this.state.question,
                categoryId: parseInt(this.state.categoryId),
            };

            ApiManager.post(question)
                .then(() => this.props.history.push("/"));
        }
    };

    
    componentDidMount() {
        const newState = {}
        ApiManager.getCategory().then(category => {
            newState.categories = category
        })
            .then(() => {
                this.setState(newState)
            })

    }

    render() {
console.log(this.state)
        return (
            <>
                <section className="editBody">
                    <div className="editCardContent">
                        <form>
                            <fieldset>
                                <div className="editForm">


                                    <label htmlFor="Question">Question</label>
                                    <textarea id="question" onChange={this.handleFieldChange} name="message" rows="10" cols="30">
                                    </textarea>
                                    <label htmlFor="Category">Category: </label>
                                    <select
                                        name="category"
                                        id="categoryId"
                                        onChange={this.handleFieldChange}>
                                        <option>Select Category</option>
                                        {this.state.categories.map(category =>
                                            <option key={category.id} id={category.categoryName} value={category.id}>
                                                {category.categoryName}
                                            </option>
                                        )}
                                    </select>

                                </div>
                                <div className="alignRight">
                                    <button id="cardAddButton"
                                        type="button"
                                        disabled={this.state.loadingStatus}
                                        onClick={this.addQuestion}
                                    >Add Question</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </section>
            </>
        )
    }
}

export default AddQuestionForm