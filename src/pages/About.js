import React from "react";
import "../../src/App.css";
import Footer from "../components/Footer";
import me from "../images/me_mod.jpg";
import me2 from "../images/me_mod2.jpg";
import me3 from "../images/me_mod3.jpg";

function About() {
  return (
    <>
      <div className="about">
        <div>
          <img className="mypic" src={me} alt="" />
          <p className="photocredit">Photo by @sandervillphotos</p>
        </div>
        <div className="welcometext">
          <h2>Welcome to MySite</h2>
          <p>
            My name is Klaus Jäspi. I'm open-minded, detail oriented{"\n"}and
            unprompted third year ICT-engineer student from Naantali.{" "}
          </p>
          <p className="see">See more below</p>
        </div>
      </div>

      <div className="mytext-container">
        <div className="photocontainer">
          <img className="mypic2" src={me2} alt="" />
          <p className="photocredit2">Photo by @sandervillphotos</p>

          <img className="mypic3" src={me3} alt="" />
        </div>
        <div className="mytext-section">
          <div className="introtext">
            <h3>Get To Know Me</h3>
            <p>
              I'm 26 years old, born in Turku. I'm currently living in Naantali
              with my Wife and our two cats.{"\n"}
              I'm into programming, hiking, and playing guitar. I'm cheerful,
              open-minded, self-motivated, and honest personality. It's easy to
              get along with me. I excel working as a team member, but also on
              my own.{"\n"}
            </p>
            <p>
              I'm enthusiastic and I see challenges as opportunities to grow
              from.{"\n\n"}
            </p>
            <p>
              I'm on my third year of ICT-engineer studies in Turku University
              of Applied Sciences. I'm proud to say that I work as a Software
              Developer at Sofokus, my aim is to continuously develop myself and
              my skills. My advanced special studies focus on software & project
              management.
            </p>
          </div>

          <div className="mytext-section2">
            <div className="introtext">
              <h3>Programming experience</h3>
              <h4>Python</h4>

              <p>
                The first programming language I learned. During my first year
                of studies I learned the basics of Python and did some basic
                functions.{"\n"}On the first semester of second year studies I
                learned Python back-end programming. Course application was done
                in virtual machine with pgAdmin 4, Flask, and Postman.
              </p>

              <h4>Java</h4>
              <p>
                I learned Java on my spare time along with my second semester
                first year studies. I needed to learn it in short period to
                develop an android based application with my team members during
                product development course. My role was to be the chairman{"\n"}
                Our team succeeded to develop an Android based attendance
                application which accomplished a shared first place as the best
                product in a competition within the course.{"\n"}Naturally, we
                were and still are very proud of this achievement. We used Java
                as programming language, Android Studio as development platform,
                and Google's Firebase as database.{"\n\n"}
              </p>
              <p>
                In the summer of 2020 I continued to refine my skills on
                developing android application and programmed my own app,
                Frisbeeh.{"\n"}Goal was to learn more and refine my skills, this
                time on my own.{"\n\n"}In similar fashion I used Java, Android
                Studio, and Firebase database, but added new content such as
                working login & sign up options.{"\n\n"}
              </p>
              <a href="https://github.com/klausjaspi/Frisbeeh" target="blank">
                See More: <u>https://github.com/klausjaspi/Frisbeeh</u>
              </a>

              <h4>Wordpress & Elementor</h4>
              <p>
                As a part of my studies, I got to learn Wordpress and Elementor
                by working with two other students on a commercial project.
                {"\n"}Project was done in theFIRMA, which is a learning
                environment in Turku University of Applied Sciences that
                operates like a real company.
              </p>
              <p>
                {"\n"}I got valuable experience, not only on Wordpress and
                Elementor, but also on project management and how to carry out a
                commercial project.
              </p>

              <p>
                In April 2021 my half an year trainee position at Sofokus began
                and I learned how to do WordPress on a professional level. For
                example, I learned to do acf custom Gutenberg blocks of which I
                had not even heard of before. I'm excited and cant't wait to get
                more professional level experience on this!
              </p>

              <h4>PHP</h4>
              <p>
                I had no experience on php prior joining Sofokus in April 2021.
                I got the hang of it quite quickly and have learned a lot since.
                I've used php especially in WordPress acf custom block
                development.{"\n"}I will continue to polish my skills on PHP in
                the future.
              </p>

              <h4>Django</h4>
              <p>
                I've had the opportunity to practice my skills on Django on a
                professional level at Sofokus.{"\n"}I've also done few my own practice
                projects on Django on my own. I'm very eager to learn more
                on this subject, especially on professional level.
              </p>

              <h4>HTML, CSS & JavaScript</h4>
              <p>
                Before early fall of 2020 I had no experience on web
                development, only a deep drive to learn and master it.{"\n"}I
                watched many tutorials and along them began my trial & error
                type of learning process.{"\n"}I've learned a lot since the fall
                of 2020 and have had (and still do) the chance to work on these
                on a professional level.{"\n\n"}
              </p>
              <a
                href="https://github.com/klausjaspi/Reserve_app"
                target="blank"
              >
                My First Website:{" "}
                <u>https://github.com/klausjaspi/Reserve_app</u>
              </a>

              <h4>React</h4>
              <p>
                I wanted to learn more advanced web development and so end up
                learning React through Sololearn and tutorials.{"\n"}
                My first React project was a simple To-Do list website done
                based on a tutorial. Goal was to learn the basics and get some
                exprerience.{"\n\n"}
              </p>
              <a href="https://github.com/klausjaspi/Todo">
                Check it out: <u>https://github.com/klausjaspi/Todo</u>
              </a>
              <p>
                {"\n"}My second and current React project is this website aka.{" "}
                <a href="https://mysite-klausjaspi.vercel.app/">
                  <u>MySite</u>
                </a>
                .{"\n"}Like before, I began with tutorial but continued to
                refine and add parts to it, growing it to a extend.{"\n"}My goal
                was to learn how to develop a modern and clean website which
                would also work as my portfolio.{"\n\n"}I hope you've enjoyed
                your stay!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
