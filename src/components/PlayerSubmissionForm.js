import React, { Component } from 'react';
import './PlayerSubmissionForm.css';
import PropTypes from 'prop-types';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adj1: "",
      adj2: "",
      adv: "",
      noun1: "",
      noun2: "",
      verb: "",
    }
  }

  onLineSubmit = (event) => {
    event.preventDefault();

    const{adj1, adj2, adv, noun1, noun2, verb} = this.state;
    const newLine = `The ${adj1} ${noun1} ${adv} ${verb} the ${adj2} ${noun2}.`;

    this.props.sendSubmissionCallback(newLine)
    this.setState({
      adj1: "",
      adj2: "",
      adv: "",
      noun1: "",
      noun2: "",
      verb: "",
    });
  }

  onFieldChangeHandler = (event) => {
    const updateState = {};

    const fieldName = event.target.name
    const value = event.target.value

    updateState[fieldName] = value;
    this.setState(updateState);
  }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{ this.props.player }</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onLineSubmit} >

          <div className="PlayerSubmissionForm__poem-inputs">

            {
              // Put your form inputs here... We've put in one below as an example

            }
            <input
              placeholder="hm..."
              type="text" />

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

PlayerSubmissionForm.propTypes = {
  fields: PropTypes.array,
  player: PropTypes.number,
  sendSubmissionCallback: PropTypes.func.isRequired,
  isSubmitted: PropTypes.func.isRequired,
}

export default PlayerSubmissionForm;
