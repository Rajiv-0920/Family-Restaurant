import nonVegImg from "../../assets/non-veg.svg";
import vegImg from "../../assets/veg.svg";
import NoImageAvailable from "../../assets/NoImageAvailable.png";
import "./card.css";

const Card = ({
  name,
  category,
  item_description,
  price,
  dietaryInfo,
  tags,
  image,
}) => {
  return (
    <div className="card w-full max-w-[325px] shadow-lg flex gap-2 flex-col p-2 md:p-4 rounded-lg">
      <div className="w-full">
        <img
          src={image ? NoImageAvailable : null}
          alt="Image"
          loading="lazy"
          className="w-full h-auto object-cover rounded-md"
        />
      </div>

      <div className="flex justify-between items-start gap-2">
        <div className="flex gap-1 flex-wrap w-full">
          {tags.map((tag) => (
            <span className="tag px-2 py-1 rounded">
              {tag.charAt(0).toUpperCase() + tag.slice(1).toLowerCase()}
            </span>
          ))}
        </div>

        <div className="w-fit h-4">
          <img
            src={dietaryInfo === "Veg" ? vegImg : nonVegImg}
            alt="Non-Vegetarian Image"
            className="h-full w-auto"
          />
        </div>
      </div>

      <div className="card-content flex gap-2 flex-col">
        <h3 className="">{name}</h3>
        <p className="description text-sm">{item_description}</p>
      </div>

      <div className="category-price flex justify-between items-center mt-auto">
        <span className="category tag text-[0.8rem] rounded-sm">
          {category.name}
        </span>
        <span className="price text-base font-medium">₹{price}</span>
      </div>
    </div>
  );
};

export default Card;
