import React from 'react';
// import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './component/Header';
import Profilesec from './component/Profilesec';
import Feed from './component/Feed';
import Projectsec from './component/Projectsec';

function App() {
  return (
    <>
    
<div className='app_header'>
<Header />
</div>
<div className='sidebar'>
<Profilesec />
<Feed />
<Projectsec />

</div>
</>
    );
}

export default App;
