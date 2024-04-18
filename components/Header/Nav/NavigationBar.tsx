import Link from 'next/link'

import Navbar from 'react-bootstrap/Navbar'


import styles from './Nav.module.scss'
import NavItems from './NavItems'
import IconBars from '@/components/Icons/IconBars'




function NavigationBar() {
    return (
        <Navbar expand="lg">
            <div className="container-fluid">
                <Navbar.Brand href="/steamers">
                    <img className={`${styles.logo}`} src="/assets/img/logo/logo-transparent.png" alt="Travel at Style Logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarContent" >
                    <IconBars width='30px' height='30px' />
                </Navbar.Toggle>

                <Navbar.Collapse id="navbarContent">
                    <NavItems />
                </Navbar.Collapse>
            </div>
        </Navbar >
    )
}

export default NavigationBar