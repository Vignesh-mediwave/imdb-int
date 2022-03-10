import axios from "axios";
import { useEffect, useState } from "react";
import Page from "../components/page";
import { apiGetMovies } from "../Services/api";
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const request = axios.CancelToken.source();
    async function getMovies() {
      try {
        const response = await apiGetMovies({ cancelToken: request.token });
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovies();
    return () => {
      request.cancel();
    };
  }, []);
  return (
    <Page title="Home">
      <h1>All Movies</h1>
      {movies.map((m) => {
        return (
          <div key={m.id}>
            <img src={m.image.url} alt={m.image.altInfo} />
            <h1>
              {m.name}-{m.year}
            </h1>
            <h2>{m.genre}</h2>
            <h3>{m.rating}</h3>
          </div>
        );
      })}
    </Page>
  );
};
export default HomePage;
