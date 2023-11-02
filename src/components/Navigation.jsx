import { Link, useLocation } from 'react-router-dom';
import About from '../pages/About'

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
                          to='/About'
                          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
                        >
                          About
                        </Link>
                    </li>

                
                </ul>
            </nav>
        </div>
    )
}

export default Navigation