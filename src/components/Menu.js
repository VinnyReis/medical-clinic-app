import { Link, useLocation } from 'react-router-dom';

function Menu(){

  const location = useLocation();

  const menus = [
    {label: 'Dashboard', path: '/'},
    {label: 'Novo Agendamento', path: '/novo_agendamento'},
    {label: 'Agendamentos', path: '/agendamentos'}
  ]

  return(
    <ul className='nav nav-pills flex-column mb-auto'>
      {menus.map(menu =>
        <li className='nav-item py-1' key={menu.path}>
          <Link to={menu.path} className={`nav-link ${menu.path === location.pathname ? 'active' : '' }`} aria-current='page'>
            {menu.label}
          </Link>
        </li>
      )}
    </ul>
  )
} export default Menu;