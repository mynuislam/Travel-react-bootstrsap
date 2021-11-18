import React from 'react';

import './App.css';
import Banner from './Component/Banner/Banner';
import Navbar from './Component/Navigation';
import CardSec from './Component/CardSec/CardSec'
import Fotter from './Component/Fotter/Fotter';
function App() {
  return (
    <div>
<Navbar/>
<Banner/>
<CardSec/>
<Fotter/>
    </div>
  );
}

export default App;
