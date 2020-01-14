import React from "react";

const Welcome = props => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <h1>Welcome</h1>
        <button>Login</button>
      </div>
      <div className="footer">
        <p>
          Are you not a member?{" "}
          <button onClick={props.nextStep}>Register.</button>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Welcome;
