import logo from '../../Assets/imgs/logo-cc-footer.png'
import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'


export function Logo(props) {
return <aside className="logo">
            <Link to="/">
                <img src={logo} alt="Logo cc" />
            </Link>
        </aside>
}
        