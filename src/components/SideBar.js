import { Link } from 'react-router-dom';

function SideBar(){
  return(
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to={'/'} className="nav-link active" aria-current="page">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'novo_agendamento'} className="nav-link">
              Novo Agendamento
            </Link>
          </li>
          <li className="nav-item">
            <Link to={'agendamentos'} className="nav-link">
              Agendamentos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
} export default SideBar;