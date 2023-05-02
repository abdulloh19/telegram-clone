import React from "react";
import Sider from "./components/Sider/Sider";
import Content from "./components/content/Content";
import "./components/index.css";
import "./App.css";
import Task from "./components/tasks/task";

class App extends React.Component {

  state = {
    users: [],
    selectedUser: "",
    messages: [],
    history: [],
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
    const { users, selectedUser, history } = this.state;
    return (
      <div className="container-fluid">
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
         <div className="row">
          <div className="col-md-12">
            <Task />
          </div>
         </div>
      </div>
    );
  }
}

export default App;
