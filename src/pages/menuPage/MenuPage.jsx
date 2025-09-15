import React from "react";
import data from "@/data/data.json";
import { groupByCategory } from "../../library/utils";

const categorizedItems = groupByCategory(data);

const MenuPage = () => {
  return (
    <div className="container mx-auto my-20">
      <h2 className="heading-2 text-3xl lg:text-[2.5rem] font-bold">
        Explore Our Menu
      </h2>
      <div class="grid grid-cols-4 gap-4 min-h-screen w-full">
        <div class="col-span-1">
          <h3>Filter Options</h3>
          <div>
            <div>
              <h4>By Categories</h4>
              <ul>
                {Object.keys(categorizedItems).map((category) => {
                  return (
                    <li
                      key={categorizedItems[category].id}
                      category={category}
                      description={categorizedItems[category].description}
                    >
                      {category}
                    </li>
                  );
                })}
              </ul>
            </div>
            <hr />
            <div>{/* Implement Veg and Non-veg Checkbox */}</div>
          </div>
        </div>
        <div class="col-span-3"></div>
      </div>
    </div>
  );
};

export default MenuPage;
