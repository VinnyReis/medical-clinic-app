import { useState, useEffect, useRef } from 'react';
import { Modal as BootstrapModal } from 'bootstrap';

function Confirmacao(props){

  const { isOpen, show, titulo, descricao, textoCancelar, textoConfirmar, onConfirm } = props;

  const [modal, setModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const modal = new BootstrapModal(modalRef.current, {keyboard: false})
    setModal(modal);

    window.addEventListener('hide.bs.modal', () => {
      show(false);
    });
    return () => {
      window.removeEventListener('hide.bs.modal', () => show(false));
    };
  },[show])

  useEffect(() => {
    if(modal && isOpen) modal.show();
    else if(modal) modal.hide();
  },[props, modal, isOpen])

  return(
    <div ref={modalRef} className='modal modal-alert fade py-5' tabIndex='-1' role='dialog' id='modalChoice'>
      <div className='modal-dialog' role='document'>
        <div className='modal-content rounded-3 shadow'>
          <div className='modal-body p-4 text-center'>
            <h5 className='mb-0'>{titulo}</h5>
            <p className='mb-0'>{descricao}</p>
          </div>
          <div className='modal-footer flex-nowrap p-0'>
            <button onClick={onConfirm} type='button' className='btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end'><strong>{textoConfirmar}</strong></button>
            <button type='button' className='btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0' data-bs-dismiss='modal'>{textoCancelar}</button>
          </div>
        </div>
      </div>
    </div>
  )
} export default Confirmacao;