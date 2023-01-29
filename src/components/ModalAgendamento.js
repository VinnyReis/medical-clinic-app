import { useRef, useContext } from 'react';
import { AgendamentoContext } from '../pages/NovoAgendamento';
import { convertDate } from '../utils/timeUtils';
import Modal from './Modal';
import Input from './Input';

function ModalAgendamento({ isOpen, showModal, selectedMedic, selectedDate, selectedTime }){

  const form = useRef(null);
  const {dispatchAgendamentos} = useContext(AgendamentoContext);
  selectedDate = convertDate(selectedDate, 'aa-mm-dd');

  const handleSubmit = (event) => {
    event.preventDefault();

    var formData = new FormData(event.target);
    let values = Object.fromEntries(formData);

    values = {
      ...values,
      medico: selectedMedic.id,
      paciente: 1,
      data: convertDate(selectedDate, 'dd/mm/aa'),
      horario: selectedTime
    }

    dispatchAgendamentos({type: 'ADD_ITEM', item: values });
    form.current.reset();
    showModal(false);
  }

  return(
    <Modal
      title='Novo Agendamento'
      isOpen={isOpen}
      show={showModal}
      onSave={() => form.current.requestSubmit()}
    >
      <form onSubmit={handleSubmit} ref={form}>
        <Input label='Medico' name='medico' type='text' defaultValue={selectedMedic?.nome ?? ''} required disabled/>
        <div className='row'>
          <div className='col-6'>
            <Input label='Data' name='data' type='date' defaultValue={selectedDate ?? ''} required disabled/>
          </div>
          <div className='col-6'>
            <Input label='Horário' name='horario' type='time' defaultValue={selectedTime ?? ''} required disabled/>
          </div>
          <div className='col-12'>
            <Input label='Nome Paciente' name='paciente' type='text' required/>
          </div>
          <div className='col-12'>
            <Input label='Telefone Paciente' name='telefone' type='phone' required/>
          </div>
        </div>
      </form>
    </Modal>
  )
} export default ModalAgendamento;