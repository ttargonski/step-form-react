import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import "./UserForm.css";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    occupation: "",
    gender: "",
    data: []
  };

  // data update
  handleUpdateData = () => {
    let data = [...this.state.data];

    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.occupation === "" ||
      this.state.city === "" ||
      this.state.gender === ""
    ) {
      alert("Please fill out all fields");
    } else {
      data.push({
        firstName: `${this.state.firstName}`,
        lastName: `${this.state.lastName}`,
        email: `${this.state.email}`,
        city: `${this.state.city}`,
        occupation: `${this.state.occupation}`,
        gender: `${this.state.gender}`
      });

      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        occupation: "",
        gender: "",
        data: data
      });

      this.nextStep();
    }
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
            handleUpdateData={this.handleUpdateData}
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
