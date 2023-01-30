import Table from './Table';
import lembretesMock from'../mock/lembretes.json';
import Button from './Button';
import Modal from './Modal';
import { File } from 'react-feather';
import { useState } from 'react';

function Lembretes(){

  const [modal, mostrarModal] = useState(false);
  const [lembrete, setLembrete] = useState(false);

  const abrirLembrete = (lembrete) => {
    setLembrete(lembrete);
    mostrarModal(true);
  }

  const columns = [
    {title: 'Titulo', dataIndex: 'titulo'},
    {title: 'Importância', dataIndex: 'importancia'},
    {title: '', render: (value) => 
      <Button onClick={() => abrirLembrete(value)} type='light' size='sm'>
        <File size={15}/>
      </Button>
    }
  ]

  return(
    <>
      <Table
        columns={columns}
        data={lembretesMock}
      />
      <Modal
        isOpen={modal}
        show={mostrarModal}
        title={lembrete.titulo}
        children={lembrete.conteudo}
        hideSave
      />
    </>
  )
} export default Lembretes;