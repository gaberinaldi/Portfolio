import { Link, useLocation } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';
import { IconContext } from "react-icons";

const Footer = () => {
    const handleIconClick = (url) => {
        window.open(url, '_blank');
    };
    
    return (
        <footer className='footerStyle'>
            <h1 className='bottomName'><span className='arrow'>&lt;</span>/Gabriel<span className='arrow'>&gt;</span></h1>
            <p className='finePrint'>Thank you for visiting! Be sure to click on the icons below to get in contact or keep up with my latest projects and updates.&#128077;</p>
            <div className='contactIcons'>
            <IconContext.Provider value={{ className: "contact-hover" }}>
            <FaLinkedin onClick={() => handleIconClick('https://www.linkedin.com/in/gabe-rinaldi/')} />
            <FaGithub onClick={() => handleIconClick('https://github.com/gaberinaldi')} />
            <FaDiscord onClick={() => handleIconClick('https://discord.com/users/744026887885684897')} />
            </IconContext.Provider>
            </div>
        </footer> 
    );
}

export default Footer;