import React , {useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import markerIcon from './map-marker2.png'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet'

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
  function MyComponent() {
    const map = useMapEvents({
      click: () => {
        map.locate()
      },
      locationfound: (location) => {
        console.log('location found:', location)
      },
    })
    return null
  }
  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position} icon={myIcon}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
  

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

    </div>
  );
}

export default App;
