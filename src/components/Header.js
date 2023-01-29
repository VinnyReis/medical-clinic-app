import { Link } from 'react-router-dom';

function Header(){
  return(
    <header className="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow-sm">
      <Link to={'/'} className="navbar-brand col-md-3 col-lg-2 me-0 px-3 py-3 fs-6"><h5>Clinica Médica</h5></Link>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="d-none d-md-block navbar-nav">
        <div className="nav-item text-nowrap">
          <Link to={'/'} className="nav-link px-3 text-light">Sign out</Link>
        </div>
      </div>
    </header>
  )
} export default Header;