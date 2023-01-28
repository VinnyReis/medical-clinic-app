import { useState, useEffect} from 'react';
import Avatar from './Avatar';

function ListaMedicos({medicos, onChange}){

  const [selectedMedic, selectMedic] = useState(null);

  useEffect(() => {
    onChange(selectedMedic);
  },[selectedMedic]);

  return(
    <div className='list-group w-auto' style={{height: '40vh', overflowY: 'scroll'}}>
      {medicos.map((medico, i) =>
        <CardMedico
          medico={medico}
          selectedMedic={selectedMedic}
          selectMedic={selectMedic}
          key={i}
        />
      )}
    </div>
  )
} export default ListaMedicos;

const CardMedico = ({medico, selectedMedic, selectMedic}) => {
  let classList = `${medico.id === selectedMedic && 'active'} list-group-item list-group-item-action d-flex gap-3 py-2 align-items-center`
  
  return(
    <div onClick={() => selectMedic(medico.id)} className={classList} aria-current='true'>
      <Avatar/>
      <div className='pe-cursor d-flex gap-2 w-100 justify-content-between'>
        <div>
          <h6 className='mb-0'>{medico.nome}</h6>
          <p className='mb-0 opacity-75'>{medico.especialidade}</p>
        </div>
      </div>
    </div>
  )
}