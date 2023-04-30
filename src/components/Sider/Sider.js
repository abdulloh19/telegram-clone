import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Sider extends React.Component {
  state = {
    modalVisible: false,
  };

  modalToggle = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };

  formSubmit = (event) => {
    event.preventDefault();
    const FirstName = event.target[0].value;
    const LasttName = event.target[1].value;
    const Phone = event.target[2].value;
    this.modalToggle();

    this.props.arrUsers(FirstName, LasttName, Phone);
  };

  onClicked = (user) => {
    this.props.selectUser(user);
  };

  render() {
    const { users, selectedUser } = this.props;
    return (
      <div>
        <button
          className="btn btn-dark offset-3 btn-sider mt-3"
          onClick={this.modalToggle}
        >
          Add user
        </button>

        <ul className="list-group">
          {users.map((item, index) => (
            <li
              onClick={() => this.onClicked(item)}
              className={`list-group-item hoverBorder mt-2 ${
                selectedUser.id === item.id ? "active" : ""
              } `}
              key={index}
            >
              {item.FirstName + " " + item.LasttName}
            </li>
          ))}
        </ul>

        <Modal isOpen={this.state.modalVisible} toggle={this.modalToggle}>
          <ModalHeader>
            <h3>Add User</h3>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={this.formSubmit} id="userId">
              FirstName
              <input
                className="form-control"
                type="text"
                placeholder="FirstName"
              />
              LastName
              <input
                className="form-control"
                type="text"
                placeholder="LastName"
              />
              Phone
              <input
                className="form-control "
                type="number"
                placeholder="Phone"
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-success" form={"userId"}>
              Save
            </button>
            <button className="btn btn-danger" onClick={this.modalToggle}>
              Cancel
            </button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Sider;
