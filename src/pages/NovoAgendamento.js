import ListaMedicos from '../components/ListaMedicos';

function NovoAgendamento(){

  const medicos = [
    {nome: 'João de Deus', especialidade: 'Obstetra', id: 1},
    {nome: 'Jucelino pagavista', especialidade: 'Pediatra', id: 2},
    {nome: 'Maria Dolores', especialidade: 'Otorrino', id: 3},
    {nome: 'Felipe Marconi', especialidade: 'Ortopedista', id: 4},
    {nome: 'João Bulevard', especialidade: 'Pediatra', id: 5}
  ];

  return(
    <div className="container">
      <div className="row">
        <div className="col-4">
          <ListaMedicos
            medicos={medicos}
            onChange={(value) => console.log(value)}
          />
        </div>
      </div>
    </div>
  )
} export default NovoAgendamento;