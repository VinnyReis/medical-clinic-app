import React from 'react';
import { minutesToTime, twentyFourHourToMinutes, isDateAvailable } from '../utils/timeUtils';
import PerfilUsuario from './PerfilUsuario';
import pacientes from '../mock/pacientes.json'
import Lista from './Lista';
import ItemLista from './ItemLista';
import Button from './Button';
import { Plus, Trash } from 'react-feather';

function ListaHorarios(props){

  let {
    duracaoConsulta,
    inicioExpediente,
    fimExpediente,
    indisponibilidades,
    agendamentos,
    onSelect,
    onDelete
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
            onDelete={onDelete}
            key={i}
          />
      })}
    </Lista>
  )
} export default React.memo(ListaHorarios, (prevProps, nextProps) => 
    JSON.stringify(prevProps) === JSON.stringify(nextProps)
);

const CardHorario = ({horario, agendamento, onSelect, onDelete, blocked}) => {
  const paciente = pacientes.find(el => el.id === agendamento?.paciente);
  const contato = `Telefone: ${paciente?.telefone}`;

  return(
    <div className={`mb-2 rounded ${!agendamento && !blocked ? 'cursor-pointer' : ''}`} onClick={!agendamento && !blocked ? () => onSelect(horario) : null}>
      <ItemLista
        extra={!blocked ?
          <ActionButtons
            onSelect={onSelect}
            onDelete={onDelete}
            horario={horario}
            agendamento={agendamento}
          /> : ''
        }
      >
        <h5 className='me-2 mb-0'>{horario}</h5>
        {!blocked ?
          <>
            {agendamento ?
              <PerfilUsuario nome={paciente.nome} descricao={contato}/> : <div className='w-100'/>
            }
          </>
          : <h6 className='w-100 m-0'>Horário Indisponível</h6>
        }
      </ItemLista>
    </div>
  );
};

const ActionButtons = ({onSelect, onDelete, horario, agendamento}) => {

  return(
    <>
      {agendamento ?
        <Button
          onClick={() => onDelete(agendamento.id)}
          type='secondary'
          size='sm'
          children={<Trash size={15}/>}
        />
        :
        <Button
          onClick={() => onSelect(horario)}
          type='secondary'
          size='sm'
          children={<Plus size={15}/>}
        />
      }
    </>
  );
}