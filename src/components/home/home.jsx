import React from "react";
import './home.css'
import { Main } from "../template/Main";
import Logo from '../../Assets/imgs/AnjoRouco.jpg'
import LogoAutor from '../../Assets/imgs/Autor.jpg'

export function Home(props) {
return <Main icon="home" title="Apresentação semestral" subtitle="Apresentação do Ler CC" >
    <div className="display-4" id="titulo">Bem vindos!!</div>
    <hr />
    <p className="mb-0">Equipe do trabalho:</p>
    <ul>
        <li>Edoardo</li>
        <li>Kauan</li>
        <li>Mateus</li>
        <li>Paulo Emanuel</li>
    </ul>
     <hr />

    <div id="sinopse">
        <p>Apresentação do trabalho de literatura</p>
    </div>
    <h4>Apresentação que diz respeito ao livro: Anjo Rouco <a href="https://www.gazetadopovo.com.br/educacao/as-descobertas-da-adolescencia-em-forma-de-suspense-5ewb8zbrml0bge7hhjnumxavi/#:~:text=O%20Anjo%20Rouco%20conta%20a,a%20conviv%C3%AAncia%20entre%20os%20jovens.">(Clique para saber mais).</a></h4>
    <abbr title="Capa do livro anjo rouco"><img className="template" src={Logo} alt="Capa do livro anjo rouco" /> </abbr>
   <abbr title="Autor do livro anjo rouco"> <img className="template"  src={LogoAutor} alt="Autor do livro anjo rouco" /> </abbr>
    
    
</Main>

     
}