import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Menu from './Menu'
import Profil from './Profil'
import Parametre from './Parametre'
import Dashboard from './Dashboard';
import Filtre from './Filtre';

const defaultZoom=18;
const defaultPosition= [0,0]//[46.23,2.20]
let myIcon=L.icon({
  iconUrl:markerIcon,
  iconSize:     [38, 95],
  iconAnchor:   [22, 94],
  popupAnchor:  [-3, -76]
})
 /*function getTerrain(){
  fetch("http://localhost:8000/search").then(res => { 
   res.json()
  .then(data => {
      console.log(data)
      const listeTerrain=data.foreach((terrains)=>{
        //  console.log(`Data nom --> ${d.nom}`)
         return(
          <div>
          <p>{terrains.nom}</p>
          </div>
         )
        });
    })
  console.log(terrains)
  
  })
}
*/

function App(){  

  // map.locate({
  //     setView: true,
  //   });


  
  return (




    <div className="App">

    <form action="http://localhost:8000/register" method="POST">
      <label>
            Pseudo :
            <input type="text" name="pseudo" />
            Email :
            <input type="text" name="email" />
            Mot de passe :
            <input type="password" name="mot_de_passe" />
            Confirmer le mot de passe : 
            <input type="password" name="confirmer_mot_de_passe" />
      </label>
            <input type="submit" value="Valider" />
    </form>

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Maps</h1>
      </header>

      <form action = "http://localhost:8000/search" >
          <label>
            Recherche :
            <input type="text" name="nom" />
          </label>
          <input type="submit" value="Valider" />
        </form>

      <MapContainer className="map" center={defaultPosition} zoom={defaultZoom} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      
      {/* <Marker position={[51.505, -0.09]} icon={myIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
      {/* <MyComponent /> */}
      <LocationMarker />

      </MapContainer>
    
      <Router>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/Profil" exact component={Profil}/>
      <Route path="/Filtre" exact component={Filtre}/>
      <Route path="/Parametre" exact component={Parametre}/>
      <Menu />
      </Router>

    </div>
  );
}

export default App;
