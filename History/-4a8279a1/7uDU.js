import { useEffect, useState } from 'react';

import { Main, Box } from './Containers';
import { NavBar, Logo, Search, NumResults } from './Header';

import WatchedList from './WatchedList';
import Summary from './Summary';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

import { Loader, ErrorMessage } from './Messages';

const KEY = 'fb22ea71';

export default function App() {
  const [query, setQuery] = useState('');

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [selectedId, setSelectedId] = useState(null);

  ////////////////////////////////////////
  // HANDLE FUNCTIONS
  function handleSelectMovie(id) {
    setSelectedId(selectedId => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched(watched => [...watched, movie]);
    setSelectedId(null);

    localStorage.setItem('watched', JSON.stringify(watched));

    useEffect(()=>{console.log(JSON.parse(localStorage.getItem('watched'))});
  }

  function handleDeleteWatched(id) {
    setWatched(watched => watched.filter(movie => movie.imdbID !== id));
  }

  ////////////////////////////////////////
  // EFFECTS

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error('Something went wrong with fentching movies');

        const data = await res.json();

        if (data.Response === 'False') throw new Error('Movie not found');
        setMovies(data.Search);
        setError('');
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }
    handleCloseMovie();
    fetchMovies();

    return () => controller.abort();
  }, [query]);

  ////////////////////////////////////////
  // JSX
  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              KEY={KEY}
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
