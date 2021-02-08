import React from 'react'

const Bio = () => {
  return (
    <div className="bio-wrap" style={{marginTop: "2vh"}}>
      <div className="grid-hold" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", width: "92%", marginTop: "6vh", margin: "0 auto", gridGap: "2%" }}>
        <section >
          <img src="https://i.imgur.com/HFuTbKS.jpg" style={{ width: "70%", marginTop: "22px", borderRadius: "6px" }} />
        </section>

        <section className="about-me">
          <h1> About Me </h1>
          <p> I am a former Michelin star Chef-de-Parti turned full stack software engineer/sales egineer with a high drive to continuously learn and develop exciting innovations.
              My professional background in hospitality operations and sales management have developed my forte for solving complex problems and created my strong interpersonal skills.
              I am thrilled to deliver efficient debugging solutions and to create new exciting web-pages/apps.
          </p>
        </section>
      </div>
    </div>
  )
}
export default Bio