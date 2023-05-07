import React from "react";

class OneCarPage extends React.Component {
  render() {
    const params = this.props.match.params;
    return (
      <div className="mt-5">
        <h1>{params.name}</h1>
        <h1>{params.color}</h1>
        <h1>{params.year}</h1>
      </div>
    );
  }
}

export default OneCarPage;
