import React from "react";

const UserDetails = props => {
  return (
    <React.Fragment>
      <div className="form">
        <div className="form-header">Enter User Details</div>
        <div className="form-inputs">
          <input
            className="form-input"
            type="text"
            onChange={props.handleChange("firstName")}
            value={props.values.firstName}
            placeholder="First Name"
          />
          <br />
          <input
            className="form-input"
            type="text"
            onChange={props.handleChange("lastName")}
            value={props.values.lastName}
            placeholder="Last Name"
          />
          <br />
          <input
            className="form-input"
            type="text"
            onChange={props.handleChange("email")}
            value={props.values.email}
            placeholder="Email Address"
          />
        </div>
        <div className="form-nav">
          <button onClick={props.nextStep}>Continue</button>
        </div>
      </div>
      <div className="form-footer">
        <p>
          Do you have an account? <button>Sign In</button>
        </p>
      </div>
    </React.Fragment>
  );
};

export default UserDetails;
