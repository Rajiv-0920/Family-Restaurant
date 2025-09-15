import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CategoryCard from "../category/CategoryCard";

const CategoriesSection = ({ categorizedItems }) => {
  // Fallback if categorizedItems is undefined or not an object
  if (!categorizedItems || typeof categorizedItems !== "object") {
    return (
      <div className="my-20 lg:my-30 flex flex-col gap-8 lg:gap-10">
        <h2 className="heading-2 text-3xl lg:text-[2.5rem] font-bold">
          Categories
        </h2>
        <div className="text-center text-gray-500">
          No categories available.
        </div>
      </div>
    );
  }

  const responsiveSettings = {
    showArrows: true,
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 3000,
    emulateTouch: true,
    centerMode: true, // Enable center mode for partial visibility of next/prev slides
    centerSlidePercentage: 100, // Default to 1 card per view
    renderItem: (item) => <div className="px-2">{item}</div>,
  };

  return (
    <div className="my-20 lg:my-30 flex flex-col gap-8 lg:gap-10">
      <h2 className="heading-2 text-3xl lg:text-[2.5rem] font-bold">
        Categories
      </h2>
      <div className="carousel-container">
        <Carousel {...responsiveSettings}>
          {Object.keys(categorizedItems).map((category) => (
            <div
              key={categorizedItems[category]?.id || category}
              className="carousel-item"
            >
              <CategoryCard
                category={category}
                description={
                  categorizedItems[category]?.description || "No description"
                }
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CategoriesSection;
