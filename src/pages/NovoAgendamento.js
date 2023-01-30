import { useState, useReducer, createContext, useRef } from 'react';
import reducer from '../reducers';
import ListaMedicos from '../components/ListaMedicos';
import ListaHorarios from '../components/ListaHorarios';
import ModalAgendamento from '../components/ModalAgendamento';
import Confirmacao from '../components/Confirmacao';
import Toast, { showToast } from '../components/Toast';
import medicos from '../mock/medicos.json';
import agendamentosMock from '../mock/agendamentos.json';
import { Calendar } from 'react-calendar';
import { dateObjectToString } from '../utils/timeUtils';

export const AgendamentoContext = createContext(null);

function NovoAgendamento(){

  const [agendamentos, dispatchAgendamentos] = useReducer(reducer, agendamentosMock);
  const [selectedMedic, setSelectedMedic] = useState(null);
  const [selectedDate, setSelectedDate] = useState(dateObjectToString(new Date()));
  const [selectedTime, setSelectedTime] = useState(null);
  const [modalAgendamento, abrirModal] = useState(false);
  const [modalConfirmacao, abrirConfirmacao] = useState(false);
  const idAgendamento = useRef(null);
  const toastRef = useRef(null);

  const filtrarAgendamentos = () => {
    return agendamentos.filter(el => 
      (el.medico === selectedMedic.id) && (el.data === selectedDate)
    );
  };

  const iniciarAgendamento = (horario) => {
    setSelectedTime(horario);
    abrirModal(true);
  }

  const confirmarExclusao = (id) => {
    idAgendamento.current = id;
    abrirConfirmacao(true);
  }

  const excluir = (id) => {
    abrirConfirmacao(false);
    dispatchAgendamentos({ type: 'DELETE_ITEM', id});
    showToast(toastRef);
  }

  return(
    <AgendamentoContext.Provider value={{ dispatchAgendamentos }}>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-4 gap-4'>
            <h5>Médicos</h5>
            <ListaMedicos
              medicos={medicos}
              onChange={(value) => setSelectedMedic(value)}
            />
            <div className='py-4'>
              <Calendar
                onChange={(values) => setSelectedDate(dateObjectToString(values))}
                defaultValue={new Date()}
              />
            </div>
          </div>
          <div className='col-12 col-lg-8'>
            <h5>{selectedDate}</h5>
            {selectedMedic 
              ?
              <ListaHorarios
                {...selectedMedic}
                agendamentos={filtrarAgendamentos()}
                onSelect={(horario) => iniciarAgendamento(horario)}
                onDelete={(id) => confirmarExclusao(id)}
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
        <Confirmacao
          titulo={'Deletar agendamento?'}
          descricao={'Tem certeza disso? essa ação não pode ser desfeita!'}
          textoConfirmar={'Sim, deletar!'}
          textoCancelar={'Não, obrigado'}
          isOpen={modalConfirmacao}
          show={abrirConfirmacao}
          onConfirm={() => excluir(idAgendamento.current)}
        />
        <Toast toastRef={toastRef} message='Agendamento deletado com sucesso!'/>
      </div>
    </AgendamentoContext.Provider>
  )
} export default NovoAgendamento;