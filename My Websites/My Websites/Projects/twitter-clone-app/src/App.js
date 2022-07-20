import React from 'react';
import './App.css'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed'
import Widgets from './components/Widgets';
import { auth, db } from "firebase/firestore"

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
