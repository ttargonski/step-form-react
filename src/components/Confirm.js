import React from "react";

const Confirm = props => {
  return (
    <React.Fragment>
      <div className="form">
        <div className="form-header">Confirm the data</div>
        <div className="form-confirm">
          <p>First Name:</p>
          <span className="form-confirm-data"> {props.values.firstName}</span>

          <p>Last Name:</p>
          <span className="form-confirm-data"> {props.values.lastName}</span>

          <p>Email:</p>
          <span className="form-confirm-data"> {props.values.email}</span>

          <p>City:</p>
          <span className="form-confirm-data"> {props.values.city}</span>

          <p>Occupation:</p>
          <span className="form-confirm-data"> {props.values.occupation}</span>

          <p>Gender:</p>
          <span className="form-confirm-data"> {props.values.gender}</span>
        </div>

        <div className="form-nav">
          <button onClick={props.backStep}>Back</button>
          <button className="form-confirm-btn" onClick={props.handleUpdateData}>
            Confirm
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Confirm;
