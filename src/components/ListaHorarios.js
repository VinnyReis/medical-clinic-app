import { minutesToTime, twentyFourHourToMinutes, isDateAvailable } from '../utils/timeUtils';
import PerfilUsuario from './PerfilUsuario';
import pacientes from '../mock/pacientes.json'
import Lista from './Lista';

function ListaHorarios(props){

  let {
    duracaoConsulta,
    inicioExpediente,
    fimExpediente,
    indisponibilidades,
    agendamentos
  } = props;

  inicioExpediente = twentyFourHourToMinutes(inicioExpediente);
  fimExpediente = twentyFourHourToMinutes(fimExpediente);

  return(
    <Lista style={{height: '80vh', overflowY: 'scroll'}}>
      {[...Array(1440 / duracaoConsulta)].map((_,i) => {
        const horario = i * duracaoConsulta;
        const disponivel = val => isDateAvailable(horario, val.horario.inicio, val.horario.fim);
        const agendamento = agendamentos.find(el => twentyFourHourToMinutes(el.horario) === horario);

        return ((horario >= inicioExpediente) && (horario <= fimExpediente)) && 
          <CardHorario
            horario={minutesToTime(i * duracaoConsulta)}
            agendamento={agendamento}
            blocked={indisponibilidades?.every(disponivel) ?? false}
            key={i}
          />
      })}
    </Lista>
  )
} export default ListaHorarios;

const CardHorario = ({horario, agendamento, blocked}) => {
  const paciente = pacientes.find(el => el.id = agendamento?.paciente);
  const contato = `Telefone: ${paciente?.telefone}`;

  return(
    <div className='list-group-item list-group-item-action d-flex gap-3 py-3 align-items-center' aria-current='true'>
      <h5 style={{width: '10%'}}>{horario}</h5>
      {!blocked ?
        <>
          {agendamento ?
            <PerfilUsuario nome={paciente.nome} descricao={contato}/> :
            <div className='w-100'/>
          }
          <small className='opacity-50 text-nowrap'>Now</small>
        </>
        : <h6>Horário Indisponível</h6>
      }
    </div>
  );
};