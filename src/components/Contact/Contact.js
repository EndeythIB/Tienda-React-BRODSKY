import React from "react";

//StyleSheet
import "./Contact.css";

//External Components
import "bootstrap/dist/css/bootstrap.min.css";

export default function Contact() {
  return (
    <>
      <div className="content">
        <h1 className="logoC">☎️Contactanos☎️</h1>

        <div className="contact-wrapper">
          <div className="contact-form">
            <form action="">
              <p>
                <input
                  placeholder="Nombre"
                  type="text"
                  name="Nombre Completo"
                />
              </p>
              <p>
                <input placeholder="Apellido" type="email" name="Email" />
              </p>
              <p>
                <input placeholder="Email" type="tel" name="Telefono" />
              </p>
              <p>
                <input placeholder="Teléfono" type="text" name="Teléfono" />
              </p>
              <p className="block">
                <textarea
                  placeholder="Escribe tu consulta aquí"
                  name="Mensaje"
                  rows="3"
                ></textarea>
              </p>
              <p className="block">
                <button type="submit">Enviar</button>
              </p>
            </form>
          </div>
          <div className="contact-info">
            <h4>Mas Información</h4>
            <ul>
              <li>
                <i className="address"></i>p sherman wallaby 42 sidney
              </li>
              <li>
                <i className="phone"></i>12-345-6789
              </li>
              <li>
                <i className="mail"></i>soyunmail@hotmail.com
              </li>
            </ul>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              voluptate quae dolore quo molestias itaque similique tempora
              eveniet, a ex?
            </p>
            <p>Fulanito de Tal</p>
          </div>
        </div>
      </div>
    </>
  );
}
