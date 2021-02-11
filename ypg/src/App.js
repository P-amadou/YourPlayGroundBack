import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Menu from './Menu'
import Profil from './Profil'
import Parametre from './Parametre'
import Dashboard from './Dashboard';
import Filtre from './Filtre';


function App(){  

  // map.locate({
  //     setView: true,
  //   });
    
  return (
    <div className="App">
    
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
