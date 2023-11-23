import { Link, useLocation } from 'react-router-dom';

function Header() {
    const currentPage = useLocation().pathname;
    
    return (
            <h1>Gabriel Rinaldi</h1> 
    )
}

export default Header;