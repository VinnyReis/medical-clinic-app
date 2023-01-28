import Avatar from './Avatar';

function PerfilUsuario({ nome, descricao }){
  return(
    <>
      <Avatar/>
      <div className='d-flex gap-2 w-100 justify-content-between'>
        <div>
          <h6 className='mb-0'>{nome}</h6>
          <p className='mb-0 opacity-75'>{descricao}</p>
        </div>
      </div>
    </>
  );
} export default PerfilUsuario;