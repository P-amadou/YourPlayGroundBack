import React from 'react'
import { Link} from 'react-router-dom'
import Arrow from './img/leftarrow2_120648.png'
function Parametre(){

    return(
        <div>
           <h1> PARAMETRE </h1>
            <br/>
           <button>Gérer les salles masquées </button><br/>
           <button>Me déconnecter</button><br/>
           <button>Supprimer mon compte</button>
           <br/>
           <br/>
           <Link to="/">
            <img src={Arrow}/>
            </Link>   
        </div>    
    )
}
export default Parametre