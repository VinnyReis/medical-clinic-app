import { useState, useEffect, useRef } from 'react';
import { Modal as BootstrapModal } from 'bootstrap';

function Modal(props){

  const { isOpen, show, title, children, onSave } = props;

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
  },[])

  useEffect(() => {
    if(modal && isOpen) modal.show();
    else if(modal) modal.hide();
  },[props, modal])

  return(
    <div className="modal fade" tabIndex="-1" aria-hidden="true" ref={modalRef}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">{title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button onClick={onSave} type="button" className="btn btn-primary">Salvar</button>
          </div>
        </div>
      </div>
    </div>
  )
} export default Modal;