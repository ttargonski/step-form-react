import React from "react";

const UserDetails = props => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="form">
          <div className="header">Enter User Details</div>
          <div className="form-inputs">
            <input
              type="text"
              onChange={props.handleChange("firstName")}
              value={props.values.firstName}
              placeholder="First Name"
            />
            <br />
            <input
              type="text"
              onChange={props.handleChange("lastName")}
              value={props.values.lastName}
              placeholder="Last Name"
            />
            <br />
            <input
              type="text"
              onChange={props.handleChange("email")}
              value={props.values.email}
              placeholder="Email Address"
            />
          </div>
          <div className="navigation">
            <button onClick={props.nextStep}>Continue</button>
          </div>
        </div>
        <img className="waves" src="" alt="" />
      </div>
      <div className="footer">
        <p>
          Do you have an account? <button>Sign In</button>
        </p>
      </div>
    </React.Fragment>
  );
};

export default UserDetails;
