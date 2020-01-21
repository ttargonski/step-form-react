import React from "react";

const PersonalDetails = props => {
  return (
    <React.Fragment>
      <div className="form">
        <div className="form-header">Enter Personal Details</div>
        <div className="form-inputs">
          <input
            className="form-input"
            type="text"
            onChange={props.handleChange("city")}
            value={props.values.city}
            placeholder="City"
          />
          <br />
          <input
            className="form-input"
            type="text"
            onChange={props.handleChange("occupation")}
            value={props.values.occupation}
            placeholder="Occupation"
          />
          <br />
          <select
            className="form-input"
            name="gender"
            onChange={props.handleChange("gender")}
            value={props.values.gender}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-nav">
          <button onClick={props.backStep}>Back</button>
          <button onClick={props.nextStep}>Continue</button>
        </div>
      </div>

      <div className="form-footer">
        <p>
          Do you have an account? <button className>Sign In</button>
        </p>
      </div>
    </React.Fragment>
  );
};

export default PersonalDetails;
