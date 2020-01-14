import React from "react";

const PersonalDetails = props => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="form">
          <div className="header">Enter Personal Details</div>
          <div className="form-inputs">
            <input
              type="text"
              onChange={props.handleChange("city")}
              value={props.values.city}
              placeholder="City"
            />
            <br />
            <input
              type="text"
              onChange={props.handleChange("occupation")}
              value={props.values.occupation}
              placeholder="Occupation"
            />
            <br />
            <select
              name="gender"
              onChange={props.handleChange("gender")}
              value={props.values.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="navigation">
            <button onClick={props.nextStep}>Continue</button>
            <button onClick={props.backStep}>Back</button>
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

export default PersonalDetails;
