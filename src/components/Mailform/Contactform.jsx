import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactform.scss";

// npm i @emailjs/browser
//using .emailjs.com for make the contact form working
const Contactform = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm("service_jc1wrht", "template_0q2bfgm", form.current, {
          publicKey: "D4O0sMDB9LwkNg83d",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };

  return (
    
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Tell me more about your needs</label>
        <input type="email" name="user_email" />
        <label>Send Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
  );
};

export default Contactform;