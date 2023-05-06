import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./tasks.css";

class Task extends React.Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "task1",
        status: "open",
      },
      {
        id: 2,
        title: "task2",
        status: "pending",
      },
      {
        id: 3,
        title: "task3",
        status: "inprog",
      },
      {
        id: 4,
        title: "task4",
        status: "complate",
      },
    ],

    modalVisible: false,
    save: "",
    active: false,
  };

  modalOpen = (item) => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      save: item,
    });
  };

  onSave = (event) => {
    event.preventDefault();
    let title = event.target[0].value;
    let status = event.target[1].value;
    this.state.tasks.map((item) => {
      if (item.id === this.state.save.id) {
        item.title = title;
        item.status = status;
      }
    });
    this.setState({
      tasks: this.state.tasks,
    });
  };

  addTask = (event) => {
    event.preventDefault();
    let title = event.target[0].value;
    let status = event.target[1].value;
    var obj = {
      id: this.state.tasks.length,
      title: title,
      status: status,
    };
    const tasks2 = this.state.tasks;
    tasks2.push(obj);
    this.setState({
      tasks: tasks2,
      active: false,
    });
  };

  addUser = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  onDelete = (index) => {
    const state = this.state.tasks;
    state.splice(index, 1);
    this.setState({
      state: this.state.tasks,
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="bg-info p-3">
              <h5>Open</h5>
              {tasks
                .filter((item) => item.status === "open")
                .map((item, index) => (
                  <div key={item.id}>
                    <div className="d-flex justify-content-between">
                      <h3 className="mt-2">{item.title}</h3>
                      <div>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => this.modalOpen(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.onDelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <button className="btn btn-outline-danger" onClick={this.addUser}>
              Add task
            </button>
          </div>
          <div className="col-md-3">
            <div className="bg-info p-3">
              <h5>Pending</h5>
              {tasks
                .filter((item) => item.status === "pending")
                .map((item, index) => (
                  <div key={item.id} className="">
                    <div className="d-flex justify-content-between">
                      <h3 className="mb-2">{item.title}</h3>
                      <div>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => this.modalOpen(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.onDelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <button className="btn btn-outline-danger" onClick={this.addUser}>
              Add task
            </button>
          </div>
          <div className="col-md-3">
            <div className="bg-info p-3">
              <h5>Inprog</h5>
              {tasks
                .filter((item) => item.status === "inprog")
                .map((item, index) => (
                  <div key={item.id} className="">
                    <div className="d-flex justify-content-between">
                      <h3 className="">{item.title}</h3>
                      <div>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => this.modalOpen(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.onDelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <button className="btn btn-outline-danger" onClick={this.addUser}>
              Add task
            </button>
          </div>
          <div className="col-md-3">
            <div className="bg-info p-3">
              <h5>Complate</h5>
              {tasks
                .filter((item) => item.status === "complate")
                .map((item, index) => (
                  <div key={item.id} className="">
                    <div className="d-flex justify-content-between">
                      <h3 className="">{item.title}</h3>
                      <div>
                        <button
                          className="btn btn-danger"
                          onClick={() => this.modalOpen(item)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger mx-2"
                          onClick={() => this.onDelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <button className="btn btn-outline-danger" onClick={this.addUser}>
              Add task
            </button>
          </div>
        </div>
        <Modal isOpen={this.state.modalVisible} toggle={this.modalOpen}>
          <ModalHeader>
            <p>Edit</p>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={this.onSave}>
              <select
                name="title"
                defaultValue={this.state.save?.title}
                className="mx-3"
              >
                <option value="task1">Task1</option>
                <option value="task2">task2</option>
                <option value="task3">Task3</option>
                <option value="task4">task4</option>
                <option value="task5">task5</option>
                <option value="task6">task6</option>
              </select>
              <select
                name="status"
                defaultValue={this.state.save?.status}
                id=""
              >
                <option value="open">open</option>
                <option value="pending">pending</option>
                <option value="inprog">inprog</option>
                <option value="complate">complate</option>
              </select>
              <button type="submit" className="btn btn-success mx-2">
                Save
              </button>
              <button className="btn btn-danger" onClick={this.modalOpen}>
                Cancel
              </button>
            </form>
          </ModalBody>
        </Modal>

        <Modal isOpen={this.state.active} toggle={this.addUser}>
          <ModalHeader>
            <p>Add Task</p>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={this.addTask}>
              <select defaultValue={this.state.save.title} className="mx-3">
                <option value="task1">Task1</option>
                <option value="task2">task2</option>
                <option value="task3">Task3</option>
                <option value="task4">task4</option>
                <option value="task5">task5</option>
                <option value="task6">task6</option>
              </select>
              <select defaultValue={this.state.save.status}>
                <option value="open">open</option>
                <option value="pending">pending</option>
                <option value="inprog">inprog</option>
                <option value="complate">complate</option>
              </select>
              <button type="submit" className="btn btn-success mx-2">
                Save
              </button>
              <button className="btn btn-danger" onClick={this.addUser}>
                Cancel
              </button>
            </form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Task;
