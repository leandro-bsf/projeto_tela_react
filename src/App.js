import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Embedded Content for Smart TV</h1>
        <div className="iframe-container">
          <iframe
            title="Embedded Content"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ifYC0E7ufaQ?si=5t7c-i4HB4sr_KzE"  // Exemplo de um vídeo do YouTube incorporado
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </header>
    </div>
  );
}

export default App;
