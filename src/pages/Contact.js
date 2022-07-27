import React from 'react'
import "../styles/Contact.css"

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{backgroundImage: `url(${process.env.PUBLIC_URL+"images/antonios15.jpg"})`} }>
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" method="POST">
                    <label HtmlFor="name"> Full Name</label>
                    <input name="name" placeholder="Enter Full Name..." type="text"></input>
                    <label HtmlFor="email">Email</label>
                    <input name="email" placeholder="Enter Email..." type="email"></input>
                    <label HtmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Enter Message" name="message" required>{""}</textarea>
                    <button type="submit">Send Message</button>

                </form>
            </div>
            
        </div>
    )
}

export default Contact
