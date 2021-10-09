import React from "react";
import './home.css'
import { Main } from "../template/Main";


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

</Main>
}
     