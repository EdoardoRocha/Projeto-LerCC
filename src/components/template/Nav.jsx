import './Nav.css'
import React from 'react'
import {MenuItens} from './MenuItens'


export function Nav(props) {
return <aside className="menu-area">
        <nav className="menu">
            <MenuItens href="/" initialFa="fa" Icon="home" label="Início"/>
            <MenuItens href="topicOne" initialFa="fa" Icon="book" label="Escolas literarias"/>
            <MenuItens href="topicTwo" initialFa="fa" Icon="book" label="O livro"/>
            <MenuItens href="topicThree" initialFa="fa" Icon="book" label="Fala 1"/>
            <MenuItens href="topicFour" initialFa="fa" Icon="book" label="Fala 2"/>
            <MenuItens href="topicFive" initialFa="fa" Icon="book" label="Fala 3"/>
        </nav> 
    </aside>
} 
    