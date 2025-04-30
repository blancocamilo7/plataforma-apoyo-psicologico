import React, { useState } from 'react';

function ChatBot() {
  const [respuesta, setRespuesta] = useState('');

  const manejarPregunta = () => {
    setRespuesta('Recuerda que no estás solo. Estamos aquí para ayudarte.');
  };

  return (
    <div>
      <button onClick={manejarPregunta}>Necesito ayuda</button>
      <p>{respuesta}</p>
    </div>
  );
}

export default ChatBot;