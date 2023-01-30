import Menu from './Menu';
import { Link } from 'react-router-dom';

function SideBar(){
  return(
    <div className='col-md-3 col-lg-2 d-none d-md-flex flex-column flex-shrink-0 p-3 bg-light sidebar'>
      <Menu/>
      <div className='dropdown'>
        <Link to={'/'} className='d-flex align-items-center link-dark text-decoration-none dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png' alt='' width='32' height='32' className='rounded-circle me-2'/>
          <strong>Usuário</strong>
        </Link>
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