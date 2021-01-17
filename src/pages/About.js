import React from 'react';
import "../../src/App.css";
import Footer from '../components/Footer';
import me from "../images/me_mod.jpg";
import me2 from "../images/me_mod2.jpg";
import me3 from "../images/me_mod3.jpg";



function About() {
    
    return (
        <>
            <div className="about">
                <div>
                <img className="mypic" src={me} alt=""/>
                <p className="photocredit">Photo by @sandervillphotos</p>
                </div>
                <div className="welcometext">
                   <h2>Welcome to MySite</h2> 
                   <p>My name is Klaus Jäspi. I'm open-minded, detail oriented{"\n"}and unprompted second year ICT-engineer student from Naantali. </p>
                   <p className="see">See more below</p>
                </div>
                
            </div>

            <div className="mytext-container">
                <div className="photocontainer">
                    <img className="mypic2" src={me2} alt=""/> 
                    <p className="photocredit2">Photo by @sandervillphotos</p>

                    <img className="mypic3" src={me3} alt=""/>
                </div>
                <div className="mytext-section">
                    
                    <div className="introtext">
                        <h3>Get To Know Me</h3>
                        <p>Born in Turku, currently living in Naantali with my Wife and two cats. I'm few months away 26 years old.{"\n"}I'm into programming, hiking, and playing guitar. I'm cheerful, open-minded, self-motivated, and honest personality. It's easy to get along with me. I excel working as a team member, but also on my own.{"\n\n"}</p>
                        <p>I'm on my second yeard of ICT-engineer studies in Turku University of Applied Sciences. My advanced special studies focus on software & project management.{"\n\n"}Along with my studies I've continued working at Turun Osuuskauppa in which I've worked for the past 6 years now. My job description consists from different roles of a retail sales person of which warehouse worker has been my absolute favorite. As a warehouse worker I've had the chance to utilize my best assets: good time management, logical thinking, stress tolerance and skill to work as an individual in a team.{"\n\n\n"}As a committed, passionated and creative student I believe I have a lot to offer for you. I'm open to tell more about myself in person.</p>
                    </div>
                
                
                    <div className="mytext-section2">
                        <div className="introtext">
                            <h3>Programming experience</h3>
                            <h4>Python</h4>

                            <p>The first programming language I learned. During my first year of studies I learned the basics of Python and did some basic functions.{"\n"}On the first semester of second year studies I learned Python back-end programming. Course application was done in virtual machine with pgAdmin 4, Flask, and Postman.</p>
                            
                            <h4>Java</h4>
                            <p>I learned Java on my spare time along with my second semester first year studies. I needed to learn it in short period to develop an android based application with my team members during product development course. My role was to be the chairman{"\n"}Our team succeeded to develop an Android based attendance application which accomplished a shared first place as the best product in a competition within the course.{"\n"}Naturally, we were and still are very proud of this achievement. We used Java as programming language, Android Studio as development platform, and Google's Firebase as database.{"\n\n"}</p>
                            <p>In the summer of 2020 I continued to refine my skills on developing android application and programmed my own app, Frisbeeh.{"\n"}Goal was to learn more and refine my skills, this time on my own.{"\n\n"}In similar fashion I used Java, Android Studio, and Firebase database, but added new content such as working login & sign up options.{"\n\n"}</p>
                            <a href="https://github.com/klausjaspi/Frisbeeh" target="blank">See More: <u>https://github.com/klausjaspi/Frisbeeh</u></a>

                            <h4>Wordpress & Elementor</h4>
                            <p>As a part of my studies, I got to learn Wordpress and Elementor by working with two other students on a commercial project.{"\n"}Project was done in theFIRMA, which is a learning environment in Turku University of Applied Sciences that operates like a real company.</p>
                            <p>{"\n"}I got valuable experience, not only on Wordpress and Elementor, but also on project management and how to carry out a commercial project.</p>

                            <h4>HTML, CSS & JavaScript</h4>
                            <p>Before early fall of 2020 I had no experience on web development, only a deep drive to learn and master it.{"\n"}I watched many tutorials and along them began my trial & error type of learning process.{"\n"}I've grown very passionated about web development and will continue to refine my knowledge on it in future.{"\n\n"}</p>
                            <a href="https://github.com/klausjaspi/Reserve_app" target="blank">My First Website: <u>https://github.com/klausjaspi/Reserve_app</u></a>

                            <h4>React</h4>
                            <p>I wanted to learn more advanced web development and so end up learning React through Sololearn and tutorials.{"\n"}My first React project was a simple To-Do list website done based on a tutorial. Goal was to learn the basics and get some exprerience.{"\n\n"}</p>
                            <a href="https://github.com/klausjaspi/Todo">Check it out: <u>https://github.com/klausjaspi/Todo</u></a>
                            <p>{"\n"}My second and current React project is this website aka. <u>MySite</u>.{"\n"}Like before, I began with tutorial but continued to refine and add parts to it, growing it to a extend.{"\n"}My goal was to learn how to develop a modern and clean website which would also work as my portfolio.{"\n\n"}I hope you've enjoyed your stay!</p>
                        </div>
                    </div>
                </div>
            </div>
            

            <Footer />
        </>
    )
}

export default About;
