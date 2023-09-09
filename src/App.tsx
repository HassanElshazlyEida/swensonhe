import Navbar from './components/Navbar';
import CategoryList from './components/CategoryList';
import EventBuilder from './components/EventBuilder';
import EstimatePrice from './components/EstimatePrice';


function App() {
  return (
    <div className="App container mx-auto ">
      <Navbar />
      <div className="main-content grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-1 md:col-span-1 shadow-md rounded">
          <EventBuilder />
        </div>
        <div className="col-span-1 md:col-span-3 shadow-md rounded mt-4 md:mt-0">
          <CategoryList />
        </div>
        <div className="col-span-1 md:col-span-1 shadow-md rounded mt-4 md:mt-0">
          <EstimatePrice />
        </div>
      </div>
    </div>

  );
}

export default App;
