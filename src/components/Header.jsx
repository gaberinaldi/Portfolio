import { Link, useLocation } from 'react-router-dom';

function Header() {
    const currentPage = useLocation().pathname;
    
    return (
        <Header>
            <h1>Gabriel Rinaldi</h1>
        </Header>
    )
}

export default Header;