import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Navbar/Products';
import Main from './components/Main/Main';
import PerformanceType from './components/Navbar/PerformanceType';
import Applying from './components/Navbar/Applying';
import Objects from './components/Navbar/Objects';
import Articles from './components/Navbar/Articles';
import Contacts from './components/Navbar/Contacts';

function App() {
  return ( 
    <div className="App">
        <Header/>
        <Routes>
        <Route path = '/' element={<Main/>}/>
          <Route path = '/products' element={<Products/>}/>
          <Route path = '/performanceType' element={<PerformanceType/>}/>
          <Route path = '/applying' element={<Applying/>}/>
          <Route path = '/objects' element={<Objects/>}/>
          <Route path = '/articles' element={<Articles/>}/>
          <Route path = '/contacts' element={<Contacts/>}/>
        </Routes>
    </div>
  );
}

export default App;
