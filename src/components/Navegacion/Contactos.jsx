import {React,useState,useEffect} from 'react'
import "./Navegacion.css"
import { useLocation } from "react-router-dom";

function Contactos() {
  const location = useLocation();

  useEffect(() => {
    // Desplázate al principio cada vez que la ruta cambie
    window.scrollTo(0, 0);
  }, [location.pathname]); // La dependencia es la ruta actual


  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '', // Campo de teléfono
    mensaje: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para validar los datos del formulario antes de enviarlos
    // Por ejemplo, puedes verificar si los campos están llenos o si el formato del correo electrónico es válido
    // Puedes usar librerías como Yup para validaciones más complejas
    console.log('Datos del formulario:', formData);
    // Lógica de envío o manejo de datos aquí...
  };

  return (
    <div className="contactoForm">
      <h2 className="contacto-titulo">Formulario de Contacto</h2>
      <form className="contacto-formulario" onSubmit={handleSubmit}>
        <label className="contacto-label" htmlFor="nombre">Nombre:</label>
        <input
          className="contacto-input"
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          required
        />

        <label className="contacto-label" htmlFor="email">Email:</label>
        <input
          className="contacto-input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label className="contacto-label" htmlFor="telefono">Teléfono (opcional):</label>
        <input
          className="contacto-input"
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
          // No se establece como "required" para que sea opcional
        />

        <label className="contacto-label" htmlFor="mensaje">Mensaje:</label>
        <textarea
          className="contacto-input contacto-textarea"
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleInputChange}
          required
        ></textarea>

        <input className="contacto-boton" type="submit" value="Enviar" />
      </form>
    </div>
  );
}


export default Contactos