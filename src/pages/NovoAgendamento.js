import { useState, useReducer, createContext } from 'react';
import reducer from '../reducers';
import ListaMedicos from '../components/ListaMedicos';
import ListaHorarios from '../components/ListaHorarios';
import ModalAgendamento from '../components/ModalAgendamento';
import medicos from '../mock/medicos.json';
import agendamentosMock from '../mock/agendamentos.json';

export const AgendamentoContext = createContext(null);

function NovoAgendamento(){

  const [agendamentos, dispatchAgendamentos] = useReducer(reducer, agendamentosMock);
  const [selectedMedic, setSelectedMedic] = useState(null);
  const [selectedDate] = useState('28/01/2023');
  const [selectedTime, setSelectedTime] = useState(null);
  const [modalAgendamento, abrirModal] = useState(false);

  const filtrarAgendamentos = () => {
    return agendamentos.filter(el => 
      (el.medico === selectedMedic.id) && (el.data === selectedDate)
    );
  };

  const iniciarAgendamento = (horario) => {
    setSelectedTime(horario);
    abrirModal(true);
  }

  return(
    <AgendamentoContext.Provider value={{ dispatchAgendamentos }}>
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
                onSelect={(horario) => iniciarAgendamento(horario)}
              /> 
              : <h5>Por favor selecione um médico para ver seus horários disponíveis.</h5>
            }
          </div>
        </div>
        <ModalAgendamento
          selectedMedic={selectedMedic}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          isOpen={modalAgendamento}
          showModal={abrirModal}
        />
      </div>
    </AgendamentoContext.Provider>
  )
} export default NovoAgendamento;