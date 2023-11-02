import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer>
                <ul>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/BreePrimmer">Github</a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/">LinkedIn</a></li>
                    <li id='no-border'><a target='_blank' rel='noopener noreferrer' href="https://stackoverflow.com/">Stack Overflow</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer