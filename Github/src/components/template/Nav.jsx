import './Nav.css'
import React from 'react'
import {MenuItens} from './MenuItens'


export function Nav(props) {
return <aside className="menu-area">
        <nav className="menu">
            <MenuItens href="/" initialFa="fa" Icon="home" label="Home"/>
            <MenuItens href="topicOne" initialFa="fa" Icon="book" label="Topico 1"/>
            <MenuItens href="topicTwo" initialFa="fa" Icon="book" label="Topico 2"/>
        </nav> 
    </aside>
} 
    