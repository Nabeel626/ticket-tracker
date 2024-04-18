import './assets/App.scss';
import EmployeeCardContainer from './EmployeeCard/EmployeeCardContainer';
import { data } from './team';

function App() {

  return (
    <>
      <h1 className='heading'>TICKET TRACKER</h1>

      <section className='employee-cards'>
        <EmployeeCardContainer users={data} />
      </section>

    </>
  ) 
}

export default App;
