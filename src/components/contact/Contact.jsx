import React from "react";
import { GoMail, GoLocation } from "react-icons/go";
import './contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ScrollAnimation from "react-animate-on-scroll";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qhck3h8', 'template_itddlwl', form.current, 'mq_k-_u4rfDapOITg')

        e.target.reset()
  };

    return (
        <section id='contact'>
            <div className="contact-container">
                <div className="separateur"/>
                <br/>
                <div className="separateur"/>
                <br/>
                <div className="separateur"/>
                <br/>
                <h5>Comment me contacter</h5>
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <div className="contact_container">
                        <div className="contact_option">
                            <a href="mailto:elegrand.ledantec@gmail.com">
                                <article className="contact_mail">    
                                    <GoMail />                 
                                    <h4>Mail</h4>
                                    <br/>
                                    <p>elegrand.ledantec@gmail.com</p>                      
                                </article>
                            </a>
                            <a href="https://www.google.com/maps/place/22300+Lannion/@48.7454266,-3.5397786,12z/data=!3m1!4b1!4m5!3m4!1s0x48122b8ac523c539:0x40ca5cd36e63400!8m2!3d48.732084!4d-3.459144">
                                <article className="localisation">
        
                                    <GoLocation/>
                                    <div className="localisation-text">
                                        <h4>Localisation</h4>
                                        <br/>
                                        <p>Lannion</p>
                                        <p>Côtes-D'Armor</p>
                                    </div>
        
                                </article>
                            </a>
                        </div>
                        <form ref={form} onSubmit={sendEmail}>             {/*Formulaire passe par EmailJS pour envoyer un mail*/}
                            <input type="text" name='name' placeholder='Nom' required />
                            <input type="email" name='email' placeholder="Email" required />
                            <textarea name="message" id="" rows="7" placeholder="Message" required></textarea>
                            <button type="submit" className="btn btn-primary"><p2>Envoi</p2></button>
                        </form>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}

export default Contact;