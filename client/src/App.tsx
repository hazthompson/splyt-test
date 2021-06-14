import { useEffect } from 'react';
import './App.css';
import Map from 'pages/Map';

function App() {
  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <Map />
      </header>
    </div>
  );
}

export default App;
