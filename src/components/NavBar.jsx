import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const currentPage = useLocation().pathname;
    
    return (
        
        <header className='headerStyle'>
          <h1 className='topName'><span className='arrow'>&lt;</span>/Gabriel<span className='arrow'>&gt;</span></h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active red-text' : 'nav-link'}
            style={{color: 'white'}}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Projects"
            className={currentPage === '/Projects' ? 'nav-link active red-text' : 'nav-link'}
            style={{color: 'white'}}
          >
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className= "removeLink"
            className={currentPage === '/Contact' ? 'nav-link active red-text' : 'nav-link'}
            style={{color: 'white'}}
          >
            Contact
          </Link>
        </li>
      </ul>
    </header>
    
    );
}

export default NavBar;
