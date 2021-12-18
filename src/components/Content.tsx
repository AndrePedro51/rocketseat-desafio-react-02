import { MovieCard } from './MovieCard';
import '../styles/content.scss';
import { useMovies } from '../hooks/useMovies';



export function Content() {
  const { selectedGenreId, genres, movies, selectedGenre } = useMovies()
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}