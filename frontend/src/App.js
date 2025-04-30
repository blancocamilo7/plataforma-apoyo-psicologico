import React, { useEffect, useState } from 'react';
import ChatBot from './components/ChatBot';

function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/salud/mensaje')
      .then(res => res.json())
      .then(data => setMensaje(data.mensaje));
  }, []);

  return (
    <div>
      <h1>{mensaje}</h1>
      <ChatBot />
    </div>
  );
}

export default App;