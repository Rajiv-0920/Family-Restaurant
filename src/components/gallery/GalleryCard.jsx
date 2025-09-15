import "./GalleryCard.css";

const GalleryCard = ({ url }) => {
  return (
    <div
      style={{ backgroundImage: `url(${url})` }}
      className={`gallery-card w-full h-[243px] relative bg-cover bg-center flex items-end`}
    >
      <div className="overlay"></div>
      <div className="content">
        <h2 className="gallery-title">Biryani Bonanza</h2>
      </div>
    </div>
  );
};

export default GalleryCard;
