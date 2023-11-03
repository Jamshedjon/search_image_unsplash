import { useEffect, useState } from "react";
import PhotoList from "../components/PhotoList";
import { useFetch } from "../hooks/useFetch";
// redux
import { useSelector, useDispatch } from "react-redux";
import {
  updatePage,
  updateQuery,
  updateTotal,
} from "../redux/features/imgSlice";

function Home() {
  const { query, page, total } = useSelector((data) => data.img);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [url, setUrl] = useState(
    `https://api.unsplash.com/search/photos?client_id=Y10kzoUx9LEV6l_qbi3DtAiSBb34HPZHPcZnpXtLitQ&page=${page}&query=${query}`
  );
  const { data: photoData, isPending, error } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    Array.from(e.target).forEach((e) => (e.value = ""));
    dispatch(updateQuery(input));
  };
  useEffect(() => {
    setUrl(
      `https://api.unsplash.com/search/photos?client_id=Y10kzoUx9LEV6l_qbi3DtAiSBb34HPZHPcZnpXtLitQ&page=${page}&query=${query}`
    );
  }, [query]);
  if (photoData) dispatch(updateTotal(photoData.total));

  // const [pagiLength] = useState(total);
  const [num, setNum] = useState(4);
  const [first, setFirst] = useState(1);

  useEffect(() => {
    setNum(total);
  }, [total]);

  const prev = (val) => {
    setNum((prevNum) => prevNum - 1);
    dispatch(updatePage(val));
  };

  const next = (val) => {
    if (val < total) {
      setNum((prevNum) => prevNum + 1);
    }
    dispatch(updatePage(val));
  };
  return (
    <div>
      <div className="mb-5">
        <h1 className=" font-bold mb-5">Search Any Image:</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs mr-2"
          />
          <button>Search</button>
        </form>
      </div>
      {photoData && (
        <div className=" flex flex-col items-center gap-4">
          <PhotoList photos={photoData.results} />

          <div className="join">
            <button
              onClick={(e) => prev(e.target.innerText)}
              className="join-item btn"
            >
              {first}
            </button>
            <button
              onClick={(e) => prev(e.target.innerText)}
              className="join-item btn"
            >
              {first + 1}
            </button>
            <button className="join-item btn btn-disabled">...</button>
            <button
              id="next_"
              onClick={(e) => prev(e.target.innerText)}
              className="join-item btn"
            >
              {num - 1}
            </button>
            <button
              onClick={(e) => next(e.target.innerText)}
              className="join-item btn"
            >
              {num}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
