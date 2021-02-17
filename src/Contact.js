import React, { useState } from 'react'
import axios from 'axios'
import sendmail from './functions/sendmail'

const Contact = () => {
  return (
    < div >
      <h2> Contact</h2>
      <h5> lisavenneker21@gmail.com </h5>

      <img src="https://pics.freeicons.io/uploads/icons/png/4422549621553664904-512.png" alt="github logo" style={{ width: "8%", marginRight: "20%" }}></img>

      <img src="https://180dc.org/wp-content/uploads/2020/01/Linkedin-logo-1-550x550-300x300.png" alt="Linkedin logo" style={{ width: "10%" }}></img>

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