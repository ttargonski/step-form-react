import React from "react";

const Confirm = props => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="header">Entered data</div>
        <div className="confirm">
          <p>
            First Name:{" "}
            <span className="confirm-data">{props.values.firstName}</span>
          </p>
          <p>
            Last Name:{" "}
            <span className="confirm-data">{props.values.lastName}</span>
          </p>
          <p>
            Email: <span className="confirm-data">{props.values.email}</span>
          </p>
          <p>
            City: <span className="confirm-data">{props.values.city}</span>
          </p>
          <p>
            Occupation:{" "}
            <span className="confirm-data">{props.values.occupation}</span>
          </p>
          <p>
            Gender: <span className="confirm-data">{props.values.gender}</span>
          </p>
          <button className="confirm" onClick={props.nextStep}>
            Confirm
          </button>
        </div>
        <div className="navigation">
          <button onClick={props.backStep}>Back</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Confirm;
