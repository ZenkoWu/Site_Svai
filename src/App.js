import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/Header/Header";
import Products from "./pages/Products/Products";
import Main from "./pages/Main/Main";
import ExecutionTypes from "./pages/ExecutionTypes/ExecutionTypes";
import Applying from "./pages/Applying/Applying";
import NotFoundedPage from "./components/NotFoundedPage/NotFoundedPage";
import Footer from "./pages/Footer/Footer";
import Contacts from "./pages/Contacts/Contacts";
import Articles from "./pages/Articles/Articles";
import Objects from "./pages/Objects/Objects";
import TypesCollection from "./components/TypesCollection/TypesCollection";
import OneTypeFromCollection from "./components/OneTypeFromCollection/OneTypeFromCollection";
import OneObject from "./pages/Objects/OneObject";
import MainPageWithTiles from "./components/MainPageWithTiles/MainPageWithTiles";

function App(props) {
  return (
    <>
      <div className="container App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                tileElements={props.state.objects}
                executionTypes={props.state.executionTypes}
                applicationTypes={props.state.applicationTypes}
              />
            }
          />
          <Route
            path="products"
            element={
              <Products
                objects={props.state.objects}
                articles={props.state.articles}
              />
            }
          />
          <Route path="executionTypes" element={<ExecutionTypes />}>
            <Route
              path=""
              element={
                <TypesCollection
                  articles={props.state.articles}
                  objects={props.state.objects}
                  types={props.state.executionTypes}
                  title="Виды исполнения фундамента на ЖБ сваях"
                />
              }
            />
            <Route
              path=":type"
              element={
                <OneTypeFromCollection
                  prevPage="Виды исполнения фундамента на ЖБ сваях"
                  to="/executionTypes"
                  collectionOfTypes={props.state.executionTypes}
                />
              }
            />
          </Route>
          <Route path="applying" element={<Applying />}>
            <Route
              path=""
              element={
                <TypesCollection
                  articles={props.state.articles}
                  objects={props.state.objects}
                  types={props.state.applicationTypes}
                  title="Применение ЖБ свай в строительстве"
                />
              }
            />
            <Route
              path=":type"
              element={
                <OneTypeFromCollection
                  prevPage=" Применение ЖБ свай в строительстве"
                  to="/applying"
                  collectionOfTypes={props.state.applicationTypes}
                />
              }
            />
          </Route>
          <Route path="objects" element={<Objects />}>
            <Route
              path=""
              element={
                <MainPageWithTiles
                  currentPage="Объекты"
                  title="Наши выполненные объекты"
                  tileElements={props.state.objects}
                  to="/objects/"
                />
              }
            />
            <Route
              path=":type"
              element={<OneObject objects={props.state.objects} />}
            />
          </Route>
          <Route path="articles" element={<Articles />}>
            <Route
              path=""
              element={
                <MainPageWithTiles
                  tileElements={props.state.articles}
                  currentPage="Статьи о забивных ЖБ сваях"
                  title="Полезные статьи о забивных ЖБ сваях"
                  to="/articles/"
                />
              }
            />
            <Route
              path=":type"
              element={
                <OneTypeFromCollection
                  prevPage="Статьи"
                  collectionOfTypes={props.state.articles}
                  to="/articles"
                />
              }
            />
          </Route>
          <Route
            path="contacts"
            element={<Contacts articles={props.state.articles} />}
          />
          <Route path="*" element={<NotFoundedPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
