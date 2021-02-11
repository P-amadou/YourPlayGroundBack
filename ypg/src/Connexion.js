import React from 'react'
import { Link} from 'react-router-dom'


function Connexion(){
    return(
    <form action="http://localhost:8000/login" method="POST">
    <label>
          Email :
          <input type="text" name="email" /><br/>
          Mot de passe :
          <input type="password" name="mot_de_passe" /><br/>
    </label>
          <input type="submit" value="Valider" />
  </form>
    )
}

export default Connexion