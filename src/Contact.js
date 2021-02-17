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
      <h3>CONTACT</h3>
      {success && <p style={{ color: "green" }}>Thanks for your message! </p>}

      <div className="contact-wrap" style={{ margin: "0 20% 0 20%" }}>
        <form
          name="contact"
          method="POST"
          action="/contact/?success=true"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact" />
          <textarea
            required
            label="name"
            name="name"
            placeholder="Name"
          />
          <textarea
            required
            label="email"
            name="email"
            placeholder="email"
          />
          <textarea
            required
            label="subject"
            name="subject"
            placeholder=""
          />
          <textarea
            required
            multiline
            label="message"
            name="message"
            placeholder="message"
          />
          <div class="row">
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
            </button>
          </div>
        </form>
      </div>

    </div >
  )
}

export default Contact



//     <img src="https://pics.freeicons.io/uploads/icons/png/4422549621553664904-512.png" alt="github logo" style={{ width: "8%", marginRight: "20%" }}></img>

//     <img src="https://180dc.org/wp-content/uploads/2020/01/Linkedin-logo-1-550x550-300x300.png" alt="Linkedin logo" style={{ width: "10%" }}></img>

