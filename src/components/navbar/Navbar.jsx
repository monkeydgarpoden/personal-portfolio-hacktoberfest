import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    const [click,setClick] = useState(false)
    const [button,setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    // eslint-disable-next-line no-unused-vars
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
        
    },[])

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Portfolio <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link className='nav-links' to='/' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-links' to='/projects' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-links' to='/experience' onClick={closeMobileMenu}>
                                Experience
                            </Link>
                        </li>
                    </ul>
                </div> 
            </nav>
        </>
    )
}
