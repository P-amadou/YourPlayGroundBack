import React from 'react'
import { Link} from 'react-router-dom'
import Arrow from './img/leftarrow2_120648.png'
import Pen from './img/↳Color.png'
function Profil(){

    return(
        <div>
           <h1> PROFIL </h1>
           <h3>Modifier les données personnelles</h3>
           <ul>
               <li><input type="text" placeholder="Nom"/><button><img src={Pen}/></button></li><br/>
               <li><label for ="Email">Email</label> <button><img src={Pen}/></button></li><br/>
               <li><label for="MdP">Mot de Passe</label> <button><img src={Pen}/></button></li>
           </ul>
           <br/>
           <br/>
           <h3>Liste Sports préférés</h3>
            <ul> 
                <li><input type="text" placeholder="Nom"/><button><img src={Pen}/></button></li><br/>
                <li><input type="text" pattern="^[0-2]" placeholder="Niveau" min="0" required /><button /*onClick="http://localhost:8000/search"*/><img src={Pen}/></button></li>
            </ul>
            <br/>
           <br/>
            <Link to="/">
            <img src={Arrow}/>
            </Link>   
        
        </div>    
    )
}
export default Profil