import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import medicos from '../mock/medicos.json'

function GraficoConsultas(){

  const chartRef = useRef();

  useEffect(() => {
    var chart = new Chart(
      chartRef.current,
      {
        type: 'doughnut',
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 1,
          plugins: {
            legend: {
              display: true,
              position:'bottom'
            }
          }
      },
        data: {
          labels: medicos.map(row => row.nome),
          datasets: [
            {
              label: 'Consultas Hoje',
              data: medicos.map(row => row.id)
            }
          ]
        }
      }
    );
    return () =>  chart.destroy();
  }, []);

  return(
    <canvas ref={chartRef} style={{ maxHeight: '35vh', height: '100%'}}/>
  )
} export default GraficoConsultas;