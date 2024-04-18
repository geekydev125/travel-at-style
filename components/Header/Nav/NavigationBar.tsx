"use client"
import Navbar from 'react-bootstrap/Navbar'
import NextLink from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

import styles from './Nav.module.scss'
import NavItems from './NavItems'
import IconBars from '@/components/Icons/IconBars'

function NavigationBar() {
    const location = usePathname()
    const [numRender, setNumRender] = useState<number>(0)
    const [expanded, setExpanded] = useState<boolean>(false)
    const navButtonRef = useRef<HTMLButtonElement | null>(null);
    const navbarCollapseRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        if (numRender < 1) {
            setNumRender(numRender + 1);
            setExpanded(false)
        } else {
            setExpanded(false)
            collapseNav()
        }
    }, [location])

    function collapseNav() {
        if (navButtonRef.current !== null) {
            navButtonRef.current.click();
        }

        if (navbarCollapseRef.current !== null ) {
            navbarCollapseRef.current.click();
        }

        setExpanded(false)
    }


    return (
        <Navbar expand="lg" expanded={expanded} fixed='top' className='background-pattern-wood' >
            <div className="container-fluid px-3 px-lg-5">
                <NextLink onClick={collapseNav} href="/steamers" className='d-lg-none py-1'>
                    <img className={`${styles.logo}`} src="/assets/img/logo/logo-transparent.png" alt="Travel at Style Logo" />
                </NextLink>

                <Navbar.Toggle aria-controls="navbarContent" ref={navButtonRef} onClick={() => setExpanded(() => !expanded)}>
                    <IconBars width='30px' height='30px' />
                </Navbar.Toggle>

                <Navbar.Collapse id="navbarContent" ref={navbarCollapseRef} className='pt-3 pt-lg-0 pb-2 pb-lg-0'>
                    <NavItems collapseNav={collapseNav} />
                </Navbar.Collapse>
            </div>
        </Navbar >
    )
}

export default NavigationBar