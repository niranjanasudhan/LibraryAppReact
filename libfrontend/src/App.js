import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Viewbooks from './components/Viewbooks';
import Addbooks from './components/Addbooks';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
        <Route path='/' element={<Viewbooks/>}/>
        <Route path='/add' element={<Addbooks data={{bookName:"",
author:"",
language:"",
genre:"",
bookNum:""}} method="post" />}/>
      
      </Routes>
    </div>
  );
}

export default App;
