import React from 'react'
import { Link} from 'react-router-dom'
import Arrow from './img/leftarrow2_120648.png'
function Profil(){

    return(
        <div>
           <h1> PROFIL </h1>
            <Link to="/">
            <img src={Arrow}/>
            </Link>   
        
        </div>    
    )
}
export default Profil