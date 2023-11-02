import { Link, useLocation } from 'react-router-dom';
import About from './About'

function Navigation() {

const currentPage = useLocation().pathname;

    return (
        <div>
            <nav>
                <ul>
                    {/* <li>
                        <Link 
                          to='/'
                          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                        >
                          <About />
                        </Link>
                    </li> */}
                    <li>
                        <Link 
                          to='/Projects'
                          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                        >
                          Project
                        </Link>
                    </li>

                
                </ul>
            </nav>
        </div>
    )
}

export default Navigation