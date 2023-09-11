import React, { Component } from 'react';
import LocationDropdown from './LocationDropdown';
import './styles/Presupuesto.css';
import './styles/common.css'; 

class Presupuesto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tipoCliente: 'Eres Particular o Empresa?',
      tipoDispositivo: 'Tipo de Dispositivo',
      nombre: '',
      correo: '',
      telefono: '',
      problema: '',
      marcaModelo: '',
      sistemaOperativo: 'Sistema Operativo', // Establece un valor por defecto
      versionSistema: 'Version S.O ', // Establece un valor por defecto
      comoNosEncontro: '¿Cómo nos encontró?',
      intentoSolucion: false,
      aceptaPolitica: false,
      sabeMasDetalles: false,
    };
  }

  // Manejar cambios en los campos de entrada
  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  }

  // Manejar el envío del formulario
  handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario o realizar otras acciones
    console.log('Formulario enviado:', this.state);
  }

  render() {
    return (
      <div className="presupuesto-form">
        <h2>Solicitud de Presupuesto</h2>
        <form onSubmit={this.handleSubmit}>
<div className='form-group' id="datoscliente">
<div className='form-group' id="datospersonales">
<div className="form-group" id="box-nombre">
  <label htmlFor="nombre"></label>
  <input
    type="text"
    id="nombre"
    name="nombre"
    value={this.state.nombre}
    onChange={this.handleChange}
    placeholder='Ingresa tu Nombre y Apellido'
    required
  />
</div>
<LocationDropdown />
</div>
<div id="datosdecontacto">
<div className="form-group" id="correo">
  <label htmlFor="correo"></label>
  <input
    type="email"
    id="correo"
    name="correo"
    value={this.state.correo}
    onChange={this.handleChange}
    placeholder='Ingresa tu Correo Electrónico'
    required
  />
</div>

<div className="form-group" id="telefono">
  <label htmlFor="telefono"></label>
  <input
    type="tel"
    id="telefono"
    name="telefono"
    value={this.state.telefono}
    onChange={this.handleChange}
    placeholder='Ingresa tu Teléfono de Contacto'
    required
  />
</div>
<div id="box-cliente"> 
       <label htmlFor="tipoCliente"></label>
      <select
        id="tipoCliente"
        name="tipoCliente"
        value={this.state.tipoCliente}
        onChange={this.handleChange}
      >
        <option hidden selected>Eres Particular o Empresa?</option>
        <option value="Particular">Particular</option>
        <option value="Empresa">Empresa</option>
      </select>
      </div>
</div>
</div>
<div className="form-group" id="comoNosEncontro">
  <label htmlFor="comoNosEncontro"></label>
  <select
    id="comoNosEncontro"
    name="comoNosEncontro"
    value={this.state.comoNosEncontro}
    onChange={this.handleChange}
  >
    <option hidden selected>¿Cómo nos encontró?</option>
    <option value="Anuncio en Redes">Anuncio en Redes</option>
    <option value="Instagram">Instagram</option>
    <option value="TikTok">TikTok</option>
    <option value="Facebook">Facebook</option>
    <option value="Twitter">Twitter</option>
    <option value="Threads">Threads</option>
    <option value="LinkedIn">LinkedIn</option>
    <option value="Página Web">Página Web</option>
    <option value="Google">Google</option>
    <option value="Blog">Blog</option>
    <option value="Calle">Calle</option>
    <option value="Me enteré por alguien">Me enteré por alguien</option>
    <option value="Otro">Otro</option>
  </select>

  {this.state.comoNosEncontro === "Otro" ? (
  <div className="form-group">
    <label htmlFor="comoNosEncontroOtros"></label>
    <input
      type="text"
      id="comoNosEncontroOtros"
      name="comoNosEncontroOtros"
      value={this.state.comoNosEncontroOtros}
      onChange={this.handleChange}
      placeholder="Por favor, indique cómo nos encontró"
    />
  </div>
) : null}
</div>  

<div className="form-group" id="IntentoSolucion">
  <label htmlFor="intentoSolucion">¿Ha intentado solucionarlo antes?</label>
  <input
    type="checkbox"
    id="intentoSolucion"
    name="intentoSolucion"
    checked={this.state.intentoSolucion}
    onChange={this.handleChange}
  />
</div>

{this.state.intentoSolucion && (
  <div className="form-group" id="comoIntentoSolucion">
    <label htmlFor="comoIntentoSolucion"></label>
    <textarea
      id="comoIntentoSolucion"
      name="comoIntentoSolucion"
      value={this.state.comoIntentoSolucion}
      onChange={this.handleChange}
      placeholder="Cómo intentó solucionarlo?"
    ></textarea>
  </div>
)}
<div className="form-group">
            <label htmlFor="sabeMasDetalles">¿Sabe más detalles sobre su computadora?</label>
            <input
              type="checkbox"
              id="sabeMasDetalles"
              name="sabeMasDetalles"
              checked={this.state.sabeMasDetalles}
              onChange={this.handleChange}
            />
          </div>
          
<div className="form-group" id="OS">
{this.state.sabeMasDetalles && (
  <>
  <div id="box-os">
                <div className="form-group" id="Selector-OS">
                  <label htmlFor="sistemaOperativo"></label>
                  <select
                    id="sistemaOperativo"
                    name="sistemaOperativo"
                    value={this.state.sistemaOperativo}
                    onChange={this.handleChange}
                  >
                    <option hidden selected>Sistema Operativo</option>
                    <option value="Windows">Windows</option>
                    <option value="MacOS">MacOS</option>
                    <option value="Linux">Linux</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
                <div id="Grupo-OS" className='form-group'>
                  {this.state.sistemaOperativo === "Windows" && (
                    <div className="form-group">
                      <label htmlFor="versionSistema"></label>
                      <select
                        id="versionSistema"
                        name="versionSistema"
                        value={this.state.versionSistema}
                        onChange={this.handleChange}
                      >
                        <option hidden selected>Version S.O </option>
                        <option value="Windows 7">Windows 7</option>
                        <option value="Windows 10">Windows 10</option>
                        <option value="Windows 11">Windows 11</option>
                        {/* Agrega más opciones de versiones de Windows si es necesario */}
                      </select>
                    </div>
                  )}

                  {this.state.sistemaOperativo === "MacOS" && (
                    <div className="form-group">
                      <label htmlFor="versionSistema"></label>
                      <select
                        id="versionSistema"
                        name="versionSistema"
                        value={this.state.versionSistema}
                        onChange={this.handleChange}
                      >
                        <option hidden selected>Version S.O </option>
                        <option value="Catalina">Catalina</option>
                        <option value="Big Sur">Big Sur</option>
                        <option value="Monterey">Monterey</option>
                        {/* Agrega más opciones de versiones de MacOS si es necesario */}
                      </select>
                    </div>
                  )}

                  {this.state.sistemaOperativo === "Linux" && (
                    <div className="form-group">
                      <label htmlFor="versionSistema"></label>
                      <input
                        type="text"
                        id="versionSistema"
                        name="versionSistema"
                        value={this.state.versionSistema}
                        onChange={this.handleChange}
                        placeholder="Especifica la versión de Linux" />
                    </div>
                  )}

                  {this.state.sistemaOperativo === 'Otro' && (
                    <div className="form-group">
                      <label htmlFor="otroSistema"></label>
                      <input
                        type="text"
                        id="otroSistema"
                        name="otroSistema"
                        value={this.state.otroSistema}
                        onChange={this.handleChange}
                        placeholder="Especifica tu Sistema Operativo"
                        required />
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group" id="Selectores">
      <div id="box-dispositivo" class="form-group"> 
      <label htmlFor="tipoDispositivo"></label>
      <select
        id="tipoDispositivo"
        name="tipoDispositivo"
        value={this.state.tipoDispositivo}
        onChange={this.handleChange}
      >
        <option hidden selected>Tipo de Dispositivo</option>
        <option value="Laptop">Laptop</option>
        <option value="Desktop">Desktop</option>
        <option value="Tablet">Tablet</option>
        <option value="Otro">Otro</option>
        {/* Agrega más opciones según sea necesario */}
      </select>
      </div>
      <div class="form-group" id="marcamodelo">
                  <label htmlFor="marcaModelo"></label>
                  <input
                    type="text"
                    id="marcaModelo"
                    name="marcaModelo"
                    value={this.state.marcaModelo}
                    onChange={this.handleChange}
                    placeholder='Marca y Modelo del Dispositivo' />
                </div>
</div>
                </>
)}
</div>
<div className="form-group" id="problema">
  <label htmlFor="problema"></label>
  <textarea
    id="problema"
    name="problema"
    value={this.state.problema}
    onChange={this.handleChange}
    rows="4"
    placeholder='Descripción del Problema'
  ></textarea>
</div>

<div className="form-group" id="aceptaPolitica">
  <label htmlFor="aceptaPolitica">Acepta nuestra Política de Privacidad</label>
  <input
    type="checkbox"
    id="aceptaPolitica"
    name="aceptaPolitica"
    checked={this.state.aceptaPolitica}
    onChange={this.handleChange}
    required
  />
</div>

<button type="submit">Enviar Solicitud</button>

        </form>
      </div>
    );
  }
}

export default Presupuesto;
