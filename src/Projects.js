import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div>
      <h2> Projects </h2>
      <div className="grid-hold" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", width: "80%", marginTop: "6vh", margin: "0 auto", columnGap: "4%", rowGap: "0" }}>
        {/* CARD 1 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <div className="card" >
              <div className="card-image">
                <img src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <p className="title"> The Dutch Chef </p>
                <div className="overlay"></div>
                <a href="https://the-dutch-chef.herokuapp.com/" > Site </a>
              </div>
              <div className="card-content" style={{ padding: "8px", minHeight: "56px" }} >
                <p> Site to find delicious recipes and restaurant stories through the eyes of the Dutch Chef.</p>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <div className="card" >
              <div className="card-image">
                <img src="https://images.pexels.com/photos/1441931/pexels-photo-1441931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <p className="title"> Game Insider </p>
                <div className="overlay"></div>
                <a href="https://game-insider.herokuapp.com/" > Site </a>
              </div>
              <div className="card-content" style={{ padding: "8px", minHeight: "56px" }} >
                <p> Site for all game lovers! Sign up/in and chat and read games.</p>
              </div>
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