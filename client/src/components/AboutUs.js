import "../App.css";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SSW from "./Images/SSw.png";
import { Grid } from "@mui/material";

function AboutUs() {
  return (
    <div className="App">
      <Header />
      <main className="main" style={{ marginTop: "90px", padding: "0 5%" }}>
        <div
          style={{
            backgroundColor: "#d7e6fc",
            lineHeight: "1.6",
            padding: "8px",
            marginBottom: "40px",
            borderRadius: "5%",
          }}
        >
          <h3>About Developers</h3> Working on Seek Safe Work has been an
          enriching journey for us developers, blending our technical expertise
          with a commitment to social impact. As developers, we've leveraged our
          skills to craft a platform that fosters safety and security in job
          seeking. Collaborative efforts and clear communication have been
          pivotal, guiding us through challenges and enhancing our teamwork.
          Witnessing the tangible difference our platform makes fuels our
          passion for technology with purpose. Despite obstacles, each hurdle
          has fortified our resolve, imparting invaluable lessons. Proudly, Seek
          Safe Work epitomizes the fusion of innovation and altruism, driving us
          to continually evolve as developers and advocate for positive change.
        </div>
        <Grid
          container
          spacing={3}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Grid item xs={12} md={6} style={{ marginTop: "50px" }}>
            <div className="about">
              <h2>About the website</h2>
              <p>
                "SeekSafeWork" is all about finding jobs that are safe and
                secure. It's like looking for work in a place where you know
                you'll be taken care of and won't be in danger. It's about
                wanting to work in a place where you can trust your employer and
                feel safe while doing your job. This platform helps people find
                jobs where they don't have to worry about their safety, and
                where they know they'll be treated well. It's about making sure
                that everyone can work in a place where they feel comfortable
                and protected. "SeekSafeWork" ensures job seekers find
                trustworthy work environments prioritizing safety and security,
                fostering a culture of well-being and respect.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={SSW}
              style={{ borderRadius: "5%", width: "100%", height: "auto" }}
              alt="Seek Safe Work"
            />
          </Grid>
        </Grid>

        <section
          className="services"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1.5em",
          }}
        >
          <div
            className="services-container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="service">
              <h3>Sherley</h3>
              <h5>FullStack Developer</h5>
              <p>
                My role in crafting Seek Safe Work as a backend developer has
                revolved around architecting resilient systems that power
                seamless functionality and data management. Leveraging robust
                technologies and scalable databases, I've engineered the
                backbone of the platform, ensuring reliability and performance
                under varying loads. Crafting Seek Safe Work's backend has been
                a journey of engineering excellence, empowering users with
                secure, high-performance experiences.
              </p>
            </div>
          </div>
        </section>
        <section className="application">
          <h2>
            Take A Vital Look At Our Application Working. And enjoy with SSW
          </h2>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutUs;
