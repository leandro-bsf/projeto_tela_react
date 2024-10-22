import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

const GraficoComChartJS = () => {
    useEffect(() => {
        // Registrar os componentes do Chart.js
        Chart.register(...registerables);

        // Obter o contexto do canvas
        const ctx = document.getElementById('myChart').getContext('2d');

        // Criar o gráfico
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3], // Substitua pelos seus dados
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Limpar o gráfico quando o componente for desmontado
        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div>
            <h1>Gráfico com Chart.js</h1>
            <canvas id="myChart" width="400" height="200"></canvas>
        </div>
    );
}

export default GraficoComChartJS;