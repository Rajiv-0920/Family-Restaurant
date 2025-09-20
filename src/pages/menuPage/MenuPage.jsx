import React, { useState, useEffect } from "react";
import data from "@/data/data.json";
import { groupByCategory } from "../../library/utils";
import "./MenuPage.css";
import Card from "../../components/card/Card";
import { useLocation, useNavigate } from "react-router-dom";

// Debug: Log categorized items to verify data
const categorizedItems = groupByCategory(data);

const MenuPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lastSelectedCategory, setLastSelectedCategory] = useState("All");
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Extract category from URL query parameter on mount
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const categoryFromUrl = queryParams.get("category");
    if (categoryFromUrl && categorizedItems[categoryFromUrl]) {
      setSelectedCategory(categoryFromUrl);
      setLastSelectedCategory(categoryFromUrl);
    }
  }, [location.search]);

  // Simplified useEffect to handle search-driven category changes
  useEffect(() => {
    if (searchQuery && selectedCategory !== "All") {
      setLastSelectedCategory(selectedCategory);
      setSelectedCategory("All");
      // Update URL to remove category when searching
      navigate("/menu");
    } else if (
      !searchQuery &&
      selectedCategory === "All" &&
      lastSelectedCategory !== "All"
    ) {
      setSelectedCategory(lastSelectedCategory);
      // Restore category in URL
      navigate(`/menu?category=${encodeURIComponent(lastSelectedCategory)}`);
    }
  }, [searchQuery, lastSelectedCategory, navigate]);

  const filteredAndSortedItems = data
    .filter((item) => {
      const matchesCategory =
        searchQuery === ""
          ? selectedCategory === "All" ||
            item.category?.name === selectedCategory
          : true;
      const matchesDietary =
        dietaryPreference === "" || item.dietaryInfo === dietaryPreference;
      const itemString = [
        item.name ?? "",
        item.item_description ?? "",
        item.category?.name ?? "",
        item.subcategory ?? "",
        item.dietaryInfo ?? "",
        item.tags ? item.tags.join(" ") : "",
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch =
        !searchQuery || itemString.includes(searchQuery.toLowerCase());
      const result = matchesCategory && matchesDietary && matchesSearch;
      return result;
    })
    .sort((a, b) => {
      if (sortOrder === "low") return a.price - b.price;
      else if (sortOrder === "high") return b.price - a.price;
      return 0;
    });

  const groupBySubcategory = (items) => {
    return items.reduce((acc, item) => {
      const subcategory = item.subcategory || "Uncategorized";
      if (!acc[subcategory]) acc[subcategory] = [];
      acc[subcategory].push(item);
      return acc;
    }, {});
  };

  const subcategoryGroups = groupBySubcategory(filteredAndSortedItems);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery(""); // Clear search query on category selection
    // Update URL with selected category
    navigate(`/menu?category=${encodeURIComponent(category)}`);
    // Clear dietary preference for categories where it doesn't apply (e.g., Drinks)
    if (category === "Drinks" && dietaryPreference !== "") {
      setDietaryPreference("");
    }
  };

  const handleDietaryChange = (e) => {
    setDietaryPreference(e.target.id);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const hasItemsInCategory =
    selectedCategory === "All"
      ? filteredAndSortedItems.length > 0
      : categorizedItems[selectedCategory]?.length > 0;

  // Determine if dietary options should be disabled based on category
  const isDietaryDisabled = selectedCategory === "Drinks";

  // Handle clearing all filters
  const handleClearFilters = () => {
    setSelectedCategory("All");
    setDietaryPreference("");
    setSearchQuery("");
    setSortOrder("");
    navigate("/menu"); // Reset URL to remove query parameters
  };

  return (
    <>
      <div className="bg-img"></div>
      <div className="container mx-auto my-1 md:my-15 flex flex-col gap-7 lg:20 p-3 relative">
        <h2 className="heading-2 text-3xl lg:text-[2.5rem] font-bold">
          Explore Our Menu
        </h2>
        <div className="grid grid-cols-4 gap-4 w-full items-start">
          <div className="col-span-full md:col-span-1 bg-white p-5 rounded-md flex flex-col gap-5">
            <h3 className="text-xl lg:text-2xl font-bold">Filter Options</h3>
            <div>
              <div className="flex flex-col gap-3">
                <h4 className="text-[0.95rem] lg:text-[1.25rem] font-bold">
                  By Categories
                </h4>
                <ul className="grid grid-cols-2 gap-2 md:flex md:flex-col lg:gap-3">
                  <li
                    className={`text-sm lg:text-md p-1 px-3 md:p-3 rounded-md cursor-pointer ${
                      selectedCategory === "All"
                        ? "active-opt"
                        : "bg-[#ff7d2910]"
                    }`}
                    onClick={() => handleCategoryClick("All")}
                  >
                    All
                  </li>
                  {Object.keys(categorizedItems).map((category) => (
                    <li
                      key={category}
                      className={`text-sm lg:text-md p-1 px-3 md:p-3 rounded-md cursor-pointer ${
                        selectedCategory === category
                          ? "active-opt"
                          : "bg-[#ff7d2910]"
                      }`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="my-5 border-[#eeeeee80]" />
              <div className="flex flex-col gap-3">
                <h4 className="text-[0.95rem] lg:text-[1.25rem] font-bold">
                  By Dietary Preference
                </h4>
                <div className="dietary-info flex flex-wrap gap-5">
                  <div className="dietary-veg flex gap-2">
                    <input
                      type="radio"
                      name="dietary"
                      id="Veg"
                      checked={dietaryPreference === "Veg"}
                      onChange={handleDietaryChange}
                      disabled={isDietaryDisabled}
                    />
                    <label htmlFor="Veg">Veg</label>
                  </div>
                  <div className="dietary-non-veg flex gap-2">
                    <input
                      type="radio"
                      name="dietary"
                      id="Non-Veg"
                      checked={dietaryPreference === "Non-Veg"}
                      onChange={handleDietaryChange}
                      disabled={isDietaryDisabled}
                    />
                    <label htmlFor="Non-Veg">Non-Veg</label>
                  </div>
                  <div className="dietary-all flex gap-2">
                    <input
                      type="radio"
                      name="dietary"
                      id="all"
                      checked={dietaryPreference === ""}
                      onChange={() => setDietaryPreference("")}
                    />
                    <label htmlFor="all">All</label>
                  </div>
                </div>
              </div>
              <button
                className="btn mt-5 w-full py-2 bg-[#ff7d29] text-white rounded-md hover:bg-[#e66b20]"
                onClick={handleClearFilters}
              >
                Clear Filters
              </button>
            </div>
          </div>
          <div className="col-span-full md:col-span-3 flex flex-col gap-10">
            <div className="flex flex-wrap gap-5 justify-between">
              <select
                name="price"
                id="price"
                className="border-2 border-[#ff7d2970] bg-white p-2 rounded-sm"
                value={sortOrder}
                onChange={handleSortChange}
              >
                <option value="">Sort By Price</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
              <input
                type="text"
                placeholder="Search all products..."
                className="border-2 p-2 rounded-sm border-[#ff7d2980] placeholder:text-[#42424242] bg-[#ffffff80]"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            {Object.keys(subcategoryGroups).length > 0 ? (
              Object.keys(subcategoryGroups).map((subcategory) => (
                <div key={subcategory} className="flex flex-col gap-5">
                  <h3 className="heading-3 text-[1.4rem] lg:text-[2rem] font-bold">
                    {subcategory}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 lg:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                    {subcategoryGroups[subcategory].length > 0 ? (
                      subcategoryGroups[subcategory].map((item) => (
                        <Card
                          key={item.itemID}
                          {...item}
                          showDietary={hasItemsInCategory}
                        />
                      ))
                    ) : (
                      <p className="no-match text-xl text-center text-[#ff7d29]">
                        No items match your filters for this subcategory.
                      </p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="no-match text-2xl text-center text-[#ff7d29]">
                No items match your filters.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
