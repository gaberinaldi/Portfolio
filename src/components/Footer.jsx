import { Link, useLocation } from 'react-router-dom';



function Footer() {
    const currentPage = useLocation().pathname;
    
    return (
        <footer className='footerStyle'>
            {/* <p><h1 className='bottomName'><span className='arrow'>&lt;</span>/Gabriel<span className='arrow'>&gt;</span></h1></p> */}
        </footer> 
    );
}

export default Footer;