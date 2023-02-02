import React from 'react';
import ReactDOM from 'react-dom/client';
import SiteLayout from './components/SiteLayout';
import Home from './pages/Home';
import NovoAgendamento from './pages/NovoAgendamento';
import Agendamentos from './pages/Agendamentos';
import Error404 from './pages/Error404';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <HashRouter>
    <Routes>
      <Route path='/' element={<SiteLayout/>}>
        <Route index element={<Home />} />
        <Route path='novo_agendamento' element={<NovoAgendamento />} />
        <Route path="agendamentos" element={<Agendamentos />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </HashRouter>
</React.StrictMode>
);