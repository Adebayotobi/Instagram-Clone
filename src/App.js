import React from "react"
import './App.css';
import {Nav, Bio, Gallery} from './componenets'


function App() {
  return (
    <>
    <Nav />
    <div className="container">
    <Bio />
     <Gallery />
     
    </div>
    </>
    
  );
}

export default App;
