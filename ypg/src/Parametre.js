import React from 'react'
import { Link} from 'react-router-dom'
import Arrow from './img/leftarrow2_120648.png'
import { ButtonGroup,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Parametre(){

    return(
        <div>
            <h1> PARAMETRE </h1>
            <ButtonGroup vertical>
                <Button variant="dark" size="lg" block>Gérer les salles masquées</Button>
                <Button variant="dark" size="lg" block>Me déconnecter</Button>
                <Button variant="dark" size="lg" block>Supprimer mon compte</Button>  
                <Link to="/"><img src={Arrow}/></Link>
            </ButtonGroup>
        </div>
            
        
        /*<div>
           
            <br/>
           <button>Gérer les salles masquées </button><br/>
           <button>Me déconnecter</button><br/>
           <button>Supprimer mon compte</button>
           <br/>
           <br/>
           <Link to="/"><img src={Arrow}/></Link>   
        </div>  
        */  
    )
}
export default Parametre