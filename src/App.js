import logo from './logo.svg';
import './App.css';
import Viewpost from './components/Viewpost';
import Addpost from './components/Addpost';
import Searchpost from './components/Searchpost';
import Deletepost from './components/Deletepost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Viewpost/>}/>
        <Route path='/Delete' element={<Deletepost/>}/>
        <Route path='/Search' element={<Searchpost/>}/>
        <Route path='/Add' element={<Addpost/>}/>

        
      </Routes>
        
      
      </BrowserRouter>

      
      
   
  );
}

export default App;
