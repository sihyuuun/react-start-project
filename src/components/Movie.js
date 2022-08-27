import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, description_full, genres }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p className={styles.movie__description_full}>
          {description_full.length > 235
            ? (description_full = `${description_full.slice(1, 235)}...`)
            : description_full}
        </p>
        <ul className={styles.movie__genres}>
          {genres && genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description_full: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};
export default Movie;
