import React , {useState } from 'react';
import markerIcon from './img/map-marker2.png'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet'


const defaultZoom=15;
const defaultPosition=[0,0] //[46.23,2.20]
let myIcon=L.icon({
  iconUrl:markerIcon,
  iconSize:     [38, 95],
  iconAnchor:   [22, 94],
  popupAnchor:  [-3, -76]
})

function Dashboard(){
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
            map.flyTo(e.latlng, map.getZoom(15))
            const radius = e.accuracy;
             const circle = L.circle(e.latlng, radius);
             circle.addTo(map);
    
          },
        })
      
        return position === null ? null : (
          <Marker position={position} icon={myIcon}>
            <Popup>You are here</Popup>
          </Marker>
        )
      }

    return(
        <div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Maps</h1>
        
        <form action = "http://localhost:8000/search" >
        <label>
          Recherche :
          <input type="text" name="nom" />
        </label>
        <input type="submit" value="Valider" />
      </form>

      <MapContainer className="map" center={defaultPosition} zoom={defaultZoom} scrollWheelZoom={false}>
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
    )
}
export default Dashboard