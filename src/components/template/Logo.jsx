import Logo from '../../Assets/imgs/logo-cc-footer.png'
import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom'


export default props => 
        <aside className="logo">
            <Link to="/">
                <img src={Logo} alt="Logo cc" />
            </Link>
        </aside>