import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Page from "../components/page";
const AddNewmoviePage = () => {
  const [isDone, setisDone] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [movie, setMovie] = useState({
    name: "",
    year: "",
    rating: "",
    genre: [],
    image: {
      url: "",
      altInfo: "",
    },
  });

  function handleGenreChange(e) {
    const genre = e.target.value;
    console.log(genre);
    setMovie((prev) => {
      const current = prev.genre;
      const idx = current.indexOf(genre);
      let items = [...prev.genre];
      if (idx == -1) {
        //add
        items.push(genre);
      } else {
        //remove
        items.splice(idx, 1);
      }

      return {
        ...prev,
        genre: items,
      };
    });
  }

  return isDone ? (
    <Navigate to="/" />
  ) : (
    <Page title="Add new movie">
      <h1>Add new Movie</h1>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={movie.name}
            onChange={(e) =>
              setMovie((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input
            type="text"
            id="year"
            value={movie.year}
            onChange={(e) =>
              setMovie((prev) => ({ ...prev, year: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="rating"></label>
          <select
            name="rating"
            id="rating"
            onChange={(e) =>
              setMovie((prev) => ({ ...prev, rating: e.target.value }))
            }
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <fieldset>
            <legend>Genre</legend>

            <input
              type="checkbox"
              name="genre"
              value="sci-fi"
              id="g-sci-fi"
              checked={movie.genre.includes("sci-fi")}
              onChange={handleGenreChange}
            />
            <label htmlFor="g-sci-fi">Sci-fi</label>
            <input
              type="checkbox"
              name="genre"
              value="thriller"
              id="g-thriller"
              checked={movie.genre.includes("thriller")}
              onChange={handleGenreChange}
            />
            <label htmlFor="g-thriller">Thriller</label>
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Image</legend>
            <div>
              <label htmlFor="image-url">URL</label>
              <input
                type="text"
                name="image-url"
                value={movie.image.url}
                id="image-url"
                onChange={(e) =>
                  setMovie((prev) => ({
                    ...prev,
                    image: {
                      ...prev.image,
                      url: e.target.value,
                    },
                  }))
                }
              />
            </div>
            <div>
              <label htmlFor="image-alt">Alt Info</label>
              <input
                type="text"
                name="image-alt"
                value={movie.image.altInfo}
                id="image-alt"
                onChange={(e) =>
                  setMovie((prev) => ({
                    ...prev,
                    image: {
                      ...prev.image,
                      altInfo: e.target.value,
                    },
                  }))
                }
              />
            </div>
          </fieldset>
        </div>
        <div>
          <input type="submit" value="Add-movie" />
        </div>
      </form>
    </Page>
  );
};
export default AddNewmoviePage;
