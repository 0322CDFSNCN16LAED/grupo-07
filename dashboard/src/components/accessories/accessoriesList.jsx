import React from "react";
import { Component } from "react";
import Accessorie from "./accessorie";

const EXPRESS_HOST = "http://localhost:3001";

export default class AccessoriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessories: [],
    };
  }

  async componentDidMount() {
    const result = await fetch(`${EXPRESS_HOST}/api/accesorios`);
    const accessoriesResult = await result.json();
    const newAccessories = accessoriesResult.data;
    this.setState({
      accessories: newAccessories,
    });
  }

  render() {
    return (
      <React.Fragment>
        {/*<!-- PRODUCTS LIST -->*/}
        <h1 className="h3 mb-2 text-gray-800">
          Todas los accesorios en nuestra base de datos
        </h1>

        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Tipo de accesorio</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                    <th>Marca</th>
                  </tr>
                </thead>

                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Tipo de accesorio</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                    <th>Marca</th>
                  </tr>
                </tfoot>
                <tbody>
                  {this.state.accessories.map((accessorie) => {
                    return <Accessorie {...accessorie} key={accessorie.id} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
