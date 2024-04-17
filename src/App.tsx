import './assets/App.scss';
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import data from './team';


function App() {

  return (
    <>
      <h1 className='heading'>Ticket Tracker</h1>
      
      <section className='employee-cards'>
        <EmployeeCard id={1} name="" role="Hna dman"/>
      </section>
    </>
  )
}

export default App;
