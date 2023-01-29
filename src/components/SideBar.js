import { Link } from 'react-router-dom';

function SideBar(){
  return(
    <div className='col-md-3 col-lg-2 d-none d-md-flex flex-column flex-shrink-0 p-3 bg-light sidebar'>
      <ul className='nav nav-pills flex-column mb-auto'>
        <li className='nav-item'>
          <Link to={'/'} className='nav-link active' aria-current='page'>
            <span data-feather='home' className='align-text-bottom'></span>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to={'novo_agendamento'} className='nav-link'>
            <span data-feather='file' className='align-text-bottom'></span>
            Novo Agendamento
          </Link>
        </li>
        <li>
          <Link to={'agendamentos'} className='nav-link'>
            <span data-feather='shopping-cart' className='align-text-bottom'></span>
            Agendamentos
          </Link>
        </li>
      </ul>
      <hr/>
      <div className='dropdown'>
        <a href='#' className='d-flex align-items-center link-dark text-decoration-none dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png' alt='' width='32' height='32' className='rounded-circle me-2'/>
          <strong>Usuário</strong>
        </a>
        <ul className='dropdown-menu text-small shadow'>
          <li><Link to={'/'} className='dropdown-item'>Perfil</Link></li>
          <li><Link to={'/'} className='dropdown-item'>Configurações</Link></li>
          <li><hr className='dropdown-divider'/></li>
          <li><Link to={'/'} className='dropdown-item'>Sign out</Link></li>
        </ul>
      </div>
    </div>
  )
} export default SideBar;