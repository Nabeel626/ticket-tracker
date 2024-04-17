import './assets/App.scss';
import EmployeeCardContainer from './EmployeeCard/EmployeeCardContainer';
import SearchInputContainer from './SearchInput/SearchInputContainer';
import data from './team';

function App() {

  return (
    <>
      <h1 className='heading'>TICKET TRACKER</h1>
      
      <section className='search-employee'>
        <SearchInputContainer users={data} />
      </section>

      <section className='employee-cards'>
        <EmployeeCardContainer users={data} />
      </section>

    </>
  )
}

export default App;
