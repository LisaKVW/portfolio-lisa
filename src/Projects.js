import React from 'react'

const Projects = () => {
  return (
    <div>
      <h2> Projects </h2>
      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
              {/* <a class="btn-floating halfway-fab waves-effect waves-light btn right">Site</a>
              <a class="btn-floating waves-effect waves-light btn right" style={{marginTop:"28px", marginRight: "23px"}}>Code</a> */}
            </div>
            <div class="card-content">
              <p>The Dutch Chef </p>
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