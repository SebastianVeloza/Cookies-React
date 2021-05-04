import "./App.css";
import React from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class App extends React.Component {
  constructor() {
    super();
    this.handleTipo = this.handleTipo.bind(this);
    this.handleReload = this.handleReload.bind(this);
  }
  handleTipo(e) {
    cookies.set(`Tipo`, `${e.target.value}`, { path: "/" });
  }
  handleReload(e) {
    e.preventDefault();
    window.location.reload();
  }
  render() {
    return (
      <div className="P">
        <div className="buttons">
          <h1>Selecciona el tipo de letra.</h1>
          <button className="b1" onClick={this.handleTipo} value="Courier New">
            Courier New
          </button>
          <button
            className="b2"
            onClick={this.handleTipo}
            value="Lucida Handwriting"
          >
            Lucida Handwriting
          </button>
          <button className="b3" onClick={this.handleReload}>
            Actualizar
          </button>
          
        </div>
        <div className="text">
        <p style={{ fontFamily: cookies.get(`Tipo`) }}>
            JUAN SEBASTIAN FERNANDO VELOZA CERON
          </p>
          </div>
      </div>
    );
  }
}
