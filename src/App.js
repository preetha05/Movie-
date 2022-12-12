import MovieList from "./components/MovieList";
import Nav from "./components/nav";
import "./App.css";
import AddMovie from "./components/AddMovies";

import { MovieProvider } from "./components/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;