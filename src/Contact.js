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
            multiline
            label="message"
            name="message"
            placeholder="message"
          />
          <button type="submit">Send</button>
        </form>
      </div>

    </div >
  )
}

export default Contact

// https://www.gatsbyjs.com/docs/building-a-contact-form#reach-skip-nav

// GOOD: https://dev.to/deboragaleano/how-to-create-a-netlify-contact-form-in-react-5bma

// < div >
//     <h2> Contact</h2>
//     <h5> lisavenneker21@gmail.com </h5>

//     <img src="https://pics.freeicons.io/uploads/icons/png/4422549621553664904-512.png" alt="github logo" style={{ width: "8%", marginRight: "20%" }}></img>

//     <img src="https://180dc.org/wp-content/uploads/2020/01/Linkedin-logo-1-550x550-300x300.png" alt="Linkedin logo" style={{ width: "10%" }}></img>

//   </div >

{/* <div className="row">
        <form className="col s12"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Name" id="first_name" type="text" className="validate"/>
              <label for="first_name">Name</label>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
            </div>

            <div className="row">
              <div className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea" type="text" ></textarea>
                    <label for="textarea1"> Message</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <button class="btn waves-effect waves-light" type="submit" name="action">Submit
              </button>
            </div>

          </div>
        </form>
      </div> */}