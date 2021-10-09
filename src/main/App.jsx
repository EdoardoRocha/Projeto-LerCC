import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


import { HashRouter } from 'react-router-dom';

import Footer from '../components/template/Footer';
import Logo from '../components/template/Logo';
import Header from '../components/template/Header';
import Nav from '../components/template/Nav';
import Routes from './Routes';


import './App.css'

export default props =>

<HashRouter>
    <div className="app">
        <Header/>
        <Logo/>
        <Nav/> 
        <Routes/>
        <Footer/>
    </div>
</HashRouter>