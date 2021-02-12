import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Menu from './Menu'
import Profil from './Profil'
import Parametre from './Parametre'
import Dashboard from './Dashboard';
import Filtre from './Filtre';
import Inscription from './Inscription';
import Connexion from './Connexion';
import Recherche from './Recherche';


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
      <Router>
      <Route path="/Dashboard" exact component={Dashboard}/>
      <Route path="/Profil" exact component={Profil}/>
      <Route path="/Filtre" exact component={Filtre}/>
      <Route path="/Parametre" exact component={Parametre}/>
      <Route path="/Inscription" exact component={Inscription} />
      <Route path="/" exact component={Connexion} />
      <Route path="/Recherche" exact component={Recherche} />
      </Router>
    </div>

  );
}

export default App;
