import { Button } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import Banner from './Banner';
import Header from './Header';
import Home from './Home.js';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import Switch from '@material-ui/core/Switch';
import Footer from './Footer';

function App() {
  const [mode, setMode] = useState(false);

  const [modeText, setModeText] = useState(false);

  const handleMode = () => {
    setMode(!mode);
    setModeText(!mode);
  };

  return (
    <div className={!mode ? 'app' : 'app__dark'}>
      <Header />
      <Banner />
      <Home modee={modeText} />
      <div className="items">
        <WbSunnyIcon
          className={!mode && 'shiningSun'}
        />
        <Switch
          color="primary"
          onChange={handleMode}
        />
        <Brightness2Icon
          className={mode && 'darkMoon'}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
