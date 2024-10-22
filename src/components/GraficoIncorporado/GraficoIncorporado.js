import React from 'react';

const GraficoIncorporado = () => {
    return (
        <div>
        <h1>Gráfico Incorporado do Looker Studio</h1>
        <iframe
            src="https://lookerstudio.google.com/embed/reporting/2c2767a8-6448-4fe2-b176-7fc6775b82b3/page/KSiDE" // Substitua pela sua URL
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen
            style={{ border: '0', display: 'block', margin: '0 auto' }}
            sandbox="allow-scripts allow-same-origin allow-popups"
        ></iframe>
    </div>
    );
}

export default GraficoIncorporado;
