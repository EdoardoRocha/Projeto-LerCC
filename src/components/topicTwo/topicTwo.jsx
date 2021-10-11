
import React from "react";
import {Main} from "../template/Main";
import Logo1 from '../../Assets/imgs/PauloVenturelli.jpg'
import Logo2 from '../../Assets/imgs/PauloVenturelli(2).jpg'
import Logo3 from '../../Assets/imgs/PauloVenturelli(3).jpg'
import './topicTwo.css'

export function topicTwo(props) {
return <Main icon="graduation-cap" title="O livro Anjo Rouco" subtitle="Anjo Rouco livro de Paulo Venturelli. Fala: Edoardo Paz">
    <div className="display-4">O Anjo Rouco</div>
    <hr />
    <p className="mb-2">O livro O anjo rouco, de Paulo Venturelli, classificado, comercialmente, como novela juvenil, é repleto de ficção e mistério.</p>
    
    
    {/*<img className="autorImg " src={Logo1} alt="" /> <img className="autorImg" src={Logo2} alt="" /> <img className="autorImg" src={Logo3} alt="" />*/}
</Main>
}
     