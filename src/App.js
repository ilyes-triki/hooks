import React, { useState } from "react";
import "./App.css";
// data
import MovieData from "./components/movieCard/movieData";
// components
import MovieList from "./components/movieList/movieList";
import Add from './components/add/add'
import Filter from './components/filter/filter'
import { Switch , Route , BrowserRouter} from 'react-router-dom'
import page from './components/page'

function App() {
 const [textSearch, setTextSearch] = useState("")
 const [searchRate, setsearchRate] = useState(0) 
 const [movie, setmovie] = useState(MovieData);
const handleAdd = (newMovie) => {
  if(newMovie!=={} )
{  setmovie([...movie,newMovie] )}
}
  return (
   
    <div className="app">
      
            <Add handleAdd={handleAdd}/>
            <Filter rating={searchRate} setsearchRate={setsearchRate} setTextSearch={setTextSearch} />
      <MovieList searchRate={searchRate} textSearch={textSearch} movie={movie} />
      
        <Switch>
      <Route exact path='/page' component={page} />
      </Switch>
     </div>
     
  
  );
}

export default App;
