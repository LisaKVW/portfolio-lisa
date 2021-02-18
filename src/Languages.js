import React from 'react'

const Languages = () => {
  return (
    <div style={{ marginTop: "2%" }}>
      <h3> Skills </h3>
      <div className="grid-hold" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", width: "70%", marginTop: "6vh", margin: "0 auto", rowGap: "0", marginTop: "5%", marginBottom: "5%" }}>
        {/* CARD 1 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <img src="https://i.ibb.co/pXNCSjb/iconfinder-code-programming-javascript-software-develop-command-language-652581.png" alt="JS logo" />
          </div>
        </div>
        {/* CARD 2 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <img src="https://i.ibb.co/SrQMVL3/iconfinder-css3-294692.png" alt="CSS logo" />
          </div>
        </div>
        {/* CARD 3 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <img src="https://i.ibb.co/hCcygvc/iconfinder-HTML-Logo-65687.png" alt="HTML logo" />
          </div>
        </div>
        {/* CARD 4 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <img src="https://i.ibb.co/TcpnjKQ/Mongo-DB-Logo.jpg" style={{ width: "45%" }} alt="MongoDB logo" />
          </div>
        </div>
        {/* CARD 5 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <img src="https://i.ibb.co/xMKgSSY/iconfinder-nodejs-512-339733.png" style={{ width: "110%" }} alt="Node.js logo" />
          </div>
        </div>
        {/* CARD 6 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <img src="https://i.ibb.co/Vjqmqxr/express-server-icon.png" style={{ width: "45%" }} alt="Express logo" />
          </div>
        </div>
        {/* CARD 7 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <img src="https://i.ibb.co/rQ7CFZx/iconfinder-react-7423887.png" alt="React logo" />
          </div>
        </div>
        {/* CARD 7 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <img src="https://i.ibb.co/V310Zj6/postgre-SQL-logo.png" style={{ width: "59%" }} alt="PostgreSQL logo" />
          </div>
        </div>
        {/* CARD 9 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <img src="https://i.ibb.co/JcDmLYX/vscode-logo.png" style={{ width: "26%" }} />
          </div>
        </div>
        {/* CARD 10 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <img src="https://i.ibb.co/kMzdzX0/python-Logo.png" style={{ width: "35%" }} alt="Python logo" />
          </div>
        </div>
        {/* CARD 11 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <img src="https://i.ibb.co/z6YfTxV/iconfinder-github-317712.png" alt="Github logo" />
          </div>
        </div>
        {/* CARD 12 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <img src="https://i.ibb.co/5Lc6VP1/31217465-6adbbd18-a98d-11e7-9371-26d578182e9d.png" style={{ width: "26%" }} alt="Insomnia server logo" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Languages

  // < div style = {{ marginTop: "2%" }}>
  //     <h1> Skills </h1>
  //     <img src="https://res.cloudinary.com/lisakvw/image/upload/v1612827956/portfolio-lisa/Languages2_xvijdl.png" />
  //   </div >
