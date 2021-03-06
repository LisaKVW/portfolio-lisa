import React, { useState, useEffect } from 'react'

const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true);
    }
  }, []);



  return (
    < div >
      <div className="contact-border" style={{ margin: "0 15% 0 15%", border: "5px solid white", borderRadius: "24px", boxShadow: "rgb(238 238 238) 8px 8px 8px 8px", padding: "15px" }}>
        <h3>CONTACT</h3>
        {success && <p style={{ color: "green" }}>Thanks for your message! </p>}

        <div className="contact-wrap" >
          <form
            name="contact"
            method="POST"
            action="/contact/?success=true"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <label for="name" style={{ float: "left" }}> Name </label>
            <textarea
              required
              label="name"
              name="name"
              placeholder="Name"
              style={{ resize: "none", border: "none", borderBottom: "2px solid black" }}
            />
            <label for="Email" style={{ float: "left" }}> Email </label>
            <textarea
              required
              label="email"
              name="email"
              placeholder="Email"
              style={{ resize: "none", border: "none", borderBottom: "2px solid black" }}
            />
            <label for="sSubject" style={{ float: "left" }}> Subject </label>
            <textarea
              required
              label="subject"
              name="subject"
              placeholder="Subject"
              style={{ resize: "none", border: "none", borderBottom: "2px solid black" }}
            />
            <label for="Message" style={{ float: "left" }}> Message </label>
            <textarea
              required
              multiline
              label="message"
              name="message"
              placeholder="Message"
              style={{ resize: "none", border: "none", borderBottom: "2px solid black" }}
            />
            <div class="row" style={{ marginTop: "4%" }}>
              <button class="btn waves-effect waves-light" type="submit" name="action">Send Message
            </button>
            </div>
          </form>
        </div>

      </div>

      <div className="icon-wrap" style={{ marginBottom: "4%", marginTop: "3%" }} >
        <h3 style={{ marginBottom: "3%" }}>Connect</h3>
        <div style={{ display: 'inline', paddingRight: "5%" }}>
          <img src="https://cdn.freelogovectors.net/wp-content/uploads/2016/12/github-logo-mark.png" alt="github logo" style={{ width: "8%", cursor: "pointer" }} onClick={() => window.open("https://github.com/LisaKVW", "_blank")} />
        </div>

        <div style={{ display: 'inline', paddingTop: "10px", paddingLeft: "3%" }}>
          <img src="https://www.freepnglogos.com/uploads/linkedin-basic-round-social-logo-png-13.png" alt="Linkedin logo" style={{ width: "8%", cursor: "pointer" }} onClick={() => window.open("https://www.linkedin.com/in/lisa-venneker-wand/", "_blank")} ></img>
        </div>
      </div>

    </div >
  )
}

export default Contact



