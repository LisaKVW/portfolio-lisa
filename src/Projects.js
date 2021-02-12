import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div>
      <h2> Projects </h2>
      <div className="row">
        <div className="col s12 m6" style={{ width: "30%" }}>
          <div className="card" >
            <div className="card-image">
              <img src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              {/* <a className="btn-floating halfway-fab waves-effect waves-light btn right">Site</a>
              <a className="btn-floating waves-effect waves-light btn right" style={{marginTop:"28px", marginRight: "23px"}}>Code</a> */}
              <p className="title"> The Dutch Chef </p>
              <div className="overlay"></div>
              <a href="https://the-dutch-chef.herokuapp.com/" > Site </a>
            </div>
            <div className="card-content" style={{ padding: "8px" }} >
              <p> Site to find delicious recipes and restaurant stories through the eyes of the Dutch Chef.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

// Source tip to have button show up upon hover:
// https://codepen.io/philcheng/pen/YWyYwG 