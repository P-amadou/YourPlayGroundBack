import React from 'react'
import { Link} from 'react-router-dom'


function Inscription(){
    return(
    <form action="http://localhost:8000/register" method="POST">
    <label>
          Pseudo :
          <input type="text" name="pseudo" /><br/>
          Email :
          <input type="text" name="email" /><br/>
          Mot de passe :
          <input type="password" name="mot_de_passe" /><br/>
          Confirmer le mot de passe : 
          <input type="password" name="confirmer_mot_de_passe" /><br/>
    </label>
          <input type="submit" value="Valider" />
  </form>
    )
}

export default Inscription