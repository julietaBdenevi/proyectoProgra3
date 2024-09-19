import React from "react";
import { Component } from "react";
import Peliculas from "../components/Peliculas/Peliculas";
import Forms from "../components/Forms/Forms";


class Home extends Component {
  render() {
      return (
          <>
              <Forms history={this.props.history} />
              <Peliculas />
          </>
      );
  }
}

export default Home;