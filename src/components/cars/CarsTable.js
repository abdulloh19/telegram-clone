import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class CarsTable extends React.Component {
  state = {
    cars: [
      {
        id: 1,
        name: "Spark",
        color: "white",
        year: 2022,
      },
      {
        id: 2,
        name: "Cobalt",
        color: "dark",
        year: 2020,
      },
      {
        id: 3,
        name: "Nexia",
        color: "red",
        year: 2015,
      },
      {
        id: 4,
        name: "Gentra",
        color: "dark",
        year: 2020,
      },
      {
        id: 5,
        name: "Tahoe",
        color: "Blue",
        year: 2022,
      },
    ],
  };

  render() {
    return (
      <div className="mt-5">
        <table className="table">
          <thead>
            <tr>
              <th>N</th>
              <th>Name</th>
              <th>Color</th>
              <th>Year</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {this.state.cars.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.year}</td>
                <td>
                  <Link
                    to={
                      "/carsTabel/" +
                      item.id +
                      "/" +
                      item.name +
                      "/" +
                      item.color +
                      "/" +
                      item.year
                    }
                  >
                    <button className="btn btn-info">I</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CarsTable;
