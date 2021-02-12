import React, {useState} from 'react'
import markerIcon from './img/map-marker.png'
import markerIcon2 from './img/map-marker2.png'
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
let myIcon2=L.icon({
    iconUrl:markerIcon2,
    iconSize:     [38, 95],
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
  })
let nom
if (nom==undefined||null) {
    nom='a'
}else{
    nom=document.getElementById('nom').value
}


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
    <Marker position={position} icon={myIcon2}>
    <Popup>You are here</Popup>
  </Marker>
)
}

class Recherche extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        nom:''
        };
      }
        
      myChangeHandler = (event) => {
        this.setState({nom: event.target.value});
        
      }
      

    // getRecherche() {
    
    //     fetch(`http://localhost:8000/search`).then(res=>{
    //         res.json()
    //         .then(data=>{
    //             this.setState({
    //             dataSearch : data
    //             })
    //         })
    //     })
        
    // }

    // componentDidMount() {
     
    //     fetch(`http://localhost:8000/search?nom=${nom}`).then(res => { 
    //       res.json()
    //      .then(data => {
    //         console.log(data);
    //       this.setState({
    //         dataSearch: data,
          
    //      })
    //     })
    //   })
    //  }
  
    render(){
        //const { dataSearch } = this.props.location
        // const resSearch= this.state.dataSearch.map((d)=>{
        //     return(
        //         <div className="card" >
        //         <h3>Nom: {d.nom}</h3>
        //         <p>Description: {d.description}</p>
        //         <p>Tel: {d.telephone}</p>
        //         <p>Siteweb: {d.siteweb}</p>
        //         </div>
        //     )
        // })
        // const resSearchMarkers= this.state.dataSearch.map((d)=>{
        //     let coord=d.coordonnees_gps
        //     let positionGPS=coord.split(",",2)
        //     return(
        //         <div className="card" >
        //         <Marker position={positionGPS} icon={myIcon}>
        //         <Popup>
        //         {d.nom}
        //         </Popup>
        //         </Marker>
        //         </div>
        //     )
        // })

    return(
    //     <div>
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <h1>Maps</h1>

    //     <form >
    //         <label>
    //         Recherche :
    //         <input type="text" id='nom' name="nom" value={this.state.nom} onChange={this.myChangeHandler.bind(this)} />
    //         </label>
    //     </form>

    //   <MapContainer className="map" center={defaultPosition} zoom={defaultZoom} scrollWheelZoom={true}>
    //   <TileLayer
    //     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   {/* <Marker position={[51.505, -0.09]} icon={myIcon}>
    //     <Popup>
    //       A pretty CSS3 popup. <br /> Easily customizable.
    //     </Popup>
    //   </Marker> */}
    //   {/* <MyComponent /> */}
    //   <LocationMarker />
    //   {resSearchMarkers}
    //   </MapContainer>
    //   <Recherche />
    //   {resSearch}
    //     </div>    
    <div>
        <h1>Résultats Recherche</h1>
    </div>
    )
 }
}

export default Recherche