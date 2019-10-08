import React, { Component } from "react";

class NuevaCita extends Component {
  state = {
      cita : {
          mascota: '',
          propietario: '',
          fecha: '',
          hora: '',
          sintomas: ''
      }
  };

  // En e.target.name -> name se toma del atributo en nuestra etiqueta, en este caso se toma de nuestro input
  // Value retorna el valor en el evento onChange en nuestro input

  //Este evento detecta el cambio (en este caso lo que se ingresa) dentro de los input
  handleChange = e => {
       // console.log(e.target.name + ': ' + e.target.value);

      // colocar lo que el usuario escribe en el state
      this.setState({
          cita : {
              //tomando copia del objeto original de cita
              ...this.state.cita,
              [e.target.name] : e.target.value
          }
      })
  }


  render() {
    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Llena el formulario para crear una nueva cita
          </h2>

          <form>
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
                <input type="date" className="form-control" name="fecha" onChange={this.handleChange}
                  value={this.state.cita.fecha}  />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">
                Hora
              </label>
              <div className="col-sm-8 col-lg-4">
                <input 
                    type="time" 
                    className="form-control"
                    name="hora"
                    onChange={this.handleChange}
                  value={this.state.cita.hora}
                />
              </div>
            </div>{/* .form-group */}

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
            </div>{/* .form-group */}

            <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita"/>

          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;
