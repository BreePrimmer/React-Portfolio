import { Outlet } from 'react-router-dom';
import Navigation from './navigation'


function Header() {
    return (
        <div className="navbar">
            <header>
                <h1>Bree</h1>
            </header>
            <Navigation>
                
            </Navigation>
            <Outlet />
        </div>
    )
}

export default Header