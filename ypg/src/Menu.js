import React from 'react'
import {Link} from 'react-router-dom'
import './css/menu.css';
import filter from './img/funnel_fill_icon_159515.png'
import parameter from './img/3844439-gear-setting-settings.png'
import profil from './img/user_profile_icon_176439.png'
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './style';

function Menu(){
    
    return(
    <div>
        <Container>
            <Row>
                <Col><Link to="/Profil"><img src={profil}/></Link></Col>
                <Col><Link to="/Filtre"><img src={filter}/></Link></Col>
                <Col><Link to="/Parametre"><img src={parameter}/></Link></Col>
            </Row>
        </Container>
    </div>
    
/*
        <div>	
                <ul id="listeMenu">
                    <Link to="/Profil">
                        <li class="col-1" data-name="Profil"><img src={profil}/></li>
                    </Link>
                    <Link to="/Filtre">
                        <li class="col-1" data-name="Filtre"><img src={filter}/></li>
                    </Link>
                    <Link to="/Parametre">
                        <li class="col-1" data-name="Parametre"><img src={parameter}/></li>
                    </Link>
                   
                </ul>
        </div>
*/
    )
}

export default Menu