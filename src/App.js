import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Results from './components/Results/Results';

function App() {
  return (
    <div className='app'>
      
    {/* Header  */}
    <Header />


    {/* Navbar  */}

      <Navbar />
    {/* Results  */}
      <Results />
    </div>
  );
}

export default App;
