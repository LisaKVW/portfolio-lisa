import React from 'react'

const Languages = () => {
  return (
    <div style={{ marginTop: "2%" }}>
      <h1> Skills </h1>
      <div className="grid-hold" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", width: "80%", marginTop: "6vh", margin: "0 auto", columnGap: "4%", rowGap: "0" }}>
        {/* CARD 1 */}
        <div className="row">
          <div className="col s12 m6" style={{ width: "auto" }}>
            <div className="card" >
              <div className="card-image">
                <img src="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png" />
              </div>
            </div>
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
