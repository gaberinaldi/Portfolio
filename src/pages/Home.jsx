import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaBootstrap, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import avi from "../images/avi.png";
import cartoon from "../images/cartoon.png";

export default function Home() {
    return (
        <div className="about">
            <div className="profile-home">
            <div className="homeText">
            <h1>Hello there,</h1>
            <div className="typewriter">
            <h1 className="effect">my name is <span className="firstName">Gabriel</span> Rinaldi</h1>
            </div>
            <p>
                I'm a motivated 21 year old Front-End Developer based in Salt Lake City, UT. &#128205;
            </p>
            </div>
            <div className="profile-pic">
            <img src={avi} />
            </div>
            </div>
            <div className="bio">
                <div className="bioPic">
                    <img src={cartoon} />
                    </div>
                    <div className="bioText">
                        <h1>About <span className="bioTitle">me</span></h1>
                        <p>I grew up in a small town in California known as Vacaville, where I spent my childhood building computers and learning everything I could about them. During the summer of 2023 I decided to finally pursue a career in tech, I enrolled in the University of California, Davis Full Stack Development program. Since then, I was offered a job as a Nintendo Brand Ambassador in Salt Lake City, where myself, my beautiful girlfriend, and 3 year old German Shepherd Dakota now reside. I've been coding for less then a year, but have no doubt that my current skillset and passion for learning will make me a beneficial member to any development team.   </p>
                        </div>
                </div>
            <div className="skills">
                <div className="skillsTitle">
                    <h1>Technologies</h1>
                    </div>
                    <div className="skillsIcons">
                    <IconContext.Provider value={{ className: "icon-hover" }}>
 <FaHtml5 />
 <FaCss3Alt />
 <FaJsSquare />
 <FaReact />
 <FaNodeJs />
 <FaBootstrap />
 <FaGithub />
</IconContext.Provider>
                        </div>
                </div>    
        </div>
    );
};