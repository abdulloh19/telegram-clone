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
    const { selectedUser, history } = this.props;
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
                    type="submit"
                    className="btn btn-success"
                    onClick={this.sendMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div className="row bg-white mt-3" style={{ height: "600px" }}>
              <div className="col-md-12">
                {console.log(history)}
                {history.map((item, index) => (
                  <div key={index} className="row">
                    <div
                      className={`col-md-7 ${
                        item.id === 3
                      } ? 'offset-5' "color-blue" : ''`}
                    >
                      <p className="text">
                        {item.text}

                        <span className="mx-2">{item.date}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Content;
