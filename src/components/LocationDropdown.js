// LocationDropdown.js
import React, { Component } from 'react';
import axios from 'axios';

class LocationDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      provincias: [],
      localidades: [],
      selectedProvincia: '',
      selectedLocalidad: '',
    };
  }

  componentDidMount() {
    // Realiza una solicitud a la API para obtener la lista de provincias
    axios.get('https://apis.datos.gob.ar/georef/api/provincias?orden=nombre')
      .then((response) => {
        this.setState({ provincias: response.data.provincias });
      })
      .catch((error) => {
        console.error('Error al obtener las provincias:', error);
      });
  }

  handleProvinciaChange = (event) => {
    const selectedProvincia = event.target.value;

    // Actualiza el estado con la provincia seleccionada
    this.setState({ selectedProvincia });


  // Realiza una solicitud a la API para obtener las localidades de la provincia seleccionada
  axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${selectedProvincia}&orden=nombre&campos=estandar&max=200`)
    .then((response) => {
      // Extrae la lista de localidades de la respuesta
      const localidades = response.data.localidades;
      this.setState({ localidades });
    })
    .catch((error) => {
      console.error('Error al obtener las localidades:', error);
    });
  }

  handleLocalidadChange = (event) => {
    const selectedLocalidad = event.target.value;
    this.setState({ selectedLocalidad });
  }

  render() {
    const { provincias, localidades, selectedProvincia, selectedLocalidad } = this.state;

    return (
      <div>
        <div className="form-group">
          <label htmlFor="provincia"></label>
          <select
            id="provincia"
            name="provincia"
            value={selectedProvincia}
            onChange={this.handleProvinciaChange}
          >
            <option value="">Selecciona una provincia</option>
            {provincias.map((provincia) => (
              <option key={provincia.id} value={provincia.id}>
                {provincia.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="localidad"></label>
          <select
            id="localidad"
            name="localidad"
            value={selectedLocalidad}
            onChange={this.handleLocalidadChange}
          >
            <option value="">Selecciona una localidad</option>
            {localidades.map((localidad) => (
              <option key={localidad.id} value={localidad.id}>
                {localidad.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default LocationDropdown;
