import React, { useState, useEffect } from "react";
import Header from './Componentes/Header/Header';
import S1Title from "./Componentes/Main/S1Title";
import S2About from "./Componentes/Main/S2About";

import JsonData from "./data/data.json";

import { BrowserRouter } from 'react-router-dom';
// import { Route, Routes } from "react-router-dom";

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        < Header />

        <main>
          < S1Title data={landingPageData.S1Title}/>
          < S2About data={landingPageData.S2About}/>


        </main>









      </div>
    </BrowserRouter>
  );
}

export default App;
