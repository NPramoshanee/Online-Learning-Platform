import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253126.30373628865!2d80.80393600000001!3d7.564239550000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3562eb7e6edc3%3A0x67769fedbd2ecbad!2sLaggala-Pallegama!5e0!3m2!1sen!2slk!4v1741916508183!5m2!1sen!2slk";
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
          <iframe
              src={map}
              title="Laggala Pallegama Map"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>203 Laggala Pallegama, Mathale, Sri Lanka.</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@nadeeshaekanayaka.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +94718715637</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
