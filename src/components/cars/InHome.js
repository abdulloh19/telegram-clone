import React from "react";
import { Route, Link } from "react-router-dom";
import Login from "./Login";

class InHome extends React.Component {
  render() {
    return (
      <div>
        <div className="mt-5">
          <Link className="text-bg-dark text-light m-3 p-3" to="/login">
            Login
          </Link>
        </div>
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default InHome;
