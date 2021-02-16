import React, { useState } from 'react'
import axios from 'axios'


const Contact = () => {
  const [data, setData] = useState({ name: '', email: '', message: '', sent: false, buttonText: 'Submit', err: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
  }

  const resetForm = () => {
    setData({
      name: '',
      email: '',
      message: '',
      sent: false,
      buttonText: 'Submit',
      err: ''
    });
  }

  const formSubmit = (e) => {
    e.preventDefault()
    setData({
      ...data,
      buttonText: 'Sending...'
    })

    axios.post('/api/sendmail', data)
      .then(res => {
        if (res.data.result !== 'success') {
          setData({
            ...data,
            buttonText: 'Failed to send',
            sent: false,
            err: 'fail'
          })
          setTimeout(() => {
            resetForm()
          }, 6000)
        } else {
          setData({
            ...data,
            sent: true,
            buttonText: 'Sent',
            err: 'success'
          })
          setTimeout(() => {
            resetForm();
          }, 6000)
        }
      }).catch((err) => {
        console.log(err.response.status)
        setData({
          ...data,
          buttonText: 'Failed to send',
          err: 'fail'
        })
      })
  }

  return (
    <div className="row">
      <form className="col s12">
        {/* Fill in Name */}
        <div className="row">
          <div className="input-field col s12">
            <input placeholder="Name" id="first_name" type="text" className="validate" value={data.name} onChange={handleChange} />
            <label for="first_name">Name</label>
          </div>
        </div>
        {/*Fill in email  */}
        <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" value={data.email} onChange={handleChange} />
            <label for="email">Email</label>
          </div>
        </div>
        {/* Fill in message */}
        <div className="row">
          <div className="input-field col s12">
            <textarea id="icon_prefix2" className="materialize-textarea" value={data.message} onChange={handleChange} ></textarea>
            <label for="icon_prefix2">Message</label>
          </div>
        </div>
        {/* button */}
        <div className="row">
          {/* <button className="btn waves-effect waves-light" type="submit" name="action" onClick={formSubmit}>{data.buttonText}>Submit </button> */}
          <button className="btn waves-effect waves-light" variant="contained" color="primary" onClick={formSubmit}>{data.buttonText}</button>
        </div>
      </form>
    </div>
  )
}

export default Contact

// https://dev.to/ishamjassat/build-and-deploy-a-serverless-reactjs-contact-form-with-nodemailer-and-netlify-functions-532e

  // < div >
  //     <h2> Contact</h2>
  //     <h5> lisavenneker21@gmail.com </h5>

  //     <img src="https://pics.freeicons.io/uploads/icons/png/4422549621553664904-512.png" alt="github logo" style={{ width: "8%", marginRight: "20%" }}></img>

  //     <img src="https://180dc.org/wp-content/uploads/2020/01/Linkedin-logo-1-550x550-300x300.png" alt="Linkedin logo" style={{ width: "10%" }}></img>

  //   </div >