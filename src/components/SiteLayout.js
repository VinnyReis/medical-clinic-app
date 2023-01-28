import Header from './Header';
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';

function SiteLayout(){
  return(
    <div>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <SideBar/>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
} export default SiteLayout;