import Link from 'next/link'

import styles from './Nav.module.scss'
import NavItems from './NavItems'
import IconBars from '@/components/Icons/IconBars'

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <img className={`${styles.logo}`} src="/assets/img/logo/logo-transparent.png" alt="Travel at Style Logo" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <IconBars width='30px' height='30px' />
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <NavItems />
                </div>
            </div>
        </nav>
    )
}

export default Nav