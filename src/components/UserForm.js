import React, { Component } from "react";
import Welcome from "./Welcome";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

class UserForm extends Component {
  state = {
    step: 0,
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    occupation: "",
    gender: "",
    data: []
  };

  // next step function
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  // back step function
  backStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  //  method change values in state
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { firstName, lastName, email, city, occupation, gender } = this.state;
    const values = { firstName, lastName, email, city, occupation, gender };

    switch (this.state.step) {
      case 0:
        return (
          <Welcome
            values={values}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );

      case 1:
        return (
          <UserDetails
            values={values}
            nextStep={this.nextStep}
            backStep={this.backStep}
            handleChange={this.handleChange}
          />
        );

      case 2:
        return (
          <PersonalDetails
            values={values}
            nextStep={this.nextStep}
            backStep={this.backStep}
            handleChange={this.handleChange}
          />
        );

      case 3:
        return (
          <Confirm
            values={values}
            nextStep={this.nextStep}
            backStep={this.backStep}
            handleChange={this.handleChange}
          />
        );

      case 4:
        return (
          <Success
            values={values}
            nextStep={this.nextStep}
            backStep={this.backStep}
            handleChange={this.handleChange}
          />
        );
    }
  }
}

export default UserForm;
