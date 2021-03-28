import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeValue(event) {
        // console.log(event.target.value);
        this.setState({
            text: event.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();        
        this.props.onAdd(this.state.text);
        this.setState({
            text:''
        });
    }
    render() {
        return( 
            <form 
                className="bottom-panel d-flex"
                onSubmit = {this.onSubmit}
                >
                <input
                    className="form-control new-post-label"
                    type="text"
                    placeholder = "О чем вы думаете сейчас?"
                    onChange = {this.onChangeValue}
                    value={this.state.text}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    
                > Добавить
                </button>
            </form>
        )
    }

}

