import React from 'react'
import {Link} from 'react-router-dom'
import './css/menu.css';
import filter from './img/funnel_fill_icon_159515.png'
import parameter from './img/3844439-gear-setting-settings.png'
import profil from './img/user_profile_icon_176439.png'

function Menu(){
    
    return(
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
    )
}

export default Menu