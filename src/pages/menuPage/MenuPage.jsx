import React from "react";
import data from "@/data/data.json";
import { groupByCategory } from "../../library/utils";
import "./MenuPage.css";
import Card from "../../components/card/Card";

const categorizedItems = groupByCategory(data);

const MenuPage = () => {
  return (
    <div className="container mx-auto my-5 md:my-15 flex flex-col gap-10 lg:20 p-3 relative">
      <div className="bg-img"></div>
      <h2 className="heading-2 text-3xl lg:text-[2.5rem] font-bold">
        Explore Our Menu
      </h2>
      <div className="grid grid-cols-4 gap-4 w-full items-start">
        <div className="col-span-full md:col-span-1 bg-white p-5 rounded-md flex flex-col gap-5">
          <h3 className="text-xl lg:text-2xl font-bold ">Filter Options</h3>
          <div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[0.95rem] lg:text-[1.25rem] font-bold">
                By Categories
              </h4>
              <ul className="flex flex-wrap lg:flex-col gap-2 lg:gap-3">
                {Object.keys(categorizedItems).map((category) => {
                  return (
                    <li
                      key={categorizedItems[category].id}
                      category={category}
                      description={categorizedItems[category].description}
                      className="text-sm lg:text-md p-3 bg-[#ff7d2910] rounded-md"
                    >
                      {category}
                    </li>
                  );
                })}
              </ul>
            </div>
            <hr className="my-5 border-[#eeeeee80]" />
            <div className="flex flex-col gap-3">
              <h4 className="text-[0.95rem] lg:text-[1.25rem] font-bold">
                By Dietary Preference
              </h4>
              <div className="dietary-info flex flex-wrap gap-5">
                <div className="dietary-veg flex gap-2">
                  <input type="radio" name="dietary" id="veg" />
                  <label htmlFor="veg">Veg</label>
                </div>
                <div className="dietary-non-veg flex gap-2">
                  <input type="radio" name="dietary" id="non-veg" />
                  <label htmlFor="non-veg">Non-Veg</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full md:col-span-3 flex flex-col gap-10">
          <div className="flex flex-wrap gap-5 justify-between">
            <select
              name="price"
              id="price"
              className="border-2 border-[#ff7d2970] bg-white p-2 rounded-sm"
            >
              <option value="">Sort By Price</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
            <input
              type="text"
              placeholder="Search Items..."
              className="border-2 p-2 rounded-sm border-[#ff7d2980] placeholder:text-[#42424242] bg-[#ffffff80]"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 lg:gap-4 lg:grid-cols-3 xl:grid-cols-4 ">
            {data
              .filter((item) => {
                return item.special === "yes";
              })
              .map((item) => {
                return <Card key={item.itemId} {...item} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
