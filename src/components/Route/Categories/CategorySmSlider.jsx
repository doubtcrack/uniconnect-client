import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const CategorySmSlider = ({ categoriesData }) => {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  return (
    <div className="relative w-full flex justify-center items-center lg:hidden">
      <div className="absolute right-0 bottom-[-5rem] ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div
        id="content"
        className="carousel lg:p-4 w-full overflow-y-hidden flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {categoriesData.map(({ id, title, description, styles, image_Url }) => {
          return (
            <>
              <div>
                <Card
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  styles={styles}
                  image_Url={image_Url}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySmSlider;

const Card = ({ id, title, description, styles, image_Url }) => {
  const navigate = useNavigate();
  const handleSubmit = (title) => {
    navigate(`/products?category=${title}`);
  };
  return (
    <div
      key={id}
      style={styles}
      className={`card bg-white w-[90vw] h-[300px] m-2 rounded-lg shadow-lg flex !flex-row !p-8 md:w-[47.5vw]`}
    >
      <div className="mx-[0.5rem]">
        <h3 className="text-xl 2xl:text-2xl font-[500]">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
        <a
          className="inline-block py-3 px-2 2xl:px-4 mt-4 bg-palette-primary hover:scale-105 transition-transform duration-300 shadow-xl text-sm text-palette-side rounded-lg"
          onClick={() => handleSubmit(title)}
        >
          See All Products
        </a>
      </div>
      <img
        src={image_Url}
        alt={title}
        className="drop-shadow-lg hover:scale-95 transition-transform duration-300 h-[200px] w-[200px]"
      />
    </div>
  );
};
