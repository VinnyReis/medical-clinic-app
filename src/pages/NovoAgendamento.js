import { useState } from 'react';
import ListaMedicos from '../components/ListaMedicos';
import ListaHorarios from '../components/ListaHorarios';
import medicos from '../mock/medicos.json';
import agendamentos from '../mock/agendamentos.json'

function NovoAgendamento(){

  const [selectedMedic, setSelectedMedic] = useState(null);
  const [selectedDate] = useState('28/01/2023');

  const filtrarAgendamentos = () => {
    return agendamentos.filter(el => 
      (el.medico === selectedMedic.id) && (el.data === selectedDate)
    );
  };

  return(
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <h5>Médicos</h5>
          <ListaMedicos
            medicos={medicos}
            onChange={(value) => setSelectedMedic(value)}
          />
        </div>
        <div className='col-8'>
          <h5>{selectedDate}</h5>
          {selectedMedic 
            ?
            <ListaHorarios
              {...selectedMedic}
              agendamentos={filtrarAgendamentos()}
            /> 
            : <h5>Por favor selecione um médico para ver seus horários disponíveis.</h5>
          }
        </div>
      </div>
    </div>
  )
} export default NovoAgendamento;