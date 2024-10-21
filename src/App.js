import React from 'react';
import GraficoIncorporado from './components/GraficoIncorporado/GraficoIncorporado'; // Para incorporar o gráfico do Looker Studio
// import GraficoComChartJS from './GraficoComChartJS'; // Para o gráfico com Chart.js

const App = () => {
    return (
        <div>
            {/* Descomente a linha abaixo para usar o gráfico do Looker Studio */}
            <GraficoIncorporado />
            {/* Descomente a linha abaixo para usar o gráfico com Chart.js */}
            {/* <GraficoComChartJS /> */}
        </div>
    );
}

export default App;
