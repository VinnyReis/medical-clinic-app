import ListaMedicos from '../components/ListaMedicos';
import Calendar from 'react-calendar';
import medicos from '../mock/medicos.json';
import Input from '../components/Input';
import Button from '../components/Button';
import GraficoConsultas from '../components/GraficoConsultas';
import GraficoStatus from '../components/GraficoStatus';
import { Search } from 'react-feather';
import Lembretes from '../components/Lembretes';

function Home(){

  return(
    <div className='container'>
      <div className='row'>
        <div className='col-12 col-lg-8'>
          <Input
            type='text'
            placeholder='Busca rápida por nome do paciente'
            grouped
            extra={<Button type='primary' children={<Search size={22}/>}/>}
          />
          <div className='row gx-3'>
            <div className='col-12 col-md-6'>
              <div className='bg-light border rounded p-2 mb-3'>
                <GraficoConsultas/>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='bg-light border rounded p-2 mb-3'>
                <GraficoStatus/>
              </div>
            </div>
          </div>
          <div className='row mt-1'>
            <div className='col '>
              <h5>Avisos/Lembretes</h5>
              <Lembretes/>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-4 gap-4'>
          <Calendar
            // onChange={(values) => setSelectedDate(dateObjectToString(values))}
            defaultValue={new Date()}
          />
          <div className='py-4'>
            <ListaMedicos
              medicos={medicos}
              onChange={(value) => {}}
            />
          </div>
        </div>
      </div>
    </div>
  )
} export default Home;