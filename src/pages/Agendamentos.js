import Table from '../components/Table';

function Agendamentos(){

  const columns = [
    {
      title: 'Paciente',
      dataIndex: 'paciente'
    },
    {
      title: 'Médico',
      dataIndex: 'medico'
    },
    {
      title: 'Pagamento',
      dataIndex: 'pagamento'
    },
    {
      title: 'Status',
      dataIndex: 'status'
    }
  ];

  const data = [
    {
      paciente: 'Vinícius Lima',
      medico: 'João de Deus',
      pagamento: 'Pago',
      status: 'Atendido'
    },
    {
      paciente: 'Patrícia Luciana',
      medico: 'Jucelino pagavista',
      pagamento: 'Pago',
      status: 'Aguardando'
    },
    {
      paciente: 'Maria José',
      medico: 'Maria Dolores',
      pagamento: 'Pendente',
      status: 'Aguardando'
    }
  ];

  return(
    <Table
      columns={columns}
      data={data}
    />
  )
} export default Agendamentos;