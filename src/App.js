import { useState } from 'react';
import './App.css';
import Home from './page/home/home';
import { SingleData } from './provider/context';

function App() {

  const [singleData,setSingleData] = useState([]);

  return (
    <SingleData.Provider value={{singleData,setSingleData}} >
      <div className="App">
        <Home />
      </div>
    </SingleData.Provider>
  );
}

export default App;
