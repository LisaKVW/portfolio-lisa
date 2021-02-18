import React from 'react'

const Bio = () => {
  return (
    <div className="bio-wrap" style={{ marginTop: "2vh" }}>
      <div className="grid-hold" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", width: "85%", marginTop: "6vh", margin: "0 auto" }}>
        <section >
          <img src="https://i.imgur.com/HFuTbKS.jpg" style={{ width: "70%", marginTop: "22px", borderRadius: "6px" }} />
        </section>

        <section className="about-me">
          <h1> About Me </h1>
          <p style={{ fontSize: "16px" }}>
            I am a software engineer/sales egineer with a high drive to continuously learn and develop exciting innovations.
            My professional background in hospitality operations and sales management have developed my forte for solving complex problems, created my strong interpersonal skills and gave me the ability work in
            large collaborative teams. I am thrilled to deliver efficient debugging solutions and eager to create/deploy new exciting
            features to production and to new apps/sites.
          </p>
        </section>
      </div>
    </div>
  )
}
export default Bio