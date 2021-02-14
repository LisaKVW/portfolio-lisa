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
              <div className="card-content" style={{ padding: "8px", minHeight: "149px" }} >
                <p> This website is made with my own created recipe database using postgreSQL. As a user you can find delicious recipes and restaurant stories through the eyes of the Dutch Chef and sign-up for updates in the contact tab.</p>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <div className="card" >
              <div className="card-image">
                <img src="https://images.pexels.com/photos/372959/pexels-photo-372959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <p className="title"> Mixology at home </p>
                <div className="overlay"></div>
                <a href="https://mixology-at-home.netlify.app/" > Site </a>
              </div>
              <div className="card-content" style={{ padding: "8px", minHeight: "149px" }} >
                <p> This app uses the cocktaildb API and allows you to find almost any cocktail by name. Had a long day, click the 'Chuck Norris' pun button!.</p>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <div className="card" >
              <div className="card-image">
                <img src="https://images.pexels.com/photos/1441931/pexels-photo-1441931.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <p className="title"> Game Insider </p>
                <div className="overlay"></div>
                <a href="https://game-insider.herokuapp.com/" > Site </a>
              </div>
              <div className="card-content" style={{ padding: "8px", minHeight: "149px" }} >
                <p> This webiste uses the RAWG API for up-to-date video game information. Sign up/in and chat and read game news.</p>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 4 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <div className="card" >
              <div className="card-image">
                <img src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <p className="title"> Weather React</p>
                <div className="overlay"></div>
                <a href="https://your-weather-react.netlify.app/" > Site </a>
              </div>
              <div className="card-content" style={{ padding: "8px", minHeight: "149px" }} >
                <p> A simple weather app made with react. Use the app to find the weather of your searched location in Celcius and Fahrenheit. Weather data provided by OpenWeatherMap API.</p>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 5 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <div className="card" >
              <div className="card-image">
                <img src="https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <p className="title"> Weather Javascript</p>
                <div className="overlay"></div>
                <a href="https://your-weather-javas.netlify.app/" > Site </a>
              </div>
              <div className="card-content" style={{ padding: "8px", minHeight: "149px" }} >
                <p> A simple app to find the weather of your searched location in Celcius and Fahrenheit, made with HTML, CSS and Javascript Weather data provided by OpenWeatherMap API.</p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 bottom div's wrapper and div column gridTempl */}
      </div>
    </div>
  )
}

export default Projects

// Source tip to have button show up upon hover:
// https://codepen.io/philcheng/pen/YWyYwG 