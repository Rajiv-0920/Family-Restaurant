import "./GalleryCard.css";

const GalleryCard = ({ src, title }) => {
  const url = "/images/";
  // "https://cdn.jsdelivr.net/gh/Rajiv-0920/Family-Restaurant@main/src/assets/";
  const fullUrl = url + src;
  return (
    <div
      style={{ backgroundImage: `url(${fullUrl})` }}
      className={`gallery-card w-full h-[243px] relative bg-cover bg-center flex items-end`}
    >
      <div className="overlay"></div>
      <div className="content">
        <h2 className="gallery-title">{title}</h2>
      </div>
    </div>
  );
};

export default GalleryCard;
