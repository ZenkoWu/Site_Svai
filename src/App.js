import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Navbar/Products/Products';
import Main from './components/Main/Main';
import ExecutionTypes, { AllExecution } from './components/Navbar/ExecutionTypes/ExecutionTypes';
import Applying, { AllApplication } from './components/Navbar/Applying/Applying';
import Objects from './components/Navbar/Objects';
import Articles from './components/Navbar/Articles';
import Contacts from './components/Navbar/Contacts';
import ApplyTypeComponent from './components/Navbar/Applying/ApplyTypeComponent';
import NotFoundedPage from './components/NotFoundedPage/NotFoundedPage';
import Footer from './components/Footer/Footer';
import ExecutionTypeComponent from './components/Navbar/ExecutionTypes/ExecutionTypeComponent';


function App(props) {
  return ( 
    <>
      <div className='container App'>
        <Header/>
        <Routes>
          <Route path = '/' element={<Main/>}/>
          <Route path = 'products' element={<Products/>}/>
          <Route path = 'executionTypes' element={<ExecutionTypes/>}>
            <Route path='' element={<AllExecution executionTypes={props.state.executionTypes}/>}/>
            <Route path=':executionType' element={<ExecutionTypeComponent executionTypes={props.state.executionTypes}/>}/>
          </Route>
          <Route path = 'applying' element={<Applying/>}>
            <Route path ='' element={<AllApplication applicationTypes = {props.state.applicationTypes}/>}/>
            <Route path =':applyType' 
            element={<ApplyTypeComponent applicationTypes ={props.state.applicationTypes}/>}/>
          </Route>
          <Route path = 'objects' element={<Objects/>}/>
          <Route path = 'articles' element={<Articles/>}/>
          <Route path = 'contacts' element={<Contacts/>}/>
          <Route path = '*' element={<NotFoundedPage/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
