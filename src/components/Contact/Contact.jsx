import React from 'react'
import './Contact.css'
import contact from '../../assets/contact.png'
function Contact() {
  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={contact} alt=""/>
      </div>

      <div className="rightcontact">
      <form action="https://formspree.io/f/xblnbyyn" method='POST'>
        <input name="UserName" type="text" placeholder="Name"/>
        <input name="Email" type="email" placeholder="Email"/>

        <textarea name="message" id="textarea" placeholder="Message me"/>

        <input type="submit" id="btn" value="submit" />
      </form>
      </div>
    </div>
  )
}

export default Contact
