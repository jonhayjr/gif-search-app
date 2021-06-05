import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='mb-4 navbar navbar-light bg-light navbar-expand-md d-flex justify-content-around'>
            <ul className='navbar-nav'>
                <li className='nav-item mr-5'><NavLink className='nav-link' to='/search/funny'>Funny</NavLink></li>
                <li className='nav-item mr-5'><NavLink className='nav-link' to='/search/happy'>Happy</NavLink></li>
                <li className='nav-item mr-5'><NavLink className='nav-link' to='/search/hello'>Hello</NavLink></li>
                <li className='nav-item mr-5'><NavLink className='nav-link' to='/search/love'>Love</NavLink></li>
                <li className='nav-item mr-5'><NavLink className='nav-link' to='/search/quiet'>Quiet</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
