import React from 'react'
import { Link} from 'react-router-dom'
import { Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Arrow from './img/leftarrow2_120648.png'

function Inscription(){
    return(
      <div>

      <Form action="http://localhost:8000/register" method="POST">
            <Form.Group>
                  <Form.Label>Pseudo</Form.Label>
                  <Form.Control type="text" name="pseudo"/>
            </Form.Group>
            <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email"/>
            </Form.Group>
            <Form.Group>
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control type="password" name="mot_de_passe"/>
            </Form.Group>
            <Form.Group>
                  <Form.Label>Confirmer le mot de passe</Form.Label>
                  <Form.Control type="password" name="confirmer_mot_de_passe"/>
            </Form.Group>
            <Button variant = "secondary" type="submit" value="Valider"> S'inscrire </Button>
      </Form>
            <Link to="/Connexion"><img src={Arrow}/></Link>
      </div>

/*
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
*/
    )
}

export default Inscription