import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Navbar/Products';
import Main from './components/Main/Main';
import PerformanceType from './components/Navbar/PerformanceType';
import Applying, { AllApplication } from './components/Navbar/Applying/Applying';
import Objects from './components/Navbar/Objects';
import Articles from './components/Navbar/Articles';
import Contacts from './components/Navbar/Contacts';
import ApplyTypeComponent from './components/Navbar/Applying/ApplyTypeComponent';


function App() {
  return ( 
    <>
        <Header/>
        <div className='container App'>
        <Routes>
        <Route path = '/' element={<Main/>}/>
          <Route path = '/products' element={<Products/>}/>
          <Route path = '/performanceType' element={<PerformanceType/>}/>
          <Route path = '/applying' element={<Applying/>}>
            <Route path ='' element={<AllApplication/>}/>
            <Route path ='for-building-a-bath' element={<ApplyTypeComponent/>}/>
          </Route>
          <Route path = '/objects' element={<Objects/>}/>
          <Route path = '/articles' element={<Articles/>}/>
          <Route path = '/contacts' element={<Contacts/>}/>
        </Routes>
        </div>
        
    </>
  );
}

export default App;
