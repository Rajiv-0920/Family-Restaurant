// Function to group items by category
export const groupByCategory = (array) => {
  return array.reduce((result, item) => {
    const categoryName = item.category.name;
    if (!result[categoryName]) {
      result[categoryName] = {
        description: item.category.description, // Store category description
        image: item.category.image,
        items: [],
      };
    }
    result[categoryName].items.push(item);
    return result;
  }, {});
};
