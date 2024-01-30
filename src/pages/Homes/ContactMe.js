import React from 'react'

function ContactMe() {
  return (
    <section id="contact" className="contact_section">
        <div>
            <h2>Contact Me</h2>
            <p className="contact_text"><a href="mailto:omota4fidelity@gmail.com">Send email</a></p>
            <p className="contact_text">Or</p>
            <br />
            <p className="contact_text">Fill the form below </p>

        </div>
        <form className="contact_form_section">
            <div className="container">
                <label htmlFor="first-name" className="contact-label">
                    <span className="text_md">First Name</span>
                    <input type="text"
                    className="contact_input text_md"
                    name="first-name"
                    id="first-name" 
                    required/>
                </label>
                <label htmlFor="last-name" className="contact-label">
                    <span className="text_md">Last Name</span>
                    <input type="text"
                    className="contact_input text_md"
                    name="last-name"
                    id="last-name" 
                    required/>
                </label>
                <label htmlFor="email" className="contact-label">
                    <span className="text_md">Email</span>
                    <input type="email"
                    className="contact_input text_md"
                    name="email"
                    id="email" 
                    required/>
                </label>
                <label htmlFor="phone-number" className="contact-label">
                    <span className="text_md">Phone Number</span>
                    <input type="phone-number"
                    className="contact_input text_md"
                    name="phone-number"
                    id="phone-number" 
                    required/>
                </label>
            </div>
                <label htmlFor="choose-topic" className="contact-label">
                    <span className="text_md">Choose a Topic</span>
                    <select id="choose-topic" className="contact_input text_md">
                        <option> Select One...</option>
                        <option>I have a Job for you</option>
                        <option>I want to make an enquire</option>
                        <option>I want to collaborate with you</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact-label">
                    <span className="text_md">Message</span>
                    <textarea 
                        className="contact_input text-md" 
                        id="message" cols="30" rows="10"
                        placeholder="Type your message here......" />
                </label>
                <label htmlFor="checkbox" className="checkbox-label">
                    <input type="checkbox"
                    name="checkbox"
                    id="checkbox" 
                    required/>
                    <span className="text_md">I accept the terms</span>
                </label>
                <div>
                    <button className="btn btn_outline_primary">Submit</button>
                </div>
        </form>
    </section>    
  )
}

export default ContactMe