
import React from "react";
import {Main} from "../template/Main";
import './Topic.css'
import LogoEsc from '../../Assets/imgs/EscolasLiterarias.jpg'


export function TopicOne(props) {
return <Main icon="graduation-cap" title="Escolas literarias" subtitle="Um pouco sobre as escolas literarias. Fala: Edoardo paz">
            <div className="display-5">Oque são Escolas literarias?<img src={LogoEsc} alt="" /></div>
            <hr />
            <p className="mb-3 content">Ao todo, existem 14 escolas literárias no mundo e no Brasil, são elas: <strong>Trovadorismo, Humanismo, Classicismo, Quinhentismo, Barroco, Arcadismo, Romantismo, Realismo, Naturalismo, Parnasianismo, Simbolismo, Pré-Modernismo, Modernismo e Tendências Contemporâneas (Pós Modernismo).</strong></p>
            <p className="content">Você já deve saber que a literatura brasileira é dividida em movimentos literários, também chamados de escolas literárias. O que você talvez não saiba ainda é que essa divisão é feita para facilitar o estudo das diferentes estéticas que compõem nossa história literária, bem como para  facilitar o ensino de literatura nas escolas. As primeiras manifestações dessa arte no Brasil surgiram no século XVI, quando os primeiros cronistas escreveram os primeiros registros sobre a terra recém-descoberta e colonizada.</p>
       </Main>
} 
     