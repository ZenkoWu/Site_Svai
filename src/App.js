import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Products from './components/Navbar/Products/Products';
import Main from './components/Main/Main';
import ExecutionTypes from './components/Navbar/ExecutionTypes/ExecutionTypes';
import Applying from './components/Navbar/Applying/Applying';
import NotFoundedPage from './components/NotFoundedPage/NotFoundedPage';
import Footer from './components/Footer/Footer';
import Contacts from './components/Navbar/Contacts/Contacts';
import Articles from './components/Navbar/Articles/Articles';
import Objects from './components/Navbar/Objects/Objects';
import TypesCollection  from './components/TypesCollection/TypesCollection';
import OneTypeFromCollection from './components/OneTypeFromCollection/OneTypeFromCollection';


function App(props) {
  return ( 
    <>
      <div className='container App'>
        <Header/>
        <Routes>
          <Route path = '/' element={<Main/>}/>
          <Route path = 'products' element={<Products/>}/>
          <Route path = 'executionTypes' element={<ExecutionTypes/>}>
            <Route path='' element={<TypesCollection types={props.state.executionTypes} 
            title = 'Виды исполнения фундамента на ЖБ сваях' />}
            />
            <Route path=':type' 
            element={<OneTypeFromCollection prevPage='Виды исполнения фундамента на ЖБ сваях' 
              to='/executionTypes' 
              collectionOfTypes={props.state.executionTypes}/>}
            />
          </Route>
          <Route path = 'applying' element={<Applying/>}>
            <Route path ='' element={<TypesCollection types = {props.state.applicationTypes}
            title = 'Применение ЖБ свай в строительстве'/>}
            />
            <Route path =':type' element={<OneTypeFromCollection prevPage=' Применение ЖБ свай в строительстве' 
            to='/applying' 
            collectionOfTypes ={props.state.applicationTypes}/>}
            />
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
