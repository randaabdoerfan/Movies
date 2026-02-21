import React from 'react';
import './App.css';
import NavBar from './Components/Pages/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Movies from './Components/Pages/Movies/Movies';
import MoviesDetails from './Components/Pages/Movies/MoviesDetails';
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Login/Login';
import AllMovies from './Components/Pages/Movies/AllMovies';
import FavMovies from './Components/Pages/FavMovies/FavMovies';
import Footer from './Components/Pages/Footer/Footer';
import { useSelector } from 'react-redux';
import SearchResults from './Components/Pages/SearchResults/SearchResults';

function App() {
  const mode= useSelector((state)=>{return state.mode.mode})

    
  return (
    <>
    <NavBar/>
    <div className={mode === "dark" ?"bg-dark text-white": "bg-light text-black"}>


<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/movies' element={<Movies mode={mode}/>}/>
  <Route path='/movies/:id' element={<MoviesDetails mode={mode}/>}/>
  <Route path='/all' element={<AllMovies mode={mode}/>} />
  <Route path='/fav' element={<FavMovies mode={mode}/>} />
  <Route path='/search/:query' element={<SearchResults mode={mode}/>}/>
  <Route path='/about' element={<About mode={mode}/>}/>
  <Route path='/contact' element={<Contact mode={mode}/>}/>
  <Route path='/register' element={<Register mode={mode}/>}/>
  <Route path='/login' element={<Login mode={mode}/>}/>
  <Route path='/footer' element={<Footer mode={mode}/>} />
</Routes>

    </div>
    </>
  );
}

export default App;
