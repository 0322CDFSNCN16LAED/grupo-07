import React, { Component } from "react";
import Brand from "./Brand";
import MediumCard from "../MediumCard";

const EXPRESS_HOST = "http://localhost:3001";

class BrandsInDb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
    };
  }
  async componentDidMount() {
    const result = await fetch(`${EXPRESS_HOST}/api/marcas`);
    const brandsResult = await result.json();
    const newBrands = brandsResult.brands;
    this.setState({
      brands: newBrands,
    });
  }
  render() {
    return (
      <MediumCard title="Marcas con las que trabajamos">
        <div className="row">
          {this.state.brands.map((brand) => {
            return <Brand {...brand} key={brand.name} />;
          })}
        </div>
      </MediumCard>
    );
  }
}

export default BrandsInDb;
