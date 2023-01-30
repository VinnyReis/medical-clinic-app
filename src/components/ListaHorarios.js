import React from 'react';
import { minutesToTime, twentyFourHourToMinutes, isDateAvailable } from '../utils/timeUtils';
import PerfilUsuario from './PerfilUsuario';
import pacientes from '../mock/pacientes.json'
import Lista from './Lista';
import ItemLista from './ItemLista';
import Button from './Button';
import { Plus } from 'react-feather';

function ListaHorarios(props){

  let {
    duracaoConsulta,
    inicioExpediente,
    fimExpediente,
    indisponibilidades,
    agendamentos,
    onSelect
  } = props;

  inicioExpediente = twentyFourHourToMinutes(inicioExpediente);
  fimExpediente = twentyFourHourToMinutes(fimExpediente);

  return(
    <Lista>
      {[...Array(1440 / duracaoConsulta)].map((_,i) => {
        const horario = i * duracaoConsulta;
        const disponivel = val => isDateAvailable(horario, val.horario.inicio, val.horario.fim);
        const agendamento = agendamentos.find(el => twentyFourHourToMinutes(el.horario) === horario);

        return ((horario >= inicioExpediente) && (horario <= fimExpediente)) && 
          <CardHorario
            horario={minutesToTime(i * duracaoConsulta)}
            agendamento={agendamento}
            blocked={indisponibilidades?.every(disponivel) ?? false}
            onSelect={onSelect}
            key={i}
          />
      })}
    </Lista>
  )
} export default React.memo(ListaHorarios, (prevProps, nextProps) => 
    JSON.stringify(prevProps) === JSON.stringify(nextProps)
);

const CardHorario = ({horario, agendamento, onSelect, blocked}) => {
  const paciente = pacientes.find(el => el.id = agendamento?.paciente);
  const contato = `Telefone: ${paciente?.telefone}`;

  return(
    <ItemLista extra={!blocked ? <ActionButtons onSelect={onSelect} horario={horario}/> : ''}>
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

const ActionButtons = ({onSelect, horario}) => {
  return(
    <Button
      onClick={() => onSelect(horario)}
      type='light'
      size='sm'
      children={<Plus size={15} color={'#aaa'}/>}
    />
  );
}