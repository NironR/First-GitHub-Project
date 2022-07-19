import React from 'react';
import './App.css'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed'
import Widgets from './components/Widgets';
import Post from './components/ui/Post';

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
