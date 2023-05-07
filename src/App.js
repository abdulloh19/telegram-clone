import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Option1 from "./components/options/option1";
import Option2 from "./components/options/option2";
import Option3 from "./components/options/option3";
import Option4 from "./components/options/option4";
import Option5 from "./components/options/option5";
import "./components/options/option.css";
import InHome from "./components/cars/InHome";
import Login from "./components/cars/Login";
import CarsTable from "./components/cars/CarsTable";
import OneCarPage from "./components/cars/OneCarPage";

class App extends React.Component {
  state = {
    users: [],
    selectedUser: "",
    messages: [],
    history: [],
    active: 0,
  };

  arrUsers = (FirstName, LasttName, Phone) => {
    const a = this.state.users;
    a.push({ id: a.length, FirstName, LasttName, Phone });
    this.setState({
      users: a,
    });

    localStorage.setItem("users", JSON.stringify(a));
  };

  selectUser = (user) => {
    this.setState({
      selectedUser: user,
    });
    console.log(this.state.selectedUser);

    localStorage.setItem("selectedUser", JSON.stringify(user));

    this.getMessageHistory(user);
  };

  getMessageHistory = (user) => {
    const b = localStorage.getItem("messages");
    if (b) {
      let messages = JSON.parse(b);

      let history = messages.filter(
        (item) =>
          (item.from === 3 && item.to === user.id) ||
          (item.from === user.id && item.to === 3)
      );
      this.setState({
        history,
      });
      console.log(this.state.history);
    }
  };

  sendMessage = (fromId, toId, text) => {
    const date = new Date();
    const message = {
      from: fromId,
      to: toId,
      text: text,
      date: date.getHours() + ":" + date.getMinutes(),
    };

    const a = this.state.messages;
    a.push(message);
    this.setState({
      message: a,
    });

    localStorage.setItem("messages", JSON.stringify(a));

    this.getMessageHistory(
      this.state.users.filter((item) => item.id === toId[0])
    );
  };

  componentDidMount() {
    const usersString = localStorage.getItem("users");

    if (usersString) {
      const userArray = JSON.parse(usersString);
      this.setState({
        users: userArray,
      });
    }

    const selectedUser = localStorage.getItem("selectedUser");
    if (selectedUser) {
      const a = JSON.parse(selectedUser);
      this.setState({
        selectedUser: a,
      });
      this.getMessageHistory(a);
    }

    const sendMesage = localStorage.getItem("message");
    if (sendMesage) {
      const a = JSON.parse(sendMesage);
      this.setState({
        messages: a,
      });
    }
  }

  render() {
    // const { users, selectedUser, history } = this.state;
    return (
      <div className="container">
        <div>
          {/* <div className="row">
          <div className="col-md-3 sider-parent">
            <Sider
              arrUsers={this.arrUsers}
              users={users}
              selectUser={this.selectUser}
              selectedUser={selectedUser}
            />
          </div>
          <div className="col-md-9 content-parent">
            <Content
              selectedUser={selectedUser}
              sendMessage={this.sendMessage}
              history={history}
            />
          </div>
        </div> */}
        </div>
        <div className="row">
          {/* <div className="col-md-12 d-flex justify-content-evenly">
            <div className=" wrapper col-md-2 mt-5">
              <a className="text-light bg-info p-2 m-3 " href="/option1">
                Option1
              </a>

              <a className="text-light bg-info p-2 m-3 " href="/option2">
                Option2
              </a>

              <a className="text-light bg-info p-2 m-3 " href="/option3">
                Option3
              </a>

              <a className="text-light bg-info p-2 m-3 " href="/option4">
                Option4
              </a>

              <a className="text-light bg-info p-2 m-3 " href="/option5">
                Option5
              </a>
            </div>
            <div className="col-md-6 mt-5 card card-body">
              <Route path="/option1" component={Option1} />
              <Route path="/option2" component={Option2} />
              <Route path="/option3" component={Option3} />
              <Route path="/option4" component={Option4} />
              <Route path="/option5" component={Option5} />
            </div>
          </div> */}
        </div>
        <div className="mt-5">
          {this.state.active === "1" ? (
            <Link className="text-bg-info p-3 text-light" to="/carsTabel">
              Cars table
            </Link>
          ) : (
            ""
          )}

          {this.state.active === "3" ? (
            <Link
              className="text-bg-info text-light m-3 p-3 mt-5"
              to="/oneCarsTable"
            >
              One Cars Table
            </Link>
          ) : (
            ""
          )}
          {<CarsTable /> ? (
            <Link className="text-bg-info text-light m-3 p-3 mt-5" to="/home">
              Home
            </Link>
          ) : (
            ""
          )}
        </div>

        <Switch>
          <Route
            path="/carsTabel/:id/:name?/:color?/:year?"
            component={OneCarPage}
          />
          <Route path="/carsTabel" component={CarsTable} />
          <Route path="/home" component={InHome} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
