import { Themes } from "../../types";

const Card = ({
  image,
  title,
  description,
  date,
  theme,
  id,
}: {
  image: string;
  title: string;
  description: string;
  date: string;
  theme: string;
  id: number;
}) => {
  const getBadgeColor = (theme: Themes) => {
    switch (theme) {
      case "Energy":
        return "bg-orange-600";
      case "Biodiversity":
        return "bg-green-600";
      case "Water Security":
        return "bg-blue-500";
      case "Waste Management":
        return "bg-gray-400";
      case "Sustainability Education":
        return "bg-violet-600";
      default:
        return "bg-black";
    }
  };
  return (
    <div className="bg-white  rounded-lg shadow-md overflow-hidden transition-all duration-300 h-66 hover:scale-105 flex  justify-between md:flex-row flex-col">
      <img
        src={image}
        alt={title}
        className="md:w-full  md:h-50 object-cover"
      />
      <div className="px-5 py-5 flex flex-col flex-grow ">
        <h3 className="md:text-2xl text-xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-400 mb-3 text-sm md:text-md">{date}</p>

        <p className="text-gray-600 text-md  mb-4">
          {description}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          mollitia perferendis sit illum deserunt quae in omnis sapiente, itaque
          voluptatum laborum inventore aliquid ad quidem quasi nobis quod non
          debitis.
        </p>
        <div className="badges">
          <h2
            className={`${getBadgeColor(theme as Themes)} text-white w-fit rounded-xl px-2 py-1`}
          >
            {theme}
          </h2>
        </div>

        <hr className="border-gray-300 my-5" />
        <div className=" ml-auto">
          <a href={`/project/${id}`}>
            <button className="text-green-600 font-medium flex items-center">
              Know More <span className="ml-2">&rarr;</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
