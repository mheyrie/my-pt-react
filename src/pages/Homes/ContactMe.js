import React from 'react'

function ContactMe() {
  return (
    <section id="contact" className="contact_section">
        <div>
            <p className="sub_title">Get In Touch</p>
            <h2>Contact Me</h2>
            <p className="contact_text">Lorem ipsum dolor sit, amet consectetur adipisicing elite.</p>
        </div>
        <form className="contact_form_section">
            <div className="container">
                <label htmlFor="first-name" className="contact-label">
                    <span className="text_fn">First Name</span>
                    <input type="text"
                    className="contact_input_text_fn"
                    name="first-name"
                    id="first-name" 
                    required/>
                </label>
                <label htmlFor="last-name" className="contact-label">
                    <span className="text_ln">Last Name</span>
                    <input type="text"
                    className="contact_input_text_ln"
                    name="last-name"
                    id="last-name" 
                    required/>
                </label>
                <label htmlFor="email" className="contact-label">
                    <span className="text_em">Email</span>
                    <input type="email"
                    className="contact_input_text_em"
                    name="email"
                    id="email" 
                    required/>
                </label>
            </div>
        </form>
    </section>    
  )
}

export default ContactMe