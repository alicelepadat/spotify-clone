import React from 'react';

import HomeMobile from './components/Home/Mobile/Home';
import HomeWeb from "./components/Home/Web/Home";

import './App.css';

function App() {

    let mql = window.matchMedia("all and (min-width: 1024px)")
    const Home = mql.matches ? <HomeWeb /> : <HomeMobile/>

    return (
        <div className="App">
           {Home}
        </div>
    );
}

export default App;
