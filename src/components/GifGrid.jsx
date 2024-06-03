import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  //   const [images, setImages] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  //   const getImages = async () => {
  //     const gifs = await getGifs(category);
  //     setImages(gifs);
  //     setIsLoading(false);
  //   };
  //   useEffect(() => {
  //     getImages();
  //   }, [category]);

  return (
    <div>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GifItem key={id} title={title} url={url} />
        ))}
      </div>
    </div>
  );
};
