import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


import { HashRouter } from 'react-router-dom';

import { Footer } from '../components/template/Footer.jsx';
import { Logo } from '../components/template/Logo';

import { Nav } from '../components/template/Nav';
import { Routes } from './Routes';


import './App.css'

export function App(props) {
return <HashRouter>
    <div className="app">
        <Logo/>
        <Nav/> 
        <Routes/>
        <Footer/>
    </div>
</HashRouter>
}

