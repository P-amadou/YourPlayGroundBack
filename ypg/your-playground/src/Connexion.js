import React from 'react'
import { Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Arrow from './img/leftarrow2_120648.png'
import { Link} from 'react-router-dom'


function Connexion(){
    return(
          <div>
            <h1>CONNEXION</h1>
          <Form action="http://localhost:8000/login" method="POST">
                <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" name="email"/>
                </Form.Group>
                <Form.Group>
                      <Form.Label>Mot de passe</Form.Label>
                      <Form.Control type="password" name="mot_de_passe"/>
                </Form.Group>
                
                <Link to="/Dashboard"> <Button variant = "secondary" size="lg" type="submit" value="Valider"> Se connecter </Button></Link>
                <br/><br/>
                <Link to="/Inscription"><Button variant = "secondary" size="lg"> S'inscrire </Button></Link>
          </Form>
          </div>
          
    /*<form action="http://localhost:8000/login" method="POST">
    <label>
          Email :
          <input type="text" name="email" /><br/>
          Mot de passe :
          <input type="password" name="mot_de_passe" /><br/>
    </label>
          <input type="submit" value="Valider" />
  </form>*/
    )
}

export default Connexion