//import React from 'react';
import logo from './logo.svg';
import './App.css';

//import Empleado from './MisComponentes/Empleado';
//import EmpleadoJSON from './MisComponentes/EmpleadoJSON';

import EmpleadosJSON from './MisComponentes/EmpleadosJSON';

import { Component } from 'react';

/*var userJSON={
  nombre: "Oscar",
  cargo: "Profe",
  foto: logo
};*/
var usersJSON=[{
  nombre: "Oscar",
  cargo: "Profe",
  foto: logo
}];

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      /*user:{
        nombre: "Oscar",
        cargo: "Profe",
        foto: logo
      },
      users:[{
        nombre: "Oscar",
        cargo: "Profe",
        foto: logo
      }]*/
    }
  }

  render(){ 
    return (
      <div>
        {/*<Empleado nombre='Ana' cargo='cego' foto={logo}/>
        <EmpleadoJSON user={userJSON}/>*/}
        <EmpleadosJSON users={usersJSON}/>
      </div>
    );
  }
}

export default App;
