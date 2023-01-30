import Table from '../components/Table';
import Input from '../components/Input';
import Button from '../components/Button';
import { Search } from 'react-feather';
import agendamentos from '../mock/agendamentos.json';
import medicos from '../mock/medicos.json';
import pacientes from '../mock/pacientes_agenda.json';

function Agendamentos(){

  const pacientePorID = (id) => {
    return pacientes.find(el => el?.id === id)?.nome;
  }

  const medicoPorID = (id) => {
    return medicos.find(el => el?.id === id)?.nome;
  }

  const columns = [
    { title: 'Paciente', dataIndex: 'paciente', render: pacientePorID},
    { title: 'Médico', dataIndex: 'medico', render: medicoPorID},
    { title: 'Data', render: (agendamento) => `${agendamento.data} ${agendamento.horario}`},
    { title: 'M. Pagamento', dataIndex: 'pagamento' },
    { title: 'Valor', dataIndex: 'valor', render: (valor) => 'R$' + valor},
    { title: 'Status', dataIndex: 'status' }
  ];

  return(
    <>
      <div className='col-12 col-lg-6'>
        <Input
          type='text'
          placeholder='Busca rápida por nome do paciente'
          grouped
          extra={<Button type='primary' children={<Search size={22}/>}/>}
        />
      </div>
      <Table
        columns={columns}
        data={agendamentos}
      />
    </>
  )
} export default Agendamentos;