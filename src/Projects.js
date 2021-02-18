import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div>
      <h3> Projects </h3>
      <div className="grid-hold" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", width: "80%", marginTop: "6vh", margin: "0 auto", columnGap: "4%", rowGap: "0" }}>
        {/* CARD 1 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <div className="card" >
              <div className="card-image">
                <img src="https://images.pexels.com/photos/6834087/pexels-photo-6834087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="matcha pancakes" />
                <p className="title" > The Dutch Chef </p>
                <div className="overlay"></div>
                <a href="https://the-dutch-chef.herokuapp.com/" > Site </a>
                <div className="card-content" style={{ padding: "8px", minHeight: "21vh" }} >
                  <p> A PERN fullstack site. As an user you can find delicious recipes and restaurant stories through the eyes of the Dutch Chef. Sign-up for updates in the contact tab, created vwith Mailchimp API. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <div className="card" >
              <div className="card-image">
                <img src="https://images.pexels.com/photos/4946725/pexels-photo-4946725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="old fashion" />
                <p className="title"> Mixology at home </p>
                <div className="overlay"></div>
                <a href="https://mixology-at-home.netlify.app/" > Site </a>
              </div>
              <div className="card-content" style={{ padding: "8px", height: "21vh" }} >
                <p> This app uses the cocktailDB API and allows you to find almost any cocktail by name. For fun a 'Chuck Norris' pun button has been added, this for some good puns while mixing drinks.</p>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <div className="card" >
              <div className="card-image">
                <img src="https://images.pexels.com/photos/2708981/pexels-photo-2708981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="gameboy old school" />
                <p className="title"> Game Insider </p>
                <div className="overlay"></div>
                <a href="https://game-insider.herokuapp.com/" > Site </a>
              </div>
              <div className="card-content" style={{ padding: "8px", height: "21vh" }} >
                <p> A MERN fullstack site, using the RAWG API for up-to-date video game information. Sign up/in and chat and read game news.</p>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 4 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <div className="card" >
              <div className="card-image">
                <img src="https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="rain man with umbrella" />
                <p className="title" style={{ color: "black" }}> Weather React</p>
                <div className="overlay"></div>
                <a href="https://your-weather-react.netlify.app/" > Site </a>
              </div>
              <div className="card-content" style={{ padding: "8px", height: "21vh" }} >
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
                <img src="https://images.pexels.com/photos/364100/pexels-photo-364100.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="purle sky palm trees" />
                <p className="title" style={{ color: "black" }}> Weather Javascript</p>
                <div className="overlay"></div>
                <a href="https://your-weather-javascript.netlify.app/" > Site </a>
              </div>
              <div className="card-content" style={{ padding: "8px", height: "21vh" }} >
                <p> A simple app to find the weather of your searched location in Celcius and Fahrenheit, made with HTML, CSS and Vanilla Javascript Weather data provided by OpenWeatherMap API.</p>
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