import { useState, useEffect} from 'react';
import PerfilUsuario from './PerfilUsuario';

function ListaMedicos({medicos, onChange}){

  const [selectedMedic, selectMedic] = useState(null);

  useEffect(() => {
    onChange(selectedMedic);
  },[selectedMedic, onChange]);

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
  let classList = `${medico.id === selectedMedic?.id && 'active'} list-group-item list-group-item-action d-flex gap-3 py-2 align-items-center`
  
  return(
    <div onClick={() => selectMedic(medico)} className={classList} aria-current='true'>
      <PerfilUsuario nome={medico.nome} descricao={medico.especialidade}/>
    </div>
  )
}