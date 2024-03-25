import './App.css';
import { Route, Routes } from "react-router-dom";
import {Layout} from './components/Layout/Layout'

import {HomePage} from '../src/pages/Home/HomePage';
import {SinglePage} from '../src/pages/SingleBook/SinglePage';
import {FavouritePage} from '../src/pages/Favourite/FavouritePage';
import {BasketPage} from '../src/pages/Basket/BasketPage';
import {SearchBook} from '../src/pages/Search/SearchBook';


function App() {
  return (
    <div className="app">
        <Routes>
          <Route path='/' element = {<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path='/:id' element={<SinglePage />}/>
            <Route path='/search/:id' element={<SinglePage />}/>
            <Route path='/search' element={<SearchBook />}/>
            <Route path='/favourite' element={<FavouritePage />}/>
            <Route path='/cart' element={<BasketPage />}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;


