import React from "react";
import { useForm } from "react-hook-form";

const S4Contact = (props) => {
    const {register, formState:{errors}, handleSubmit} = useForm("");
    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        <section className="section-contact title" id="contact">
            <h2>CONTACT</h2>
            <div className="contact-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="nombre" id="nombre" required placeholder="Full Name *" {...register('Nombre', {required:true})}/>
                    {errors.Nombre?.type === 'required' && <p style={{color:"red"}}> El campo nombre es obligatorio </p>}
                    <input type="email" name="email" id="email" required placeholder="Email *" {...register('email', {required:true, pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/})}/>
                    {errors.email?.type === 'pattern' && <p style={{color:"red"}}> El formato es incorrecto </p>}
                    <textarea name="mensaje" id="mensaje" required placeholder="Message" {...register('Mensaje', {maxLength:100})}/>
                    <button className="enviar-button button" type="submit">SEND</button>
                </form>
            </div>
        </section>
    )
}

export default S4Contact;

