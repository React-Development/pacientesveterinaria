import React, { Component } from "react";
import uuid from "uuid";

const stateInicial = {
  cita: {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  },
  error: false
};

class NuevaCita extends Component {
  state = { ...stateInicial };

  // En e.target.name -> name se toma del atributo en nuestra etiqueta, en este caso se toma de nuestro input
  // Value retorna el valor en el evento onChange en nuestro input

  //Este evento detecta el cambio (en este caso lo que se ingresa) dentro de los input
  handleChange = e => {
    // console.log(e.target.name + ': ' + e.target.value);
    // colocar lo que el usuario escribe en el state
    this.setState({
      cita: {
        //tomando copia del objeto original de cita
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };

  // Cuando el usuario envia el formulario
  // Prevent default sirve para escribir el codigo con lo que se va hacer cuando se envie el formulario
  handleSubmit = e => {
    e.preventDefault();

    // extraer los valores del state
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;

    // validar que todos  los campos esten llenos
    if (
      mascota === "" ||
      propietario === "" ||
      fecha === "" ||
      hora === "" ||
      sintomas === ""
    ) {
      this.setState({
        error: true
      });

      // detener la ejecucion
      return;
    }

    // agregar objeto con los datos (Id unico)
    const nuevaCita = { ...this.state.cita };
    /* Las propiedades de un objeto si pueden ser reescritas
         En este caso solo se esta agregando la propiedad id a nuestra cita */
    nuevaCita.id = uuid();

    /* agregar la cita al state de App

       Cuando es un class component se acceden a los props de la siguiente forma */

    this.props.crearNuevaCita(nuevaCita);

    // Colocar en el state el stateInicial
    this.setState({
        ...stateInicial
    });
  };

  render() {
    //extraer valor del state
    const { error } = this.state;

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>

          {/* Agregando mensaje de error al enviar  formulario incompleto o vacio */}
          {error ? (
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Todos los campos son obligatorios
            </div>
          ) : null}

          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Mascota
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="mascota"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                />
              </div>
            </div>
            {/* .form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Nombre Dueño
              </label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Dueño Mascota"
                  name="propietario"
                  onChange={this.handleChange}
                  value={this.state.cita.propietario}
                />
              </div>
            </div>
            {/* .form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  onChange={this.handleChange}
                  value={this.state.cita.fecha}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  name="hora"
                  onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
              </div>
            </div>
            {/* .form-group */}

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">
                Síntomas
              </label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  placeholder="Describe los sintomas"
                  name="sintomas"
                  onChange={this.handleChange}
                  value={this.state.cita.sintomas}
                />
              </div>
            </div>
            {/* .form-group */}

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Agregar Nueva Cita"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;
