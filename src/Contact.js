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
      <div className="contact-border" style={{ margin: "0 15% 0 15%", border: "5px solid white", borderRadius: "24px", boxShadow: "rgb(238 238 238) 8px 8px 8px 8px", padding: "10px" }}>
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
            <label for="email" style={{ float: "left" }}> Email </label>
            <textarea
              required
              label="email"
              name="email"
              placeholder="email"
              style={{ resize: "none", border: "none", borderBottom: "2px solid black" }}
            />
            <label for="subject" style={{ float: "left" }}> Subject </label>
            <textarea
              required
              label="subject"
              name="subject"
              placeholder="subject"
              style={{ resize: "none", border: "none", borderBottom: "2px solid black" }}
            />
            <label for="message" style={{ float: "left" }}> Message </label>
            <textarea
              required
              multiline
              label="message"
              name="message"
              placeholder="message"
              style={{ resize: "none", border: "none", borderBottom: "2px solid black" }}
            />
            <div class="row" style={{ marginTop: "4%" }}>
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            </button>
            </div>
          </form>
        </div>

      </div>

      <div className="icon-wrap" style={{ marginBottom: "8%", marginTop: "3%" }} >
        <div style={{ display: 'inline', paddingRight: "5%" }}>
          <img src="https://cdn.freelogovectors.net/wp-content/uploads/2016/12/github-logo-mark.png" alt="github logo" style={{ width: "6%", cursor: "pointer" }} onClick={() => window.open("https://github.com/LisaKVW", "_blank")} />
        </div>

        <div style={{ display: 'inline', paddingTop: "10px", paddingLeft: "3%" }}>
          <img src="https://www.freepnglogos.com/uploads/linkedin-basic-round-social-logo-png-13.png" alt="Linkedin logo" style={{ width: "6%", cursor: "pointer" }} onClick={() => window.open("https://www.linkedin.com/in/lisa-venneker-wand/", "_blank")} ></img>
        </div>
      </div>

    </div >
  )
}

export default Contact



  // < div className = "icon-wrap" style = {{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", marginBottom: "15%", marginTop: "7%" }}>
  //       <div className="row">
  //         <div className="col s12 m6" style={{ width: "auto" }}>
  //           <img src="https://pics.freeicons.io/uploads/icons/png/4422549621553664904-512.png" alt="github logo" style={{ width: "14%", marginRight: "0" }}></img>
  //         </div>
  //       </div>

  //       <div className="row">
  //         <div className="col s12 m6" style={{ width: "auto" }}>
  //           <img src="https://180dc.org/wp-content/uploads/2020/01/Linkedin-logo-1-550x550-300x300.png" alt="Linkedin logo" style={{ width: "17%" }}></img>
  //         </div>
  //       </div>
  //     </div >
