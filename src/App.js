import Search from './components/search/search';
import './App.css';

function App() {

  const handleOnSeachChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSeachChange} />
    </div>
  );
}

export default App;
