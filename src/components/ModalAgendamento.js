import { useRef } from 'react';
import Modal from './Modal';
import Input from './Input';

function ModalAgendamento({ isOpen, show, selectedMedic, selectedDate, selectedTime }){

  const form = useRef(null);
  selectedDate = selectedDate.split('/');
  selectedDate = selectedDate[2] + "-" + selectedDate[1] + "-" + selectedDate[0];

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return(
    <Modal
      title='Novo Agendamento'
      isOpen={isOpen}
      show={show}
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