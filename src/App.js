import {useState} from "react";
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Results from './components/Results/Results';
import request from "./request";

function App() {

  const [selectedOptions,setSelectedOptions] = useState(request.fetchTrending)

  return (
    <div className='app'>
      
    {/* Header  */}
    <Header />


    {/* Navbar  */}

      <Navbar setSelectedOptions={setSelectedOptions} />
    {/* Results  */}
      <Results selectedOptions={selectedOptions} />
    </div>
  );
}

export default App;
