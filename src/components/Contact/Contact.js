import React from "react";
import "./Contact.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { RestoreOutlined } from "@material-ui/icons";

export default function Contact() {
    return(
        <>
            <div class="content">
                <h1 class="logoC">☎️Contactanos☎️</h1>

                <div class="contact-wrapper">
                    <div class="contact-form">
                        <form action="">
                        <p>
                            
                            <input placeholder="Nombre" type="text" name="Nombre Completo" />
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
                        <p class="block">
                            
                            <textarea placeholder="Escribe tu consulta aquí" name="Mensaje" rows="3"></textarea>
                        </p>
                        <p class="block">
                            <button type="submit">Enviar</button>
                        </p>
                        </form>
                    </div>
                    <div class="contact-info">
                        <h4>Mas Información</h4>
                        <ul>
                        <li><i class="address"></i>p sherman wallaby 42 sidney</li>
                        <li><i class="phone"></i>12-345-6789</li>
                        <li><i class="mail"></i>soyunmail@hotmail.com</li>
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
    )
}