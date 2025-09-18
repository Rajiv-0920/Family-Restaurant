import { FaExternalLinkAlt } from "react-icons/fa";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

const CategoryCard = ({ category, description, image }) => {
  const url = "/images/";
  // "https://cdn.jsdelivr.net/gh/Rajiv-0920/Family-Restaurant@main/src/assets/";
  const fullUrl = url + "img.jpeg";
  return (
    <div
      style={{ backgroundImage: `url(${fullUrl})` }}
      className={`category-card bg-cover bg-center relative`}
    >
      <div className="overlay"></div>
      <div className="content flex flex-col justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-4xl text-white">
            {category}
          </h2>
          <p className="text-sm">{description}</p>
        </div>
        {/* <a href="#" className="visit-btn flex items-center gap-2">
          Visit Items <FaExternalLinkAlt className="external-link" />
        </a> */}
      </div>
    </div>
  );
};

export default CategoryCard;
