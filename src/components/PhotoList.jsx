import { Link } from "react-router-dom";

function PhotoList({ photos }) {
  return (
    <ul className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
      {photos &&
        photos.map((photo) => {
          const { alt_description, urls, id } = photo;
          return (
            <Link
              to={`/photo/${id}`}
              key={id}
              className=" shadow-xl hover:shadow-2xl transition-shadow"
            >
              <li className="">
                <img
                  className=" w-[450px] h-[320px] object-cover"
                  src={urls.regular}
                  alt={alt_description}
                />
              </li>
            </Link>
          );
        })}
    </ul>
  );
}

export default PhotoList;
