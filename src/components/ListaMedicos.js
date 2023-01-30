import { useState, useEffect} from 'react';
import PerfilUsuario from './PerfilUsuario';
import Lista from './Lista';
import ItemLista from './ItemLista';

function ListaMedicos({medicos, onChange}){

  const [selectedMedic, selectMedic] = useState(null);

  useEffect(() => {
    onChange(selectedMedic);
  },[selectedMedic, onChange]);

  return(
    <Lista style={{maxHeight: '40vh', overflowY: 'overlay'}}>
      {medicos.map((medico, i) =>
        <ItemLista className={'cursor-pointer'} onClick={() => selectMedic(medico)} selected={medico.id === selectedMedic?.id} key={i}>
          <PerfilUsuario nome={medico.nome} descricao={medico.especialidade}/>
        </ItemLista>
      )}
    </Lista>
  )
} export default ListaMedicos;