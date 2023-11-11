import { Link, useLocation, Router, Route } from 'react-router-dom';
import Project from '../components/Project'

function Navigation() {

const currentPage = useLocation().pathname;

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link 
                          to='/About'
                          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                        >
                          About
                        </Link>
                    </li>
                    <li>
                        <Link 
                          to='/Portfolio'
                          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                          Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                          to='/Contact'
                          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                        >
                          Contact
                        </Link>
                    </li>
                    <li id='no-border'>
                        <Link 
                          to='/Resume'
                          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                        >
                          Resume
                        </Link>
                    </li>

                
                </ul>
            </nav>
        </div>
    )
}

export default Navigation