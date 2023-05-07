import React from "react";
import { Route, Link } from "react-router-dom";
import CarsTable from "./CarsTable";

class Login extends React.Component {
  render() {
    return (
      <div className="mt-5">
        <h1>Login</h1>
        <form className="form">
          <input className=" form-control mb-2" type="text" />
          <input className=" form-control mb-2" type="password" />
        </form>
        <div className="mt-3">
          <Link className="text-bg-info p-2 text-light" to="/carsTabel">
            Cars table
          </Link>
        </div>

        <Route path="/carsTabel" component={CarsTable} />
      </div>
    );
  }
}

export default Login;
