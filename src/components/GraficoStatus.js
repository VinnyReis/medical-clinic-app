import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function GraficoStatus(){

  const chartRef = useRef();

  useEffect(() => {
    const data = [
      { status: 'Não confirmado', count: 10 },
      { status: 'Aguardando', count: 20 },
      { status: 'Em consulta', count: 15 },
      { status: 'Cancelado', count: 25 }
    ];
  
    let chart = new Chart(
      chartRef.current,
      {
        type: 'bar',
        options: {
          aspectRatio: 0.2
        },
        data: {
          labels: data.map(row => row.status),
          datasets: [
            {
              label: 'Quantidade de consultas por status',
              data: data.map(row => row.count)
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
} export default GraficoStatus;