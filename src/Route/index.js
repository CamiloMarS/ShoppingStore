import React from "react";
import { Route } from "react-router-dom";

//Importar los contenedores
//Importar los containers
import HomeContainer from "../containers/homeContainer/index";
import ProductsContainer from "../containers/productsContainer/index";
import MyProductsContainer from "../containers/myProductsContainer/index";
import AboutContainer from "../containers/aboutContainer/index";

const CONTAINERS = [
  { name: "Home", container: HomeContainer },
  { name: "Products", container: ProductsContainer },
  { name: "MyProducts", container: MyProductsContainer },
  { name: "About", container: AboutContainer }
];

const find = containerName => {
  return CONTAINERS.find(item => item.name === containerName);
};

function getContainer(rute) {
  if (typeof rute !== "undefined" || rute !== null) {
    try {
      const { name, container } = find(rute);
      return (
        <Route path={`/${name.toLocaleLowerCase()}`} component={container} />
      );
    } catch (error) {
      return (
        <div
          style={{
            width: "100%",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h3>404 Page Not Found!</h3>
        </div>
      );
    } //end catch
  } //end if
}

const Root = ({ rute }) => getContainer(rute);

export default Root;
