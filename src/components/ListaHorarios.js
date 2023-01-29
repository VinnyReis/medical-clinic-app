import { minutesToTime, twentyFourHourToMinutes, isDateAvailable } from '../utils/timeUtils';
import PerfilUsuario from './PerfilUsuario';
import pacientes from '../mock/pacientes.json'
import Lista from './Lista';
import ItemLista from './ItemLista';

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
    <ItemLista extra={!blocked && <ActionButtons/>}>
      <h5 style={{width: '10%'}}>{horario}</h5>
      {!blocked ?
        <>
          {agendamento ?
            <PerfilUsuario nome={paciente.nome} descricao={contato}/> : <div className='w-100'/>
          }
        </>
        : <h6 className='w-100'>Horário Indisponível</h6>
      }
    </ItemLista>
  );
};

const ActionButtons = () => {
  return(
    <button className='btn btn-light'>Novo</button>
  );
}