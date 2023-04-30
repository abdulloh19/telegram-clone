import React from "react";
import "./index.css";

class Content extends React.Component {
  state = {
    inputValue: "",
  };

  changeMasageValue = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  sendMessage = () => {
    const from = 3;
    const to = this.props.selectedUser.id;
    const text = this.state.inputValue;
    this.props.sendMessage(from, to, text);
    this.setState({
      inputValue: "",
    });
  };

  render() {
    const { selectedUser } = this.props;
    const { inputValue } = this.state;
    return (
      <div>
        {selectedUser ? (
          <div className="content">
            <div className="row">
              <div className="col-md-12">
                <h1 className="content-header">
                  {selectedUser.FirstName +
                    " " +
                    selectedUser.LasttName +
                    " " +
                    selectedUser.Phone}
                </h1>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12">
                <div className="d-flex wrapper">
                  <input
                    className="form-control mx-2"
                    type="text"
                    placeholder="Enter your messages"
                    onChange={this.changeMasageValue}
                    value={inputValue}
                  />
                  <button
                    className="btn btn-success"
                    onClick={this.sendMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div
              className="row bg-white mt-3"
              style={{ height: "600px" }}
            ></div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Content;
