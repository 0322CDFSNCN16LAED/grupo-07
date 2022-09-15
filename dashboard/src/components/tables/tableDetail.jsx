import React from "react";
import { Component } from "react";
import TableDetailInDb from "./tableDetailInDb";

const EXPRESS_HOST = "http://localhost:3001";

export default class TableDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableDetail: null,
      id: props.match.params.id,
    };
  }

  async componentDidMount() {
    const result = await fetch(`${EXPRESS_HOST}/api/tablas/${this.state.id}`);

    const tableResult = await result.json();
    const newTable = tableResult.tabla;
    console.log(newTable);
    this.setState({
      tableDetail: newTable,
    });
  }

  render() {
    if (!this.state.tableDetail) {
      return <p>Cargando...</p>;
    }
    return (
      <React.Fragment>
        {/*<!-- PRODUCTS LIST -->*/}
        <h1 className="h3 mb-2 text-gray-800">
          Todas las tablas en nuestra base de datos
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
                    <th>Tipo de tabla</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                    <th>Tamaño</th>
                    <th>Categoría</th>
                  </tr>
                </thead>

                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Tipo de tabla</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Descuento</th>
                    <th>Tamaño</th>
                    <th>Categoría</th>
                  </tr>
                </tfoot>
                <tbody>
                  <TableDetailInDb {...this.state.tableDetail} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
