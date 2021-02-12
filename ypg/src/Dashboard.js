import React , {useState } from 'react';
import markerIcon from './img/map-marker.png'
import markerIcon2 from './img/map-marker2.png'
import './css/App.css'
import L from 'leaflet'
import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet'
import Recherche from './Recherche';
import { Form,Button,Col,Row,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu'


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


class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        nom:'',
        dataSearch: [],
        btn:false
        };
      }
        
      myChangeHandler = (event) => {
        this.setState({nom: event.target.value});
        
      }

      btnState= ()=>{
        this.setState({btn:true})
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

    componentDidMount() {
      console.log(nom);
     fetch(`http://localhost:8000/search?nom=${nom}`).then(res => { 
       res.json()
      .then(data => {
       this.setState({
         dataSearch: data,
      })
     })
   })
  }
   

    render(){
      console.log(this.state.dataSearch);
      function btnClick(val) {
        nom=val
        console.log('Nom: '+nom);
        
        return nom
      }
      if(nom!=null||undefined||''){
        this.state.btn=true
      }else{
        this.state.btn=false
      }

      const resSearch= this.state.dataSearch.map((d)=>{
        return(
            <div className="card" >
            <h3>Nom: {d.nom}</h3>
            <p>Description: {d.description}</p>
            <p>Tel: {d.telephone}</p>
            <p>Siteweb: {d.siteweb}</p>
            </div>
              )
          })
      const resSearchMarkers= this.state.dataSearch.map((d)=>{
        let coord=d.coordonnees_gps
        let positionGPS=coord.split(",",2)
        return(
            <div className="card" >
            <Marker position={positionGPS} icon={myIcon}>
            <Popup>
            {d.nom}
            </Popup>
            </Marker>
            </div>
              )
          })
          
          if(this.state.btn==false){
            return(
              <div>
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <h1>Maps</h1>
          
            <Container>
            <Form > {/**action ={`http://localhost:8000/search?nom=${nom}`} method="POST" */}
              <Row>
                <Col>
                <Form.Control type="text"  placeholder="Recherche"  id='nom' name="nom" value={this.state.nom} onChange={this.myChangeHandler.bind(this)} />
                </Col>
                <Col>
                  <Button variant = "secondary" type="submit" value="Valider"  onClick={btnClick(this.state.nom)} > Valider </Button> 
                </Col>
              </Row>
            </Form>
          </Container>
          
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
            )
          }else{
            return(
          
              <div>
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <h1>Maps</h1>
              
              <Container>
              <Form> {/**action ={`http://localhost:8000/search?nom=${nom}`} method="POST" */}
                  <Row>
                    <Col>
                    <Form.Control type="text"  placeholder="Recherche"  id='nom' name="nom" value={this.state.nom} onChange={this.myChangeHandler.bind(this)} />
                    </Col>
                    <Col>
                      <Button variant = "secondary" type="submit" value="Valider"  onClick={btnClick(this.state.nom)} > Valider </Button> 
                    </Col>
                  </Row>
                </Form>
              </Container>
  
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
            {resSearchMarkers}
            </MapContainer>
            <Recherche />
            {resSearch}
            </div>    
          )
          }
      }     
 
}

export default Dashboard