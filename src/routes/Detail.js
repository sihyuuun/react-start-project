import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  console.log(movie);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.detail__movie}>
          {
            <Movie
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              description_full={movie.description_full}
              genres={movie.genres}
            />
          }
        </div>
      )}
    </div>
  );
}
export default Detail;
