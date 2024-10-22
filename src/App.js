import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Embedded Google Looker Studio</h1>
      <iframe
        title="Google Looker Studio"
        width="600"
        height="450"
        src="http://localhost:3001/proxy?url=https://lookerstudio.google.com/embed/reporting/2c2767a8-6448-4fe2-b176-7fc6775b82b3/page/KSiDE"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
}

export default App;
